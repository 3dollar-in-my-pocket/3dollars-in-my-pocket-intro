import React from "react";
import DownloadStyled from "./Download.styles";
import DownloadImage from "../../assets/images/img_heart.png";
import DownloadButton from "./DownloadButton";

const Download = () => {
  return (
    <DownloadStyled className="download_responsive">
      <DownloadStyled.Logo className="download_logo">
        <img src={DownloadImage} alt="download profile" />
      </DownloadStyled.Logo>
      <h2>
        지금 바로 <span>가슴속 3천원</span>과 함께
        <br /> 따뜻한 겨울을 즐겨보세요!
      </h2>
      <DownloadButton />
    </DownloadStyled>
  );
};

export default Download;
