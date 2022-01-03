import React from "react";
import { NewsItemStyled } from "./NewsFeed.styles";

const NewsItem = ({ thumbnail, title, author }) => {
  return (
    <NewsItemStyled>
      <NewsItemStyled.Thumbnail src={thumbnail} />
      <NewsItemStyled.Box>
        <NewsItemStyled.Title>{title}</NewsItemStyled.Title>
        <NewsItemStyled.Author>{author}</NewsItemStyled.Author>
      </NewsItemStyled.Box>
    </NewsItemStyled>
  );
};

export default NewsItem;
