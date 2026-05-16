import React, { useEffect, useRef } from 'react';
import styles from './index.module.css'

type BlurTopBottomProps = {
  forcedOpacity?: number | null;
};

const BlurTopBottom: React.FC<BlurTopBottomProps> = ({ forcedOpacity = null }) => {

  const containerBlurTopBottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (forcedOpacity !== null) {
        if (containerBlurTopBottomRef.current) {
          containerBlurTopBottomRef.current.style.opacity = String(forcedOpacity);
        }
        return;
      }

      const winScroll = window.pageYOffset || document.documentElement.scrollTop;
      
      const opacity = Math.max(0, Math.min(1, winScroll / 200));

      if (containerBlurTopBottomRef.current) {
        containerBlurTopBottomRef.current.style.opacity = String(opacity);
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
        <div className={styles.containerBlurTopBottom} ref={containerBlurTopBottomRef}>
            <div className={styles.BlurTop}></div>
            <div className={styles.BlurBottom}></div>
        </div>
    </>
  )
}

export default BlurTopBottom
