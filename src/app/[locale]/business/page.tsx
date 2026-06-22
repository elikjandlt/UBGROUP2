import { sectors } from "@/lib/business-data";
import BusinessPageClient from "./BusinessPageClient";

export default async function BusinessPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return <BusinessPageClient locale={locale} sectors={sectors} />;
}
