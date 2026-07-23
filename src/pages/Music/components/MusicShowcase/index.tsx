import React from 'react';
import { Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faCompactDisc,
  faBriefcase,
  faHeadphones,
  faLayerGroup,
  faMusic,
  type IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css';

type MusicShowcaseItem = {
  title: string;
  description: string;
  meta?: string;
  image?: string;
};

type MusicShowcaseBlock = {
  eyebrow: string;
  title: string;
  description: string;
  icon: IconDefinition;
  items: MusicShowcaseItem[];
  gridType?: 'default' | 'process' | 'portfolio';
};

const gridClass = {
  default: styles.grid,
  process: `${styles.grid} ${styles.gridProcess}`,
  portfolio: `${styles.grid} ${styles.gridPortfolio}`,
};

const blocks: MusicShowcaseBlock[] = [
  {
    eyebrow: '',
    title: 'produção sonora.',
    description:
      'Áreas principais da iSKGtm Music para música e sons.',
    icon: faMusic,
    items: [
      {
        title: 'Remix',
        description: 'Releituras musicais com identidade própria, adaptação de ritmo, mix e master.',
        meta: ' ',
      },
      {
        title: 'Composição Original',
        description: 'Produções próprias com estrutura, timbre e identidade sonora própria.',
        meta: ' ',
      },
      {
        title: 'Sound Design',
        description: 'Criação de efeitos, texturas, transições e elementos sonoros para diferentes contextos (CoreMusic).',
        meta: ' ',
      },
    ],
  },
  {
    eyebrow: '',
    title: 'pipeline criativo.',
    description: 'Ferramentas e bases técnicas usadas para produção musical, mixagem e finalização.',
    icon: faHeadphones,
    items: [
      {
        title: 'REAPER',
        description: 'DAW para produção, organização, mixagem, remaster e finalização.',
        meta: 'DAW',
      },
      {
        title: 'iZotope RX',
        description: 'Software de manipulação, masterização e correção de ondas sonoras.',
        meta: 'Editor de áudio',
      },
      {
        title: 'Base sonora',
        description: 'Bases sonoras nomeadas: Chill Tropical, Disco Tropical, Phonk Tropical & Plug Tropical.',
        meta: 'Drumkit',
      },
    ],
  },
  {
    eyebrow: '',
    title: 'do arranjo à master.',
    description: 'Fluxo simples para explicar como uma faixa sai da ideia inicial até a publicação.',
    icon: faLayerGroup,
    gridType: 'process',
    items: [
      {
        title: 'Escolha',
        description: 'Definição da faixa, proposta, BPM, estética e direção sonora.',
        meta: ' ',
      },
      {
        title: 'Arranjo',
        description: 'Construção da estrutura, bateria, harmonia, transições e progressão.',
        meta: ' ',
      },
      {
        title: 'Produção',
        description: 'Criação de timbres, efeitos, vocal chops e elementos de identidade.',
        meta: ' ',
      },
      {
        title: 'Mix',
        description: 'Balanceamento, dinâmica, espacialidade, limpeza e presença sonora.',
        meta: ' ',
      },
      {
        title: 'Master',
        description: 'Finalização técnica para loudness, ganho, consistência e publicação.',
        meta: ' ',
      },
    ],
  },
];

const MusicShowcase: React.FC = () => {
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`);
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
    border: '1px solid var(--color-bg-blur-primary)',
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
    },
  });

  return (
    <section className={styles.section}>
      <div className={styles.featureContainer} onMouseMove={handleMouseMove}>
        <div className={styles.spotlight}></div>

        <div className={styles.featureText}>
          <h1 className={styles.featureTitle}>iSKGtm music.</h1>
          <p>
            Criado em 2019, atuamos no seguimento de produções musicais originais, remixes & criação de efeitos sonoros,
            tanto para produções próprias e/ou collabs, quanto clientes e parceiros que confiam no nosso trabalho.
          </p>

          <div className={styles.buttonsSkills}>
            <Button href="https://youtube.com/@iSKGtmMusic" target="_blank" variant="contained" sx={glassButtonStyle()}>
              YouTube
            </Button>
            <Button component={RouterLink} to="/artigo/music" variant="contained" sx={glassButtonStyle()}>
              Sobre Nós
            </Button>
          </div>
        </div>

        <div className={styles.featureMedia}>
          <video autoPlay muted loop playsInline>
            <source type="video/mp4" src="/videos/showcase/music.mp4" />
          </video>
        </div>
      </div>

      {blocks.map(({ eyebrow, title, description, icon, items, gridType = 'default' }) => (
        <div className={styles.container} onMouseMove={handleMouseMove} key={title}>
          <div className={styles.spotlight}></div>

          <header className={styles.header}>
            <span>{eyebrow}</span>
            <h2>
              <FontAwesomeIcon icon={icon} />
              {title}
            </h2>
            <p>{description}</p>
          </header>

          <div className={gridClass[gridType]}>
            {items.map((item) => (
              <article className={styles.card} key={item.title}>
                {item.image && <img src={item.image} alt="" />}
                <div className={styles.cardContent}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {item.meta && (
                    <small>
                      <FontAwesomeIcon icon={faCheck} />
                      {item.meta}
                    </small>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}

      <div className={styles.playerIntro} onMouseMove={handleMouseMove}>
        <div className={styles.spotlight}></div>

        <header className={styles.header}>
          <h2>
            <FontAwesomeIcon icon={faBriefcase} />
            experiência aplicada.
          </h2>
          <p>Explore a lista de produções abaixo, usando o mini player com prévias de músicas com links externos para versão completa.</p>
        </header>
      </div>
    </section>
  );
};

export default MusicShowcase;
