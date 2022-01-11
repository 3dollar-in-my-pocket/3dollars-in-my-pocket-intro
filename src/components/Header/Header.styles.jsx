import styled from "styled-components";

const HeaderStyled = styled.div`
  width: 100%;
  height: 964px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

HeaderStyled.Profile = styled.div`
  color: #fff;
  text-align: center;
  width: 558px;
  margin-right: 33px;

  h1 {
    font-weight: 800;
    font-size: 4.4rem;
    line-height: 1.435;
    letter-spacing: -0.06em;
    margin-bottom: 24px;

    span {
      color: #f3a2a9;
    }
  }

  p {
    color: #fff;
    font-size: 1.6rem;
    line-height: 1.5;
  }
`;

HeaderStyled.ProfileImage = styled.img`
  width: 670px;
  height: 730px;
  max-width: 90vw;
  object-fit: contain;
`;

export default HeaderStyled;
