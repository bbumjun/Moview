import useSwr from "swr";
import { IContent } from "types";
import { fetcherWithParams } from "common/requests";
const useContentList = (url: string, params: Object) => {
  const { data } = useSwr<{ results: IContent[] }>(
    [url, params],
    fetcherWithParams,
    {
      suspense: true,
    }
  );

  return { contents: data.results };
};
export default useContentList;
