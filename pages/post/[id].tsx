import { CollectionRow, NotionRenderer } from "react-notion-x";
import React, { useEffect, useState } from "react";
import cn from "classnames";
import { LazyImage } from "../../components/blog/LazyImage";
import { TagsRender } from "../../components/blog/TagsRender";
import { getPageDescription, getPageTitle } from "../../shared/helpers/data";
import config from "../../articles-meta.json";
import { Link } from "@nextui-org/react";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { Container } from "../../components/container/Container";
import { Comment } from "../../components/Comment";
import is from "@sindresorhus/is";
import set = is.set;

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
  const description = getPageDescription(page);
  const tags = page?.properties?.Tags?.multi_select;

  const [hasComments, setHasComments] = useState<boolean>(false);

  useEffect(() => {
    setHasComments(!!localStorage?.getItem?.("feature-toggle:has-comments"));
  }, []);

  return (
    <Container
      mainClassName={cn(
        "flex-grow main-notion-render mt-10 md:mt-20 pb-16 pl-2 pr-2",
        !bgUrl && "pt-8 md:pt-16"
      )}
      title={title}
      description={description}
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
        <div className="notion-page mb-5">
          <h1 className="mb-4 notion-title" style={{ marginBottom: "5px" }}>
            {title}
          </h1>
          <div className="flex items-start justify-between w-full mt-2 md:flex-row md:items-center">
            <p className="mt-2 text-sm text-gray-700 min-w-32 md:mt-0" />
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
        showTableOfContents={true}
      />
      <div className="notion-page mb-4">
        <hr className="mb-4 w-full" />
        <div className="flex items-start justify-between w-full mt-2 md:flex-row md:items-center">
          <p className="mt-2 text-sm text-gray-700 min-w-32 md:mt-0">
            <TagsRender tags={tags} />
          </p>
        </div>
      </div>
      {hasComments && (
        <div className="notion-page mb-4">
          <Comment />
        </div>
      )}
    </Container>
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
