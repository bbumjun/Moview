import React from "react";
import ContentCard from "src/components/molecules/ContentCard";
import CardList from "src/components/molecules/CardList";
import { getSmallImgUrl } from "common/url";
import { getHalfAndRounded } from "common/utils";
import useContentList from "hooks/useContentList";
import Link from "src/components/atoms/Link";
export interface ContentListProps {
  contentTitle: string;
  contentType: "movie" | "tv";
  url: string;
  params?: Object;
  wrap?: boolean;
  titleFontSize?: number;
  numberPerLine?: number;
}

const ContentList: React.FC<ContentListProps> = ({
  contentTitle,
  contentType,
  params = null,
  url,
  wrap = false,
  titleFontSize = 1.5,
  numberPerLine = 5,
}) => {
  const { contents } = useContentList(url, params);
  const viewWholeItemsButton = (
    <Link
      to={{
        pathname: url,
        state: { params, contentTitle, contentType },
      }}
      padding="0.5rem"
    >
      더 보기
    </Link>
  );
  return (
    <CardList
      contentTitle={contentTitle}
      wrap={wrap}
      titleFontSize={titleFontSize}
      viewWholeItemsButton={viewWholeItemsButton}
      items={
        contents.length === 0
          ? "아직 등록된 작품이 없어요."
          : contents.map((content, index) => {
              const title = content.title ?? content.name;
              const imgSrc = getSmallImgUrl(content.poster_path);
              const date = content.release_date ?? content.first_air_date;
              const rate = getHalfAndRounded(content.vote_average);
              const voteCount = content.vote_count;
              return (
                <ContentCard
                  contentType={contentType}
                  key={content.id}
                  index={index}
                  title={title}
                  imgSrc={imgSrc}
                  date={date}
                  rate={rate}
                  voteCount={voteCount}
                  id={content.id}
                  wrap={wrap}
                  numberPerLine={numberPerLine}
                />
              );
            })
      }
    />
  );
};

export default ContentList;
