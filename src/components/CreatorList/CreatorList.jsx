import React from "react";
import { creatorData } from "../../data";
import CreatorItem from "./CreatorItem";
import CreatorListStyled from "./CreatorList.styles";

const CreatorList = () => {
  const arr = Object.keys(creatorData);

  return (
    <CreatorListStyled>
      {arr.map((item) => (
        <CreatorListStyled.Container>
          <CreatorListStyled.Title>
            <h2>{item}</h2>
            <hr />
          </CreatorListStyled.Title>
          <CreatorListStyled.Group key={item}>
            {creatorData[item].map((creator) => (
              <CreatorItem {...creator} />
            ))}
          </CreatorListStyled.Group>
        </CreatorListStyled.Container>
      ))}
    </CreatorListStyled>
  );
};

export default CreatorList;
