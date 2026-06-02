import React, { useEffect, useRef } from "react";
import "./index.css";

interface ContinuousCarouselProps {
  slides: string[];
  durationInSeconds?: number;
  height?: string;
  isReady?: boolean;
}

const HomeCarousel: React.FC<ContinuousCarouselProps> = ({
  slides,
  durationInSeconds = 20,
  height = "400px",
}) => {
  const mergedSlides = [...slides, ...slides];
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
          loopFixRef.current.style.height = "200px";
        }
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", handleScroll);
    };
  }, []);

  return (
    <div className="carouselBackground">
      <div className="carouselCont">
        <div
          ref={wrapperRef}
          className="carousel-3d-wrapper"
          style={{ height }}
        >
          <div
            className="carousel-container"
            style={{
              "--duration": `${durationInSeconds}s`,
            } as React.CSSProperties}
          >
            <div className="slider-track" ref={loopFixRef}>
              {mergedSlides.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Slide ${idx + 1}`}
                  style={{
                    height: "100%",
                    width: "auto",
                    borderRadius: "35px",
                    border: "1px solid var(--color-bg-blur-primary)",
                    pointerEvents: "none",
                    backfaceVisibility: "hidden",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
