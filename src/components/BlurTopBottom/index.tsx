import React, { useEffect, useRef } from 'react';
import styles from './index.module.css'

type BlurTopBottomProps = {
  forcedOpacity?: number | null;
};

const BlurTopBottom: React.FC<BlurTopBottomProps> = ({ forcedOpacity = null }) => {

  const blurBottomRef = useRef<HTMLDivElement | null>(null);
  const blurTopRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (forcedOpacity !== null) {
        if (blurBottomRef.current && blurTopRef.current) {
          blurBottomRef.current.style.opacity = String(forcedOpacity);
          blurTopRef.current.style.opacity = String(forcedOpacity);
        }
        return;
      }

      const winScroll = window.pageYOffset || document.documentElement.scrollTop;
      
      const opacity = Math.max(0, Math.min(1, winScroll / 50));
      const opacityTopOnly = Math.max(0, Math.min(1, winScroll / 1000));

      if (blurBottomRef.current) {
        blurBottomRef.current.style.opacity = String(opacity);
      }

      if (blurTopRef.current) {
        blurTopRef.current.style.opacity = String(opacityTopOnly);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('load', handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
    };
  }, [forcedOpacity]);

  return (
    <>
      <div className={styles.BlurTop} ref={blurTopRef}></div>
      <div className={styles.BlurBottom} ref={blurBottomRef}></div>
    </>
  )
}

export default BlurTopBottom
