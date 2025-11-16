import React, {useEffect, useRef } from 'react';
import styles from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const AboutFeatures: React.FC = () => {
  const buttonPlayVideoRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current && buttonPlayVideoRef.current) {
        
        buttonPlayVideoRef.current.classList.add(styles.videoFadeOut);
        
        function delayedAnim() {
          if (buttonPlayVideoRef.current) {
            buttonPlayVideoRef.current.style.display = "none";
          }

          if (videoRef.current) {
            videoRef.current.style.display = "block";
            videoRef.current.classList.add(styles.videoFadeIn);
          }
        }
        setTimeout(delayedAnim, 100);
      }
    };

    if (buttonPlayVideoRef.current) {
      buttonPlayVideoRef.current.addEventListener("click", playVideo);
    }
  }, []);

  return (
    <div className={styles.features}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1 className={styles.title}>we are in everything</h1>
          <p>Este slogam, traduzido para "Estamos em Tudo", é uma expressão que informa que estamos presentes nas diversas áreas de atuação, tais como: produção e composição sonora; produção de imagem e vídeo & desevolvimento. Estamos ativos desde Outubro de 2016.</p>
          <div className={styles.buttonsSkills}>
            <a href='/artigo/iskgtm' target='_blank' className={styles.buttonSkills}>Mais Informações</a>
          </div>
        </div>
        <div className={styles.thumb} ref={buttonPlayVideoRef}>
          <img 
            src="/images/about/institucionalThumb.jpg"
            alt="Thumbnail institucional"
          />
          <button className={styles.playButton}>
            <FontAwesomeIcon icon={faPlay} />
          </button>
        </div>
        <div className={styles.video} style={{display: 'none'}} ref={videoRef}>
          <iframe allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" src="https://www.youtube.com/embed/Yqf_Fhd-9hc" width="100%"></iframe>
        </div>
      </div>
      
      <div className={styles.container2}>
        <div className={styles.text2}>
          <h1 className={styles.title}>iSKGtm music</h1>
          <p>Produzimos faixas desde 2019, tanto para parceiros terceirizados quanto para o próprio iSKGtm, com diversos estilos e gêneros músicais, com foco EDM. </p>

          <div className={styles.buttonsSkills}>
            <a href='https://youtube.com/playlist?list=PL2DivU5yf-1wIXM2F8rp_GNEqpVYW3sqt&si=Y66NYeQN0dtEc5Aw' target='_blank' className={styles.buttonSkills}>Acesse</a>
            <a href='/artigo/music' target='_blank' className={styles.buttonSkills}>Mais Informações</a>
          </div>
          <h4>Link para playlist de produções já feitas.</h4>
        </div>

        <div className={styles.containerSkills}>
          <video autoPlay muted loop>
            <source type="video/mp4"
            src="/videos/about/music.mp4"
            />
          </video>
        </div>
      </div>

      <div className={styles.container2} id={styles.container2Rev}>
        <div className={styles.text2}>
          <h1 className={styles.title}>iSKGtm prod</h1>
          <p>Produzimos conteúdos desde 2016, tanto para terceirizados quanto para o próprio iSKGtm. Desde branding, até produções de vídeos, com efeitos VFX 2D. </p>

          <div className={styles.buttonsSkills}>
            <a href='https://youtube.com/playlist?list=PL2DivU5yf-1ygeNsR8NEPsPsZYO5DK4_L&si=vSoDsnz24s1SeU3T' target='_blank' className={styles.buttonSkills}>Acesse</a>
            <a href='/artigo/prod' target='_blank' className={styles.buttonSkills}>Mais Informações</a>
          </div>
          <h4>Link para playlist de produções já feitas.</h4>
        </div>

        <div className={styles.containerSkills}>
          <video autoPlay muted loop>
            <source type="video/mp4"
            src="/videos/about/prod.mp4"
            />
          </video>
        </div>
      </div>

      <div className={styles.container2}>
        <div className={styles.text2}>
          <h1 className={styles.title}>iSKGtm dev</h1>
          <p>Desenvolvemos web/aplic., desde 2022, tanto para parceiros terceirizados quanto para o próprio iSKGtm, com diversos estilos de páginas e design, seguindo tendências visuais. </p>

          <div className={styles.buttonsSkills}>
            <a href='/artigo/dev' target='_blank' className={styles.buttonSkills}>Mais Informações</a>
          </div>
          <h4></h4>
        </div>

        <div className={styles.containerSkills}>
          <video autoPlay muted loop>
            <source type="video/mp4"
            src="/videos/about/dev.mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default AboutFeatures;