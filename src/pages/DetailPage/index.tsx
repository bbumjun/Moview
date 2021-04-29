import React, { Fragment, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import Template from "templates/DetailTemplate";
import Profile from "components/organizms/Profile";
import Overview, { IOverview } from "components/organizms/Overview";
import useContentDetail from "hooks/useContentDetail";
import { useParams } from "react-router-dom";
import Loader from "components/atoms/Loader";
import CastList from "components/organizms/CastList";
interface MatchParams {
  category: string;
  id: string;
}
const DetailPage: React.FC = () => {
  const { id, contentType } = useParams<{ id: string; contentType: string }>();
  const [loading, data, bgColor, castList] = useContentDetail({
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
        </Template>
      )}
    </Fragment>
  );
};

export default DetailPage;
