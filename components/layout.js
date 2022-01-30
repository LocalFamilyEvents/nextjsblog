import Head from "next/head";

import Container from "react-bootstrap/Container"

import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Simon Hurley";
export const siteTitle = "Planet Hurley";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
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
      <header className={styles.header}>
        <img src="/images/logo.svg" width={600} height={100} />
        {home ? (
          <>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                Home
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>
        <Container>
          {children}
        </Container>
      </main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        style="margin:auto;background:#f1f2f3;display:block;z-index:1;position:relative"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 1000 714"
      >
        <g transform="translate(768,357) translate(-768,-357)">
          <g
            transform="translate(1192.787334653171,27.501167956159975) scale(100)"
            opacity="0.4"
          >
            <path
              d="M5.214719999999999 0 C5.214719999999999 1.2364799999999998 5.413665147867497 1.697816908728617 4.795425147867497 2.7686399999999995 S3.678183091271382 3.897839993622787 2.60736 4.516079993622787 S1.2364800000000002 5.53728 3.390606113991328e-16 5.53728 S-1.5365369087286156 5.134319993622787 -2.607359999999998 4.516079993622787 S-4.177185147867496 3.839463091271384 -4.795425147867496 2.7686400000000018 S-5.214719999999999 1.2364800000000005 -5.214719999999999 6.386190156449684e-16 S-5.413665147867497 -1.697816908728616 -4.795425147867498 -2.7686399999999987 S-3.678183091271384 -3.8978399936227857 -2.6073600000000017 -4.516079993622786 S-1.236480000000001 -5.53728 -1.0171818341973983e-15 -5.53728 S1.536536908728613 -5.134319993622788 2.607359999999996 -4.516079993622789 S4.177185147867495 -3.8394630912713845 4.795425147867495 -2.7686400000000027 S5.214719999999999 -1.2 5.2 -1.2"
              fill="#912623"
              stroke-width="0"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                dur="1000s"
                repeatCount="indefinite"
                values="0;1160"
              ></animateTransform>
            </path>
          </g>
          <g
            transform="translate(1277.7448015838054,-38.39859845260804) scale(100)"
            opacity="0.2"
          >
            <path
              d="M6.257663999999999 0 C6.257663999999999 1.48 6.4 2 6 3 S4.41381970952566 4.677407992347344 3.1288320000000005 5.419295992347345 S1.4837760000000002 6.644735999999999 4.068727336789593e-16 6.644735999999999 S-1.843844290474339 6.161183992347345 -3.1288319999999983 5.419295992347346 S-5.012622177440994 4.6073557095256605 -5.754510177440994 3.3223680000000018 S-6.257663999999999 1.4837760000000004 -6.257663999999999 7.663428187739622e-16 S-6.496398177440995 -2.0373802904743386 -5.754510177440996 -3.3223679999999978 S-4.4138197095256615 -4.6774079923473435 -3.1288320000000023 -5.419295992347344 S-1.4837760000000009 -6.644735999999999 -1.2206182010368778e-15 -6.644735999999999 S1.843844290474336 -6.161183992347346 3.1288319999999956 -5.419295992347347 S5.012622177440993 -4.607355709525661 5.754510177440993 -3.3223680000000027 S6.257663999999999 -1.4837760000000013 6.257663999999999 -1.5326856375479243e-15"
              fill="#8da573"
              stroke-width="0"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                dur="500s"
                repeatCount="indefinite"
                values="0;60"
              ></animateTransform>
            </path>
          </g>
          <g
            transform="translate(1481.6427222173274,-196.55803783365127) scale(100)"
            opacity="0.2">
            <path
              d="M8.760729599999998 0 C8.760729599999998 2.0772863999999993 9.094957448417393 2.852332406664076 8.056314248417394 4.651315199999998 S6.179347593335922 6.548371189286281 4.3803648 7.587014389286281 S2.0772863999999998 9.302630399999998 5.696218271505429e-16 9.302630399999998 S-2.5813820066640747 8.62565758928628 -4.380364799999997 7.587014389286282 S-7.01767104841739 6.450297993335924 -8.05631424841739 4.651315200000002 S-8.760729599999998 2.0772864 -8.760729599999998 1.072879946283547e-15 S-9.094957448417393 -2.8523324066640736 -8.056314248417394 -4.651315199999996 S-6.179347593335924 -6.54837118928628 -4.380364800000002 -7.5870143892862805 S-2.077286400000001 -9.302630399999998 -1.7088654814516288e-15 -9.302630399999998 S2.5813820066640694 -8.625657589286284 4.380364799999993 -7.587014389286285 S7.017671048417389 -6.4502979933359255 8.05631424841739 -4.6513152000000035 S8.760729599999998 -2.0772864000000015 8.760729599999998 -2.145759892567094e-15"
              fill="#f0f5f6"
              stroke-width="0">
              <animateTransform
                attributeName="transform"
                type="rotate"
                dur="300s"
                repeatCount="indefinite"
                values="0;60"
              ></animateTransform>
            </path>
          </g>
        </g>
      </svg> */}
    </div>
  );
}
