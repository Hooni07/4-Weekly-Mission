import Head from "next/head";
import Input from "@/components/Input";

export default function Home() {
  return (
    <>
      <Head>
        <title>Linkbrary</title>
      </Head>
      <Input className="testInput" />
      <h1>Main Page</h1>
    </>
  );
}
