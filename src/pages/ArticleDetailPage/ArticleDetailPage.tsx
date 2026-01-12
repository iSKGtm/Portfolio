import './ArticleDetailPage.css'
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import NewsArticle, { Article } from "../../components/NewsArticle";
import Footer from "../../components/Footer";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { newsData } from '../../data/news';

const SetTitle = ({ title }: { title: string }) => {
  React.useEffect(() => {
    document.title = title;
  }, [title]);
  return null;
};

const ArticleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const footerDisable = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchArticle = async () => {

    const disableFooter = () => {
      if (footerDisable.current) {
        footerDisable.current.style.display = 'none';
      }
    };

      setIsLoading(true);
      setError(null);
      try {
        const foundArticle = newsData.find(item => item.url === `/artigo/${id}`);

        if (foundArticle) {
          const mappedArticle: Article = {
            title: foundArticle.title,
            label: foundArticle.label,
            imageUrl: foundArticle.imageUrl,
            tagImage: foundArticle.tagImage || "/images/symb/outros.png",
            authorName: foundArticle.authorName || "iShaking Creative Media",
            publishDate: new Date(foundArticle.date),
            minutesRead: foundArticle.minutesRead || 5,
            content: foundArticle.content || "Conteúdo não disponível.",
            tags: foundArticle.tags,
          };
          setArticle(mappedArticle);
        } else {
          setError("Notícia ou artigo não encontrado.");
          disableFooter();
        }
      } catch (err) {
        console.error("Erro ao carregar artigo:", err);
        setError("Erro ao carregar artigo.");
        disableFooter();
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 800);
      }
    };

    if (id) {
      fetchArticle();
    } else {
      setError("ID do artigo não fornecido na URL.");
      setIsLoading(false);
    }
  }, [id]);

  const pageTitle = isLoading
    ? "Por favor, aguarde..."
    : error
    ? "Notícia não encontrado."
    : article
    ? `iSKGtm - ${article.title}`
    : "Notícia ou artigo não encontrado.";

    const navigate = useNavigate();

  return (
    <SkeletonTheme baseColor="#1a1a1a" highlightColor="#333" borderRadius={10}>
      <SetTitle title={pageTitle} />
      <main className="mainArticlePage">
        {isLoading ? (
          <div className='articlePageSkeleton' style={{ maxWidth: '1280px', paddingTop: "50px"}}>
            <div className='containerHeaderSkeleton'>
              <Skeleton height={40} width="70%" style={{ marginBottom: '20px' }} />
              <Skeleton height={16} width="50%" style={{ marginBottom: '5px' }} />
              <Skeleton height={16} width="25%" style={{ marginBottom: '10px' }} />
              <div style={{display: "flex", flexDirection: "row-reverse", marginBottom: "-20px"}}>
                <Skeleton height={16} width="120px" style={{ position: "relative", bottom: "25px" }} />
              </div>
              <Skeleton height={48} width="48px" />
            </div>

            <div className='contentSkeleton'>
              <Skeleton height={400} width="100%" style={{ marginBottom: '20px', marginTop: '30px', width: "100vw" }} />
              <Skeleton count={5} />
            </div>

          </div>
        ) : error ? (
          <>
          <div className='containerNotFoundArticle'>
            <img src="/images/symb/warning.png" />
            <p>{error}</p>
            <button className="button" onClick={() => navigate('/news')}>Voltar</button>
          </div>
          </>
        ) : article ? (
          <NewsArticle article={article} />
        ) : (
          <>
          <div className='containerNotFoundArticle'>
            <img src="/images/symb/warning.png" />
            <p>Notícia ou artigo não encontrado.</p>
            <button className="button" onClick={() => navigate('/news')}>Voltar</button>
          </div>
          </>
        )}
      </main>
      <div className='footerArticle' ref={footerDisable}><Footer /></div>
    </SkeletonTheme>
  );
};

export default ArticleDetailPage;