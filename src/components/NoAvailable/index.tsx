import { useRef, useEffect } from 'react';
import styles from './index.module.css';

const NoAvailableRef: React.FC = () => {
  const noAvailableRef = useRef<HTMLDivElement | null>(null);
  const warningTextRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const html = document.body;

    const windowWidthNoAvailable = () => {
      const sysWidth = window.innerWidth;   // ✅ corrigido

      if (sysWidth < 301) {
        if (noAvailableRef.current && warningTextRef.current) {
          warningTextRef.current.textContent =
            "Aplicação indisponível para este dispositivo.";
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
    window.addEventListener("resize", windowWidthNoAvailable);

    return () => {
      window.removeEventListener("resize", windowWidthNoAvailable);
    };
  }, []);

  return (
    <div
      className={styles.containerNoAvailable}
      ref={noAvailableRef}
      style={{ display: "none" }}
    >
      <div className={styles.containerBox}>
        <img src="/images/symb/aviso.svg" alt="Aviso" />
        <p ref={warningTextRef}>
        </p>
      </div>
    </div>
  );
};

export default NoAvailableRef;