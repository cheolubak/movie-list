export const getRequestParams = <T>(params: Request) => {
  const url = new URL(params.url);
  return Object.fromEntries(url.searchParams.entries()) as T;
};
