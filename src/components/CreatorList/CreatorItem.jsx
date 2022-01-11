import React from "react";
import { CreatorItemStyled } from "./CreatorList.styles";

const CreatorItem = ({ photo, name_en, name_ko }) => {
  return (
    <CreatorItemStyled>
      <CreatorItemStyled.Photo>
        <img src={photo} alt="profile"></img>
      </CreatorItemStyled.Photo>
      <CreatorItemStyled.Name>
        <CreatorItemStyled.Name.EN>{name_en}</CreatorItemStyled.Name.EN>
        <CreatorItemStyled.Name.KO>{name_ko}</CreatorItemStyled.Name.KO>
      </CreatorItemStyled.Name>
    </CreatorItemStyled>
  );
};

export default CreatorItem;
