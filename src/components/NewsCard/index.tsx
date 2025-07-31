import React from 'react';
import styles from './index.module.css'
import type { NewsItem } from '../../data/news.ts';

const isValidDate = (dateString: string): boolean => {
  const date = new Date(dateString);
  return !isNaN(date.getTime());
};

const NewsCard: React.FC<NewsItem> = ({ title, label, tags, date, url, imageUrl, hide }) => {
  if (hide === true) return null;

  if (imageUrl === undefined || imageUrl === '') {
    imageUrl = '/images/symb/placeholder480.jpg';
  };

  return (
    <div className={styles.newsCard} onClick={() => window.open(url, '_blank')}>
      <div className={styles.newsIMG}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={styles.containerText}>
        <div className={styles.type}>{tags}</div>
        <div className={styles.titleLabel}>
          <h2 className={styles.title}>{title}</h2>
          <h3 className={styles.label}>{label}</h3>
        </div>
        <div className={styles.date}>
          {isValidDate(date) && new Date(date).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};


export default NewsCard;