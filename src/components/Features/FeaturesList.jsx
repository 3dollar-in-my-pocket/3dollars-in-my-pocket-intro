import React from "react";
import { FeaturesListStyled, FeatureDescriptionList } from "./Features.styles";
import FeatureDescription from "./FeatureDescription";
import MockupListImg from "../../assets/images/img_mockup_list.webp";

const FeaturesList = ({ data }) => {
  return (
    <FeaturesListStyled className="features_content">
      <picture>
        <source srcSet={MockupListImg} type="image/webp" />
        <img
          src="https://i.postimg.cc/jdPzkD99/img-mockup-list.png"
          alt="mockup list page"
        />
      </picture>
      <FeatureDescriptionList className="features_responsive">
        {data.map((item) => (
          <FeatureDescription key={"list" + item.id} {...item} />
        ))}
      </FeatureDescriptionList>
    </FeaturesListStyled>
  );
};

export default FeaturesList;
