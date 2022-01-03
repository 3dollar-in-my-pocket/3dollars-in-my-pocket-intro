import styled from "styled-components";

const ResponsiveStyled = styled.div`
  @media all and (max-width: 1279px) {
    .header_responsive {
      flex-direction: column;
      justify-content: flex-start;
      height: 1164px;
      .profile {
        width: 100%;
        margin: 100px auto 80px;
      }
    }

    .slick-slider {
      width: 75%;
    }

    .news_responsive {
      width: 70vw;
    }

    .news_responsive > div {
      margin-bottom: 36px;
    }
  }

  /* PC , 테블릿 가로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
    .slick-slider {
      width: 55%;
    }

    .news_responsive {
      width: 80vw;
    }
  }

  /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 767px) {
    .features_responsive {
      margin-left: 10px;
    }

    .figures_responsive {
      height: 720px;
    }

    .figurelist_responsive {
      flex-direction: column;
    }

    .figurelist_responsive > div {
      margin-bottom: 45px;
    }
  }

  @media all and (min-width: 480px) and (max-width: 767px) {
  }

  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    .header_responsive {
      height: 964px;
    }
    .slick-slider {
      width: 84%;
    }

    .features_content {
      flex-direction: column;

      svg {
        margin-bottom: 30px;
      }
    }

    .download_responsive {
      height: 100%;
    }

    h1 {
      font-size: 4.8rem;
      word-break: keep-all;
    }
    h2 {
      font-size: 3.4rem;
      margin: 30px 0 100px 0;
    }

    .footer_responsive {
      margin-left: 50px;
    }

    .footer_responsive > div {
      margin-right: 40px;
    }
  }
`;

//main : 1440 - 768까지 Ok
//

export default ResponsiveStyled;
