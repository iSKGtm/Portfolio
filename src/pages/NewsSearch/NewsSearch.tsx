import React, { useState, useEffect, ChangeEvent } from 'react'
import Footer from '../../components/Footer';
import './NewsSearch.css'
import NewsCard from '../../components/NewsCard'
import { newsData, NewsItem } from '../../data/news'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const NewsSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>(newsData)
  const [isLoading, setIsLoading] = useState(true);

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
    return;
  }

  setFilteredNews(
    newsData.filter(item => {
      const searchableFields: string[] = [
        item.title,
        item.label,
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
}, [searchTerm]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
    <SkeletonTheme baseColor="#1a1a1a" highlightColor="#333" borderRadius={10}>
      <main className='mainNews' style={{ display: isLoading ? 'none' : 'flex' }}>
        <section className="mainSection">
          <div className='titleNewsSearch'>noticias</div>
          <div className='labelNewsSearch'>Acompanhe notícias e comunicados da iShaking Creative Media.</div>
          <div className='inputSearchContainer'>
            <input
              type="text"
              placeholder="Digite para buscar..."
              maxLength={32}
              value={searchTerm}
              onChange={handleChange}
            />
            {showClearButton && (
              <button onClick={() => clearInput()}>
                <FontAwesomeIcon icon={faX} />
              </button>
            )}
          </div>
          <div className='divisionHR'>
            <hr />
          </div>
          {filteredNews.length > 0 ? (
            <div className="containerSearch">
              {filteredNews.map(item => (
                <NewsCard key={item.url} {...item} />
              ))}
            </div>
          ) : (
            <div className="containerSearch">
              <h2>Nenhuma notícia encontrada para “<text>{searchTerm}</text>”.</h2>
            </div>
          )}
        </section>
      </main>
    </SkeletonTheme>
    {isLoading && (
      <SkeletonTheme baseColor="#1a1a1a" highlightColor="#333" borderRadius={10}>
        <main className='mainNews'>
          <section className="mainSectionSkeleton">
            <div className='titleNewsSearch'><Skeleton width="20%" /></div>
            <div className='labelNewsSearch'><Skeleton width="35%" /></div>
            <div className='inputSearchContainer'>
              <input
                type="text"
                placeholder="Por favor, aguarde..."
                maxLength={32}
                disabled={true}
              />
            </div>
            <div className='divisionHR'>
              <hr />
            </div>
            <div className="containerSearchSkeleton">
              {Array.from({ length: 10 }, (_, i) => (
                <NewsCard 
                  key={i}
                  title={<Skeleton width="100%" />}
                  label={<Skeleton width="70%" />}
                  type={<Skeleton width="50%" />}
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