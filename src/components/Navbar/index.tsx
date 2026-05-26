import { useRef, useEffect, useState } from 'react';
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const sanitizeSvgMarkup = (svgText: string) =>
  svgText
    .replace(/^\s*<\?xml[\s\S]*?\?>\s*/i, '')
    .replace(/^\s*<!DOCTYPE[\s\S]*?>\s*/i, '')
    .replace(/style="fill:#fff;fill-opacity:1;"/gi, 'fill="currentColor"')
    .replace(/style="fill:#fff;fill-opacity:1"/gi, 'fill="currentColor"')
    .replace(/fill="#fff"/gi, 'fill="currentColor"');

const Navbar: React.FC = () => {
  const lastScrollTop = useRef(0);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const buttonScrollRef = useRef<HTMLDivElement | null>(null);
  const buttonScrollIconRef = useRef<HTMLDivElement | null>(null);
  const [activeButton, setActiveButton] = useState('');
  const [homeSvgMarkup, setHomeSvgMarkup] = useState('');
  const [articleSvgMarkup, setArticleSvgMarkup] = useState('');
  const location = useLocation();
  const isHidden = location.pathname === '/hidden';

  useEffect(() => {
    const currentPath = location.pathname;

    if (currentPath.startsWith('/artigos') || currentPath.startsWith('/artigo')) {
      setActiveButton('news');
    } else if (currentPath.startsWith('/home')) {
      setActiveButton('home');
    } else {
      setActiveButton('');
    }
  }, [location.pathname]);

  useEffect(() => {
    let cancelled = false;

    const loadSvgIcons = async () => {
      try {
        const [homeResponse, articleResponse] = await Promise.all([
          fetch('/images/symb/home.svg'),
          fetch('/images/symb/article.svg'),
        ]);

        const [homeSvg, articleSvg] = await Promise.all([
          homeResponse.text(),
          articleResponse.text(),
        ]);

        if (!cancelled) {
          setHomeSvgMarkup(sanitizeSvgMarkup(homeSvg));
          setArticleSvgMarkup(sanitizeSvgMarkup(articleSvg));
        }
      } catch (error) {
        console.error('Erro ao carregar os SVGs da navbar:', error);
      }
    };

    loadSvgIcons();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;

      if (isHidden) {
        headerRef.current.style.transform = 'translateY(100%)';
        return;
      }

      const currentScroll = window.scrollY;
      headerRef.current.style.transform =
        currentScroll > lastScrollTop.current ? 'translateY(100%)' : 'translateY(0)';
      lastScrollTop.current = currentScroll <= 0 ? 0 : currentScroll;
    };

    if (!headerRef.current) return;

    if (isHidden) {
      headerRef.current.style.transform = 'translateY(100%)';
      lastScrollTop.current = 0;
      return;
    }

    headerRef.current.style.transform = 'translateY(0)';
    //window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHidden]);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        if (buttonScrollRef.current && buttonScrollIconRef.current) {
          buttonScrollRef.current.style.transition = 'all 300ms';
          buttonScrollIconRef.current.style.transition = 'all 210ms';
          buttonScrollRef.current.style.opacity = '1';
          buttonScrollRef.current.style.transform = 'scale(1)';

          buttonScrollIconRef.current.style.filter = 'blur(0px)';
        }
      } else if (buttonScrollRef.current && buttonScrollIconRef.current) {
        buttonScrollRef.current.style.opacity = '0';
        buttonScrollRef.current.style.transform = 'scale(1.1)';

        buttonScrollIconRef.current.style.filter = 'blur(10px)';
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
      <svg style={{ display: 'none' }}>
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
            lightingColor="white"
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

      <header
        className={styles.headerAnim}
        ref={headerRef}
        style={isHidden ? { transform: 'translateY(100%)' } : undefined}
      >
        <div className={styles.scrollButton} onClick={scrollToTop} ref={buttonScrollRef}>
          <div ref={buttonScrollIconRef}>
            <FontAwesomeIcon icon={faChevronUp} />
          </div>
        </div>
        <div className={styles.mainNavbar}>
          <div className={styles.nav}>
            <Link
              to="/home"
              className={`${styles.buttonNav} ${styles.buttonItem} ${
                activeButton === 'home' ? styles.active : ''
              }`}
            >
              <div className={`${styles.buttonText} ${activeButton === 'home' ? styles.activeTEXT : ''}`}>Home</div>
              <div
                className={`${styles.navIcon} ${activeButton === 'home' ? styles.activeSVG : ''}`}
                dangerouslySetInnerHTML={{ __html: homeSvgMarkup }}
                aria-hidden="true"
              />
            </Link>
            <div className={styles.logo}>
              <div className={styles.logoGif}>
                <img src="/images/logo/logoGif.gif" />
              </div>
              <div className={styles.logoName}>
                <img src="/images/logo/logoName.svg" />
              </div>
            </div>
            <Link
              to="/artigos"
              className={`${styles.buttonNav} ${styles.buttonItem} ${
                activeButton === 'news' ? styles.active : ''
              }`}
            >
              <div className={`${styles.buttonText} ${activeButton === 'news' ? styles.activeTEXT : ''}`}>Artigos</div>
              <div
                className={`${styles.navIcon} ${activeButton === 'news' ? styles.activeSVG : ''}`}
                dangerouslySetInnerHTML={{ __html: articleSvgMarkup }}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
