import React from "react";
import { FooterItemStyled } from "./Footer.styles";

const FooterItem = ({ title, content }) => {
  return (
    <FooterItemStyled>
      <div>{title}</div>
      <p>{content}</p>
    </FooterItemStyled>
  );
};

export default FooterItem;
