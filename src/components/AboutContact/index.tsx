import React from 'react';
import { Button } from '@mui/material';
import styles from './index.module.css';

const AboutContact = () => {
  const glassButtonStyle = {
    borderRadius: '100px',
    color: '#fff',
    textTransform: 'none',
    fontFamily: 'inherit',
    fontWeight: 500,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    boxShadow: 'inset 0 5px 10px -3px rgba(255, 255, 255, 0.2)',
    transition: 'all 0.2s ease-in-out',
    padding: '10px 25px',
    fontSize: '18px',
    cursor: "default",
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.12)',
      borderColor: 'rgba(255, 255, 255, 0.4)',
    }
  };

  const categories = [
      {
      title: "Geral",
      links: [
        { name: "Discord", url: "https://discordapp.com/users/320273425035689986" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/iskgtm/" },
        { name: "YouTube", url: "https://youtube.com/iSKGtm" },
      ]
    },
    {
      title: "iSKGtm Music",
      links: [
        { name: "SoundCloud", url: "https://soundcloud.com/iSKGtm" },
        { name: "Spotify", url: "https://open.spotify.com/artist/5jesmsqMuJ6O8GEYF1TAHe?si=ZK7cuK3-R0aWQkzmfrR5gg" },
        { name: "YouTube", url: "https://www.youtube.com/@iSKGtmMusic" },
      ]
    },
    {
      title: "iSKGtm Prod",
      links: [
        { name: "YouTube", url: "https://www.youtube.com/@iSKGtmProd" },
      ]
    },
    {
      title: "Pessoal",
      links: [
        { name: "Facebook", url: "https://www.facebook.com/iskgtm/" },
        { name: "Instagram", url: "https://instagram.com/iSKGtm" },
        { name: "X", url: "https://x.com/iSKGtm" },
        { name: "YouTube", url: "https://www.youtube.com/@AnthonyMax100" },
      ]
    }
  ];

  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1 className={styles.title} style={{ fontFamily: 'Phonk' }}>contatos</h1>
          <p>Selecione a área desejada para entrar em contato.</p>
        </div>

        <div className={styles.categoriesWrapper}>
          {categories.map((cat, idx) => (
            <div key={idx} className={styles.categoryGroup}>
              <h3 className={styles.categoryTitle}>{cat.title}</h3>
              <div className={styles.containerButton}>
                {cat.links.map((link) => (
                  <Button
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={glassButtonStyle}
                  >
                    {link.name}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutContact;