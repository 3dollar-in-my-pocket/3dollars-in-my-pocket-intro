import React from "react";
import { FeaturesMainStyled, FeatureDescriptionList } from "./Features.styles";
import MockupMain from "../../assets/images/img_mockup_main.png";
import FeatureDescription from "./FeatureDescription";

const FeaturesMain = ({ data }) => {
  return (
    <FeaturesMainStyled className="features_content">
      <img src={MockupMain} alt="mockup main page" />
      <FeatureDescriptionList className="features_responsive">
        {data.map((item) => (
          <FeatureDescription key={"main" + item.id} {...item} />
        ))}
      </FeatureDescriptionList>
    </FeaturesMainStyled>
  );
};

export default FeaturesMain;
