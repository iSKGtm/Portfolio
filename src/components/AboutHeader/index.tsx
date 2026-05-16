import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.css'
import BlurTopBottom from '../../components/BlurTopBottom';
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
      const opacity = Math.max(0, 1.1 - winScroll / 800);
      const translate = winScroll * 0.83;

      if (aboutHeaderRef.current) {
        aboutHeaderRef.current.style.filter = `blur(${blur}px) opacity(${opacity})`;
        aboutHeaderRef.current.style.transform = `scale(${scale}) translateY(${translate}px)`;
        
        if (winScroll >= 1280) {
          aboutHeaderRef.current.pause();
          aboutHeaderRef.current.style.display = "none";
        } else {
          aboutHeaderRef.current.play();
          aboutHeaderRef.current.style.display = "block";
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('load', handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
    };
  }, [isLoading]);



  return (
    <SkeletonTheme baseColor="#a1a1a1" highlightColor="#888" borderRadius={10}>
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
              <img src="/images/logo/logoName.svg" alt="Logo" />
              <div>we are in everything.</div>
            </div>
          </>
        )}
      </section>
    </SkeletonTheme>
  );
}

export default AboutHeader;