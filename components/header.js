import ThemeChanger from "./themeChanger";
import Link from "next/link";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import styles from './header.module.css'

const Header = ({ home }) => {
  const name = "";//"Simon Hurley";

  return (
    <header className={styles.header}>
      <Image
        src="/images/logo.svg"
        alt="planethurley.com logo"
        width={600}
        height={100}
      />
      <ThemeChanger />
      {home ? (
        <>
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </>
      ) : (
        <>
          <Link href="/">
            <a>Home</a>
          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link href="/">
              <a className={utilStyles.colorInherit}>{name}</a>
            </Link>
          </h2>
        </>
      )}
      Playgrounds: <Link href="/playground/hooks-shop"><a>React Hooks Shop</a></Link>
    </header>
  );
};

export default Header
