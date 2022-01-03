import React from "react";
import { FigureItemStyled } from "./Figures.styles";

const FigureItem = ({ icon, figure, description }) => {
  return (
    <FigureItemStyled>
      <img src={icon.src} alt={icon.sort} />
      <div>{figure}</div>
      <p>{description}</p>
    </FigureItemStyled>
  );
};

export default FigureItem;
