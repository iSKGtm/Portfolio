import type { ReactNode } from 'react';
import type { ownershipArticle } from '../ownershipArticle';

export interface NewsItem {
  url: string;
  hide?: boolean;
  private?: boolean | null;
  title: string;
  label?: string;
  mainTag: string | string[];
  tags?: string[];
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
  mainTag: string | string[];
  tags?: string[];
}
