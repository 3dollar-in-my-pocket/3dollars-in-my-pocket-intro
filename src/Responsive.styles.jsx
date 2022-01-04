import styled from "styled-components";

const ResponsiveStyled = styled.div`
  @media all and (max-width: 1279px) {
    .header_responsive {
      flex-direction: column;
      justify-content: flex-start;
      height: 1264px;
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
    .features_responsive {
      margin-left: 10px;
    }
  }

  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    .page {
      margin-top: 70px;
      h1 {
        margin-bottom: 76px;
      }
    }
    .header_responsive {
      height: 1064px;
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
      height: 800px;
    }

    h1 {
      word-break: keep-all;
      margin: 0 10px 30px 10px;
    }

    h2 {
      font-size: 2.9rem;
      margin: 0 10px;
    }

    .news_responsive {
      width: 90vw;
    }

    .footer_responsive {
      margin-left: 50px;
    }

    .footer_responsive > div {
      margin-right: 40px;
    }
  }

  @media all and (max-width: 424px) {
    .slick-slider {
      width: 100%;
    }
    .footer_responsive {
      margin-left: 35px;
    }
    .footer_responsive > div {
      margin-right: 35px;
    }

  .features_content {
    svg {
      width: 100%;
    }
  }

  @media all and (max-width: 320px) {
    .testimonial_item {
      margin: 0 25px;
      .testimonial_emoji {
        margin-top: 30px;
      }
    }

    .footer_responsive {
      flex-direction: column;
      margin-top: 40px;
    }

    .footer_responsive > div {
      margin-bottom: 20px;
    }
  }
`;

//main : 1440 - 768까지 Ok
//

export default ResponsiveStyled;
