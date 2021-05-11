import React, { useEffect, useState, Suspense } from "react";
import MainTemplate from "templates/MainTemplate";
import { useRecoilValue } from "recoil";
import { contentTypeState } from "store/header";
import { content } from "common/string";
import ErrorBoundary from "components/atoms/ErrorBoundary";
import { getCurDate } from "common/utils";
import Loader from "components/atoms/Loader";

const ContentList = React.lazy(
  () => import("components/organizms/ContentList")
);
const MainPage: React.FC = () => {
  const contentType = useRecoilValue(contentTypeState);
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <MainTemplate>
          <ContentList
            contentType={contentType}
            contentTitle={`인기있는 ${content[contentType]}`}
            url={`discover/${contentType}`}
            params={{
              sort_by: "popularity.desc",
            }}
          />
          <ContentList
            contentType={contentType}
            contentTitle={`높은 평점을 받은 ${content[contentType]}`}
            url={`discover/${contentType}`}
            params={{ sort_by: "vote_average.desc", "vote_count.gte": 1000 }}
          />
          <ContentList
            contentType={contentType}
            contentTitle={`최근 개봉한 ${content[contentType]}`}
            url={`discover/${contentType}`}
            params={{
              sort_by: "release_date.desc",
              "vote_count.gte": 10,
              "release_date.lte": `${getCurDate()}`,
            }}
          />
          <ContentList
            contentType={contentType}
            contentTitle={`인기있는 한국 ${content[contentType]}`}
            url={`discover/${contentType}`}
            params={{
              sort_by: "popularity.desc",
              with_original_language: "ko",
            }}
          />
        </MainTemplate>
      </Suspense>
    </ErrorBoundary>
  );
};

export default MainPage;
