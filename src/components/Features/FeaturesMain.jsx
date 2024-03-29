import React from "react";
import { FeaturesMainStyled, FeatureDescriptionList } from "./Features.styles";
import FeatureDescription from "./FeatureDescription";
import MockupMainImg from "../../assets/images/img_mockup_main.webp";

const FeaturesMain = ({ data }) => {
  return (
    <FeaturesMainStyled className="features_content">
      <picture>
        <source srcSet={MockupMainImg} type="image/webp" />
        <img
          src="https://i.postimg.cc/jjdP5Z50/img-mockup-main.png"
          alt="mockup main page"
        />
      </picture>
      <FeatureDescriptionList className="features_responsive">
        {data.map((item) => (
          <FeatureDescription key={"main" + item.id} {...item} />
        ))}
      </FeatureDescriptionList>
    </FeaturesMainStyled>
  );
};

export default FeaturesMain;
