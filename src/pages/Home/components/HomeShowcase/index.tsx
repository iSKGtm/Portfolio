import React, { useState } from 'react';
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const HomeShowcase: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const sections = [
    {
      id: 'main',
      title: 'we are in everything.',
      description:
        'iSKGtm atua em diferentes frentes criativas e técnicas: música, produção audiovisual e desenvolvimento de software. Do conceito à entrega, com foco em identidade, qualidade e consistência.',
      isMainVideo: true,
      links: [{ label: 'Hub', url: '/hub' }, { label: 'Sobre Nós', url: '/artigo/iskgtm' }],
      playlistNote: false,
      reverse: true
    },
    {
      id: 'music',
      title: 'iSKGtm music.',
      description:
        'Faixas e sons desde 2019 para terceiros e para o próprio iSKGtm. Entregas comuns: Arranjo, sound design, mix e master (foco EDM).',
      video: '/videos/showcase/music.mp4',
      links: [
        { label: 'Saiba Mais', url: '/music' }
      ],
      playlistNote: false
    },
    {
      id: 'prod',
      title: 'iSKGtm prod.',
      description:
        'Conteúdos desde 2016: de branding a vídeos. Entregas comuns: edição, motion graphics e pacotes visuais para redes/projetos.',
      video: '/videos/showcase/prod.mp4',
      links: [
        { label: 'Saiba Mais', url: '/prod' }
      ],
      playlistNote: false,
      reverse: true
    },
    {
      id: 'dev',
      title: 'iSKGtm dev.',
      description:
        'Web e aplicações desde 2022. Entregas comuns: sites institucionais, front-ends com UI moderna e performance/SEO.',
      video: '/videos/showcase/dev.mp4',
      links: [{ label: 'Saiba Mais', url: '/dev' },
      ],
      playlistNote: false
    }
  ];

  return (
    <section className={styles.section}>
      {sections.map((section) => (
        <div
          key={section.id}
          className={`${styles.featureContainer} ${section.reverse ? styles.featureContainerRev : ''}`}
        >
          <div className={styles.featureText}>
            <h1 className={styles.featureTitle}>
              {section.title}
            </h1>
            <p>{section.description}</p>

            <div className={styles.buttonsSkills}>
              {section.links.map((link, index) => (
                link.url.startsWith('/') ? (
                  <RouterLink key={index} to={link.url} className={styles.button}>
                    {link.label}
                  </RouterLink>
                ) : (
                  <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.button}>
                    {link.label}
                  </a>
                )
              ))}
            </div>

            {section.playlistNote && (
              <h4>Acesse a playlist do nosso portfólio.</h4>
            )}
          </div>

          <div
            className={styles.featureMedia}
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
                    src="/images/about/institucionalThumb.jpg"
                    alt="Thumbnail"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />

                  <button
                    type="button"
                    className={styles.playButton}
                    aria-label="Reproduzir vídeo institucional"
                    onClick={() => setIsPlaying(true)}
                  >
                    <FontAwesomeIcon icon={faPlay} />
                  </button>
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
                      src="https://www.youtube.com/embed/h6t8WE1vV3E?autoplay=1"
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
    </section>
  );
};

export default HomeShowcase;
