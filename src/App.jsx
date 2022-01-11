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
import { useMediaQuery } from "react-responsive";
import NavigationMobile from "./components/Navigation/NavigationMobile";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 479px)" });

  return (
    <ResponsiveStyled className="App">
      {isMobile ? <NavigationMobile /> : <Navigation />}
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
  @font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 100;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.otf) format('opentype');} @font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 300;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.otf) format('opentype');} @font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 400;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.otf) format('opentype');} @font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 500;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.otf) format('opentype');} @font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 700;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.otf) format('opentype');} @font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 900;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.otf) format('opentype');}

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #1C1C1C;
    font-family: "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
    font-style: normal;
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    white-space: pre-line;
    font-family: "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
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
