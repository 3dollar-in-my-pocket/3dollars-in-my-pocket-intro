import React from "react";
import styled from "styled-components";
import { TitleStyled } from "../App";
import CreatorList from "../components/CreatorList/CreatorList";
import Footer from "../components/Footer/Footer";

const Creator = () => {
  return (
    <CreatorStyled className="page">
      <TitleStyled>Creator</TitleStyled>
      <CreatorList />
      <Footer />
    </CreatorStyled>
  );
};

const CreatorStyled = styled.div``;

export default Creator;
