import './Dev.css';
import React from "react";
import Footer from '../../components/Footer';
import DevHeader from './components/DevHeader';
import DevCarousel from './components/DevCarousel';
import DevFeatures from './components/DevFeatures';

const slides = [
  "./images/carouselImages/dev/slide1.jpg",
  "./images/carouselImages/dev/slide2.jpg",
  "./images/carouselImages/dev/slide3.jpg",
  "./images/carouselImages/dev/slide4.jpg",
  "./images/carouselImages/dev/slide5.jpg",
  "./images/carouselImages/dev/slide6.jpg",
  "./images/carouselImages/dev/slide7.jpg",
  "./images/carouselImages/dev/slide8.jpg",
];

const Dev: React.FC = () => {
  return (
    <main className='mainDev'>
      <section className='mainSection'>
        <DevHeader />
      </section>

      <section className='section2'>
        <DevCarousel
          slides={slides}
          durationInSeconds={30}
          height="fit-content"
          imageAspectRatio={16 / 9}
        />
        <DevFeatures />
      </section>

      <Footer />
    </main>
  );
};

export default Dev;
