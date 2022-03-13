export const getPageTitle = (page: any) => {
  return page?.properties?.Name?.title?.reduce(
    (acc, e) => acc + (e?.plain_text || ""),
    ""
  );
};
