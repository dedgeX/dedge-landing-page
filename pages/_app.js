import '../styles/globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleAnalytics gaId="G-KWDXQWGFJG" />
    </>
  )
}

export default MyApp
