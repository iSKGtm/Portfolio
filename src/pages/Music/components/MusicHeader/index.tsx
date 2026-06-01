import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.css';
import { music } from '../../../../data/listaMusicas';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const parseDate = (date: string) => {
  const [day, month, year] = date.split('/').map(Number);
  return new Date(year, month - 1, day).getTime();
};

const latestSong = music.filter((song) => !song.hide).sort((a, b) => parseDate(b.date) - parseDate(a.date))[0];

const MusicHeader: React.FC = () => {
  const musicHeaderRef = useRef<HTMLVideoElement | null>(null);
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

      if (musicHeaderRef.current) {
        musicHeaderRef.current.style.filter = `blur(${blur}px) opacity(${opacity})`;
        musicHeaderRef.current.style.transform = `scale(${scale}) translateY(${translate}px)`;

        if (winScroll >= 1280) {
          musicHeaderRef.current.pause();
          musicHeaderRef.current.style.display = 'none';
        } else {
          musicHeaderRef.current.play();
          musicHeaderRef.current.style.display = 'block';
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

  const playLatestSong = () => {
    if (!latestSong) return;
    document.getElementById('music-player')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    window.dispatchEvent(new CustomEvent('music-player:play-song', { detail: { id: latestSong.id } }));
  };

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
                ref={musicHeaderRef}
              >
                <source src="/videos/backgrounds/Website10.mp4" type="video/mp4" />
              </video>
            </div>
            <div className={styles.logoName}>
              <span className={styles.logoText}>iSKGtm</span>
              <span className={styles.logoText}>music.</span>
            </div>
            {latestSong && (
              <button className={styles.latestAlbum} type="button" onClick={playLatestSong}>
                <span>
                  {latestSong.albumName}
                  <small>ouça agora!</small>
                </span>
                <img src={latestSong.fileAlbum ?? '/images/symb/music.svg'} alt={latestSong.albumName} />
              </button>
            )}
          </>
        )}
      </section>
    </SkeletonTheme>
  );
};

export default MusicHeader;
