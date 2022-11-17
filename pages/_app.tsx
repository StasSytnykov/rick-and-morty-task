import type { AppProps } from "next/app";
import Router from "next/router";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { Loader } from "../components/Loader/Loader";
import { NavBar } from "../components/NavBar/NavBar";
import { CharactersContextProvider } from "../context/CharactersContext";
import "../styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [isLoading, setIsLoading] = useState(false);
  const getLayout = Component.getLayout ?? ((page) => page);

  useEffect(() => {
    Router.events.on("routeChangeStart", () => {
      setIsLoading(true);
    });

    Router.events.on("routeChangeComplete", () => {
      setIsLoading(false);
    });

    Router.events.on("routeChangeError", () => {
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <CharactersContextProvider>
        <NavBar />
        {getLayout(<Component {...pageProps} />)}
        {isLoading && <Loader />}
      </CharactersContextProvider>
    </>
  );
}
