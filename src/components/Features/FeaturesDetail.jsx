import React from "react";
import {
  FeaturesDetailStyled,
  FeatureDescriptionList,
} from "./Features.styles";
import { ReactComponent as MockupDetail } from "../../assets/images/img_mockup_detail.svg";
import FeatureDescription from "./FeatureDescription";

const FeaturesDetail = () => {
  return (
    <FeaturesDetailStyled className="features_detail features_content">
      <MockupDetail />
      <FeatureDescriptionList className="features_responsive">
        {detail.map((item) => (
          <FeatureDescription key={item.id} {...item} />
        ))}
      </FeatureDescriptionList>
    </FeaturesDetailStyled>
  );
};

export default FeaturesDetail;

const detail = [
  {
    id: 1,
    title: "상세페이지",
    description: `상세페이지에서 메뉴와 제보자를 비롯한
    가게의 상세 정보를 확인할 수 있습니다.`,
  },
  {
    id: 2,
    title: "메뉴수정",
    description: `가슴속 3천원은 모든 사용자가
    정보를 채울 수 있어요. 사진과 메뉴를 제보해서
    더 풍성한 가슴속 3천원을 만들어 나가요!`,
  },
  {
    id: 3,
    title: "리뷰 작성",
    description: `리뷰를 작성하고 나의 경험을 사용자 여러분들과
    함께 공유할 수 있습니다.`,
  },
];
