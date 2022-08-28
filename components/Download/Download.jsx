import styled from '@emotion/styled'
import HeartImg from '../../assets/images/img_heart.webp'
import DownloadButtons from './DownloadButtons'

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
`

const Logo = styled.div`
  width: 100%;
  margin: 111px 0 16px 0;
  background: url('/img_background.svg');
  display: flex;
  justify-content: center;
  img,
  source {
    width: 558px;
    height: 460px;
    max-width: 115vw;
    object-fit: contain;
  }
`

const Download = () => {
  return (
    <DownloadStyled className="download_responsive">
      <Logo className="download_logo">
        <picture>
          <source srcSet={HeartImg} type="image/webp" />
          <img
            src="https://i.postimg.cc/7ZqTsmSG/img-heart.png"
            alt="download profile"
          />
        </picture>
      </Logo>
      <h2>
        지금 바로 <span>가슴속 3천원</span>과 함께
        <br /> 따뜻한 겨울을 즐겨보세요!
      </h2>
      <DownloadButtons />
    </DownloadStyled>
  )
}

export default Download
