import React from "react";
import { Link, NavLink } from "react-router-dom";
import NavigationStyled from "./Navigation.styles";
import { ReactComponent as Logo } from "../../assets/images/img_logo.svg";
import { ReactComponent as InstaIcon } from "../../assets/icons/icon_insta.svg";
import { ReactComponent as KakaoViewIcon } from "../../assets/icons/icon_kakao_view.svg";

const Navigation = () => {
  return (
    <NavigationStyled className="nav_container">
      <div className="nav_content">
        <div className="nav_left">
          <Link to="/">
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
            <NavLink to="/news" activeclassname="active">
              미디어 속 '가슴속 3천원'
            </NavLink>
          </li>
          <li>
            <NavLink to="/creator" activeclassname="active">
              팀원 소개
            </NavLink>
          </li>
          <li>
            <a href="http://pf.kakao.com/_RxghUb">카톡 문의</a>
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
