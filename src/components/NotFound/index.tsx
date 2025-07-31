import { useRef, useEffect } from 'react';
import styles from './index.module.css'
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {

    const warningTextRef = useRef<HTMLParagraphElement | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (warningTextRef.current) {
          warningTextRef.current.textContent = "Esta página não foi encontrada.";
        }
        }, []);

    return (
        <>
        <div className={styles.containerNotFound}>
            <img src="/images/symb/warning.png" />
            <p ref={warningTextRef}></p>
            <button className={styles.button} onClick={() => navigate('/home')}>Voltar</button>
        </div>
        </>
    );
    };

export default NotFound;