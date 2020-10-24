import styles from './HomeHero.module.css';

const HomeHero = () => {
  return (
    <div id="home" className={styles['homeHero-container']}>
      <div className={styles['inner-container']}>
        <div className={styles['half-container']}>
          <div className={styles.title}>Hi, I'm Udaya Prakash</div>
          <div className={styles.subtitle}>
            Software Engineer | Full Stack Web Developer
          </div>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur
            pariatur doloribus.Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi!
          </div>
          <div className={styles.logoContainer}>
            <a
              href="https://www.linkedin.com/in/udaya2899"
              target="_blank"
              className={styles.miniCard}
            >
              <img src="/assets/linkedin.svg" alt="LI" />
            </a>
            <a
              href="https://github.com/udaya2899"
              target="_blank"
              className={styles.miniCard}
            >
              <img src="/assets/github.svg" alt="GH" />
            </a>
          </div>
          <a
            href="/assets/resume.pdf"
            download="Udaya Prakash N Resume"
            target="_blank"
            className={styles.button}
          >
            <img height={'30%'} src="/assets/download.svg" alt="Download" />
            <span>DOWNLOAD RÉSUMÉ</span>
          </a>
        </div>
        <div className={styles['half-container']}>2</div>
      </div>
    </div>
  );
};

export default HomeHero;