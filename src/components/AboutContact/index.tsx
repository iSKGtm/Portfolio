import styles from './index.module.css'

const AboutContact = () => {

  return (
    <div className={styles.contact}>
      <div className={styles.container}>

        <div className={styles.text}>
          <h1 className={styles.title}>nossos contatos</h1>
          <p>Caso queira entrar em contato, clique em um desses botões.</p>
        </div>

        <div className={styles.containerButton}>

          <a className={styles.button} href="https://discordapp.com/users/320273425035689986" target="_blank" rel="noopener noreferrer">
            Discord
          </a>

          <a className={styles.button} href="https://www.facebook.com/iskgtm/" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>

          <a className={styles.button} href="https://instagram.com/iSKGtm" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>

          <a className={styles.button} href="https://www.linkedin.com/in/iskgtm/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>

          <a className={styles.button} href="https://soundcloud.com/iSKGtm" target="_blank" rel="noopener noreferrer">
            SoundCloud
          </a>

          <a className={styles.button} href="https://open.spotify.com/artist/5jesmsqMuJ6O8GEYF1TAHe?si=ZK7cuK3-R0aWQkzmfrR5gg" target="_blank" rel="noopener noreferrer">
            Spotify
          </a>

          <a className={styles.button} href="https://x.com/iSKGtm" target="_blank" rel="noopener noreferrer">
            X
          </a>

          <a className={styles.button} href="https://youtube.com/iSKGtm" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>

          <a className={styles.button} href="https://www.youtube.com/@AnthonyMax100" target="_blank" rel="noopener noreferrer">
            YouTube (Pessoal)
          </a>

        </div>

      </div>
    </div>
  );
};

export default AboutContact;