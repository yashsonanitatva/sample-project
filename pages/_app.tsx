import React from "react";
import { useTranslation } from "react-i18next";
import { AppProps } from "next/app";
import Head from "next/Head";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "@theme/globalStyle";
import environment from "@lib/environment";
import 'bootstrap/dist/css/bootstrap.min.css';

import "@lib/i18n/config";

// Prevent font-flickering: https://github.com/styled-components/styled-components/issues/2900
import "@theme/globalFonts.css";

function App({ Component, pageProps, router }: AppProps) {
  const { i18n } = useTranslation(undefined, { useSuspense: false });

  const current = environment.themeName;

  return (
    <>
      <Head key="head-tag">
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, maximum-scale=5, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta httpEquiv="content-language" content={i18n.language} />
        <title>{"Sample Project"}</title>
      </Head>

      <ThemeProvider
        theme={{ currentTheme: current }}
        key="styled-theme-provider"
      >
        <GlobalStyle key="styled-global-styles" />
        <Component {...pageProps} key={router.route} />
      </ThemeProvider>
    </>
  );
}

export default App;
