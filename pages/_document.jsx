import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico?" />
        <meta
          name="naver-site-verification"
          content="d4d932da1845b1288eca1bf54c9acc3a96b08054"
        />
        <meta
          name="google-site-verification"
          content="n4hkUxDoyX97ry0TukU2PbeK4q7QBCuxRmgySf-UjhA"
        />
        <meta
          name="description"
          content="길거리 음식 위치 찾기 어플리케이션, 가슴속3천원"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="가슴속3천원" />
        <meta
          property="og:description"
          content="길거리 음식 위치 찾기 어플리케이션, 가슴속3천원 웹 랜딩페이지"
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/7ZqTsmSG/img-heart.png"
        />
        <meta property="og:url" content="https://intro.threedollars.co.kr" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
