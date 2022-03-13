import { NotionRenderer } from "react-notion-x";
import { NotionAPI } from "notion-client";
import Head from "next/head";
import React from "react";
import cn from "classnames";
import { LazyImage } from "../../components/blog/LazyImage";
import { getDatabase, getPage } from "../../lib/notion";
import Header from "../../components/Header";
import { TagsRender } from "../../components/blog/TagsRender";

const notion = new NotionAPI();

const formatPostDate = (date) => {
  try {
    if (!date) {
      return "";
    }
    return new Intl.DateTimeFormat("ru-RU", { dateStyle: "long" })
      .format(new Date(date))
      .replace("г.", "")
      .replace(".", ",");
  } catch (e) {
    return "";
  }
};

export default function Post({ recordMap, page }: any) {
  const bgUrl = page?.cover?.external?.url;

  const title = page?.properties?.Name?.title?.reduce(
    (acc, e) => acc + (e?.plain_text || ""),
    ""
  );

  const tags = page?.properties?.Tags?.multi_select;

  // pb-8 sm:pb-16
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Head>
        <title>{title}</title>
      </Head>
      <Header showBackBtn />
      <main
        className={cn(
          "flex-grow main-notion-render mt-16 md:mt-20 pb-16",
          !bgUrl && "pt-8 md:pt-16"
        )}
      >
        {bgUrl && (
          <LazyImage
            src={bgUrl}
            className="notion-page-cover mb-2 md:mb-4"
            style={{ objectPosition: "center 50%" }}
          />
        )}
        {page && (
          <div className="notion-page">
            <h1 className="mb-4 notion-title" style={{ marginBottom: "5px" }}>
              {title}
            </h1>
            <div className="flex items-start justify-between w-full mt-2 md:flex-row md:items-center">
              <p className="mt-2 text-sm text-gray-700 min-w-32 md:mt-0">
                <TagsRender tags={tags} />
              </p>
              <p
                className="ml-2 text-sm text-gray-700"
                style={{ minWidth: "180px" }}
              >
                Обновлено: {formatPostDate(page?.last_edited_time)}
              </p>
            </div>
          </div>
        )}
        <NotionRenderer
          recordMap={recordMap}
          disableHeader={true}
          fullPage={false}
          minTableOfContentsItems={2}
          showTableOfContents={true}
          darkMode={false}
        />
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
      page,
    },
    revalidate: 1,
  };
};
