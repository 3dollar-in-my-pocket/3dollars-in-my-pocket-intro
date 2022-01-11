import React from "react";
import { NewsItemStyled } from "./NewsFeed.styles";

const NewsItem = ({ thumbnail, title, channel, date, link }) => {
  return (
    <NewsItemStyled href={link} target="_blank">
      <NewsItemStyled.Thumbnail src={thumbnail} />
      <NewsItemStyled.Box>
        <NewsItemStyled.Title>{title}</NewsItemStyled.Title>
        <NewsItemStyled.Author>
          {channel} ∙ {date}
        </NewsItemStyled.Author>
      </NewsItemStyled.Box>
    </NewsItemStyled>
  );
};

export default NewsItem;
