import React from "react";
import {
  FeaturesDetailStyled,
  FeatureDescriptionList,
} from "./Features.styles";
import { ReactComponent as MockupDetail } from "../../assets/images/img_mockup_detail.svg";
import FeatureDescription from "./FeatureDescription";

const FeaturesDetail = ({ data }) => {
  return (
    <FeaturesDetailStyled className="features_detail features_content">
      <MockupDetail />
      <FeatureDescriptionList className="features_responsive">
        {data.map((item) => (
          <FeatureDescription key={"detail" + item.id} {...item} />
        ))}
      </FeatureDescriptionList>
    </FeaturesDetailStyled>
  );
};

export default FeaturesDetail;
