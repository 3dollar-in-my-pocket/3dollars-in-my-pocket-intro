import React from "react";
import { FeaturesMainStyled, FeatureDescriptionList } from "./Features.styles";
import { ReactComponent as MockupMain } from "../../assets/images/img_mockup_main.svg";
import FeatureDescription from "./FeatureDescription";

const FeaturesMain = () => {
  return (
    <FeaturesMainStyled className="features_content">
      <MockupMain />
      <FeatureDescriptionList className="features_responsive">
        <FeatureDescription
          title={main[0].title}
          description={main[0].description}
        />
        <FeatureDescription
          title={main[1].title}
          description={main[1].description}
        />
      </FeatureDescriptionList>
    </FeaturesMainStyled>
  );
};

export default FeaturesMain;

const main = [
  {
    title: "카테고리 바로가기",
    description: `메인페이지에서 원하는 길거리 음식 리스트로\n간단하게 이동할 수 있어요.`,
  },
  {
    title: "지도",
    description: `지도에서 붕어빵, 문어빵, 계란빵, 호떡까지!\n가장 가까운 다섯개의 가게를 바로 만나볼 수 있어요. `,
  },
];
