import React, { useState } from "react";
import FeaturesStyled from "./Features.styles";
import FeaturesMain from "./FeaturesMain";
import FeaturesList from "./FeaturesList";
import FeaturesDetail from "./FeaturesDetail";
import { featuresData } from "../../data";

const tab = {
  MAIN: <FeaturesMain data={featuresData.main} />,
  LIST: <FeaturesList data={featuresData.list} />,
  Detail: <FeaturesDetail data={featuresData.detail} />,
};

const Features = () => {
  const [type, setType] = useState("MAIN");

  const handleClick = (e) => {
    setType(e.target.innerText);
  };

  return (
    <FeaturesStyled>
      <FeaturesStyled.Title>
        <span>가슴속 3천원</span>이<br /> 대체 무슨 어플인가요?
      </FeaturesStyled.Title>
      <FeaturesStyled.Description>
        가슴속 3천원은 길거리 음식 위치 찾기 어플입니다. <br />
        사용자 참여로 멋진 지도를 완성해보아요!
      </FeaturesStyled.Description>
      <FeaturesStyled.TabMenu>
        <FeaturesStyled.TabMenuItem
          type="MAIN"
          current={type}
          onClick={handleClick}
        >
          MAIN
        </FeaturesStyled.TabMenuItem>
        <FeaturesStyled.TabMenuItem
          type="LIST"
          current={type}
          onClick={handleClick}
        >
          LIST
        </FeaturesStyled.TabMenuItem>
        <FeaturesStyled.TabMenuItem
          type="Detail"
          current={type}
          onClick={handleClick}
        >
          Detail
        </FeaturesStyled.TabMenuItem>
      </FeaturesStyled.TabMenu>
      {tab[type]}
    </FeaturesStyled>
  );
};

export default Features;
