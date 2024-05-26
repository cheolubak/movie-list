export type ResultResponse<T> = {
  status: 'ok' | string;
  status_message: string;
  data: T;
}