import React from "react";
import DownloadStyled from "./Download.styles";
import DownloadButtons from "./DownloadButtons";
import HeartImg from "../../assets/images/img_heart.webp";

const Download = () => {
  return (
    <DownloadStyled className="download_responsive">
      <DownloadStyled.Logo className="download_logo">
        <picture>
          <source srcSet={HeartImg} type="image/webp" />
          <img
            src="https://i.postimg.cc/7ZqTsmSG/img-heart.png"
            alt="download profile"
          />
        </picture>
      </DownloadStyled.Logo>
      <h2>
        지금 바로 <span>가슴속 3천원</span>과 함께
        <br /> 따뜻한 겨울을 즐겨보세요!
      </h2>
      <DownloadButtons />
    </DownloadStyled>
  );
};

export default Download;
