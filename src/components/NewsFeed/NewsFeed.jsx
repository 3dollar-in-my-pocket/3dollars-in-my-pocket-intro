import React from "react";
import NewsFeedStyled from "./NewsFeed.styles";
import NewsItem from "./NewsItem";
import { newsData } from "../../data";

const NewsFeed = () => {
  return (
    <NewsFeedStyled>
      <NewsFeedStyled.Content className="news_responsive">
        {newsData.map((item) => (
          <NewsItem key={"news" + item.id} {...item} />
        ))}
      </NewsFeedStyled.Content>
    </NewsFeedStyled>
  );
};

export default NewsFeed;
