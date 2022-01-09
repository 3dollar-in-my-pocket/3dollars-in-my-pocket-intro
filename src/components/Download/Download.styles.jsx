import styled from "styled-components";
import BackgroundImage from "../../assets/images/img_background.svg";

const DownloadStyled = styled.div`
  width: 100%;
  height: 956px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  h2 {
    color: #fff;
    font-weight: 800;
    font-size: 3.8rem;
    line-height: 4.6rem;
    text-align: center;
    letter-spacing: -0.06em;
    word-break: keep-all;

    span {
      color: #f3a2a9;
    }
  }
`;

DownloadStyled.Logo = styled.div`
  width: 100%;
  margin: 111px 0 16px 0;
  background: url(${BackgroundImage});
  display: flex;
  justify-content: center;
  img {
    width: 558px;
    height: 460px;
    max-width: 115vw;
    object-fit: contain;
  }
`;

export const DownloadButtonStyled = styled.a`
  cursor: pointer;
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 56px;
  background: #ee624c;
  border-radius: 62px;
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 32px;
  letter-spacing: -0.06em;
  color: #ffffff;
  img {
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }
`;

DownloadButtonStyled.Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 52px auto 0;
`;

export default DownloadStyled;
