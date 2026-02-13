import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const AboutMusicHeader: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const loopFixRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let winScroll = window.pageYOffset || document.documentElement.scrollTop;
      
      // Efeitos ajustados para Music: Blur mais intenso e escala maior
      const blur = winScroll / 40;
      const scale = 1 + winScroll / 3000; 
      const opacity = Math.max(0, 1.0 - winScroll / 900);
      const translate = winScroll * 0.45; // Mais lento que o original para dar peso

      if (videoRef.current) {
        videoRef.current.style.filter = `blur(${blur}px) brightness(${opacity}) sepia(0.3) hue-rotate(-20deg)`; // Toque de cor estilizada
        videoRef.current.style.transform = `scale(${scale}) translateY(${translate}px)`;
        
        if (winScroll >= 1200) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
      }
    };

    // O delay de 5s que você solicitou para o loopFix
    const heightTimer = setTimeout(() => {
      if (loopFixRef.current) {
        loopFixRef.current.style.height = "199px";
      }
    }, 5000);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('load', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
      clearTimeout(heightTimer);
    };
  }, [isLoading]);

  return (
    <SkeletonTheme baseColor="#0a0a0a" highlightColor="#1a1a1a">
      <section className={styles.mainSection}>
        {isLoading ? (
          <div className={styles.skeletonCont}>
            <Skeleton width={400} height={60} />
          </div>
        ) : (
          <>
            <div className={styles.videoContainer}>
              <video autoPlay muted loop playsInline ref={videoRef} className={styles.video}>
                <source src="/videos/backgrounds/Website (OLD2).mp4" type="video/mp4"/>
              </video>
            </div>
            
            <div className={styles.content}>
              <h1 className={styles.title}>iSKGtm <span className={styles.accent}>Music</span></h1>
              <p className={styles.subtitle}>we are in everything</p>
            </div>

            <div ref={loopFixRef} style={{ width: '100%', pointerEvents: 'none' }}></div>
          </>
        )}
      </section>
    </SkeletonTheme>
  );
}

export default AboutMusicHeader;