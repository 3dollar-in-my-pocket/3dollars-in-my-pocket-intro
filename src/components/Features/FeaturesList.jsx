import React from "react";
import { FeaturesListStyled, FeatureDescriptionList } from "./Features.styles";
import MockupList from "../../assets/images/img_mockup_list.png";
import FeatureDescription from "./FeatureDescription";

const FeaturesList = ({ data }) => {
  return (
    <FeaturesListStyled className="features_content">
      <img src={MockupList} alt="mockup list page" />
      <FeatureDescriptionList className="features_responsive">
        {data.map((item) => (
          <FeatureDescription key={"list" + item.id} {...item} />
        ))}
      </FeatureDescriptionList>
    </FeaturesListStyled>
  );
};

export default FeaturesList;
