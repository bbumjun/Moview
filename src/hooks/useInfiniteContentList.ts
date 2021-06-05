import { useSWRInfinite } from "swr";
import { IContent } from "types";
import { contentFetcher } from "common/requests";
const useInfiniteContentList = (url: string, params?: object) => {
  const getKey = (pageIndex: number, previousPageData: IContent[]) => {
    if (previousPageData && !previousPageData.length) return null;
    let paramsWithPage: { [key: string]: any } = params;
    paramsWithPage.page = pageIndex + 1;
    return [url, paramsWithPage];
  };
  const { data, size, setSize } = useSWRInfinite<IContent[]>(
    getKey,
    contentFetcher,
    {
      suspense: true,
      revalidateAll: true,
    }
  );
  let contents: IContent[] = [];
  contents = contents.concat(...data);
  return { contents, size, setSize };
};

export default useInfiniteContentList;
