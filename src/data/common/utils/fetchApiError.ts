export class FetchApiError extends Error {
  readonly _status: number;
  readonly _response: any;
  readonly _headers: Headers;

  constructor(url: string, status: number, response: any, headers: Headers) {
    super(`FetchApiError: ${url} | ${status}`);

    this._status = status;
    this._response = response;
    this._headers = headers;
  }

  get status() {
    return this._status;
  }

  get response() {
    return this._response;
  }

  get headers() {
    return this._headers;
  }
}

export const isFetchApiError = (error: any): error is FetchApiError => {
  return typeof error === 'object' && error instanceof FetchApiError;
};
