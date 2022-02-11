import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

import { ThemeContext, themes } from "../components/themeContext";
import { UserContext } from "../components/userContext";
import * as ga from "../lib/ga";

import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/global.css";

library.add(fab, faCheckSquare, faCoffee, faMoon, faSun)

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouterChange = (url) => {
      ga.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouterChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouterChange);
    };
  }, [router.events]);

  const [theme, setState] = useState({ theme: themes.light });

  const setTheme = (action) => {
    setState({ ...theme, theme: action });
  };

  return (
    <UserContext.Provider value={{ firstName: "Simon" }}>
      <ThemeContext.Provider value={{...theme, setTheme}}>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};
export default App;
