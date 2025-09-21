import React, {useEffect, useRef, useState } from 'react';
import styles from './index.module.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AboutHeader: React.FC = () => {
  const aboutHeaderRef = useRef<HTMLVideoElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = window.pageYOffset || document.documentElement.scrollTop;
      const blur = 0 + winScroll / 50;
      const scale = 1 + winScroll / 5000;
      const translate = 0 + winScroll / -10;
      const opacity = 1.0 - winScroll / 1000;

      if (aboutHeaderRef.current) {
        aboutHeaderRef.current.style.filter = `
          blur(${blur}px)
          brightness(${opacity})
          contrast(1.050)
        `;

        aboutHeaderRef.current.style.scale = `
          ${scale}
        `

        aboutHeaderRef.current.style.transform = `
          translateY(${translate}px)
        `
      }
      
      if (winScroll >= 950) {
        if (aboutHeaderRef.current) {
          aboutHeaderRef.current.pause();
        }
      } else {
        if (aboutHeaderRef.current) {
          aboutHeaderRef.current.play();
        }
      }


    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }
  );

  return (
    <>

      <SkeletonTheme baseColor="#1a1a1a" highlightColor="#333" borderRadius={10}>
        <section className={styles.mainSection}>
          {isLoading ? (
            <>
              <div className={styles.backgroundVideo}>
                
              </div>
              <div className={styles.logoName}>
                <Skeleton width={300} height={80} />
                <Skeleton width={240} height={30} />
              </div>
            </>
          ) : (
            <>
              <video autoPlay muted loop className={styles.backgroundVideo} ref={aboutHeaderRef}>
                <source src="/videos/backgrounds/Website.mp4" type="video/mp4"/>
              </video>
              <div className={styles.logoName}>
                <img src="/images/logo/logoName.png"/>
                <div>we are in everything</div>
              </div>
            </>
          )}
        </section>
      </SkeletonTheme>
    </>
  )
}

export default AboutHeader