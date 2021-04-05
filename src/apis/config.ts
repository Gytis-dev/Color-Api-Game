import axios from "axios";

const BASE_URL = "https://simutis.dev/api";

interface UrlParams {
  x: number;
  y: number;
  w: number;
  h: number;
}

export const handleGetApi = async (
  url: string,
  params: UrlParams
): Promise<Array<unknown>> => {
  const promise = await axios({
    method: "GET",
    params,
    url: BASE_URL + url,
  });
  return await promise.data;
};

export const handlePostApi = async (postObject: unknown): Promise<unknown> => {
  return await axios({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    url: BASE_URL + "/board",
    data: postObject,
  });
};
