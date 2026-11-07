import styles from './index.module.css';

const HomeContact = () => {
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
          <h1 className={styles.title} style={{ fontFamily: 'Phonk' }}>
            contatos.
          </h1>
          <p>Escolha área para seguir ou entrar em contato. Para orçamentos ou parcerias, use Geral.</p>
        </div>

        <div className={styles.categoriesWrapper}>
          {categories.map((cat, idx) => (
            <div key={idx} className={styles.categoryGroup}>
              <h3 className={styles.categoryTitle}>{cat.title}</h3>

              <div className={styles.containerButton}>
                {cat.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.button}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
