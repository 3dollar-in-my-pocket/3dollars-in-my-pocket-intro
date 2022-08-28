import styled from '@emotion/styled'
import AppleIcon from '../../assets/icons/icon_apple.svg'
import GooglePlayIcon from '../../assets/icons/icon_google_play.svg'

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 52px auto 0;
`

const Button = styled.a`
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
  letter-spacing: -0.06em;
  color: #ffffff;

  span {
    padding-top: 3px;
  }

  svg {
    margin-right: 8px;
    padding: 0;
  }
`

const DownloadButtons = () => {
  return (
    <Container className="button_container__responsive">
      <Button
        href="https://apps.apple.com/kr/app/%EA%B0%80%EC%8A%B4%EC%86%8D3%EC%B2%9C%EC%9B%90-%EB%82%98%EC%99%80-%EA%B0%80%EA%B9%8C%EC%9A%B4-%EB%B6%95%EC%96%B4%EB%B9%B5/id1496099467"
        alt="app store"
      >
        <AppleIcon />
        <span>for iOS</span>
      </Button>
      <Button
        href="https://play.google.com/store/apps/details?id=com.zion830.threedollars"
        alt="google play store"
      >
        <GooglePlayIcon />
        <span>for Android</span>
      </Button>
    </Container>
  )
}

export default DownloadButtons
