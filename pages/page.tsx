import Head from "next/head";
import React, { useState } from "react";
import Header from "../components/header/Header";
import { BackgroundGradient } from "../components/BackgroundGradient";

export default function Main() {
  return (
    <>
      <BackgroundGradient />
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Head>
          <title>Dapomogu</title>
        </Head>
        <Header />

        <main className="flex-grow">
          <div></div>
        </main>
      </div>
    </>
  );
}
