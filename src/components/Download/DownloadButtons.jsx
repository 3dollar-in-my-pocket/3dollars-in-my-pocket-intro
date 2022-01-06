import React from "react";
import { DownloadButtonStyled } from "./Download.styles";
import DownloadButton from "./DownloadButton";

const DownloadButtons = () => {
  return (
    <DownloadButtonStyled.Container>
      <DownloadButton />
      <DownloadButton />
    </DownloadButtonStyled.Container>
  );
};

export default DownloadButtons;
