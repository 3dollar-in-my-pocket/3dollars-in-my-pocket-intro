import React from "react";
import { creatorData } from "../../data";
import CreatorItem from "./CreatorItem";
import CreatorListStyled from "./CreatorList.styles";
import { useMediaQuery } from "react-responsive";

const CreatorList = () => {
  const under1280 = useMediaQuery({ query: "(max-width: 1279px)" });

  const arr = under1280
    ? ["Designer", "Marketer", "ANDROID", "iOS", "BACKEND"]
    : Object.keys(creatorData);

  return (
    <CreatorListStyled className="creator_responsive">
      {arr.map((item) => (
        <CreatorListStyled.Container key={`${item}_container`}>
          <CreatorListStyled.Title>
            <h2>{item}</h2>
            <hr />
          </CreatorListStyled.Title>
          <CreatorListStyled.Group className="creator_group__responsive">
            {creatorData[item].map((creator) => (
              <CreatorItem key={creator.name_en} {...creator} />
            ))}
          </CreatorListStyled.Group>
        </CreatorListStyled.Container>
      ))}
    </CreatorListStyled>
  );
};

export default CreatorList;
