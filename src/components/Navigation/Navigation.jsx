import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavigationStyled from "./Navigation.styles";
import { ReactComponent as Logo } from "../../assets/images/img_logo.svg";
import { ReactComponent as InstaIcon } from "../../assets/icons/icon_insta.svg";

const Navigation = () => {
  const [current, setCurrent] = useState("");
  return (
    <NavigationStyled className="nav_container">
      <div className="nav_content">
        <Link to="/" onClick={() => setCurrent("")}>
          <Logo />
        </Link>
        <ul>
          <li>
            <Link
              to="/news"
              className={current === "news" ? "current" : ""}
              onClick={() => setCurrent("news")}
            >
              News
            </Link>
          </li>
          <li>
            <Link
              to="/creator"
              className={current === "creator" ? "current" : ""}
              onClick={() => setCurrent("creator")}
            >
              Creator
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={current === "contact" ? "current" : ""}
              onClick={() => setCurrent("contact")}
            >
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
  );
};

export default Navigation;
