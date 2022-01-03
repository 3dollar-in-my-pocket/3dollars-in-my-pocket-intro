import React from "react";
import FigureList from "./FigureList";
import FiguresStyled from "./Figures.styles";

const Figures = () => {
  return (
    <FiguresStyled className="figures_responsive">
      <h3>
        <span>집단지성</span>으로
        <br /> 만들어지는 가슴속 3천원
      </h3>
      <FigureList />
    </FiguresStyled>
  );
};

export default Figures;
