import React from "react";
import { DownloadButtonStyled } from "./Download.styles";
import AppleIcon from "../../assets/icons/icon_apple.png";

const DownloadButton = () => {
  return (
    <DownloadButtonStyled
      href="https://apps.apple.com/kr/app/%EA%B0%80%EC%8A%B4%EC%86%8D3%EC%B2%9C%EC%9B%90-%EB%82%98%EC%99%80-%EA%B0%80%EA%B9%8C%EC%9A%B4-%EB%B6%95%EC%96%B4%EB%B9%B5/id1496099467"
      target="_blank"
      className="download_button"
    >
      <img src={AppleIcon} alt="apple logo" />
      <span>for App</span>
    </DownloadButtonStyled>
  );
};

export default DownloadButton;
