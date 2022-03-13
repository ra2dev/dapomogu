import Head from "next/head";
import Header from "../components/Header";
import React from "react";
import { FlowEngine } from "../components/flow/FlowEngine/FlowEngine";
import { useRouter } from "next/router";

export default function Main() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Head>
        <title>Помощник Гайд</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-grow">
        <FlowEngine />
      </main>
    </div>
  );
}
