import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Linkbrary</title>
        <link rel="icon" href="/functionIcon/union.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
