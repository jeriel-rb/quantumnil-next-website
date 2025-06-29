import { ReactNode } from 'react';
import '../app/[locale]/globals.css';
import initTranslations from '@/app/i18n';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const i18nNamespaces = ['common'];
  const { t } = await initTranslations({
    locale: resolvedParams.locale,
    namespaces: i18nNamespaces,
  });

  return {
    title: t('metadata.home_title'),
    description: t('metadata.home_description'),
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  return (
    <html lang={resolvedParams.locale}>
      <body>{children}</body>
    </html>
  );
}
