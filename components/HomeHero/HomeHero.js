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
            Passionate Engineer, Pragmatic Thinker and a Problem Solver who
            loves team-work and is inspired to find solutions by applying
            technical knowledge to real-life scenarios.
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
        <div className={styles['half-container-image']}>
          <img src="/assets/udaya.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
