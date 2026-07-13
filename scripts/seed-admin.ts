import { config } from "dotenv";
config({ path: ".env.local" });

import bcrypt from "bcryptjs";
import { connectToDatabase } from "../lib/mongodb";
import { AdminUser } from "../lib/models/AdminUser";

async function main() {
  const email = process.env.SEED_ADMIN_EMAIL || "admin@doctor247.com";
  const password = process.env.SEED_ADMIN_PASSWORD || "Doctor247@Admin123";

  await connectToDatabase();

  const passwordHash = await bcrypt.hash(password, 10);

  const existing = await AdminUser.findOne({ email });
  if (existing) {
    existing.passwordHash = passwordHash;
    await existing.save();
    console.log(`Updated existing admin: ${email}`);
  } else {
    await AdminUser.create({ email, passwordHash, name: "Doctor247 Admin" });
    console.log(`Created admin: ${email}`);
  }

  console.log(`Password: ${password}`);
  process.exit(0);
}

main().catch((error) => {
  console.error("Seeding failed:", error);
  process.exit(1);
});
