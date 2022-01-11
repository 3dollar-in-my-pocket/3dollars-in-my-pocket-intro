import styled from "styled-components";

const FooterStyled = styled.div`
  background: #4a4a4a;
  width: 100%;
  height: 220px;
  display: flex;
  justify-content: center;
`;

FooterStyled.Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1140px;
  margin-top: 50px;
  margin-left: 60px;
`;

export const FooterItemStyled = styled.div`
  margin-right: 66px;
  div {
    color: #f3a2a9;
    font-style: normal;
    font-weight: bold;
    font-size: 1.1rem;
    line-height: 2.4rem;
    letter-spacing: -0.06em;
  }

  p {
    color: #fff;
    font-weight: 500;
    font-size: 1.1rem;
    line-height: 1.8;
    letter-spacing: -0.04em;
  }
`;

export default FooterStyled;
