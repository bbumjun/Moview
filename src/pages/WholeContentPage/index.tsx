import React, { Suspense } from "react";
import { useLocation } from "react-router";
import { Location } from "history";
import Template from "templates/MainTemplate";
import ErrorBoundary from "src/components/atoms/ErrorBoundary";
import Loader from "src/components/atoms/Loader";
import InfiniteContentList from "src/components/organisms/InfiniteContentList";
const WholeContentPage = () => {
  const location = useLocation<{
    params: Object;
    contentTitle: string;
    contentType: "movie" | "tv";
  }>();
  const { pathname: url } = location;
  const contentListProps = location.state;

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Template>
          <InfiniteContentList {...contentListProps} url={url} wrap />
        </Template>
      </Suspense>
    </ErrorBoundary>
  );
};

export default WholeContentPage;
