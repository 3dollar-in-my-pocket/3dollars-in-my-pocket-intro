import styled from "styled-components";

const ResponsiveStyled = styled.div`
  @media all and (max-width: 1279px) {
    .header_responsive {
      flex-direction: column;
      justify-content: flex-start;
      height: 1464px;
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

  @media all and (max-width: 550px) {
    .header_responsive {
      height: 1300px;
    }
    .header_responsive .profile {
      margin-bottom: 20px;
    }
  }

  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    .header_responsive {
      height: 1250px;
    }
    .header_responsive .profile {
      margin-bottom: 0;
    }
    .page {
      margin-top: 70px;
      h1 {
        margin-bottom: 76px;
      }
    }
    .slick-slider {
      width: 84%;
    }

    .features_content {
      flex-direction: column;

      img {
        max-width: 90vw;
        margin-bottom: 40px;
      }
    }

    .download_responsive {
      height: 800px;
    }

    .download_logo {
      margin-top: 10px;
      margin-bottom: 0;
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
    .header_responsive {
      height: 1200px;
    }
    .slick-slider {
      width: 100%;
    }
    .testimonial_item {
      padding: 0 16px;
    }
    .footer_responsive {
      margin-left: 35px;
    }
    .footer_responsive > div {
      margin-right: 35px;
    }
    .features_content {
      img {
        width: 100%;
      }
    }
  }

  @media all and (max-width: 335px) {
    .footer_container__responsive {
      height: 280px;
    }
    .footer_responsive {
      flex-direction: column;
      margin-top: 40px;
    }

    .footer_responsive > div {
      margin-bottom: 20px;
    }
  }
  @media all and (max-width: 320px) {
    .header_responsive {
      height: 1164px;
    }
    .testimonial_item {
      margin: 0 25px;
      .testimonial_emoji {
        margin-top: 30px;
      }
    }

    .features_content {
      img {
        width: 98vw;
        margin: 0;
      }
    }
  }
`;

//main : 1440 - 768까지 Ok
//

export default ResponsiveStyled;
