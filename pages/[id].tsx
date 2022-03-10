import { getDatabase, getPage } from "../lib/notion";
import Link from "next/link";
import { NotionRenderer } from "react-notion-x";
import { NotionAPI } from "notion-client";

const notion = new NotionAPI();

export default function Post({ recordMap }) {
  return (
    <div>
      <article>
        <section>
          <Link href="/">
            <a>← Go home</a>
          </Link>
          <br />
          <NotionRenderer recordMap={recordMap} />
        </section>
      </article>
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
    page.url.replace("https://www.notion.so/")
  );

  return {
    props: {
      recordMap,
    },
    revalidate: 1,
  };
};
