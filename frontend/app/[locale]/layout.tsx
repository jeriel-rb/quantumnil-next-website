import RootLayoutClient from '@/app/[locale]/layoutClient';

type props = {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
};

export async function generateMetadata() {
  return {
    title: 'Hello world',
    description: 'Hello world',
  };
}

export default async function LocaleLayout({ children }: props) {
  return <RootLayoutClient>{children}</RootLayoutClient>;
}
