import { Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Main from "./pages/Main";
import News from "./pages/News";
import Creator from "./pages/Creator";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation/Navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ResponsiveStyled from "./Responsive.styles";

function App() {
  return (
    <ResponsiveStyled className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/news" element={<News />} />
        <Route path="/creator" element={<Creator />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <GlobalStyle />
    </ResponsiveStyled>
  );
}

export const TitleStyled = styled.h1`
  color: #f3a2a9;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 800;
  font-size: 3.8rem;
  line-height: 4.6rem;
  text-align: center;
  letter-spacing: -0.02em;
  margin: 104px 0 96px 0;
`;

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #1C1C1C;
    font-family: Apple SD Gothic Neo;
    font-style: normal;
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    white-space: pre-line;
  }
  
  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  #root {
    height: 100%;
  }

`;

export default App;
