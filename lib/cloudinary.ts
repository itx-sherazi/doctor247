import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadToCloudinary(file: File, folder: string): Promise<{ url: string; publicId: string }> {
  const buffer = Buffer.from(await file.arrayBuffer());

  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: `doctor247/${folder}`, resource_type: "auto" },
      (error, result) => {
        if (error || !result) return reject(error ?? new Error("Cloudinary upload failed"));
        resolve({ url: result.secure_url, publicId: result.public_id });
      }
    );
    stream.end(buffer);
  });
}

export async function deleteFromCloudinary(publicIds: string[]): Promise<void> {
  if (publicIds.length === 0) return;

  await Promise.all(
    (["image", "raw", "video"] as const).map((resourceType) =>
      cloudinary.api
        .delete_resources(publicIds, { resource_type: resourceType })
        .catch((error) => {
          console.error(`Failed to delete ${resourceType} resources from Cloudinary`, error);
        })
    )
  );
}

export async function deleteApplicationFolder(applicationId: string, baseFolder: string = "applications"): Promise<void> {
  const rootFolder = `doctor247/${baseFolder}/${applicationId}`;
  const subfolders = [`${rootFolder}/profile`, `${rootFolder}/documents`];

  for (const folder of [...subfolders, rootFolder]) {
    try {
      await cloudinary.api.delete_folder(folder);
    } catch (error) {
      // Folder may not exist or may still contain resources  safe to ignore.
      console.error(`Failed to delete Cloudinary folder ${folder}`, error);
    }
  }
}
