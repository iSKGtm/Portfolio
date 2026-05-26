import './Music.css'
import React from "react";
import Footer from '../../components/Footer';
import MusicHeader from './components/MusicHeader';
import MusicCarousel from './components/MusicCarousel';
import MusicFeatures from './components/MusicFeatures';

const slides = [
  "./images/carouselImages/music/slide1.jpg",
  "./images/carouselImages/music/slide2.jpg",
  "./images/carouselImages/music/slide3.jpg",
  "./images/carouselImages/music/slide4.jpg",
  "./images/carouselImages/music/slide5.jpg",
  "./images/carouselImages/music/slide6.jpg",
  "./images/carouselImages/music/slide7.jpg",
  "./images/carouselImages/music/slide8.jpg",
];

const Music: React.FC = () => {

    return (
        <>
            <main className='mainMusic'>
                <section className='mainSection'>
                    <MusicHeader />
                </section>

                <section className='section2'>
                    <MusicCarousel
                        slides={slides}
                        durationInSeconds={10}
                        height="fit-content"
                        imageAspectRatio={1.1}
                    />
                    <MusicFeatures />
                </section>

                <Footer />
            </main>
        </>
  );
};

export default Music;
