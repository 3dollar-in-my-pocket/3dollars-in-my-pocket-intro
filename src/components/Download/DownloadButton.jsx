import React from "react";
import { DownloadButtonStyled } from "./Download.styles";

const DownloadButton = ({ sort, description, icon, link }) => {
  return (
    <DownloadButtonStyled
      href={link}
      target="_blank"
      className="download_button"
    >
      <img src={icon} alt={description} />
      <span>for {sort}</span>
    </DownloadButtonStyled>
  );
};

export default DownloadButton;
