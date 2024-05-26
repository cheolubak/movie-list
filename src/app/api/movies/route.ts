import {getRequestParams} from "@/utils/requestHelper";

export async function GET(request: Request) {
  const queryString = getRequestParams(request);

  const {page} = queryString;
}