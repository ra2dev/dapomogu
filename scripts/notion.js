const fs = require("fs");
const path = require("path");
const { Client } = require("@notionhq/client");
const { NotionAPI } = require("notion-client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const notionAPI = new NotionAPI();
const databaseId = process.env.NOTION_DATABASE_ID;
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const getPage = async (pageId) => {
  return notion.pages.retrieve({ page_id: pageId });
};

const getDatabase = async () => {
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return response.results;
};

const getAlgoliaJson = () => {
  return getDatabase().then(async (res) => {
    const result = res.map((e) => ({
      name: (
        (((e || {}).properties || {} || {}).Name || {}).title || []
      ).reduce((acc, e) => acc + ((e || {}).plain_text || ""), ""),
      tags: ((((e || {}).properties || {} || {}).Tags || {}).multi_select || [])
        .map((e) => (e || {}).name)
        .filter(Boolean),
    }));
    fs.writeFileSync(
      path.resolve(__dirname, "./database.json"),
      JSON.stringify(result, null, 2)
    );
  });
};

const getNotionDB = async () => {
  const dbs = await getDatabase();

  const result = {};
  for (const item of dbs) {
    const page = await getPage(item.id);

    // Retrieve block children for nested blocks (one level deep), for example toggle blocks
    // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
    const recordMap = await notionAPI.getPage(
      page.url.replace("https://www.notion.so/", "")
    );
    result[item.id.replace(/-/g, "")] = {
      recordMap,
      page,
    };
  }

  fs.writeFileSync(
    path.resolve(__dirname, "../articles-meta.json"),
    JSON.stringify({ articles: result, version: new Date().getTime() }, null, 2)
  );
};

getNotionDB();
