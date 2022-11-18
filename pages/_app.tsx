import React from "react";
// import  { useState, useEffect } from "react";
import type { ReactElement, ReactNode } from "react";
// import Router from "next/router";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactQueryDevtools } from "react-query/devtools";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles.css";
// import { Loader } from "../components/Loader/Loader";
import { NavBar } from "../components/NavBar/NavBar";

config.autoAddCss = false;

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = React.useState(() => new QueryClient());
  // const [isLoading, setIsLoading] = useState(false);
  const getLayout = Component.getLayout ?? ((page) => page);

  // useEffect(() => {
  //   Router.events.on("routeChangeStart", () => {
  //     setIsLoading(true);
  //   });
  //
  //   Router.events.on("routeChangeComplete", () => {
  //     setIsLoading(false);
  //   });
  //
  //   Router.events.on("routeChangeError", () => {
  //     setIsLoading(false);
  //   });
  // }, []);

  return (
    <>
      <NavBar />
      {getLayout(
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
          </Hydrate>
        </QueryClientProvider>
      )}
      {/*{isLoading && <Loader />}*/}
    </>
  );
}
