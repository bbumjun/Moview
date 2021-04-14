import React, { useEffect, useState } from "react";
import MainTemplate from "templates/MainTemplate";
import Header from "components/organizms/Header";
import Footer from "components/organizms/Footer";
import CardList from "components/organizms/CardList";
import { getCurDate } from "common/utils";

const MainPage: React.FC = () => {
  const [contentType, setContentType] = useState<keyof typeof content>("movie");
  const content = {
    movie: "영화",
    tv: "TV프로그램",
  };
  const onMovieClick = () => {
    setContentType("movie");
  };
  const onTVClick = () => {
    setContentType("tv");
  };
  return (
    <MainTemplate
      header={
        <Header
          onMovieClick={onMovieClick}
          onTVClick={onTVClick}
          contentType={contentType}
        />
      }
      footer={<Footer />}
    >
      <CardList
        category={contentType}
        contentTitle={`인기있는 ${content[contentType]}`}
        params={{
          sort_by: "popularity.desc",
        }}
      />
      <CardList
        category={contentType}
        contentTitle={`높은 평점을 받은 ${content[contentType]}`}
        params={{
          sort_by: "vote_average.desc",
          "vote_count.gte": 1000,
        }}
      />
      <CardList
        category={contentType}
        contentTitle={`최근 개봉한 ${content[contentType]}`}
        params={{
          sort_by: "release_date.desc",
          "vote_count.gte": 10,
          "release_date.lte": `${getCurDate()}`,
        }}
      />
      <CardList
        category={contentType}
        contentTitle={`인기있는 한국 ${content[contentType]}`}
        params={{
          sort_by: "popularity.desc",
          with_original_language: "ko",
        }}
      />
    </MainTemplate>
  );
};

export default MainPage;
