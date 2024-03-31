import "@/styles/global.css";
import type { AppProps } from "next/app";
import axios from "@/lib/axios";
import Head from "next/head";
import Header from "@/components/HeaderBottom/Header";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState(null);

  const handleLoad = async () => {
    const user = await axios.get("/sample/user");
    setUser(user.data);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <Head>
        <title>Linkbrary</title>
        <link rel="icon" href="/image/logo.png" />
      </Head>
      <Header user={user} />
      <Component {...pageProps} />
    </>
  );
}
