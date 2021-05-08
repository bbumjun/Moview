import axios from "axios";
import { baseUrl, discoverUrl } from "common/url";
const apiKey = process.env.REACT_APP_TMDB_KEY;

export const fetcherWithParams = (url: string, params?: Object) =>
  axios({
    method: "get",
    baseURL: baseUrl,
    url,
    params: {
      api_key: apiKey,
      language: "ko-KR",
      ...params,
    },
  }).then((res) => res.data);
