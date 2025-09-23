import { useRef, useEffect, useState } from 'react';
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faNewspaper, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

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
      <svg style={{display: "none"}}>
        <filter
          id="glass-distortion"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.003 0.008"
            numOctaves="1"
            seed="5"
            result="turbulence"
          />
          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
          </feComponentTransfer>
          <feGaussianBlur in="turbulence" stdDeviation="1" result="softMap" />
          <feSpecularLighting
            in="softMap"
            surfaceScale="5"
            specularConstant="1"
            specularExponent="100"
            lighting-color="white"
            result="specLight"
          >
            <fePointLight x="-200" y="-200" z="300" />
          </feSpecularLighting>
          <feComposite
            in="specLight"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
            result="litImage"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softMap"
            scale="150"
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
              <div className={styles.buttonText}>Home</div>
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
              <div className={styles.buttonText}>Notícias</div>
              <FontAwesomeIcon icon={faNewspaper} className={styles.icon} />
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;