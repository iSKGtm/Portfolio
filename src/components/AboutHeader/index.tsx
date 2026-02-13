import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AboutHeader: React.FC = () => {
  const aboutHeaderRef = useRef<HTMLVideoElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

useEffect(() => {
    const handleScroll = () => {
      let winScroll = window.pageYOffset || document.documentElement.scrollTop;
      
      const blur = winScroll / 50;
      const scale = 1 + winScroll / 5000;
      const opacity = Math.max(0, 1.0 - winScroll / 800);
      const translate = winScroll * 0.83;

      if (aboutHeaderRef.current) {
        aboutHeaderRef.current.style.filter = `blur(${blur}px) brightness(${opacity})`;
        aboutHeaderRef.current.style.transform = `scale(${scale}) translateY(${translate}px)`;
        
        if (winScroll >= 1148) {
          aboutHeaderRef.current.pause();
          aboutHeaderRef.current.style.display = "none";
        } else {
          aboutHeaderRef.current.play();
          aboutHeaderRef.current.style.display = "block";
        }
      }
    };

    // Adiciona os dois ouvintes
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('load', handleScroll, { passive: true });

    // Chama imediatamente para garantir que o estado inicial esteja correto após o Skeleton
    handleScroll();

    // Limpeza: remove os dois ouvintes
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
    };
  }, [isLoading]);



  return (
    <SkeletonTheme baseColor="#1a1a1a" highlightColor="#333" borderRadius={10}>
      <section className={styles.mainSection}>
        {isLoading ? (
          <div className={styles.logoNameSkeleton}>
            <Skeleton width={300} height={80} />
            <Skeleton width={240} height={30} />
          </div>
        ) : (
          <>
            <div className={styles.backgroundVideoContainer}>
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className={styles.backgroundVideo} 
                ref={aboutHeaderRef}
              >
                <source src="/videos/backgrounds/Website10.mp4" type="video/mp4"/>
              </video>
            </div>
            <div className={styles.logoName}>
              <img src="/images/logo/logoName.png" alt="Logo" />
              <div>we are in everything</div>
            </div>
          </>
        )}
      </section>
    </SkeletonTheme>
  );
}

export default AboutHeader;