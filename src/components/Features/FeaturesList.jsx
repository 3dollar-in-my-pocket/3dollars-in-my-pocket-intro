import React from "react";
import { FeaturesListStyled, FeatureDescriptionList } from "./Features.styles";
import { ReactComponent as MockupList } from "../../assets/images/img_mockup_list.svg";
import FeatureDescription from "./FeatureDescription";

const FeaturesList = () => {
  return (
    <FeaturesListStyled className="features_content">
      <MockupList />
      <FeatureDescriptionList className="features_responsive">
        <FeatureDescription
          title={list[0].title}
          description={list[0].description}
        />
        <FeatureDescription
          title={list[1].title}
          description={list[1].description}
        />
      </FeatureDescriptionList>
    </FeaturesListStyled>
  );
};

export default FeaturesList;

const list = [
  {
    title: "다른 카테고리 바로가기",
    description: `메인페이지에서 원하는 길거리 음식 리스트로
    간단하게 이동할 수 있어요.`,
  },
  {
    title: "내 근처가게 리스트",
    description: `지도에서 붕어빵, 문어빵, 계란빵, 호떡까지!
    가장 가까운 다섯개의 가게를 바로 만나볼 수 있어요. `,
  },
];
