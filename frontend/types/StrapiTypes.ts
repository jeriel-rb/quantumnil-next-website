import { BlocksContent } from '@strapi/blocks-react-renderer';

export type Meta = {
  pageCount?: number;
  total?: number;
  page?: number;
  pageSize?: number;
};

export type StrapiMedia = {
  data: {
    id: number;
    attributes: {
      url: string;
      width: number;
      height: number;
      formats: {
        medium: {
          url: string;
        };
        small: {
          url: string;
        };
        thumbnail: {
          ext: string;
          url: string;
        };
      };
    };
  } | null;
};
export type News = {
  id: number;
  attributes: {
    title: string;
    category: string;
    content: BlocksContent;
    date: string;
    slug: string;
    image: StrapiMedia;
    description: string;
  };
};
