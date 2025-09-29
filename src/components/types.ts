export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  readTime: number;
  tags: string[];
  image: string;
}

export type CurrentPage = 'home' | 'blog' | 'blog-detail';