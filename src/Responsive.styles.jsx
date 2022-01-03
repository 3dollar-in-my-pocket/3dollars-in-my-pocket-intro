import styled from "styled-components";

const ResponsiveStyled = styled.div`
  @media all and (max-width: 1279px) {
    .header_responsive {
      flex-direction: column;
      justify-content: flex-start;
      height: 1064px;
      .profile {
        margin: 50px 0;
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

  /* 테블릿 세로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
  }

  /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/

  @media all and (max-width: 767px) {
    .features_responsive {
      margin-left: 10px;
    }

    .figures_responsive {
      height: 680px;
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
  }
`;

//main : 1440 - 768까지 Ok
//

export default ResponsiveStyled;
