import axios, { AxiosPromise } from "axios";
import * as url from "common/url";
import { IContent } from "types";

const apiKey = process.env.REACT_APP_TMDB_KEY;
export const fetchContentList = ({
  contentType,
  params,
}: {
  contentType: string;
  params: Object;
}): AxiosPromise<{ results: IContent[] }> =>
  axios({
    method: "get",
    baseURL: url.discoverUrl,
    url: contentType,
    params: {
      api_key: apiKey,
      language: "ko-KR",
      region: "kr",
      include_adult: false,
      ...params,
    },
  });
export const fetchContentDetail = ({
  contentType,
  id,
  params = null,
}: {
  contentType: string;
  id: string;
  params?: Object;
}) =>
  axios({
    method: "get",
    baseURL: url.baseUrl,
    url: `/${contentType}/${id}`,
    params: {
      api_key: process.env.REACT_APP_TMDB_KEY,
      language: "ko-KR",
      ...params,
    },
  });

export const fetchCastList = ({
  contentType,
  id,
}: {
  contentType: string;
  id: string;
}) =>
  axios({
    method: "get",
    baseURL: url.baseUrl,
    url: `/${contentType}/${id}/credits`,
    params: {
      api_key: process.env.REACT_APP_TMDB_KEY,
      language: "ko-KR",
    },
  });
