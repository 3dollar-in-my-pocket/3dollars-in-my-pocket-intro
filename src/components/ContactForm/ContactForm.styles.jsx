import styled from "styled-components";

const ContactFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  max-width: 946px;
  margin: 0 auto;
  p {
    width: 100%;
    color: #fff;
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.5;
    letter-spacing: -0.06em;
    margin-bottom: 33px;
    word-break: keep-all;
    text-align: center;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 195px;

    input {
      color: #fff;
      height: 66px;
      margin-bottom: 24px;
      background: #4a4a4a;
      box-sizing: border-box;
      border-radius: 12px;
      border: none;
      outline: none;
      padding-left: 28px;
      ::placeholder {
        color: #fff;
      }
    }

    input.nameInput {
      border: 1px solid #f3a2a9;
    }

    textarea {
      color: #fff;
      height: 240px;
      background: #4a4a4a;
      border-radius: 12px;
      border: none;
      resize: none;
      outline: none;
      padding: 24px 28px;
      ::placeholder {
        color: #fff;
      }
    }

    button {
      cursor: pointer;
      width: 100%;
      height: 66px;
      background: #f3a2a9;
      border-radius: 66px;
      margin-top: 60px;
      color: #fff;
      font-weight: 800;
      font-size: 1.6rem;
      line-height: 1.5;
      letter-spacing: -0.06em;
      border: none;
      outline: none;
    }
  }
`;

export default ContactFormStyled;
