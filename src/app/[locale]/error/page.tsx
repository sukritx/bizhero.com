import { getDictionary, Locale } from "@/i18n/i18n";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.metadata.notFound.title,
    description: dict.metadata.notFound.description,
  };
}

export default function NotFoundPage() {
  return null;
}
