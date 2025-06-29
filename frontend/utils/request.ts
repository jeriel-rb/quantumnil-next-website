export interface IBaseModel<T> {
  data: T;
  meta: {
    pagination: {
      total: number;
      page: number;
      pageSize: number;
      pageCount: number;
    };
  };
}
export interface IMedia {
  url: string;
  formats?: {
    thumbnail: {
      url: string;
    };
    small: {
      url: string;
    };
    medium: {
      url: string;
    };
    large: {
      url: string;
    };
  };
}
interface IParams {
  url: string;
  options?: RequestInit;
}
async function request<T>({ url, options }: IParams) {
  const uri = `${process.env.NEXT_PUBLIC_API_URL}/api/${url}`;
  const _options = options || {};
  _options.method = options?.method || 'GET';
  _options.headers = options?.headers || {};
  try {
    const response = await fetch(uri, _options);
    if (response.status === 200) {
      return (await response.json()) as T;
    } else {
      console.error(`${response.status} ${response.statusText}`);
    }
  } catch (e) {
    console.error('Network Error');
    console.error(url, 'Fetch Err: ', e);
  }
}
export async function get<T>({
  url,
  options,
  query,
}: IParams & { query?: string }) {
  let uri: string = url;
  if (query) {
    uri += '?' + query;
  }
  return request<IBaseModel<T>>({
    url: uri,
    options: {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      ...options,
    },
  });
}
