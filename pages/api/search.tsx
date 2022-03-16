import config from "../../articles-meta.json";
import { getPageTitle } from "../../shared/helpers/data";

export default function handler(req, res) {
  let result = [];
  const query = req?.query?.query;
  if (query) {
    result = Object.entries(config.articles)
      .filter(
        ([key, page]) =>
          query === "fullquery" ||
          JSON.stringify(page?.page)
            ?.toLocaleLowerCase()
            ?.includes(query?.toLowerCase())
      )
      .map(([key, page]) => ({
        id: key,
        name: getPageTitle(page.page),
        tags: page.page?.properties?.Tags?.multi_select ?? [],
      }));
  }

  res.status(200).json({ result });
}
