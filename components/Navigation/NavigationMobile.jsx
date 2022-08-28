import styled from '@emotion/styled'
import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'
import InstaIcon from '../../assets/icons/icon_insta.svg'
import Logo from '../../assets/images/img_logo.svg'

const NavigationMobileStyled = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  width: 100%;
  height: 56px;
  align-items: center;
  color: #fff;
  .bm-burger-button {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    height: 24px;
  }

  .bm-burger-bars {
    background: #fff;
  }

  .bm-menu-wrap {
    padding-left: 10px;
    opacity: 98%;
  }
  .bm-menu {
    margin-top: 80px;
  }

  .menu-item {
    color: #fff;
    font-size: 2rem;
    line-height: 2.5;
    padding-left: 20px;
    background: rgba(255, 255, 255, 5%);
    margin-bottom: 10px;
    border-radius: 5px 0 0 5px;
  }

  .menu-item:hover {
    color: #ee624c;
    background: rgb(255, 255, 255);
  }

  .active {
    color: #ee624c;
    background: rgb(255, 255, 255);
  }

  .bm-cross {
    background: #fff;
  }

  .menu-contact {
    width: 90%;
    position: absolute;
    margin: 60px 60px 0 0;
    padding-right: 20px;
    a {
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
      font-size: 1.3rem;
      margin-bottom: 5px;
    }
    .insta_icon {
      span {
        margin-right: 6px;
      }
      display: flex;
      align-items: flex-end;
      margin-bottom: 5px;
      font-size: 1.6rem;
      margin-right: 7px;
    }
    .insta_id {
      text-decoration: underline;
      margin-right: 10px;
    }
  }
`

const NavigationMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const handleMenuState = (state) => {
    setMenuOpen(state.isOpen)
  }

  return (
    <NavigationMobileStyled>
      <Link href="/">
        <Logo />
      </Link>
      <Menu
        isOpen={menuOpen}
        onStateChange={handleMenuState}
        right
        width={'45%'}
        styles={styles}
      >
        <Link
          href="/"
          className="menu-item"
          onClick={closeMenu}
          activeClassName="active"
        >
          Home
        </Link>
        <Link
          href="/news"
          className="menu-item"
          onClick={closeMenu}
          activeClassName="active"
        >
          News
        </Link>
        <Link
          href="/creator"
          className="menu-item"
          onClick={closeMenu}
          activeClassName="active"
        >
          Creator
        </Link>
        <Link
          href="/contact"
          className="menu-item"
          onClick={closeMenu}
          activeClassName="active"
        >
          Contact
        </Link>
        <div className="menu-contact">
          <a
            href="https://www.instagram.com/3dollar_in_my_pocket/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="insta_icon">
              <span>Instagram</span>
              <InstaIcon />
            </div>
            <div className="insta_id">3dollar_in_my_pocket</div>
          </a>
        </div>
      </Menu>
    </NavigationMobileStyled>
  )
}

export default NavigationMobile

const styles = {
  bmOverlay: {
    top: '0',
    left: '0',
  },
  bmMenuWrap: {
    background: '#2e2e2e',
    top: '0',
    transform: 'translate3d(0px, 0px, 100%)',
  },
  bmCross: {
    height: '25px',
  },
}
