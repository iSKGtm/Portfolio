import React from 'react'
import styles from './index.module.css'

interface AboutPartnersCardProps {
  partners: Partner[]
}

const AboutPartnersCard: React.FC<AboutPartnersCardProps> = ({ partners }) => {
  if (!partners || partners.length === 0) {
    return console.log('Nenhuma parceria disponível.')
  }

  return (
    <div className={styles.container}>

      <div className={styles.text}>
        <h1 className={styles.title}>parceiros</h1>
        <p>Nossos parceiros ou parceiros que utilizam nossos serviços, atualmente.</p>
      </div>

      <div className={styles.containerCard}>
        {partners.map((partner: Partner) => (
          <a key={partner.id} className={styles.card} href={partner.link}
              target="_blank"
              rel="noopener noreferrer">
            <img src={partner.logo} alt={partner.name} />
            <h3>{partner.name}</h3>
            <p>{partner.description}</p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default AboutPartnersCard
