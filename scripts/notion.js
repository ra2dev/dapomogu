const fs = require("fs");
const path = require("path");
const { Client } = require("@notionhq/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const databaseId = process.env.NOTION_DATABASE_ID;
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

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

getAlgoliaJson();
