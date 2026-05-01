import React, {useEffect, useRef } from 'react';
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Link from '@mui/material/Link';

const Footer: React.FC = () => {
  const dateRef = useRef<HTMLDivElement | null>(null);
  const data = new Date();
  useEffect(() => {
  const copyrightYear = () => {
    if (dateRef.current) {
      dateRef.current.innerText = data.getFullYear().toString();
    }
  };

  copyrightYear();
  }, []);
  

  return (
    <footer>
      <div className={styles.footerContainer}>
        <div className={styles.footerCopy}>
            <span>© 2016-<span ref={dateRef}></span> iShaking Creative Media.</span><br />
        </div>
        
        <div className={styles.footerSocial}>
          <div className={styles.footerTerm}>
              <Link className={styles.footerAtribution} href='/artigo/atribuicoes' target='_blank'>
                  Atribuições Legais
              </Link>
          </div>
          <div className={styles.footerSocialIcons}>
              Siga-nos:
              <Link href="https://linktr.ee/iSKGtm" target="_blank">
                <FontAwesomeIcon icon={faLink} />
              </Link>
              <Link href="https://www.linkedin.com/in/iskgtm/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
              <Link href="https://youtube.com/iskgtm" target="_blank">
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;