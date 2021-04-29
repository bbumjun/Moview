import { useState, useEffect } from "react";
import { IContent, IContentList } from "types";
import { getCurDate } from "common/utils";
import { fetchContentList } from "common/requests";
const topics = {
  popular: {
    sort_by: "popularity.desc",
  },
  highRating: { sort_by: "vote_average.desc", "vote_count.gte": 1000 },
  latest: {
    sort_by: "release_date.desc",
    "vote_count.gte": 10,
    "release_date.lte": `${getCurDate()}`,
  },
  koreanPopular: {
    sort_by: "popularity.desc",
    with_original_language: "ko",
  },
};
const useContentList = (contentType: string) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<IContentList[]>([]);
  const [tvs, setTVs] = useState<IContentList[]>([]);
  const [contents, setContents] = useState<IContentList[]>([]);
  const fetchAllLists = async () => {
    setLoading(true);
    try {
      const popular = await fetchContentList({
        contentType,
        params: topics.popular,
      });
      const highRating = await fetchContentList({
        contentType,
        params: topics.highRating,
      });
      const latest = await fetchContentList({
        contentType,
        params: topics.latest,
      });
      const koreanPopular = await fetchContentList({
        contentType,
        params: topics.koreanPopular,
      });
      setContents([
        popular.data.results,
        highRating.data.results,
        latest.data.results,
        koreanPopular.data.results,
      ]);
    } catch (err) {
      throw err;
    }
    setLoading(false);
  };

  useEffect(() => {
    if (
      (contentType == "movie" && !movies.length) ||
      (contentType == "tv" && !tvs.length)
    ) {
      fetchAllLists();
    }
  }, [contentType]);

  return { loading, contents };
};

export default useContentList;
