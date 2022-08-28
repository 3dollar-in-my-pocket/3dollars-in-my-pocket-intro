import styled from '@emotion/styled'
import Link from 'next/link'
import InstaIcon from '../../assets/icons/icon_insta.svg'
import KakaoViewIcon from '../../assets/icons/icon_kakao_view.svg'
import Logo from '../../assets/images/img_logo.svg'

const NavigationStyled = styled.div`
  width: 100%;
  background: rgb(28, 28, 28);
  position: absolute;
  top: 0;

  .active {
    color: #ee624c;
  }

  .nav_content {
    width: 100%;
    height: 56px;
    max-width: 1140px;
    box-sizing: border-box;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.4rem;
    line-height: 1.7;
  }

  .nav_left {
    display: flex;
    align-items: center;
  }

  a {
    color: #fff;
    display: flex;
  }

  ul {
    display: flex;
    align-items: center;
    margin-right: 20px;

    li {
      margin-left: 48px;
    }
  }
`

const Navigation = () => {
  return (
    <NavigationStyled className="nav_container">
      <div className="nav_content">
        <div className="nav_left">
          <Link href="/">
            <Logo />
          </Link>
          <a
            href="https://pf.kakao.com/_RxghUb"
            target="_blank"
            rel="noreferrer"
          >
            <KakaoViewIcon />
          </a>
        </div>
        <ul>
          <li>
            <Link href="/news" activeclassname="active">
              News
            </Link>
          </li>
          <li>
            <Link href="/creator" activeclassname="active">
              Creator
            </Link>
          </li>
          <li>
            <Link href="/contact" activeclassname="active">
              Contact
            </Link>
          </li>
          <li>
            <a
              href="https://www.instagram.com/3dollar_in_my_pocket/"
              target="_blank"
              rel="noreferrer"
            >
              <InstaIcon />
            </a>
          </li>
        </ul>
      </div>
    </NavigationStyled>
  )
}

export default Navigation
