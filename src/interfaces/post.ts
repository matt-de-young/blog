export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage?: string;
  excerpt: string;
  ogImage?: {
    url: string;
  };
  content: string;
  draft?: boolean;
};
