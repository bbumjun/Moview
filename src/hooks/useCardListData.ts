import React, { useState, useEffect } from "react";
import axios from "axios";
import { CardProps } from "components/molcules/Card";
export type paramsType = {
  // language: string;
  sort_by?: string;
  with_original_language?: string;
  page?: number;
  "release_date.lte"?: string;
  "vote_count.gte"?: number;
};
export interface props {
  category: string;
  params: paramsType;
}

interface fetchDataTypes {
  poster_path: string;
  release_date?: string;
  first_air_date?: string;
  title?: string;
  name?: string;
  vote_average: number;
  vote_count: number;
  id: number;
}
const useCardListData = ({ category, params }: props) => {
  const [data, setData] = useState<CardProps[]>(null);
  const [loading, setLoading] = useState(false);
  const API_KEY = process.env.REACT_APP_TMDB_KEY;

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    axios({
      method: "get",
      baseURL: "https://api.themoviedb.org/3/discover/",
      url: category,
      params: {
        api_key: API_KEY,
        language: "ko-KR",
        region: "kr",
        include_adult: false,
        ...params,
      },
    })
      .then(({ data }) => {
        if (data && mounted) {
          const { results } = data;
          const cards = results.map(
            ({
              poster_path,
              release_date,
              first_air_date,
              title,
              name,
              vote_average,
              vote_count: voteCount,
              id,
            }: fetchDataTypes) => ({
              imgSrc: "https://image.tmdb.org/t/p/w500" + poster_path,
              id,
              title: title ?? name,
              date: release_date ?? first_air_date,
              rate: (Math.round((vote_average * 10) / 2) / 10).toFixed(1),
              voteCount,
            })
          );
          setData(cards);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        if (mounted) {
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, [category]);
  return { data, loading };
};

export default useCardListData;
