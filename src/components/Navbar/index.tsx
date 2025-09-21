import { useRef, useEffect, useState } from 'react';
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faNewspaper, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import LiquidGlass from 'liquid-glass-react'

const Navbar: React.FC = () => {
  const lastScrollTop = useRef(0);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const buttonScrollRef = useRef<HTMLDivElement | null>(null);
  const [activeButton, setActiveButton] = useState('');
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath.startsWith('/news')) {
      setActiveButton('news');
    } else if (currentPath.startsWith('/home')) {
      setActiveButton('home');
    } else {
      setActiveButton('');
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (!headerRef.current) return;
      headerRef.current.style.transform =
        currentScroll > lastScrollTop.current ? 'translateY(100%)' : 'translateY(0)';
      lastScrollTop.current = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        if (buttonScrollRef.current) {
          buttonScrollRef.current.style.transform = 'translateX(calc(0% + 0px))';
        }
      } else {
        if (buttonScrollRef.current) {
          buttonScrollRef.current.style.transform = 'translateX(calc(100% + 15px))';
        }
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <svg
      style={{ position: 'absolute', width: 0, height: 0, overflow: 'visible' }}
      aria-hidden="true"
      >
      <filter
          id="glassLiquidStatic"
          x="-10%" y="-10%" width="120%" height="120%"
          filterUnits="objectBoundingBox"
      >
          <feTurbulence
          type="fractalNoise"
          baseFrequency="0.010 0.010"
          numOctaves="1"
          result="noise"
          />
          <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          scale="75"
          xChannelSelector="R"
          yChannelSelector="G"
          />
      </filter>
      </svg>

      <header className={styles.headerAnim} ref={headerRef}>
        <div className={styles.scrollButton} onClick={scrollToTop} ref={buttonScrollRef}>
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
        <div className={styles.mainNavbar}>
          <nav>
            <Link
              to="/home"
              className={`${styles.buttonNav} ${styles.buttonItem} ${
                activeButton === 'home' ? styles.active : ''
              }`}
            >
              <div className={styles.buttonText}>HOME</div>
              <FontAwesomeIcon icon={faHouse} className={styles.icon} />
            </Link>
            <div className={styles.logo}>
              <div className={styles.logoGif}>
                <img src="/images/logo/logoGif.gif" />
              </div>
              <div className={styles.logoName}>
                <img src="/images/logo/logoName.png" />
              </div>
            </div>
            <Link
              to="/news"
              className={`${styles.buttonNav} ${styles.buttonItem} ${
                activeButton === 'news' ? styles.active : ''
              }`}
            >
              <div className={styles.buttonText}>NOTÍCIAS</div>
              <FontAwesomeIcon icon={faNewspaper} className={styles.icon} />
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;