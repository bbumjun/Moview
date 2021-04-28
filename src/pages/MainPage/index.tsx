import React, { useEffect, useState } from "react";
import MainTemplate from "templates/MainTemplate";
import ContentList from "components/organizms/ContentList";
import { useRecoilValue } from "recoil";
import { contentTypeState } from "store/header";
import { content } from "common/string";
import useContentList from "hooks/useContentList";
import Loader from "src/components/atoms/Loader";
const MainPage: React.FC = () => {
  const contentType = useRecoilValue(contentTypeState);
  const { loading, contents } = useContentList(contentType);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <MainTemplate>
          <ContentList
            contentType={contentType}
            contentTitle={`인기있는 ${content[contentType]}`}
            contents={contents[0]}
          />
          <ContentList
            contentType={contentType}
            contentTitle={`높은 평점을 받은 ${content[contentType]}`}
            contents={contents[1]}
          />
          <ContentList
            contentType={contentType}
            contentTitle={`최근 개봉한 ${content[contentType]}`}
            contents={contents[2]}
          />
          <ContentList
            contentType={contentType}
            contentTitle={`인기있는 한국 ${content[contentType]}`}
            contents={contents[3]}
          />
        </MainTemplate>
      )}
    </>
  );
};

export default MainPage;
