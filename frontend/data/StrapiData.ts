import { News } from '@/types/StrapiTypes'; // pastikan sudah ada tipe News
import qs from 'qs';
import { get } from '@/utils/request';

// Fetch list of news
export async function fetchNews({
  locale,
  page,
  pageSize,
}: {
  locale: string;
  page?: number;
  pageSize?: number;
}) {
  try {
    const query = qs.stringify({
      locale,
      sort: ['date:desc'],
      populate: ['image'],
      ...(page && pageSize
        ? {
            pagination: {
              page,
              pageSize,
            },
          }
        : {}),
    });

    const response = await get<News[]>({
      url: 'news-items', // ganti sesuai plural API ID kamu
      query,
    });

    const data = response?.data ?? [];
    const count = response?.meta?.pagination?.total ?? 0;

    return { data, count };
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
}

// Fetch news by slug
export async function fetchNewsBySlug({
  slug,
  locale,
}: {
  slug: string;
  locale: string;
}) {
  const query = qs.stringify({
    locale,
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: ['image'],
  });

  const response = await get<News[]>({
    url: 'news-items',
    query,
  });

  // Since slug will always exist in Strapi, we can safely return the first item
  return { data: response?.data?.[0] };
}
