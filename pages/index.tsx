import Head from "next/head";
import React, { useState } from "react";
import Header from "../components/header/Header";
import { FlowEngine } from "../components/flow/FlowEngine/FlowEngine";
import { BlogList } from "../components/blog-list/BlogList";
import { BackgroundGradient } from "../components/BackgroundGradient";

export default function Main() {
  const [next, setNext] = useState(false);
  return (
    <>
      <BackgroundGradient />
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Head>
          <title>Помощник Гайд</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />

        <main className="flex-grow">
          <FlowEngine setNext={setNext} next={next} />
          {!next && <BlogList />}
        </main>
      </div>
    </>
  );
}
