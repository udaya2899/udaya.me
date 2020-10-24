import styles from './header.module.css';
import Link from "next/link";

const Header = () => {
    return (
        <div className={styles.container}>
            <div >
                <Link href="/">
                    <img src="./logo.svg" className={styles.logo} alt="Udaya Logo" />
                </Link>
            </div>

            <div>
                <div>
                    <Link href="/home">
                        <div>Home</div>
                    </Link>

                    <Link href="/skills">
                        <div>Skills</div>
                    </Link>

                    <Link href="/experience">
                        <div>Experience</div>
                    </Link>
                </div>

            </div>


        </div >
    )
}

export default Header
