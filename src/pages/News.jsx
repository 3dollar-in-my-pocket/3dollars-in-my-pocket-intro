import React from "react";
import Footer from "../components/Footer/Footer";
import NewsFeed from "../components/NewsFeed/NewsFeed";
import { TitleStyled } from "../App";

const News = () => {
  return (
    <div>
      <TitleStyled>News</TitleStyled>
      <NewsFeed />
      <Footer />
    </div>
  );
};

export default News;
