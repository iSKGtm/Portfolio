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
  let loopFixRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Mantendo sua lógica original de rotação
      const rotation = Math.max(-175, Math.min(-160 - scrollY / 60, -90));

      if (wrapperRef.current) {
        wrapperRef.current.style.transform = `perspective(1200px) rotateY(${rotation}deg)`;
      }

      // Alteração solicitada: delay de 5s e valor de 199px
      setTimeout(() => {
        if (loopFixRef.current) {
          loopFixRef.current.style.height = "200px";
        }
      }, 100);
    };

    // Adiciona os ouvintes para scroll e load
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", handleScroll);

    // Executa imediatamente para evitar "pulo" visual
    handleScroll();

    // Limpeza: remove ambos os ouvintes ao desmontar
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
    </div>
  );
};

export default AboutCarousel;