import React from "react";
import HeaderStyled from "./Header.styles";
import ProfileImage from "../../assets/images/img_header.png";
import DownloadButtons from "../Download/DownloadButtons";

const Header = () => {
  return (
    <HeaderStyled className="header_responsive">
      <HeaderStyled.Profile className="profile">
        <h1>
          언제 어디서 <span>붕어빵</span>을 만날지 모르니
          <br />
          <span>가슴속에 3천원</span>을 지니고 다녀야 해
        </h1>
        <p>
          다양한 길거리 음식들의 위치가 궁금했다면
          <br /> 지금 바로 가슴속 3천원을 다운로드 해보세요!
        </p>
        <DownloadButtons />
      </HeaderStyled.Profile>
      <HeaderStyled.ProfileImage
        src={ProfileImage}
        alt="Profile Image"
      ></HeaderStyled.ProfileImage>
    </HeaderStyled>
  );
};

export default Header;
