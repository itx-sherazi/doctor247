import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SURGERIES, SURGERY_SLUGS } from "../_data/surgeries";
import { SurgeryPageClient } from "./SurgeryPageClient";

export function generateStaticParams() {
  return SURGERY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = SURGERIES[slug];
  if (!content) return {};

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    keywords: content.metaKeywords,
  };
}

export default async function SurgeryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = SURGERIES[slug];

  if (!content) {
    notFound();
  }

  return <SurgeryPageClient content={content} />;
}
