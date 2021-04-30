import axios, { AxiosResponse } from "axios";
import { baseUrl, smallImgUrl } from "common/url";
import { useState, useEffect } from "react";
import { IContentDetail, IContentList } from "types";
import { getDominantColor } from "common/utils";
import {
  fetchCastList,
  fetchContentDetail,
  fetchSimilarContents,
} from "common/requests";
import { ICastList } from "components/organizms/CastList";
interface IArgs {
  id: string;
  contentType: string;
  params?: Object;
}
const useContentDetail = (args: IArgs) => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const [bgColor, setBgColor] = useState(null);
  const [castList, setCastList] = useState(null);
  const [similarList, setSimilarList] = useState(null);
  const fetchData = async ({ id, contentType, params = null }: IArgs) => {
    try {
      setLoading(true);
      const profileResponse: AxiosResponse<IContentDetail> = await fetchContentDetail(
        {
          contentType,
          id,
          params,
        }
      );
      const castListResponse: AxiosResponse<{
        cast: ICastList;
      }> = await fetchCastList({ contentType, id });

      const dominantColor = await getDominantColor(
        smallImgUrl + profileResponse.data.backdrop_path
      );

      const similarContentsRes = await fetchSimilarContents({
        contentType,
        id,
      });
      setBgColor(dominantColor);
      setProfile(profileResponse.data);
      setCastList(castListResponse.data.cast);
      setSimilarList(similarContentsRes.data.results.slice(0, 10));
      setLoading(false);
    } catch (err) {
      throw err;
    }
  };
  useEffect(() => {
    fetchData({ ...args });
  }, [args.id]);

  return [loading, profile, bgColor, castList, similarList];
};

export default useContentDetail;
