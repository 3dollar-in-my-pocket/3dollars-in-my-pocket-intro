import React from "react";
import Footer from "../components/Footer/Footer";
import NewsFeed from "../components/NewsFeed/NewsFeed";
import { TitleStyled } from "../App";

const News = () => {
  return (
    <div className="page">
      <TitleStyled>미디어 속 '가슴속3천원'</TitleStyled>
      <NewsFeed />
      <Footer />
    </div>
  );
};

export default News;
