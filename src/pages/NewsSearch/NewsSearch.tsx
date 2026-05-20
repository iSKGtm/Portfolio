import React, { useState, useEffect, useRef } from 'react'
import type { ChangeEvent } from 'react'
import Footer from '../../components/Footer';
import './NewsSearch.css'
import NewsCard from '../../components/NewsCard'
import { newsData } from '../../data/news'
import type { NewsItem } from '../../data/news'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { CircularProgress, Pagination } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

const NewsSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>(newsData)
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const showClearButtonRef = useRef<HTMLButtonElement | null>(null);
  const itemsPerPage = 11;
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const raw = searchParams.get('page');
    const parsed = raw ? Number.parseInt(raw, 10) : 1;
    const next = Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
    setPage(next);
  }, [searchParams]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  const clearInput = () => setSearchTerm('');
  const showClearButton = searchTerm.length > 1;

useEffect(() => {
  const term = searchTerm.trim().toLowerCase();

  if (!term) {
    setFilteredNews(newsData);
    setPage(1);
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.delete('page');
      return next;
    });
    return;
  }

  setFilteredNews(
    newsData.filter(item => {
      const searchableFields: string[] = [
        item.title,
        item.label ?? '',
        typeof item.date === 'string' ? new Date(item.date).toLocaleDateString() : new Date(item.date).toLocaleDateString(),
      ];
      if (Array.isArray(item.tags)) {
        searchableFields.push(...item.tags);
      } else if (typeof item.tags === 'string') {
        searchableFields.push(item.tags);
      }
      return searchableFields.some(field =>
        typeof field === 'string' && field.toLowerCase().includes(term)
      );
    })
  );
  setPage(1);
  setSearchParams((prev) => {
    const next = new URLSearchParams(prev);
    next.delete('page');
    return next;
  });
}, [searchTerm]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const totalPages = Math.max(1, Math.ceil(filteredNews.length / itemsPerPage));

  useEffect(() => {
    const clamped = Math.min(Math.max(1, page), totalPages);
    if (clamped !== page) setPage(clamped);
  }, [page, totalPages]);

  const pagedNews = filteredNews.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  useEffect(() => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (page <= 1) next.delete('page');
      else next.set('page', String(page));
      return next;
    });
  }, [page, setSearchParams]);

  return (
    <>
    <SkeletonTheme baseColor="#a1a1a1" highlightColor="#888" borderRadius={10}>
      <main className='mainNews' style={{ display: isLoading ? 'none' : 'flex' }}>
        <section className="mainSection">
          <div className='containerHeader'>
            <div className='titleNewsSearch'>artigos.</div>
            <div className='labelNewsSearch'>Acompanhe notícias e comunicados da iShaking Creative Media.</div>
            <div className='inputSearchContainer'>
              <div className='searchIcon'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
              <input
                type="text"
                placeholder="Buscar..."
                maxLength={16}
                value={searchTerm}
                onChange={handleChange}
              />
              {showClearButton && (
                <button ref={showClearButtonRef} style={{ animation: 'fadeIn 250ms, blurIn 190ms' }} onClick={() => clearInput()}>
                  <FontAwesomeIcon icon={faX} />
                </button>
              )}
            </div>
          </div>
          {filteredNews.length > 0 ? (
            <>
              {totalPages > 1 && (
                <div className="paginationContainer">
                  <Pagination
                    className='pageCards'
                    count={totalPages}
                    page={page}
                    onChange={(_, value) => setPage(value)}
                    variant="outlined"
                    shape="rounded"
                    siblingCount={0}
                    boundaryCount={1}
                    sx={{
                      '& .MuiPagination-ul': {
                        gap: '6px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        cursor: 'default',
                      },
                      '& .MuiPaginationItem-root': {
                        color: 'var(--color-primary)',
                        borderRadius: '100px',
                        borderColor: 'var(--color-bg-blur-primary)',
                        backgroundColor: 'var(--color-bg-blur-primary)',
                        boxShadow: 'inset 0 5px 10px -3px #00000030, 0px 0px 10px #00000015',
                        transition: 'transform 120ms ease, background-color 120ms ease, border-color 120ms ease',
                        cursor: 'default',
                        fontSize: '1rem',
                      },
                      '& .MuiPaginationItem-root:hover': {
                        backgroundColor: 'var(--color-bg-blur-primary-hover)',
                        borderColor: 'var(--color-bg-blur-primary-hover)',
                      },
                      '& .MuiPaginationItem-root.Mui-selected': {
                        color: '#fff',
                        backgroundColor: 'var(--color-accent)',
                      },
                      '& .MuiPaginationItem-root.Mui-selected:hover': {
                        backgroundColor: 'var(--color-accent)',
                      },
                      '& .MuiPaginationItem-root:active': {
                        transform: 'scale(0.90)',
                      },
                    }}
                  />
                </div>
              )}
              <div className="containerSearch">
                {pagedNews.map(item => (
                  <NewsCard key={item.url} {...item} />
                ))}
              </div>
            </>
          ) : (
            <div className="containerSearch">
              <div className='containerSearchNone'>
                <img src="/images/symb/aviso.svg" />
                <h2>Nenhum artigo encontrado para “<text>{searchTerm}</text>”.</h2>
              </div>
            </div>
          )}
        </section>
      </main>
    </SkeletonTheme>
    {isLoading && (
      <SkeletonTheme baseColor="#a1a1a1" highlightColor="#888" borderRadius={10}>
        <main className='mainNews'>
          <section className="mainSectionSkeleton">
            <div className='containerHeader'>
              <div className='titleNewsSearch'><Skeleton width="20%" /></div>
              <div className='labelNewsSearch'><Skeleton width="35%" /></div>
              <div className='inputSearchContainer'>
                <div className='searchIcon'>
                  <CircularProgress size={32} sx={{ color: '#000' }} />
                </div>
                <input
                  type="text"
                  placeholder="Por favor, aguarde..."
                  maxLength={32}
                  disabled={true}
                />
            </div>
            </div>

          <div className="containerPaginationSkeleton">
            <div className="paginationSkeleton">
              <Skeleton width="32px" height="32px" borderRadius="50%"/>
              <Skeleton width="32px" height="32px" borderRadius="50%"/>
              <Skeleton width="32px" height="32px" borderRadius="50%"/>
              <Skeleton width="32px" height="32px" borderRadius="50%"/>
            </div>

          </div>

            <div className="containerSearchSkeleton">
              {Array.from({ length: 10 }, (_, i) => (
                <NewsCard 
                  key={i}
                  title={<>
                    <Skeleton width="100%" /> <Skeleton width="30%" />
                    </>
                  }
                  label={
                    <>
                    <Skeleton width="100%" /> <Skeleton width="60%" />
                    </>
                  }
                  tags={
                    <>
                    <SkeletonTheme baseColor="#ccc" highlightColor="#eee" borderRadius={10}>
                      <Skeleton width="70%" />
                    </SkeletonTheme>
                    </>
                  }
                  date={<Skeleton width="30%" />}
                  imageUrl={"/images/symb/placeholder480.jpg"}
                />
              ))}
            </div>
          </section>
        </main>
      </SkeletonTheme>
    )}
      <Footer />
    </>
  )
}

export default NewsSearch
