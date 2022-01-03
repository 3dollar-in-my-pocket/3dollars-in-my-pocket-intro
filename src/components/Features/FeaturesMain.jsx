import React from "react";
import { FeaturesMainStyled, FeatureDescriptionList } from "./Features.styles";
import { ReactComponent as MockupMain } from "../../assets/images/img_mockup_main.svg";
import FeatureDescription from "./FeatureDescription";

const FeaturesMain = ({ data }) => {
  return (
    <FeaturesMainStyled className="features_content">
      <MockupMain />
      <FeatureDescriptionList className="features_responsive">
        {data.map((item) => (
          <FeatureDescription key={"main" + item.id} {...item} />
        ))}
      </FeatureDescriptionList>
    </FeaturesMainStyled>
  );
};

export default FeaturesMain;
