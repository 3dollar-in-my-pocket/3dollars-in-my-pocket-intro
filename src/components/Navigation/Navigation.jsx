import React from "react";
import { Link, NavLink } from "react-router-dom";
import NavigationStyled from "./Navigation.styles";
import { ReactComponent as Logo } from "../../assets/images/img_logo.svg";
import { ReactComponent as InstaIcon } from "../../assets/icons/icon_insta.svg";

const Navigation = () => {
  return (
    <NavigationStyled className="nav_container">
      <div className="nav_content">
        <Link to="/">
          <Logo />
        </Link>
        <ul>
          <li>
            <NavLink to="/news" activeClassName="active">
              News
            </NavLink>
          </li>
          <li>
            <NavLink to="/creator" activeClassName="active">
              Creator
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
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
  );
};

export default Navigation;
