export const getRequestParams = (params: Request) => {
  const url = new URL(params.url);
  return Object.fromEntries(url.searchParams.entries());
};
