import React from 'react';
import { Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faCheck,
  faCode,
  faFileLines,
  faGaugeHigh,
  type IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css';

type DevShowcaseItem = {
  title: string;
  description: string;
  meta?: string;
  image?: string;
};

type DevShowcaseBlock = {
  eyebrow: string;
  title: string;
  description: string;
  icon: IconDefinition;
  items: DevShowcaseItem[];
  gridType?: 'default' | 'process' | 'portfolio';
};

const gridClass = {
  default: styles.grid,
  process: `${styles.grid} ${styles.gridProcess}`,
  portfolio: `${styles.grid} ${styles.gridPortfolio}`,
};

const blocks: DevShowcaseBlock[] = [
  {
    eyebrow: '',
    title: 'desenvolvimento web.',
    description:
      'Áreas principais da iSKGtm Dev para criação de websites, interfaces, aplicações e experiências digitais.',
    icon: faCode,
    items: [
      {
        title: 'Front-end',
        description: 'Construção de telas, componentes, navegação, estados visuais e estrutura responsiva.',
        meta: ' ',
      },
      {
        title: 'Software Engineer',
        description: 'Organização técnica, documentação e metodologia própria para reduzir custo de manutenção (CoreCycle, XP).',
        meta: ' ',
      },
      {
        title: 'UI/UX',
        description: 'Hierarquia visual, consistência de layout, leitura de interface e experiência de uso.',
        meta: ' ',
      },
    ],
  },
  {
    eyebrow: '',
    title: 'pipeline criativo.',
    description: 'Ferramentas e tecnologias para criação de interfaces, aplicações e sistemas web.',
    icon: faGaugeHigh,
    items: [
      {
        title: 'React TypeScript',
        description: 'Base atual para construção de páginas, componentes reutilizáveis e interfaces modernas.',
        meta: 'Biblioteca',
      },
      {
        title: 'Vite / NPM',
        description: 'Ambiente de desenvolvimento, build, dependências e organização do fluxo de projeto.',
        meta: 'Ferramentas de produção',
      },
      {
        title: 'HTML, CSS & JS',
        description: 'Estrutura, responsividade, animações e acabamento visual consistente.',
        meta: 'WEB UI',
      },
    ],
  },
  {
    eyebrow: '',
    title: 'da ideia à entrega.',
    description: 'Fluxo simples para explicar como uma solução web sai do conceito inicial até a publicação.',
    icon: faFileLines,
    gridType: 'process',
    items: [
      {
        title: 'Conceito',
        description: 'Definição da proposta, público, escopo, fluxo principal e objetivo da interface.',
        meta: ' ',
      },
      {
        title: 'Design',
        description: 'Construção de layout, hierarquia visual, responsividade e consistência com a identidade.',
        meta: ' ',
      },
      {
        title: 'Codificação',
        description: 'Implementação com componentes, estilos, interações e organização técnica do projeto.',
        meta: ' ',
      },
      {
        title: 'Teste e Implantação',
        description: 'Debug de código, tanto manual quanto automatizado, deploy da aplicação e teste com usuários.',
        meta: ' ',
      },
      {
        title: 'Entrega',
        description: 'Revisão, validação, documentação e publicação do material final.',
        meta: ' ',
      },
    ],
  },
    {
    eyebrow: '',
    title: 'experiência aplicada.',
    description: 'Projetos, estudos e interfaces desenvolvidas e tecnologia usada.',
    icon: faBriefcase,
    gridType: 'portfolio',
    items: [
      {
        title: 'Interface GAZAGO',
        description: 'Interface de uma dashboard de gestão de combustiveis, baseado em ReactTS.',
        meta: 'UI/UX',
        image: '/images/showcase/dev1.jpg',
      },
      {
        title: 'Interface um jogo em Roleplay',
        description: 'Demonstração de código do jogo SA:MP, para Roleplay (2023).',
        meta: 'Node.js',
        image: '/images/showcase/dev3.jpg',
      },
      {
        title: 'iSKGtm Hub',
        description: 'Demonstração de código deste website (2024).',
        meta: 'React TS / Vite',
        image: '/images/showcase/dev2.jpg',
      },
    ],
  },
];

const DevShowcase: React.FC = () => {
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
          <h1 className={styles.featureTitle}>iSKGtm dev.</h1>
          <p>
            Desde 2022, atuamos no seguimento de tecnologia, envolvendo a construção de websites, interfaces com foco em
            experiencia do usuário, performance, tanto para produções próprias, quanto para clientes e parceiros que
            confiam no nosso trabalho.
          </p>

          <div className={styles.buttonsSkills}>
            <Button href="/pdf/curriculo.pdf" target="_blank" variant="contained" sx={glassButtonStyle()}>
              Currículo
            </Button>
            <Button component={RouterLink} to="/artigo/dev" variant="contained" sx={glassButtonStyle()}>
              Sobre Nós
            </Button>
          </div>
        </div>

        <div className={styles.featureMedia}>
          <video autoPlay muted loop playsInline>
            <source type="video/mp4" src="/videos/about/dev.mp4" />
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

export default DevShowcase;
