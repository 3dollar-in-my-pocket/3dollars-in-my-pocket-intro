import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { NavigationMobileStyled } from "./Navigation.styles";
import { ReactComponent as Logo } from "../../assets/images/img_logo.svg";
import { ReactComponent as InstaIcon } from "../../assets/icons/icon_insta.svg";
import { ReactComponent as LinkIcon } from "../../assets/icons/icon_link.svg";

const NavigationMobile = () => {
  return (
    <NavigationMobileStyled>
      <Link to="/">
        <Logo />
      </Link>
      <Menu right width={"45%"} styles={styles}>
        <Link to="/" className="menu-item">
          Home
        </Link>
        <Link to="/news" className="menu-item">
          News
        </Link>
        <Link to="/creator" className="menu-item">
          Creator
        </Link>
        <Link to="/contact" className="menu-item">
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
