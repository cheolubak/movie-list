export type PageResponse<T> = {
  count: number;
  hasNext: boolean;
  contents: T[];
  nextPage?: number;
};
