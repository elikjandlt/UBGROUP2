import { notFound } from 'next/navigation';
import { sectors, getSectorById } from '@/lib/business-data';
import SectorProjectsClient from './SectorProjectsClient';

export function generateStaticParams() {
  const locales = ['mn', 'en'];
  return locales.flatMap((locale) =>
    sectors.map((sector) => ({
      locale,
      sector: sector.id,
    }))
  );
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ locale: string; sector: string }>;
}) {
  const { locale, sector } = await params;
  const data = getSectorById(sector);

  if (!data) {
    notFound();
  }

  return <SectorProjectsClient sector={data} locale={locale} />;
}
