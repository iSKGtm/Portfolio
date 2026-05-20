import React from "react";
import { createPortal } from "react-dom";
import styles from "./index.module.css";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import DOMPurify from "dompurify";

export interface Article {
  title: string;
  label: string;
  imageUrl?: string;
  tagImage: string;
  authorName: string;
  publishDate: string | Date;
  dateEdit?: string | Date | null;
  minutesRead: number;
  content: string;
  tags?: string | string[] | React.ReactNode;
}

interface Props {
  article: Article;
}

const NewsArticle: React.FC<Props> = ({ article }) => {
  const [showFeedback, setShowFeedback] = React.useState(false);
  const [showFloatingPulse, setShowFloatingPulse] = React.useState(false);
  const [copyError, setCopyError] = React.useState<string | null>(null);
  const [isMounted, setIsMounted] = React.useState(false);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const floatingShareRef = React.useRef<HTMLDivElement | null>(null);
  const floatingShareIconRef = React.useRef<HTMLDivElement | null>(null);
  const formatArticleDate = (dateValue: string | Date) => {
    if (typeof dateValue === "string") return dateValue;
    return !isNaN(dateValue.getTime()) ? dateValue.toLocaleDateString() : "";
  };
  const formattedDateEdit = article.dateEdit ? formatArticleDate(article.dateEdit) : "";
  const hasDateEdit = formattedDateEdit.trim().length > 0;

  const copyToClipboard = async (text: string) => {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "true");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    document.body.removeChild(textarea);

    if (!copied) {
      throw new Error("copy command failed");
    }
  };

  const shareArticle = async () => {
    try {
      await copyToClipboard(window.location.href);
      setCopyError(null);
    } catch (error) {
      console.error("Erro ao copiar URL:", error);
      setCopyError("Nao foi possivel copiar a URL.");
    }

    setShowFeedback(true);
    setShowFloatingPulse(true);

    // limpa timeout anterior (evita bug ao clicar várias vezes)
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setShowFeedback(false);
      setShowFloatingPulse(false);
    }, 2000);
  };

  React.useEffect(() => {
    setIsMounted(true);

    const toggleVisibility = () => {
      if (!floatingShareRef.current || !floatingShareIconRef.current) return;

      if (window.scrollY > 400) {
        floatingShareRef.current.style.transition = "all 300ms";
        floatingShareIconRef.current.style.transition = "all 210ms";
        floatingShareRef.current.style.opacity = "1";
        floatingShareRef.current.style.transform = "scale(1)";
        floatingShareRef.current.style.pointerEvents = "auto";
        floatingShareIconRef.current.style.filter = "blur(0px)";
      } else {
        floatingShareRef.current.style.opacity = "0";
        floatingShareRef.current.style.transform = "scale(1.1)";
        floatingShareRef.current.style.pointerEvents = "none";
        floatingShareIconRef.current.style.filter = "blur(10px)";
      }
    };

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const floatingShare = isMounted
    ? createPortal(
        <div className={styles.shareFloating} ref={floatingShareRef}>
          <button
            onClick={shareArticle}
            className={styles.shareButton}
          >
            <div
              ref={floatingShareIconRef}
              className={showFloatingPulse ? styles.shareIconPulse : ""}
            >
              <FontAwesomeIcon icon={faShare} />
            </div>
          </button>
        </div>,
        document.body
      )
    : null;

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
      <svg style={{ display: "none" }}>
        <filter
          id="glass-distortion"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.003 0.008"
            numOctaves="1"
            seed="5"
            result="turbulence"
          />
          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
          </feComponentTransfer>
          <feGaussianBlur in="turbulence" stdDeviation="1" result="softMap" />
          <feSpecularLighting
            in="softMap"
            surfaceScale="5"
            specularConstant="1"
            specularExponent="100"
            lightingColor="white"
            result="specLight"
          >
            <fePointLight x="-200" y="-200" z="300" />
          </feSpecularLighting>
          <feComposite
            in="specLight"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
            result="litImage"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softMap"
            scale="150"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

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
            <div>{formatArticleDate(article.publishDate)}</div>
            •
            <div className={styles.minutesRead}>
              {article.minutesRead}min.
            </div>
          </div>

          <div className={styles.author}>Por {article.authorName}</div>
        </div>

        {hasDateEdit ? (
          <div className={styles.dateEdit}>
            editado em: {formattedDateEdit}.
          </div>
        ) : null}

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

      {floatingShare}

      <div
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        className={styles.content}
      />
    </div>
  );
};

export default NewsArticle;
