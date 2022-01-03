import React from "react";
import FooterStyled from "./Footer.styles";
import FooterItem from "./FooterItem";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterStyled.Container>
        {footerData.map((data) => (
          <FooterItem key={data.id} title={data.title} content={data.content} />
        ))}
      </FooterStyled.Container>
    </FooterStyled>
  );
};

const footerData = [
  {
    id: 1,
    title: "Creator",
    content: `Designer 이윤이, 양효정\nFront-end 유현식, 이윤지\nBackend 전해성, 손지수, 이유리`,
  },
  {
    id: 2,
    title: "Contact",
    content: "3dollarinmypocket@gmail.com",
  },
];

export default Footer;