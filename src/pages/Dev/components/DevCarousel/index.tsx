import React, { useEffect, useRef } from 'react';
import './index.css';

interface ContinuousCarouselProps {
  slides: string[];
  durationInSeconds?: number;
  height?: string;
  isReady?: boolean;
  imageAspectRatio?: number;
}

const DevCarousel: React.FC<ContinuousCarouselProps> = ({
  slides,
  durationInSeconds = 10,
  height = '400px',
  imageAspectRatio = 1.1,
}) => {
  const mergedSlides = [...slides, ...slides, ...slides];
  const wrapperRef = useRef<HTMLDivElement>(null);
  const loopFixRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const rotation = Math.max(-175, Math.min(-160 - scrollY / 60, -90));

      if (wrapperRef.current) {
        wrapperRef.current.style.transform = `perspective(1200px) rotateY(${rotation}deg)`;
      }

      setTimeout(() => {
        if (loopFixRef.current) {
          loopFixRef.current.style.height = '200px';
        }
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
    };
  }, []);

  return (
    <div className="devCarouselBackground">
      <div className="devCarouselCont">
        <div
          ref={wrapperRef}
          className="dev-carousel-3d-wrapper"
          style={{ height }}
        >
          <div
            className="dev-carousel-container"
            style={{
              '--duration': `${durationInSeconds}s`,
              '--slide-aspect-ratio': `${imageAspectRatio}`,
            } as React.CSSProperties}
          >
            <div className="dev-slider-track" ref={loopFixRef}>
              {mergedSlides.map((src, idx) => (
                <div
                  className="dev-slide-item"
                  key={idx}
                  style={{ aspectRatio: `${imageAspectRatio}` }}
                >
                  <img
                    src={(src)}
                    alt={`Slide ${idx + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevCarousel;
