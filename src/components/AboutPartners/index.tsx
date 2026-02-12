import React from 'react';
import styles from './index.module.css';

interface Partner {
  id: number | string;
  name: string;
  logo: string;
  description: string;
  link: string;
}

interface AboutPartnersCardProps {
  partners: Partner[];
}

const AboutPartnersCard: React.FC<AboutPartnersCardProps> = ({ partners }) => {
  if (!partners || partners.length === 0) {
    return null;
  }

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1 className={styles.title} style={{ fontFamily: 'Phonk' }}>parceiros</h1>
          <p>Nossos clientes ou parceiros que utilizam nossos serviços atualmente.</p>
        </div>

        <div className={styles.containerCard}>
          {partners.map((partner) => (
            <a 
              key={partner.id} 
              className={styles.card} 
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={partner.logo} alt={partner.name} className={styles.partnerImg} />
              <div className={styles.cardInfo}>
                <h3>{partner.name}</h3>
                <p>{partner.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPartnersCard;