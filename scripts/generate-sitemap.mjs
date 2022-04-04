import { writeFileSync, readFileSync } from "fs";
import path from "path";
import prettier from "prettier";

const getArticlesIds = () => {
  return Object.keys(
    JSON.parse(readFileSync(path.resolve("./articles-meta.json"))).articles
  );
};
async function generate() {
  const articleIds = getArticlesIds();

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>https://www.dapomogu.com/</loc>
            <changefreq>daily</changefreq>
            <priority>0.3</priority>
        </url>
        <url>
            <loc>https://www.dapomogu.com/</loc>
            <changefreq>daily</changefreq>
            <priority>0.3</priority>
        </url>
        ${articleIds
          .map((id) => {
            return `
              <url>
                  <loc>${`https://www.dapomogu.com/post/${id}`}</loc>
              </url>
            `;
          })
          .join("")}
    </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    parser: "html",
  });

  writeFileSync("public/sitemap.xml", formatted);
}

generate();
