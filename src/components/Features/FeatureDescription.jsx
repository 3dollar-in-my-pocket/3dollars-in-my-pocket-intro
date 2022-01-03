import React from "react";
import { FeatureDescriptionStyled } from "./Features.styles";

const FeatureDescription = ({ title, description }) => {
  return (
    <FeatureDescriptionStyled>
      <h3>{title}</h3>
      <p>{description}</p>
    </FeatureDescriptionStyled>
  );
};

export default FeatureDescription;
