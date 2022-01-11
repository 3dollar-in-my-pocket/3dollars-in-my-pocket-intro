import styled from "styled-components";

const NewsFeedStyled = styled.div`
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
  }
`;

NewsFeedStyled.Title = styled.h1`
  color: #f3a2a9;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 800;
  font-size: 3.8rem;
  line-height: 4.6rem;
  text-align: center;
  letter-spacing: -0.02em;
  margin: 104px 0 96px 0;
`;

NewsFeedStyled.Content = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 56px;
  justify-content: space-evenly;
  margin: 0 auto 257px;
  width: 90vw;
  max-width: 1108px;
`;

export const NewsItemStyled = styled.a`
  cursor: pointer;
  width: 332px;
  height: 304px;
  background: #2e2e2e;
  border-radius: 20px;
  margin-bottom: 72px;
`;

NewsItemStyled.Thumbnail = styled.img``;

NewsItemStyled.Box = styled.div`
  height: 124px;
  box-sizing: border-box;
  padding: 8px 16px 16px;
  position: relative;
`;
NewsItemStyled.Title = styled.p`
  color: #fff;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 1.44;
  letter-spacing: -0.06em;
  height: 52px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
NewsItemStyled.Author = styled.div`
  color: #f5f5f5;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.9rem;
  letter-spacing: -0.06rem;
  position: absolute;
  bottom: 16px;
`;

export default NewsFeedStyled;
