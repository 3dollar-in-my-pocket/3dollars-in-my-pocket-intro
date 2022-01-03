import styled from "styled-components";

const NavigationStyled = styled.div`
  width: 100%;
  background: rgb(28, 28, 28);
  position: absolute;
  top: 0;

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

export default NavigationStyled;
