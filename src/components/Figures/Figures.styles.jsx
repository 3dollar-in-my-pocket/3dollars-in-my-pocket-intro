import styled from "styled-components";

const FiguresStyled = styled.div`
  background: #2e2e2e;
  width: 100%;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: #fff;
    font-weight: 800;
    font-size: 3.2rem;
    ling-height: 1.5;
    text-align: center;
    letter-spacing: -0.06em;
    margin: 60px 0 44px 0;

    span {
      color: #f3a2a9;
    }
  }
`;

export const FigureListStyled = styled.div`
  display: flex;
  width: 647px;
  justify-content: space-around;
`;

export const FigureItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;

  div {
    font-weight: 800;
    font-size: 3.8rem;
    line-height: 4.6rem;
    text-align: center;
    letter-spacing: -0.06em;
    margin-top: 12px;
  }

  p {
    font-family: SpoqaHanSans;
    font-style: normal;
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 2.1rem;
    text-align: center;
    letter-spacing: -0.04em;
  }
`;

export default FiguresStyled;
