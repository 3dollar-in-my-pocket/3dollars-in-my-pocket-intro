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
    max-width: 95vw;
  }
`;

export const DownloadButtonStyled = styled.div``;

export default DownloadStyled;
