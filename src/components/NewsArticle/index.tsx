import React from "react";
import styles from "./index.module.css";
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare} from '@fortawesome/free-solid-svg-icons';
import DOMPurify from 'dompurify'


export interface Article {
  title: string;
  label: string;
  imageUrl: string;
  authorName: string;
  publishDate: Date;
  minutesRead: number;
  content: string;
}

interface Props {
  article: Article;
}

const NewsArticle: React.FC<Props> = ({ article }) => {
  const shareArticle = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => alert("URL copiada!"))
      .catch((error) => console.error("Erro ao copiar URL:", error));
  };

const sanitizedContent = DOMPurify.sanitize(article.content, {
    ADD_TAGS: ['iframe'],
    ADD_ATTR: [
      'allow',
      'allowfullscreen',
      'frameborder',
      'scrolling',
      'src',
      'title',
      'class'
    ]
  });

  return (
    <div className={styles.articlePage}>
      <div className={styles.containerHeader}>
        <h1 className={styles.title}>{article.title}</h1>
        <div className={styles.label}>{article.label}</div>
        <div className={styles.dateAuthor}>
          <div className={styles.imgDateMin}>
            <img src={article.tagImage} alt={article.title} className={styles.image} />
            ◦
            <div> {article.publishDate.toLocaleDateString()}</div>
            ◦
            <div className={styles.minutesRead}>{article.minutesRead}min.</div>
          </div>
          <div className={styles.author}>Por {article.authorName}</div>
        </div>
        <button onClick={shareArticle} className={styles.shareButton}><FontAwesomeIcon icon={faShare} /></button>
      </div>
      <div dangerouslySetInnerHTML={{ __html: sanitizedContent } } className={styles.content} />
    </div>
  );
};

export default NewsArticle;