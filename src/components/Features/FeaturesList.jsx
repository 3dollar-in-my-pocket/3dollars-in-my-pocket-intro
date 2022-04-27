import React from "react";
import { FeaturesListStyled, FeatureDescriptionList } from "./Features.styles";
import FeatureDescription from "./FeatureDescription";

const FeaturesList = ({ data }) => {
  return (
    <FeaturesListStyled className="features_content">
      <img
        src="https://i.postimg.cc/jdPzkD99/img-mockup-list.png"
        alt="mockup list page"
      />
      <FeatureDescriptionList className="features_responsive">
        {data.map((item) => (
          <FeatureDescription key={"list" + item.id} {...item} />
        ))}
      </FeatureDescriptionList>
    </FeaturesListStyled>
  );
};

export default FeaturesList;
