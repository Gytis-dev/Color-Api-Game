import axios from "axios";
import { PostObject, ApiRoutes, UrlParams } from "../types/globalTypes";

const BASE_URL = "https://simutis.dev/api";

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

export const handlePostApi = async (
  postObject: PostObject
): Promise<unknown> => {
  return await axios({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    url: BASE_URL + ApiRoutes.board,
    data: postObject,
  });
};

export const boardStatus = async (): Promise<{
  maxX: number;
  maxY: number;
  minX: number;
  minY: number;
  update: number;
}> => {
  const promise = await axios({
    method: "GET",
    url: BASE_URL + ApiRoutes.board + ApiRoutes.status,
  });
  return await promise.data[0];
};
