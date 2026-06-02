import './Prod.css';
import React from "react";
import Footer from '../../components/Footer';
import ProdHeader from './components/ProdHeader';
import ProdCarousel from './components/ProdCarousel';
import ProdShowcase from './components/ProdShowcase';

const slides = [
  "./images/carouselImages/prod/slide1.jpg",
  "./images/carouselImages/prod/slide2.jpg",
  "./images/carouselImages/prod/slide3.jpg",
  "./images/carouselImages/prod/slide4.jpg",
  "./images/carouselImages/prod/slide5.jpg",
  "./images/carouselImages/prod/slide6.jpg",
  "./images/carouselImages/prod/slide7.jpg",
  "./images/carouselImages/prod/slide8.jpg",
];

const Prod: React.FC = () => {
  return (
    <main className='mainProd'>
      <section className='mainSection'>
        <ProdHeader />
      </section>

      <section className='section2'>
        <ProdCarousel
          slides={slides}
          durationInSeconds={20}
          height="fit-content"
          imageAspectRatio={16 / 9}
        />
        <ProdShowcase />
      </section>

      <Footer />
    </main>
  );
};

export default Prod;
