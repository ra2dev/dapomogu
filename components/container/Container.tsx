import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { BackgroundGradient } from "../BackgroundGradient";
import Header from "../header/Header";

export const Container = ({
  children,
  hasOverlay,
  mainClassName,
  ...customMeta
}: any) => {
  const router = useRouter();
  const meta = {
    image: "https://dapomogu.com/main-preview.png",
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title ?? "Dapomogu – гайды поиска/оказания помощи"}</title>
        <meta name="robots" content="follow, index" />
        <meta
          content={
            meta.description ??
            "Информационный гайд по поиску и оказанию помощи, постарадавшим от войны"
          }
          name="description"
        />
        <meta
          property="og:url"
          content={`https://www.dapomogu.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://www.dapomogu.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Dapomogu" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <>
        {hasOverlay && <BackgroundGradient />}
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          <main className={mainClassName ?? "flex-grow"}>{children}</main>
        </div>
      </>
    </>
  );
};
