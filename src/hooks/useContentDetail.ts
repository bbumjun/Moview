import useSwr from "swr";
import { IContentDetail } from "types";
import { fetcherWithParams } from "common/requests";
const useContentDetail = (contentType: "movie" | "tv", id: string) => {
  const data = useSwr<IContentDetail>(
    [`${contentType}/${id}`],
    fetcherWithParams,
    {
      suspense: true,
    }
  );
  return data;
};
export default useContentDetail;
