import React from "react";
import { DownloadButtonStyled } from "./Download.styles";
import AppleIcon from "../../assets/icons/icon_apple.png";

const DownloadButton = () => {
  return (
    <DownloadButtonStyled className="download_button">
      <img src={AppleIcon} alt="apple logo" />
      <span>for App</span>
    </DownloadButtonStyled>
  );
};

export default DownloadButton;
