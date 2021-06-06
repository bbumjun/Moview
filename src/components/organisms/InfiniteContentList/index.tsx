import React, { useEffect, useRef } from "react";
import ContentCard from "src/components/molecules/ContentCard";
import CardList from "src/components/molecules/CardList";
import { getSmallImgUrl } from "common/url";
import { getHalfAndRounded } from "common/utils";
import useIntersect from "src/hooks/useIntersect";
import useInfiniteContentList from "src/hooks/useInfiniteContentList";
export interface ContentListProps {
  contentTitle: string;
  contentType: "movie" | "tv";
  url: string;
  params?: Object;
  wrap?: boolean;
  titleFontSize?: number;
  numberPerLine?: number;
}

const InfiniteContentList: React.FC<ContentListProps> = ({
  contentTitle,
  contentType,
  params = null,
  url,
  wrap = false,
  titleFontSize = 1.5,
  numberPerLine = 5,
}) => {
  const bottomRef = useRef<HTMLDivElement>();
  const intersectionOption = { rootMargin: "500px" };
  const entry = useIntersect(bottomRef, intersectionOption);
  const { contents, size, setSize } = useInfiniteContentList(url, params);
  useEffect(() => {
    if (entry?.isIntersecting) {
      setSize(size + 1);
    }
  }, [entry]);
  return (
    <>
      <CardList
        contentTitle={`${contentTitle} 한눈에 보기`}
        wrap={wrap}
        titleFontSize={titleFontSize}
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
      <div ref={bottomRef}></div>
    </>
  );
};

export default React.memo(InfiniteContentList);
