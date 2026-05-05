import React from "react";
import styles from "./index.module.css";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import DOMPurify from "dompurify";

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
  const [showFeedback, setShowFeedback] = React.useState(false);
  const [copyError, setCopyError] = React.useState<string | null>(null);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const shareArticle = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopyError(null);
    } catch (error) {
      console.error("Erro ao copiar URL:", error);
      setCopyError("Erro ao copiar");
    }

    setShowFeedback(true);

    // limpa timeout anterior (evita bug ao clicar várias vezes)
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setShowFeedback(false);
    }, 2000);
  };

  const sanitizedContent = DOMPurify.sanitize(article.content, {
    ADD_TAGS: ["iframe"],
    ADD_ATTR: [
      "allow",
      "allowfullscreen",
      "frameborder",
      "scrolling",
      "src",
      "title",
      "class",
    ],
  });

  return (
    <div className={styles.articlePage}>
      <div className={styles.containerHeader}>
        <h1 className={styles.title}>{article.title}</h1>
        <div className={styles.label}>{article.label}</div>

        <div className={styles.dateAuthor}>
          <div className={styles.imgDateMin}>
            <img
              src={article.tagImage}
              alt={article.title}
              className={styles.image}
            />
            •
            <div>{article.publishDate.toLocaleDateString()}</div>
            •
            <div className={styles.minutesRead}>
              {article.minutesRead}min.
            </div>
          </div>

          <div className={styles.author}>Por {article.authorName}</div>
        </div>

        <div className={styles.shareContainer}>
          <button
            onClick={shareArticle}
            className={styles.shareButton}
          >
            <FontAwesomeIcon icon={faShare} />
          </button>

          <span
            className={`${styles.copyFeedback} 
              ${showFeedback ? styles.visible : ""} 
              ${copyError ? styles.error : ""}`}
          >
            {copyError ?? "URL copiada!"}
          </span>
        </div>
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        className={styles.content}
      />
    </div>
  );
};

export default NewsArticle;