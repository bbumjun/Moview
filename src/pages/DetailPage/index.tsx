import React, { Suspense } from "react";
import Template from "templates/DetailTemplate";
import { useParams } from "react-router-dom";
import Loader from "components/atoms/Loader";
import ErrorBoundary from "components/atoms/ErrorBoundary";

const ContentList = React.lazy(
  () => import("src/components/organisms/ContentList")
);
const Profile = React.lazy(() => import("src/components/organisms/Profile"));
const Overview = React.lazy(() => import("src/components/organisms/Overview"));
const CastList = React.lazy(() => import("src/components/organisms/CastList"));
const DetailPage: React.FC = () => {
  const { id, contentType } = useParams<{
    id: string;
    contentType: "movie" | "tv";
  }>();
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Template profile={<Profile contentType={contentType} id={id} />}>
          <Overview contentType={contentType} id={id} />
          <CastList contentType={contentType} id={id} />
          <ContentList
            contentTitle="비슷한 작품"
            contentType={contentType}
            url={`${contentType}/${id}/similar`}
            wrap={true}
            titleFontSize={1.2}
          />
        </Template>
      </Suspense>
    </ErrorBoundary>
  );
};

export default DetailPage;
