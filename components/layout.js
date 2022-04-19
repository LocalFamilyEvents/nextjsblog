import Head from "next/head";
import { useContext } from "react";

import Container from "react-bootstrap/Container"

import Header from './header'
import styles from "./layout.module.css";
import Link from "next/link";
import { ThemeContext } from "./themeContext";

export const siteTitle = "Planet Hurley";

export default function Layout({ children, home }) {
  const themeContext = useContext(ThemeContext);
  const { background } = themeContext.theme;

  return (
    <div className={styles.container} style={{ backgroundColor: background}}>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header alt={"planethurley"} home={home} />
      <main>
        <Container>
          {children}
        </Container>
      </main>

      {!home && (
          <div className={styles.backToHome}>
            <Link href="/" passHref>
              <a>← Back to home</a>
            </Link>
          </div>
      )}
    </div>
  );
}
