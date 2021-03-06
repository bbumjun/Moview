import axios from "axios";
import { baseUrl } from "common/url";
const apiKey = process.env.REACT_APP_TMDB_KEY;

export const fetcherWithParams = (url: string, params?: Object) =>
  axios({
    method: "get",
    baseURL: baseUrl,
    url,
    params: {
      api_key: apiKey,
      language: "ko-KR",
      region: "KR",
      ...params,
    },
  }).then(
    (res) => res.data,
    (err) => Promise.reject(err)
  );
export const contentFetcher = (url: string, params?: Object) =>
  axios({
    method: "get",
    baseURL: baseUrl,
    url,
    params: {
      api_key: apiKey,
      language: "ko-KR",
      region: "KR",
      ...params,
    },
  }).then(
    (res) => res.data.results,
    (err) => Promise.reject(err)
  );
