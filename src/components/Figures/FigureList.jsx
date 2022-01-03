import React from "react";
import FigureItem from "./FigureItem";
import { FigureListStyled } from "./Figures.styles";
import { figuresData } from "../../data";

const FigureList = () => {
  return (
    <FigureListStyled className="figurelist_responsive">
      {figuresData.map((item) => (
        <FigureItem key={item.id} {...item} />
      ))}
    </FigureListStyled>
  );
};

export default FigureList;
