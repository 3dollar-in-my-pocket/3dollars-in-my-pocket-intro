import styled from '@emotion/styled'
import ProfileImage from '../../assets/images/img_header.webp'
import DownloadButtons from '../Download/DownloadButtons'

const HeaderStyled = styled.div`
  width: 100%;
  height: 964px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Profile = styled.div`
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
`

const ProfileImageWrapper = styled.picture`
  img,
  source {
    width: 670px;
    height: 730px;
    max-width: 90vw;
    object-fit: contain;
  }
`

const Header = () => {
  return (
    <HeaderStyled className="header_responsive">
      <Profile className="profile">
        <h1>
          언제 어디서 <span>붕어빵</span>을<br />
          만날지 모르니
          <br />
          <span>가슴속에 3천원</span>을<br />
          지니고 다녀야 해
        </h1>
        <p>
          다양한 길거리 음식들의 위치가 궁금했다면
          <br /> 지금 바로 가슴속 3천원을 다운로드 해보세요!
        </p>
        <DownloadButtons />
      </Profile>
      <ProfileImageWrapper>
        <source srcSet={ProfileImage} type="image/webp" />
        <img src="https://i.postimg.cc/DyBrL9bp/img-header.png" alt="profile" />
      </ProfileImageWrapper>
    </HeaderStyled>
  )
}

export default Header
