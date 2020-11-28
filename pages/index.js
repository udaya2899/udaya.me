import Head from 'next/head';
import Header from '../components/header/header';
import HomeHero from '../components/HomeHero/HomeHero';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Udaya Prakash N</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main className={styles.main}>
        <div className={styles['nav-container']}>
          <Header />
        </div>

        <div className={styles['body-container']}>
          <HomeHero />
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
