import React, { useState, useEffect } from "react";
import axios from "axios";
export type paramsType = {
  language: string;
  sort_by: string;
  with_original_language: string;
};
export interface props {
  category: string;
  params: paramsType;
  contentTitle: string;
}

interface fetchDataTypes {
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  id: number;
}
const useCardListData = ({ category, params, contentTitle }: props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  useEffect(() => {
    if (!data) {
      setLoading(true);
      axios({
        method: "get",
        baseURL: "https://api.themoviedb.org/3/discover/",
        url: category,
        params: { api_key: API_KEY, ...params },
      })
        .then(({ data }) => {
          const { results } = data;
          const cards = results.map(
            ({
              poster_path,
              release_date,
              title,
              vote_average,
              id,
            }: fetchDataTypes) => ({
              imgSrc: "https://image.tmdb.org/t/p/w500" + poster_path,
              id,
              title,
              date: release_date,
              rate: Math.round((vote_average * 10) / 2) / 10,
            })
          );
          setData(cards);
        })
        .catch((error) => setError(error))
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);
  return { data, loading, error, contentTitle };
};

export default useCardListData;
