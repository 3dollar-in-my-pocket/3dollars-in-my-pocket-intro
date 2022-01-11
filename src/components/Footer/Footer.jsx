import React from "react";
import FooterStyled from "./Footer.styles";
import FooterItem from "./FooterItem";
import { footerData } from "../../data";

const Footer = () => {
  return (
    <FooterStyled className="footer_container__responsive">
      <FooterStyled.Container className="footer_responsive">
        {footerData.map((data) => (
          <FooterItem key={data.id} title={data.title} content={data.content} />
        ))}
      </FooterStyled.Container>
    </FooterStyled>
  );
};

export default Footer;
