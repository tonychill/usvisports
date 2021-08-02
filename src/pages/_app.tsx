import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/ui/Header";
import { Fragment } from "react";
import PageHead from "../components/layout/rfc";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <PageHead {...pageProps} />
      <Header />
      <Component {...pageProps} />
    </Fragment>
  );
}
export default MyApp;
