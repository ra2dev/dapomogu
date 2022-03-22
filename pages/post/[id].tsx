import { CollectionRow, NotionRenderer } from "react-notion-x";
import Head from "next/head";
import React from "react";
import cn from "classnames";
import { LazyImage } from "../../components/blog/LazyImage";
import Header from "../../components/Header";
import { TagsRender } from "../../components/blog/TagsRender";
import { getPageTitle } from "../../shared/helpers/data";
import config from "../../articles-meta.json";
import { Link } from "@nextui-org/react";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const bgUrl = page?.cover?.external?.url;
  const title = getPageTitle(page);
  const tags = page?.properties?.Tags?.multi_select;

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main
        className={cn(
          "flex-grow main-notion-render mt-10 md:mt-20 pb-16 pl-2 pr-2",
          !bgUrl && "pt-8 md:pt-16"
        )}
      >
        <div className="notion-page">
          <Link
            color="primary"
            onClick={() => router.back()}
            className="flex items-center pl-6 pr-4 pt-2 pb-5 ml-[-15px]"
          >
            <ArrowLeftIcon className="h-5 mr-3" />
            Назад
          </Link>
        </div>
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
          components={{
            collectionRow: CollectionRow,
          }}
          minTableOfContentsItems={2}
          darkMode={false}
        />
      </main>
    </div>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: Object.keys(config?.articles || {}).map((id) => ({
      params: { id },
    })),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const { recordMap, page } = config.articles[id];

  return {
    props: {
      recordMap,
      page,
    },
    revalidate: 1,
  };
};
