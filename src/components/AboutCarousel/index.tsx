import React, { useEffect, useRef } from "react";
import "./index.css";

interface ContinuousCarouselProps {
  slides: string[];
  durationInSeconds?: number;
  height?: string;
}

const AboutCarousel: React.FC<ContinuousCarouselProps> = ({
  slides,
  durationInSeconds = 30,
  height = "400px",
}) => {
  const mergedSlides = [...slides, ...slides];
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const rotation = Math.max(-175, Math.min(-160 - scrollY / 60, -90));

      if (wrapperRef.current) {
        wrapperRef.current.style.transform = `perspective(1200px) rotateY(${rotation}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
          <div className="slider-track">
            {mergedSlides.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Slide ${idx + 1}`}
                style={{
                  height: "100%",
                  width: "auto",
                  borderRadius: "20px",
                  border: "1px solid #ffffff50",
                  pointerEvents: "none",
                  backfaceVisibility: "hidden",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCarousel;