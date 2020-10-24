import styles from './header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  return (
    <nav id={styles.navbar}>
      <div className={styles.navwrapper}>
        {/* Navbar logo */}
        <div className={styles.logo}>
          <Link href="/">
            <img src="./logo.svg" className={styles.logo} alt="Udaya Logo" />
          </Link>
        </div>

        {/* Navbar Links */}
        <ul id="nav-menu">
          <li className={router.asPath == '/#home' ? styles.active : ''}>
            <Link href="/#home">Home</Link>
          </li>

          <li className={router.asPath == '/#skills' ? styles.active : ''}>
            <Link href="/#skills">Skills</Link>
          </li>

          <li className={router.asPath == '/#experience' ? styles.active : ''}>
            <Link href="/#experience">Experience</Link>
          </li>
          <li className={router.asPath == '/#portfolio' ? styles.active : ''}>
            <Link href="/#portfolio">Portfolio</Link>
          </li>

          <li className={router.asPath == '/#blog' ? styles.active : ''}>
            <Link href="/#blog">Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
