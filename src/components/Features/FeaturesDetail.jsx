import React from "react";
import {
  FeaturesDetailStyled,
  FeatureDescriptionList,
} from "./Features.styles";
import FeatureDescription from "./FeatureDescription";

const FeaturesDetail = ({ data }) => {
  return (
    <FeaturesDetailStyled className="features_detail features_content">
      <img
        src="https://i.postimg.cc/rpQsPTM7/img-mockup-detail.png"
        alt="mockup detail page"
      />
      <FeatureDescriptionList className="features_responsive">
        {data.map((item) => (
          <FeatureDescription key={"detail" + item.id} {...item} />
        ))}
      </FeatureDescriptionList>
    </FeaturesDetailStyled>
  );
};

export default FeaturesDetail;
