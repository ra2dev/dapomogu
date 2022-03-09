const fs = require('fs');
const path = require('path');
const { Client }  = require( "@notionhq/client");
require('dotenv').config({path: path.resolve(__dirname, '../.env')})

const databaseId = process.env.NOTION_DATABASE_ID
const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

const getDatabase = async () => {
    const response = await notion.databases.query({
        database_id: databaseId,
    });
    return response.results;
};


const getBlocks = async (blockId) => {
    const blocks = [];
    let cursor;
    while (true) {
        const { results, next_cursor } = await notion.blocks.children.list({
            start_cursor: cursor,
            block_id: blockId,
        });
        blocks.push(...results);
        if (!next_cursor) {
            break;
        }
        cursor = next_cursor;
    }
    return blocks;
};

getDatabase().then(async e => {

    const response = await getBlocks(e[0].id);
    fs.writeFileSync(path.resolve(__dirname, './database.json'), JSON.stringify(response, null, 2));
})