import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import './Home.css';
import HomeCarousel from './components/HomeCarousel';
import HomeHeader from './components/HomeHeader';
import HomeShowcase from './components/HomeShowcase';
import HomePartnersCard from './components/HomePartners';
import HomeContact from './components/HomeContact';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { partners } from '../../data/partners';

const slides = [
  "./images/carouselImages/music/slide06.jpg",
  "./images/carouselImages/music/slide07.jpg",
  "./images/carouselImages/music/slide08.jpg",
  "./images/carouselImages/prod/slide6.jpg",
  "./images/carouselImages/prod/slide7.jpg",
  "./images/carouselImages/prod/slide8.jpg",
  "./images/carouselImages/dev/slide7.jpg",
  "./images/carouselImages/dev/slide8.jpg",
];

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 0);
  }, []);

  //Skeleton da pagina desativado.

  return (
    <>
      <SkeletonTheme baseColor="#a1a1a1" highlightColor="#888" borderRadius={10}>
        {isLoading ? (
          <main className='mainAboutSkeleton'>
            <HomeHeader />
          </main>
        ) : (
          <main className='mainAbout'>
            <section className='mainSection'>
              <HomeHeader />
            </section>

            <section className="section2">
              <HomeCarousel
                slides={slides}
                durationInSeconds={20}
                height="fit-content"
                isReady={!isLoading}
              />
              <HomeShowcase />
            </section>

            <section className='section3'>
              <HomePartnersCard partners={partners} />
            </section>

            <section className='section4'>
              <HomeContact />
            </section>

            <Footer />
          </main>
        )}
      </SkeletonTheme>
    </>
  );
};

export default Home;
