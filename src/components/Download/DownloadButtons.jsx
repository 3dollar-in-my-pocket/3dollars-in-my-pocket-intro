import React from "react";
import { DownloadButtonStyled } from "./Download.styles";
import DownloadButton from "./DownloadButton";
import AppleIcon from "../../assets/icons/icon_apple.png";
import GooglePlayIcon from "../../assets/icons/icon_google_play.svg";

const DownloadButtons = () => {
  return (
    <DownloadButtonStyled.Container className="button_container__responsive">
      <DownloadButton
        sort="iOS"
        icon={AppleIcon}
        description="apple icon"
        link="https://apps.apple.com/kr/app/%EA%B0%80%EC%8A%B4%EC%86%8D3%EC%B2%9C%EC%9B%90-%EB%82%98%EC%99%80-%EA%B0%80%EA%B9%8C%EC%9A%B4-%EB%B6%95%EC%96%B4%EB%B9%B5/id1496099467"
      />
      <DownloadButton
        sort="Android"
        icon={GooglePlayIcon}
        description="google play store icon"
        link="https://play.google.com/store/apps/details?id=com.zion830.threedollars"
      />
    </DownloadButtonStyled.Container>
  );
};

export default DownloadButtons;
