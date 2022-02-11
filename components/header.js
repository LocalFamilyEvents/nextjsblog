import ThemeChanger from "./themeChanger";

import utilStyles from "../styles/utils.module.css";
import styles from './header.module.css'

const Header = ({ home }) => {
  const name = "Simon Hurley";

  return (
    <header className={styles.header}>
      <img src="/images/logo.svg" width={600} height={100} />
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
    </header>
  );
};

export default Header