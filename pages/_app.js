import Head from "next/head";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import db from "../db.json";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <title>Learn Quiz</title>
        <meta name="description" content="Learn Quiz - description...." />
        <link rel="icon" type="image/png" sizes="16x16" href="image/icon.png" />
        <title>{db.title}</title>
        <meta property="og:image" content={db.bgog} />
        <meta property="og:title" content={db.title} />
        <meta property="og:description" content={db.description} />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
