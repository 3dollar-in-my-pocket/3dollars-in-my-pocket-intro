import styled from "styled-components";

const NavigationStyled = styled.div`
  width: 100%;
  background: rgb(28, 28, 28);
  position: absolute;
  top: 0;

  .active {
    color: #ee624c;
  }

  .nav_content {
    width: 100%;
    height: 56px;
    max-width: 1140px;
    box-sizing: border-box;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.4rem;
    line-height: 1.7;
  }

  .nav_left {
    display: flex;
    align-items: center;
  }

  a {
    color: #fff;
    display: flex;
  }

  ul {
    display: flex;
    align-items: center;
    margin-right: 20px;

    li {
      margin-left: 48px;
    }
  }
`;

export const NavigationMobileStyled = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  width: 100%;
  height: 56px;
  align-items: center;
  color: #fff;
  .bm-burger-button {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    height: 24px;
  }

  .bm-burger-bars {
    background: #fff;
  }

  .bm-menu-wrap {
    padding-left: 10px;
    opacity: 98%;
  }
  .bm-menu {
    margin-top: 80px;
  }

  .menu-item {
    color: #fff;
    font-size: 2rem;
    line-height: 2.5;
    padding-left: 20px;
    background: rgba(255, 255, 255, 5%);
    margin-bottom: 10px;
    border-radius: 5px 0 0 5px;
  }

  .menu-item:hover {
    color: #ee624c;
    background: rgb(255, 255, 255);
  }

  .active {
    color: #ee624c;
    background: rgb(255, 255, 255);
  }

  .bm-cross {
    background: #fff;
  }

  .menu-contact {
    width: 90%;
    position: absolute;
    margin: 60px 60px 0 0;
    padding-right: 20px;
    a {
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
      font-size: 1.3rem;
      margin-bottom: 5px;
    }
    .insta_icon {
      span {
        margin-right: 6px;
      }
      display: flex;
      align-items: flex-end;
      margin-bottom: 5px;
      font-size: 1.6rem;
      margin-right: 7px;
    }
    .insta_id {
      text-decoration: underline;
      margin-right: 10px;
    }
  }
`;

export default NavigationStyled;
