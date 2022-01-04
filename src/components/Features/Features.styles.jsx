import styled from "styled-components";

const FeaturesStyled = styled.div`
  width: 100%;
  min-height: 1164px;
  max-height: 100%;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

  .features_content {
    svg {
      width: 100%;
    }
  }

  .features_detail .feature_description {
    margin-bottom: 48px;
  }
`;

FeaturesStyled.Title = styled.h3`
  font-weight: 800;
  font-size: 3.2rem;
  line-height: 1.2;
  letter-spacing: -0.06em;

  span {
    color: #f3a2a9;
  }
`;

FeaturesStyled.Description = styled.p`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.5;
  margin: 24px 10px 40px;
  word-break: keep-all;
`;

FeaturesStyled.TabMenu = styled.ul`
  display: flex;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 40px;
  margin-bottom: 58px;
  max-width: 95vw;
  cursor: pointer;
`;

FeaturesStyled.TabMenuItem = styled.li`
  width: 186px;
  color: ${({ type, current }) => (type === current ? "#ee624c" : "#fff")}}; 
  border-bottom: 1px solid ${({ type, current }) =>
    type === current ? "#ee624c" : "#fff"}};
`;

export const FeaturesMainStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FeaturesListStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FeaturesDetailStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FeatureDescriptionList = styled.div`
  margin: 0 24px;
`;

export const FeatureDescriptionStyled = styled.div`
  margin-bottom: 56px;
  h3 {
    width: fit-content;
    color: #fff;
    font-weight: 800;
    font-size: 1.6rem;
    line-height: 1.9rem;
    letter-spacing: -0.06em;
    padding: 10px 16px;
    background: #f3a2a9;
    border-radius: 20px;
    display: flex;
    align-items: center;
    margin-bottom: 24px;
  }

  p {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.5;
    letter-spacing: -0.06em;
    text-align: left;
    white-space: pre-line;
    word-break: keep-all;
  }
`;

export default FeaturesStyled;
