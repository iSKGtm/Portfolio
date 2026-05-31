import React, { useState } from 'react';
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Button, IconButton, Box } from '@mui/material';

type MusicFeatureSection = {
  id: string;
  title: string;
  description: string;
  video: string;
  links: {
    label: string;
    url: string;
  }[];
  playlistNote?: boolean;
  reverse?: boolean;
  isMainVideo?: boolean;
};

const MusicFeatures: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

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

  const sections: MusicFeatureSection[] = [
    /*
    {
      id: 'main',
      title: 'iSKGtm music.',
      description:
        'Descrição',
      isMainVideo: true,
      links: [
        {
          label: 'Acesse a playlist',
          url: 'https://youtube.com/playlist?list=PL2DivU5yf-1wIXM2F8rp_GNEqpVYW3sqt'
        },
        { label: 'Mais informacoes', url: '/artigo/music' }
      ],
      playlistNote: true,
      reverse: true
    }, */
    {
      id: 'music',
      title: 'iSKGtm music.',
      description:
        'Criado em 2019, atuamos no seguimento de produções músicais originais, remixes & criação de efeitos sonoros, tanto para produções próprias e/ou "collabs", quanto clientes e parceiros que confiam no nosso trabalho.',
      video: '/videos/about/music.mp4',
      links: [
        {
          label: 'YouTube',
          url: 'https://youtube.com/@iSKGtmMusic'
        },
        { label: 'Sobre', url: '/artigo/music' }
      ],
      playlistNote: true
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

            {section.playlistNote && (
              <h4>Ouça nossas produções ou conheça um pouco mais!</h4>
            )}
          </div>

          <div
            className={styles.containerSkills}
            style={{ position: 'relative', overflow: 'hidden' }}
          >
            {section.isMainVideo ? (
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  backgroundColor: '#000'
                }}
              >
                <div
                  onClick={() => setIsPlaying(true)}
                  style={{
                    width: '100%',
                    height: '100%',
                    cursor: 'pointer',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: isPlaying ? 0 : 2,
                    opacity: isPlaying ? 0 : 1,
                    transition: 'opacity 500ms ease',
                    pointerEvents: isPlaying ? 'none' : 'auto'
                  }}
                >
                  <img
                    src="/images/news/tags/music.jpg"
                    alt="Thumbnail"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />

                  <IconButton
                    sx={(theme) => ({
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '70px',
                      height: '70px',
                      border: `2px solid white`,
                      color: 'white',
                      backgroundColor: 'rgba(0,0,0,0.2)',
                      pointerEvents: 'none',
                      '&:hover': {
                        backgroundColor: theme.palette.error.main,
                        borderColor: theme.palette.error.main,
                        color: '#fff'
                      }
                    })}
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
                      style={{
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        aspectRatio: '16/9'
                      }}
                    />
                  )}
                </div>
              </Box>
            ) : (
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
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MusicFeatures;
