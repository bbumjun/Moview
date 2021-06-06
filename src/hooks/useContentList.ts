import useSwr from "swr";
import { IContent } from "types";
import { contentFetcher } from "common/requests";
const useContentList = (url: string, params?: Object) => {
  const { data } = useSwr<IContent[]>([url, params], contentFetcher, {
    suspense: true,
  });

  return { contents: data };
};
export default useContentList;
