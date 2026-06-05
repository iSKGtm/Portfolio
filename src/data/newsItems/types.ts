import type { ReactNode } from 'react';

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
  authorName?: string;
  minutesRead?: number;
  content?: string;
}

export interface Article {
  title: string | ReactNode;
  label: string | ReactNode;
  imageUrl: string;
  tagImage: string;
  authorName: string;
  publishDate: Date;
  dateEdit?: Date | null;
  minutesRead?: number;
  content: string;
  tags?: string | string[] | ReactNode;
}
