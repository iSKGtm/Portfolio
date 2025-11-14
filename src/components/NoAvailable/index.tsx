import { useRef, useEffect } from 'react';
import styles from './index.module.css'

const NoAvailableRef: React.FC = () => {
  const noAvailableRef = useRef<HTMLDivElement | null>(null);
  const warningTextRef = useRef<HTMLParagraphElement | null>(null);

  let html = document.body;

  useEffect(() => {
    const windowWidthNoAvailable = () => {
      const sysWidth = window.outerHeight;
      const sysHeight = window.outerHeight;

      if(sysWidth < 600 || sysHeight < 150) {

        if (noAvailableRef.current && warningTextRef.current) {
          warningTextRef.current.textContent = "Esta aplicação não está disponível para este dispositivo.";
          noAvailableRef.current.style.display = "flex";
          html.style.overflowY = "hidden";
        }

      } else {

        if (noAvailableRef.current && warningTextRef.current) {
          warningTextRef.current.textContent = "";
          noAvailableRef.current.style.display = "none";
          html.style.overflowY = "auto";
        }
      }

    };

    windowWidthNoAvailable();
    addEventListener("resize", windowWidthNoAvailable);
  }, []);

  return (
  <> 
    <div className={styles.containerNoAvailable} ref={noAvailableRef}>
      <img src="/images/symb/warning.png" />
      <p ref={warningTextRef}></p>
    </div>
  </>
  );
};

export default NoAvailableRef;