import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import './Home.css';
import AboutCarousel from '../../components/AboutProjects';
import AboutHeader from '../../components/AboutHeader';
import AboutFeatures from '../../components/AboutFeatures';
import AboutPartnersCard from '../../components/AboutPartners';
import AboutContact from '../../components/AboutContact';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { partners } from '../../data/partners';

const slides = [
  "./images/carouselImages/slide1.jpg",
  "./images/carouselImages/slide2.jpg",
  "./images/carouselImages/slide3.jpg",
  "./images/carouselImages/slide4.jpg",
  "./images/carouselImages/slide5.jpg",
  "./images/carouselImages/slide6.jpg",
  "./images/carouselImages/slide7.jpg",
  "./images/carouselImages/slide8.jpg",
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
      <SkeletonTheme baseColor="#1a1a1a" highlightColor="#333" borderRadius={10}>
        {isLoading ? (
          <main className='mainAboutSkeleton'>
            <AboutHeader />
          </main>
        ) : (
          <main className='mainAbout'>
            <section className='mainSection'>
              <AboutHeader />
            </section>

            <section className="section2">
              <AboutCarousel
                slides={slides}
                durationInSeconds={30}
                height="fit-content"
                isReady={!isLoading}
              />
              <AboutFeatures />
            </section>

            <section className='section3'>
              <AboutPartnersCard partners={partners} />
            </section>

            <section className='section4'>
              <AboutContact />
            </section>

            <Footer />
          </main>
        )}
      </SkeletonTheme>
    </>
  );
};

export default Home;