import axios, { AxiosResponse } from "axios";
import { baseUrl, smallImgUrl } from "common/url";
import { useState, useEffect } from "react";
import { IContentDetail } from "types";
import { getDominantColor } from "common/utils";
interface IArgs {
  id: string;
  category: string;
  params?: Object;
}
const useContentDetail = (args: IArgs) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [bgColor, setBgColor] = useState(null);

  const fetchData = async ({ id, category, params = null }: IArgs) => {
    try {
      const response: AxiosResponse<IContentDetail> = await axios({
        method: "get",
        baseURL: baseUrl,
        url: `/${category}/${id}`,
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
          language: "ko-KR",
          ...params,
        },
      });

      const dominantColor = await getDominantColor(
        smallImgUrl + response.data.backdrop_path
      );
      setBgColor(dominantColor);
      setData(response.data);
      setLoading(false);
    } catch (err) {
      throw err;
    }
  };
  useEffect(() => {
    fetchData({ ...args });
  }, []);

  return [loading, data, bgColor];
};

export default useContentDetail;
