import React from "react";
import ContentCard from "components/molcules/ContentCard";
import CardList from "components/molcules/CardList";
import { smallImgUrl } from "common/url";
import { getHalfAndRounded } from "common/utils";
import useContentList from "hooks/useContentList";
export interface ContentListProps {
  contentTitle: string;
  contentType: "movie" | "tv";
  url: string;
  params?: Object;
  wrap?: boolean;
  titleFontSize?: number;
}

const ContentList: React.FC<ContentListProps> = ({
  contentTitle,
  contentType,
  params = null,
  url,
  wrap = false,
  titleFontSize = 1.5,
}) => {
  const { contents } = useContentList(url, params);
  return (
    <CardList
      contentTitle={contentTitle}
      wrap={wrap}
      titleFontSize={titleFontSize}
      items={
        contents.length === 0
          ? "아직 등록된 작품이 없어요."
          : contents.map((content, index) => {
              const title = content.title ?? content.name;
              const imgSrc = smallImgUrl + content.poster_path;
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
                />
              );
            })
      }
    />
  );
};

export default ContentList;
