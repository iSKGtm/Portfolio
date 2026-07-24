import './ArticleDetailPage.css'
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import NewsArticle from "../../components/NewsArticle";
import type { Article } from "../../components/NewsArticle";
import Footer from "../../components/Footer";
import { CircularProgress } from '@mui/material';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Helmet } from 'react-helmet-async';

import { newsData } from '../../data/news';
import { partners } from '../../data/ownershipArticle';

const SetTitle = ({ title }: { title: string }) => {
  React.useEffect(() => {
    document.title = title;
  }, [title]);
  return null;
};

const ArticleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [articleSeo, setArticleSeo] = useState<{
    title: string;
    description: string;
    imageUrl?: string;
    url?: string;
  } | null>(null);
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
          const description = typeof foundArticle.label === 'string' ? foundArticle.label : '';
          const author = partners.find(({ user }) => user === foundArticle.user) ?? partners[0];
          const mappedArticle: Article = {
            title: foundArticle.title,
            label: foundArticle.label || '',
            imageUrl: foundArticle.imageUrl || '',
            tagImage: foundArticle.tagImage || "/images/symb/outros.svg",
            author,
            publishDate: foundArticle.date,
            dateEdit: foundArticle.dateEdit || null,
            minutesRead: foundArticle.minutesRead || 5,
            content: foundArticle.content || "Conteúdo não disponível.",
            tags: foundArticle.tags,
          };
          setArticle(mappedArticle);
          setArticleSeo({
            title: `iSKGtm - ${foundArticle.title}`,
            description,
            imageUrl: foundArticle.imageUrl,
            url: typeof window !== 'undefined' ? window.location.href : undefined,
          });
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
    ? "Artigo não encontrado."
    : article
    ? `iSKGtm - ${article.title}`
    : "Notícia ou artigo não encontrado.";

    const navigate = useNavigate();

  return (
    <SkeletonTheme baseColor="var(--color-skeleton-base)" highlightColor="var(--color-skeleton-highlight)" borderRadius={10}>
      <Helmet>
        <title>{articleSeo?.title ?? pageTitle}</title>
        {articleSeo?.description ? (
          <meta name="description" content={articleSeo.description} />
        ) : null}

        <meta property="og:title" content={articleSeo?.title ?? pageTitle} />
        {articleSeo?.description ? (
          <meta property="og:description" content={articleSeo.description} />
        ) : null}
        {articleSeo?.url ? <meta property="og:url" content={articleSeo.url} /> : null}
        {articleSeo?.url ? <link rel="canonical" href={articleSeo.url} /> : null}
        <meta property="og:type" content="article" />
        {articleSeo?.imageUrl ? <meta property="og:image" content={articleSeo.imageUrl} /> : null}

        <meta name="twitter:card" content={articleSeo?.imageUrl ? "summary_large_image" : "summary"} />
        <meta name="twitter:title" content={articleSeo?.title ?? pageTitle} />
        {articleSeo?.description ? (
          <meta name="twitter:description" content={articleSeo.description} />
        ) : null}
        {articleSeo?.imageUrl ? <meta name="twitter:image" content={articleSeo.imageUrl} /> : null}
      </Helmet>
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
              <div className='loadIcon'>
                <CircularProgress size={32} sx={{ color: 'var(--color-text-primary)' }} />
              </div>
            </div>

            <div className='contentSkeleton'>
              <Skeleton height={400} width="100%" style={{ marginBottom: '20px', marginTop: '30px', width: "100vw" }} />
              <Skeleton count={5} />
            </div>

          </div>
        ) : error ? (
          <>
          <div className='containerNotFoundArticle'>
            <img src="/images/symb/aviso.svg" />
            <p>{error}</p>
            <button className="button" onClick={() => navigate('/news')}>Voltar</button>
          </div>
          </>
        ) : article ? (
          <NewsArticle article={article} />
        ) : (
          <>
          <div className='containerNotFoundArticle'>
            <img src="/images/symb/aviso.svg" />
            <p>Notí­cia ou artigo não encontrado.</p>
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
