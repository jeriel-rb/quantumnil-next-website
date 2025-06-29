import Link from 'next/link';
import i18nConfig from '@/i18nConfig';

export default async function NotFound() {
  // Initialize translations with default locale
  const locale = i18nConfig.defaultLocale;

  return (
    <div className="h-screen w-full bg-black relative flex flex-col items-center justify-center antialiased text-center dark">
      <div className="max-w-2xl mx-auto p-4">
        <h4 className="text-light-overlay-60 rounded-full bg-light-overlay-5 !w-fit px-4 py-1 mx-auto">
          404
        </h4>
        <h1 className="!w-full">404</h1>
        <p>
          Sorry, the page you are looking for doesn&apos;t exist or has been
          moved.
        </p>
        <div className="relative z-10 mt-8 flex justify-center">
          <Link href={`/${locale}`}>
            <button>asdf</button>{' '}
          </Link>
        </div>
      </div>
    </div>
  );
}
