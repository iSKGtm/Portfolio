import type { ReactNode } from 'react';
import type { ownershipArticle } from '../ownershipArticle';

export interface NewsItem {
  url: string;
  hide?: boolean;
  title: string;
  label?: string;
  tags: string | string[];
  tagImage?: string;
  date: string;
  dateEdit?: string | null;
  imageUrl?: string;
  user: ownershipArticle['user'];
  minutesRead?: number;
  content?: string;
}

export interface Article {
  title: string | ReactNode;
  label: string | ReactNode;
  imageUrl: string;
  tagImage: string;
  user: ownershipArticle['user'];
  publishDate: Date;
  dateEdit?: Date | null;
  minutesRead?: number;
  content: string;
  tags?: string | string[] | ReactNode;
}
