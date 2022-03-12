import { NotionRenderer } from "react-notion-x";
import { NotionAPI } from "notion-client";
import Head from "next/head";
import React from "react";
import { getDatabase, getPage } from "../../lib/notion";
import Header from "../../components/Header";

const notion = new NotionAPI();

export default function Post({ recordMap }) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Head>
        <title>Помощник Гайд</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header showBackBtn />
      <main className="flex-grow main-notion-render  mt-16 md:mt-20">
        <div className="relative">
          <NotionRenderer
            recordMap={recordMap}
            fullPage
            showTableOfContents
            darkMode={false}
          />
        </div>
      </main>
    </div>
  );
}

export const getStaticPaths = async () => {
  const database = await getDatabase(process.env.NOTION_DATABASE_ID);

  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const page: any = await getPage(id);

  // Retrieve block children for nested blocks (one level deep), for example toggle blocks
  // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  const recordMap = await notion.getPage(
    page.url.replace("https://www.notion.so/", "")
  );

  return {
    props: {
      recordMap,
    },
    revalidate: 1,
  };
};
