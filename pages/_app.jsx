import Head from 'next/head'
import { useMediaQuery } from 'react-responsive'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Navigation from '../components/Navigation/Navigation'
import NavigationMobile from '../components/Navigation/NavigationMobile'
import '../styles/global.css'
import '../styles/responsive.scss'

function App({ Component, pageProps }) {
  const isMobile = useMediaQuery({ query: '(max-width: 479px)' })

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>가슴속3천원</title>
      </Head>
      <div className="App">
        {isMobile ? <NavigationMobile /> : <Navigation />}
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default App
