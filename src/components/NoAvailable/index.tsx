import { useEffect, useState } from 'react';
import styles from './index.module.css';

const NoAvailableRef: React.FC = () => {
  const [isUnavailable, setIsUnavailable] = useState(false);

  useEffect(() => {
    const updateAvailability = () => {
      setIsUnavailable(window.innerWidth < 301 || window.innerHeight < 260);
    };

    updateAvailability();
    window.addEventListener('resize', updateAvailability);
    window.addEventListener('orientationchange', updateAvailability);

    return () => {
      window.removeEventListener('resize', updateAvailability);
      window.removeEventListener('orientationchange', updateAvailability);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle(styles.noAvailableLock, isUnavailable);
    document.body.classList.toggle(styles.noAvailableLock, isUnavailable);

    return () => {
      document.documentElement.classList.remove(styles.noAvailableLock);
      document.body.classList.remove(styles.noAvailableLock);
    };
  }, [isUnavailable]);

  return (
    <div
      className={`${styles.containerNoAvailable} ${
        isUnavailable ? styles.containerNoAvailableActive : ''
      }`}
      aria-hidden={!isUnavailable}
    >
      <div className={styles.containerBox}>
        <img src="/images/symb/aviso.svg" alt="Aviso" />
        <p>Aplicação indisponível para este dispositivo.</p>
      </div>
    </div>
  );
};

export default NoAvailableRef;
