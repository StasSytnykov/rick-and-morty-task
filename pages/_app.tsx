import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { NavBar } from "../components/NavBar/NavBar";
import { CharactersContextProvider } from "../context/CharactersContext";
import { EpisodesContextProvider } from "../context/EpisodesContext";
import { LocationsContextProvider } from "../context/LocationContext";
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
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <CharactersContextProvider>
        <EpisodesContextProvider>
          <LocationsContextProvider>
            <NavBar />
            {getLayout(<Component {...pageProps} />)}
          </LocationsContextProvider>
        </EpisodesContextProvider>
      </CharactersContextProvider>
    </>
  );
}
