import React, {useEffect, useRef } from 'react';
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

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
        <hr />
        <div className={styles.footerCopy}>
            <span>© 2016-<span ref={dateRef}></span> | iShaking Creative Media, Todos os Direitos Reservados.</span><br />
        </div>
        
        <div className={styles.footerSocial}>
          <div className={styles.footerTerm}>
              <a className={styles.footerAtribution} href='/news/atribuicoes' target='_blank'>
                  Atribuições Legais
              </a>
          </div>
          <div className={styles.footerSocialIcons}>
              Siga-nos:
              <a href="https://linktr.ee/iSKGtm" target="_blank">
                <FontAwesomeIcon icon={faLink} />
              </a>
              <a href="https://www.linkedin.com/in/iskgtm/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://youtube.com/iskgtm" target="_blank">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;