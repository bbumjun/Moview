import React, { Fragment, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import Template from "templates/DetailTemplate";
import Profile from "components/organizms/Profile";
import Overview, { IOverview } from "components/organizms/Overview";
import useContentDetail from "hooks/useContentDetail";
import { useParams } from "react-router-dom";
import Loader from "components/atoms/Loader";
import CastList from "components/organizms/CastList";
import ContentList from "src/components/organizms/ContentList";

const DetailPage: React.FC = () => {
  const { id, contentType } = useParams<{
    id: string;
    contentType: "movie" | "tv";
  }>();
  const [loading, data, bgColor, castList, similarList] = useContentDetail({
    id,
    contentType,
  });
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Template profile={<Profile {...data} bgColor={bgColor} />}>
          <Overview {...data} />
          <CastList castCards={castList} />
          <ContentList
            contentTitle="비슷한 작품"
            contentType={contentType}
            contents={similarList}
            wrap={true}
            titleFontSize={1.2}
          />
        </Template>
      )}
    </Fragment>
  );
};

export default DetailPage;
