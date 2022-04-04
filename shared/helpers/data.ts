export const getPageTitle = (page: any) => {
  return page?.properties?.Name?.title?.reduce(
    (acc, e) => acc + (e?.plain_text || ""),
    ""
  );
};
export const getPageDescription = (page: any) => {
  return page?.properties?.ShortDescription?.rich_text?.reduce(
    (acc, e) => acc + (e?.plain_text || ""),
    ""
  );
};
