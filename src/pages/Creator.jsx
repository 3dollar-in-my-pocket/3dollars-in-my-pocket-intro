import React from "react";
import { TitleStyled } from "../App";
import CreatorList from "../components/CreatorList/CreatorList";
import Footer from "../components/Footer/Footer";

const Creator = () => {
  return (
    <div className="page">
      <TitleStyled>Creator</TitleStyled>
      <CreatorList />
      <Footer />
    </div>
  );
};

export default Creator;
