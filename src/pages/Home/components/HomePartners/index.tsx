import React from 'react';
import type { Partner } from '../../../../data/partners';
import styles from './index.module.css';

interface HomePartnersCardProps {
  partners: Partner[];
}

const PartnerTags: React.FC<{ partner: Partner }> = ({ partner }) => (
  <div className={styles.partnerTags}>
    {partner.music && (
      <span className={styles.partnerTag}>
        <img src="/images/symb/music.svg" alt="" />
        iSKGtm Music
      </span>
    )}
    {partner.prod && (
      <span className={styles.partnerTag}>
        <img src="/images/symb/prod.svg" alt="" />
        iSKGtm Prod
      </span>
    )}
    {partner.dev && (
      <span className={styles.partnerTag}>
        <img src="/images/symb/dev.svg" alt="" />
        iSKGtm Dev
      </span>
    )}
  </div>
);

const HomePartnersCard: React.FC<HomePartnersCardProps> = ({ partners }) => {
  const visiblePartners = partners?.filter((partner) => !partner.hide) ?? [];
  const currentPartners = visiblePartners.filter((partner) => partner.actually);
  const previousPartners = visiblePartners.filter((partner) => !partner.actually);

  if (visiblePartners.length === 0) {
    return null;
  }

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1 className={styles.title} style={{ fontFamily: 'Phonk' }}>parceiros.</h1>
          <p>Clientes e parceiros com quem já trabalhamos (e alguns que seguem ativos).</p>
        </div>
        
        {currentPartners.length > 0 && (
          <>
            <div className={styles.text}>
              <p>Parceiros atuais:</p>
            </div>

            <div className={styles.containerCard}>
              {currentPartners.map((partner) => (
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
                    <PartnerTags partner={partner} />
                  </div>
                </a>
              ))}
            </div>
          </>
        )}

        {previousPartners.length > 0 && (
          <>
            <div className={styles.text}>
              <p>Parceiros anteriores:</p>
            </div>

            <div className={styles.containerCardOld}>
              {previousPartners.map((partner) => (
                <div key={partner.id} className={styles.cardOld}>
                  <img src={partner.logo} alt={partner.name} className={styles.partnerOldImg} />
                  <div className={styles.cardOldInfo}>
                    <h3>{partner.name}</h3>
                    <p>{partner.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HomePartnersCard;
