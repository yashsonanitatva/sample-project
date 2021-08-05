import React from "react";
import { useTranslation } from "react-i18next";
import { AppProps } from "next/app";
import Head from "next/Head";
import { ThemeProvider } from "styled-components";
import startCase from "lodash/startCase";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { useThemeToggleState } from "@components/ThemeToggle/ThemeToggle.hooks";
import { GlobalStyle } from "@theme/globalStyle";
import environment from "@lib/environment";
import RouterGlobal from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";

import "@lib/i18n/config";
import ThemeToggle from "@components/ThemeToggle";
import initInterceptors from "@lib/axios/interceptors";
import Layout from "@components/Layout";
import { store, persistentStore } from "@state/store";

RouterGlobal.events.on("routeChangeComplete", (url: string) => {
  const name = new URL(`https://whatever.com${url}`).pathname
    .split("/")
    .map((path) => startCase(path))
    .filter((value) => value !== "")
    .join(" - ")
    .trim();
});

function App({ Component, pageProps, router }: AppProps) {
  const { i18n } = useTranslation(undefined, { useSuspense: false });

  const { toggleTheme, current } = useThemeToggleState(environment.themeName);

  initInterceptors();

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
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistentStore}>
          <ThemeProvider
            theme={{ currentTheme: current }}
            key="styled-theme-provider"
          >
            <GlobalStyle key="styled-global-styles" />
            <Layout>
              <Component {...pageProps} key={router.route} />
            </Layout>
            <ThemeToggle toggleTheme={toggleTheme} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
