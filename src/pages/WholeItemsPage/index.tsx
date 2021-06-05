import React, { Suspense } from "react";
import { useLocation } from "react-router";
import { Location } from "history";
import useContentList from "hooks/useContentList";
import Template from "templates/MainTemplate";
import ContentList from "src/components/organizms/ContentList";
import ErrorBoundary from "src/components/atoms/ErrorBoundary";
import Loader from "src/components/atoms/Loader";
const WholeItemsPage = () => {
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
          <ContentList {...contentListProps} url={url} wrap />
        </Template>
      </Suspense>
    </ErrorBoundary>
  );
};

export default WholeItemsPage;
