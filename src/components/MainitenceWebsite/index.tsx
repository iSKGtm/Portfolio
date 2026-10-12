import styles from './index.module.css';

const MainitenceWebsite: React.FC = () => {
  return (
    <div className={styles.containerNotFound}>
      <img src="/images/symb/aviso.svg"/>
      <p>Estamos em manutenção. Logo estaremos de volta!</p>
    </div>
  );
};

export default MainitenceWebsite;