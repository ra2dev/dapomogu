import Head from "next/head";
import Header from "../components/Header";
import HeroHome from "../components/HeroHome";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Head>
        <title>Notion Next.js blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-grow">
        <HeroHome />
      </main>
    </div>
  );
}
