import { useContext } from "react";
import classnames from "classnames";

import { ThemeContext, themes } from "./themeContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./themeChanger.module.css";

const ThemeChanger = () => {
  const themeContext = useContext(ThemeContext);

  const darkClassNames = classnames(styles.area, {
    [styles.active]: themeContext.theme.id === themes.dark.id,
  });

  const lightClassNames = classnames(styles.area, {
    [styles.active]: themeContext.theme.id === themes.light.id,
  });

  const handleThemeSet = (theme) => {
    if (themeContext.theme.id !== theme.id) {
      themeContext.setTheme(theme);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div
          className={darkClassNames}
          onClick={() => handleThemeSet(themes.dark)}
        >
          <FontAwesomeIcon icon={["fas", "moon"]} />
        </div>
        <div
          className={lightClassNames}
          onClick={() => handleThemeSet(themes.light)}
        >
          <FontAwesomeIcon icon={["fas", "sun"]} />
        </div>
      </div>
    </>
  );
};

export default ThemeChanger;
