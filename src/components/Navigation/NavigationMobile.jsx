import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { NavigationMobileStyled } from "./Navigation.styles";
import { ReactComponent as Logo } from "../../assets/images/img_logo.svg";
import { ReactComponent as InstaIcon } from "../../assets/icons/icon_insta.svg";

const NavigationMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleMenuState = (state) => {
    setMenuOpen(state.isOpen);
  };

  return (
    <NavigationMobileStyled>
      <Link to="/">
        <Logo />
      </Link>
      <Menu
        isOpen={menuOpen}
        onStateChange={handleMenuState}
        right
        width={"45%"}
        styles={styles}
      >
        <NavLink
          to="/"
          className="menu-item"
          onClick={closeMenu}
          activeClassName="active"
        >
          Home
        </NavLink>
        <NavLink
          to="/news"
          className="menu-item"
          onClick={closeMenu}
          activeClassName="active"
        >
          미디어 속 '가슴속 3천원'
        </NavLink>
        <NavLink
          to="/creator"
          className="menu-item"
          onClick={closeMenu}
          activeClassName="active"
        >
          팀원 소개
        </NavLink>
        <NavLink
          to="/contact"
          className="menu-item"
          onClick={closeMenu}
          activeClassName="active"
        >
          Contact
        </NavLink>
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
  );
};

export default NavigationMobile;

const styles = {
  bmOverlay: {
    top: "0",
    left: "0",
  },
  bmMenuWrap: {
    background: "#2e2e2e",
    top: "0",
    transform: "translate3d(0px, 0px, 100%)",
  },
  bmCross: {
    height: "25px",
  },
};
