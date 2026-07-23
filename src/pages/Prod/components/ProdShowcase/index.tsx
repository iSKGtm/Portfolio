import React from 'react';
import { Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faCheck,
  faLayerGroup,
  faPenRuler,
  faScrewdriverWrench,
  type IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css';

type ProdShowcaseItem = {
  title: string;
  description: string;
  meta?: string;
  image?: string;
};

type ProdShowcaseBlock = {
  eyebrow: string;
  title: string;
  description: string;
  icon: IconDefinition;
  items: ProdShowcaseItem[];
  gridType?: 'default' | 'process' | 'portfolio';
};

const gridClass = {
  default: styles.grid,
  process: `${styles.grid} ${styles.gridProcess}`,
  portfolio: `${styles.grid} ${styles.gridPortfolio}`,
};

const blocks: ProdShowcaseBlock[] = [
  {
    eyebrow: '',
    title: 'produção visual.',
    description:
      'Áreas principais da iSKGtm Prod para comunicação visual, conteúdo audiovisual e acabamento de identidade.',
    icon: faScrewdriverWrench,
    items: [
      {
        title: 'Edição de vídeo',
        description: 'Cortes, ritmo, composição de cena, finalização e adaptação para diferentes formatos.',
        meta: ' ',
      },
      {
        title: 'Motion Graphics',
        description: 'Elementos animados, vinhetas, transições, textos e identidade em movimento.',
        meta: ' ',
      },
      {
        title: 'Branding',
        description: 'Construção e refinamento de identidade visual para projetos, canais e materiais digitais.',
        meta: ' ',
      },
    ],
  },
  {
    eyebrow: '',
    title: 'pipeline criativo.',
    description: 'Ferramentas para criação de vídeo, design, vetores e motion graphics.',
    icon: faPenRuler,
    items: [
      {
        title: 'DaVinci Resolve',
        description: 'Editor principal para vídeo, cor, montagem e finalização audiovisual.',
        meta: 'Edição de video',
      },
      {
        title: 'Fusion',
        description: 'Editor de composição e motion graphics dentro do fluxo do DaVinci Resolve.',
        meta: 'Edição de composição / Motion Graphics',
      },
      {
        title: 'Affinity',
        description: 'Editor de fotos e vetores para design gráfico.',
        meta: 'Edição de foto / vetor',
      },
    ],
  },
  {
    eyebrow: '',
    title: 'do conceito à entrega.',
    description: 'Fluxo simples para explicar como uma produção visual sai da ideia inicial até o material finalizado.',
    icon: faLayerGroup,
    gridType: 'process',
    items: [
      {
        title: 'Conceito',
        description: 'Definição da intenção visual, público, formato e referência de linguagem.',
        meta: ' ',
      },
      {
        title: 'Design',
        description: 'Construção de base visual, composição, cores, fontes e elementos de marca.',
        meta: ' ',
      },
      {
        title: 'Edição',
        description: 'Organização do material, ritmo, cortes e estrutura narrativa.',
        meta: ' ',
      },
      {
        title: 'Motion',
        description: 'Animações, transições e detalhes de movimento para reforçar identidade.',
        meta: ' ',
      },
      {
        title: 'Finalização',
        description: 'Exportação, revisão, adequação técnica e entrega para o canal ou cliente.',
        meta: ' ',
      },
    ],
  },
  {
    eyebrow: '',
    title: 'experiência aplicada.',
    description: '',
    icon: faBriefcase,
    gridType: 'portfolio',
    items: [
      {
        title: 'Edição audiovisual',
        description: 'Trabalhos voltados a vídeo, ritmo visual e acabamento para publicação.',
        meta: 'Pós-produção',
        image: '/images/showcase/prod1.jpg',
      },
      {
        title: 'Identidade e composição',
        description: 'Peças visuais com foco em marca, composição e leitura rápida.',
        meta: 'Branding',
        image: '/images/showcase/prod2.jpg',
      },
      {
        title: 'Motion Graphics (3D)',
        description: 'Produções de gráficos em 3D com uso da IA.',
        meta: 'Motion Graphics',
        image: '/images/showcase/prod3.jpg',
      },
    ],
  },
];

const ProdShowcase: React.FC = () => {
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
          <h1 className={styles.featureTitle}>iSKGtm prod.</h1>
          <p>
            Desde 2016, atuamos no seguimento de edição de imagem e vídeo profissional, branding & Motion Graphics,
            tanto para produções próprias, quanto para clientes e parceiros que confiam no nosso trabalho.
          </p>

          <div className={styles.buttonsSkills}>
            <Button href="https://www.youtube.com/@iSKGtmProd" target="_blank" variant="contained" sx={glassButtonStyle()}>
              YouTube
            </Button>
            <Button component={RouterLink} to="/artigo/prod" variant="contained" sx={glassButtonStyle()}>
              Sobre Nós
            </Button>
          </div>
        </div>

        <div className={styles.featureMedia}>
          <video autoPlay muted loop playsInline>
            <source type="video/mp4" src="/videos/showcase/prod.mp4" />
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
    </section>
  );
};

export default ProdShowcase;
