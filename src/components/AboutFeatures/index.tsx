import React, { useState } from 'react';
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Button, IconButton, Box } from '@mui/material';

const AboutFeatures: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Única adição: Função para rastrear o mouse
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget: target, clientX, clientY } = e;
    const rect = target.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    target.style.setProperty('--mouse-x', `${x}px`);
    target.style.setProperty('--mouse-y', `${y}px`);
  };

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
    width: '100%',
    cursor: 'default',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.12)',
      borderColor: 'rgba(255, 255, 255, 0.4)',
    }
  };

  const sections = [
    {
      id: 'main',
      title: 'we are in everything',
      description: 'Este slogan, traduzido para "Estamos em Tudo", é uma expressão que informa que estamos presentes nas diversas áreas de atuação, tais como: produção e composição sonora; produção de imagem e vídeo & desenvolvimento. Estamos ativos desde Outubro de 2016.',
      isMainVideo: true,
      links: [{ label: 'Mais Informações', url: '/artigo/iskgtm' }],
      playlistNote: false,
      reverse: true
    },
    {
      id: 'music',
      title: 'iSKGtm music',
      description: 'Produzimos faixas desde 2019, tanto para parceiros terceirizados quanto para o próprio iSKGtm, com diversos estilos e gêneros músicais, com foco EDM.',
      video: '/videos/about/music.mp4',
      links: [
        { label: 'Acesse', url: 'https://youtube.com/playlist?list=PL2DivU5yf-1wIXM2F8rp_GNEqpVYW3sqt' },
        { label: 'Mais Informações', url: '/artigo/music' }
      ],
      playlistNote: true
    },
    {
      id: 'prod',
      title: 'iSKGtm prod',
      description: 'Produzimos conteúdos desde 2016, tanto para terceirizados quanto para o próprio iSKGtm. Desde branding, até produções de vídeos, com efeitos VFX 2D.',
      video: '/videos/about/prod.mp4',
      links: [
        { label: 'Acesse', url: 'https://youtube.com/playlist?list=PL2DivU5yf-1ygeNsR8NEPsPsZYO5DK4_L' },
        { label: 'Mais Informações', url: '/artigo/prod' }
      ],
      playlistNote: true,
      reverse: true
    },
    {
      id: 'dev',
      title: 'iSKGtm dev',
      description: 'Desenvolvemos web/aplic., desde 2022, tanto para parceiros terceirizados quanto para o próprio iSKGtm, com diversos estilos de páginas e design, seguindo tendências visuais.',
      video: '/videos/about/dev.mp4',
      links: [{ label: 'Mais Informações', url: '/artigo/dev' }],
      playlistNote: false
    }
  ];

  return (
    <div className={styles.features}>
      {sections.map((section) => (
        <div 
          key={section.id} 
          className={styles.container2} 
          id={section.reverse ? styles.container2Rev : ''}
          onMouseMove={handleMouseMove} // Rastreio de mouse aqui
        >
          {/* Única adição: Camada do Spotlight */}
          <div className={styles.spotlight}></div>

          <div className={styles.text2}>
            <h1 className={styles.title} style={{ fontFamily: 'Phonk' }}>{section.title}</h1>
            <p>{section.description}</p>
            <div className={styles.buttonsSkills}>
              {section.links.map((link, index) => (
                <Button key={index} href={link.url} target='_blank' sx={glassButtonStyle}>
                  {link.label}
                </Button>
              ))}
            </div>
            {section.playlistNote && <h4>Link para playlist de produções já feitas.</h4>}
          </div>

          <div className={styles.containerSkills} style={{ position: 'relative', overflow: 'hidden' }}>
            {section.isMainVideo ? (
              <Box sx={{ width: '100%', height: '100%', position: 'relative', backgroundColor: '#000' }}>
                <div 
                  onClick={() => setIsPlaying(true)}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    cursor: 'pointer', 
                    position: 'absolute', 
                    top: 0, left: 0,
                    zIndex: isPlaying ? 0 : 2, 
                    opacity: isPlaying ? 0 : 1, 
                    transition: 'opacity 500ms ease', 
                    pointerEvents: isPlaying ? 'none' : 'auto'
                  }}
                >
                  <img 
                    src="/images/about/institucionalThumb.jpg" 
                    alt="Thumbnail" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                  <IconButton 
                    sx={{
                      position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                      border: '2px solid white', width: '70px', height: '70px', color: 'white',
                      backgroundColor: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(4px)',
                      pointerEvents: 'none'
                    }}
                  >
                    <FontAwesomeIcon icon={faPlay} />
                  </IconButton>
                </div>

                <div 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    opacity: isPlaying ? 1 : 0, 
                    transition: 'opacity 500ms ease-in',
                    zIndex: isPlaying ? 1 : 0 
                  }}
                >
                  {isPlaying && (
                    <iframe 
                      src="https://www.youtube.com/embed/Yqf_Fhd-9hc?autoplay=1" 
                      title="YouTube video"
                      allow="autoplay; encrypted-media" 
                      allowFullScreen
                      style={{ width: '100%', height: '100%', border: 'none', aspectRatio: '16/9' }}
                    />
                  )}
                </div>
              </Box>
            ) : (
              <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                <source type="video/mp4" src={section.video} />
              </video>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutFeatures;