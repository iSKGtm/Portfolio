import React from 'react';
import styles from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePen, faFile } from '@fortawesome/free-solid-svg-icons';
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
  dateEdit?: string | null;
};

const formatDate = (dateValue?: string | React.ReactNode | null) => {
  if (typeof dateValue !== 'string') return dateValue;
  if (dateValue.includes('/')) return dateValue;
  return isValidDate(dateValue) ? new Date(dateValue).toLocaleDateString() : dateValue;
};

const NewsCard: React.FC<NewsCardProps> = ({ title, label, tags, date, dateEdit, url, imageUrl, hide }) => {
  if (hide === true) return null;

  const finalImageUrl =
    imageUrl === undefined || imageUrl === '' ? '/images/symb/placeholder480.jpg' : imageUrl;

  const isClickable = typeof url === 'string' && url.trim().length > 0;
  const hasDateEdit = typeof dateEdit === 'string' && dateEdit.trim().length > 0;
  const displayDate = hasDateEdit ? dateEdit : date;

  const cardContent = (
    <>
      <div className={styles.newsIMG}>
        <img src={finalImageUrl} alt={typeof title === 'string' ? title : 'Artigo'} />
        <div className={styles.type}>{tags}</div>
      </div>
      <div className={styles.containerText}>
        <div className={styles.titleLabel}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.labelDate}>
            <h3 className={styles.label}>{label}</h3>
            <div className={styles.containerDate}>
              <div className={styles.date}>
                <FontAwesomeIcon icon={hasDateEdit ? faFilePen : faFile} style={{}} />
                {formatDate(displayDate)}
              </div>
            </div>
          </div>
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
