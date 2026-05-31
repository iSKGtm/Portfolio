import React from 'react';
import styles from './index.module.css';
import { Button } from '@mui/material';

type ProdFeatureSection = {
  id: string;
  title: string;
  description: string;
  video: string;
  links: {
    label: string;
    url: string;
  }[];
  note?: string;
  reverse?: boolean;
};

const ProdFeatures: React.FC = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget: target, clientX, clientY } = e;
    const rect = target.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    target.style.setProperty('--mouse-x', `${x}px`);
    target.style.setProperty('--mouse-y', `${y}px`);
  };

  const glassButtonStyle = () => ({
    borderRadius: '100px',
    textTransform: 'none',
    fontFamily: 'inherit',
    fontWeight: 500,
    width: '100%',
    cursor: 'default',
    fontSize: '1rem',
    color: 'var(--color-text-primary)',
    backgroundColor: 'var(--color-bg-blur-primary)',
    border: `1px solid var(--color-bg-blur-primary)`,
    boxShadow: 'inset 0 5px 10px -3px #00000030, 0px 0px 20px #00000015',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      backgroundColor: 'var(--color-bg-blur-primary-hover)',
      border: '1px solid var(--color-bg-blur-primary-hover)',
      boxShadow: 'inset 0 5px 10px -3px #00000030, 0px 0px 20px #00000015',
      color: 'var(--color-text-primary)',
    },
    '&:active': {
      transform: 'scale(0.96)',
    }
  });

  const sections: ProdFeatureSection[] = [
    {
      id: 'prod',
      title: 'iSKGtm prod.',
      description:
        'Desde 2016, atuamos no seguimento de edição de imagem e vídeo profissional, branding & Motion Graphics, tanto para produções próprias, quanto para clientes e parceiros que confiam no nosso trabalho.',
      video: '/videos/about/prod.mp4',
      links: [
        {
          label: 'YouTube',
          url: 'https://www.youtube.com/@iSKGtmProd'
        },
        { label: 'Sobre', url: '/artigo/prod' }
      ],
      note: ''
    }
  ];

  return (
    <div className={styles.features}>
      {sections.map((section) => (
        <div
          key={section.id}
          className={`${styles.container2} ${section.reverse ? styles.container2Rev : ''}`}
          onMouseMove={handleMouseMove}
        >
          <div className={styles.spotlight}></div>

          <div className={styles.text2}>
            <h1 className={styles.title} style={{ fontFamily: 'Phonk' }}>
              {section.title}
            </h1>
            <p>{section.description}</p>

            <div className={styles.buttonsSkills}>
              {section.links.map((link, index) => (
                <Button
                  key={index}
                  href={link.url}
                  target="_blank"
                  variant="contained"
                  sx={glassButtonStyle()}
                >
                  {link.label}
                </Button>
              ))}
            </div>

            {section.note && (
              <h4>{section.note}</h4>
            )}
          </div>

          <div
            className={styles.containerSkills}
            style={{ position: 'relative', overflow: 'hidden' }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            >
              <source type="video/mp4" src={section.video} />
            </video>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProdFeatures;
