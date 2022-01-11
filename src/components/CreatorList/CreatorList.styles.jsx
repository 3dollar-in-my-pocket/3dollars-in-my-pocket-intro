import styled from "styled-components";

const CreatorListStyled = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  h2 {
    color: #f3a2a9;
    font-family: Montserrat;
    font-weight: 600;
    font-size: 2rem;
    line-height: 1.2;
    letter-spacing: -0.04em;
    margin-right: 12px;
  }
`;

CreatorListStyled.Container = styled.div``;

CreatorListStyled.Title = styled.div`
  display: flex;
  align-items: center;

  hr {
    width: 100%;
    background: #f3a2a9;
    border: none;
    height: 1px;
  }
`;

CreatorListStyled.Group = styled.div`
  display: flex;
  margin: 0 -22px;
`;

export const CreatorItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 67px 22px 100px;
`;

CreatorItemStyled.Photo = styled.div`
  width: 246px;
  height: 246px;
  border-radius: 100%;
  background: #232323;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

CreatorItemStyled.Name = styled.div`
  text-align: center;
  letter-spacing: -0.04em;
`;
CreatorItemStyled.Name.EN = styled.p`
  color: #f3a2a9;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 2rem;
  line-height: 1.2;
  margin: 29px 0 8px;
`;
CreatorItemStyled.Name.KO = styled.p`
  color: #fff;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 1.5;
`;

export default CreatorListStyled;
