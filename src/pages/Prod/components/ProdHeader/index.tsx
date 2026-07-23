import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.css';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProdHeader: React.FC = () => {
  const prodHeaderRef = useRef<HTMLVideoElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = window.pageYOffset || document.documentElement.scrollTop;

      const blur = winScroll / 50;
      let scale = 1 + winScroll / 2000;
      const opacity = Math.max(0, 1.1 - winScroll / 800);
      const translate = winScroll * 0.6;

      if (scale >= 1.5) {
        scale = 1;
      }

      if (prodHeaderRef.current) {
        prodHeaderRef.current.style.filter = `blur(${blur}px) opacity(${opacity})`;
        prodHeaderRef.current.style.transform = `scale(${scale}) translateY(${translate}px)`;

        if (winScroll >= 1280) {
          prodHeaderRef.current.pause();
          prodHeaderRef.current.style.display = 'none';
        } else {
          prodHeaderRef.current.play();
          prodHeaderRef.current.style.display = 'block';
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
                ref={prodHeaderRef}
              >
                <source media="(max-width: 767px)" src="/videos/backgrounds/WebsiteMobile.mp4" type="video/mp4" />
                <source media="(min-width: 768px)" src="/videos/backgrounds/Website.mp4" type="video/mp4" />
              </video>
            </div>
            <div className={styles.logoName}>
              <span className={styles.logoText}>iSKGtm</span>
              <span className={styles.logoText}>prod.</span>
            </div>
          </>
        )}
      </section>
    </SkeletonTheme>
  );
};

export default ProdHeader;
