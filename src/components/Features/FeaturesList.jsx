import React from "react";
import { FeaturesListStyled, FeatureDescriptionList } from "./Features.styles";
import { ReactComponent as MockupList } from "../../assets/images/img_mockup_list.svg";
import FeatureDescription from "./FeatureDescription";

const FeaturesList = ({ data }) => {
  return (
    <FeaturesListStyled className="features_content">
      <MockupList />
      <FeatureDescriptionList className="features_responsive">
        {data.map((item) => (
          <FeatureDescription key={"list" + item.id} {...item} />
        ))}
      </FeatureDescriptionList>
    </FeaturesListStyled>
  );
};

export default FeaturesList;
