import React from 'react';
import styles from './index.module.css'
import type { NewsItem } from '../../data/news.ts';

const isValidDate = (dateString: string): boolean => {
  const date = new Date(dateString);
  return !isNaN(date.getTime());
};

type NewsCardProps = Omit<Partial<NewsItem>, 'title' | 'label' | 'tags' | 'date'> & {
  title?: string | React.ReactNode;
  label?: string | React.ReactNode;
  tags?: string | string[] | React.ReactNode;
  date?: string | React.ReactNode;
};

const NewsCard: React.FC<NewsCardProps> = ({ title, label, tags, date, url, imageUrl, hide }) => {
  if (hide === true) return null;

  const finalImageUrl =
    imageUrl === undefined || imageUrl === '' ? '/images/symb/placeholder480.jpg' : imageUrl;

  const isClickable = typeof url === 'string' && url.trim().length > 0;

  const cardContent = (
    <>
      <div className={styles.newsIMG}>
        <img src={finalImageUrl} alt={typeof title === 'string' ? title : 'Artigo'} />
      </div>
      <div className={styles.containerText}>
        <div className={styles.type}>{tags}</div>
        <div className={styles.titleLabel}>
          <h2 className={styles.title}>{title}</h2>
          <h3 className={styles.label}>{label}</h3>
        </div>
        <div className={styles.date}>
          {typeof date === 'string' && isValidDate(date) ? new Date(date).toLocaleDateString() : date}
        </div>
      </div>
    </>
  );

  if (isClickable) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.newsCard}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div
      className={styles.newsCard}
      style={{ cursor: 'default' }}
    >
      {cardContent}
    </div>
  );
};


export default NewsCard;
