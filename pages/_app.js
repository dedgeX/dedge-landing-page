import { useEffect } from 'react';
import Script from 'next/script';
import '../styles/globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GTM-T7DQB6MB');
    }
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtm.js?id=GTM-T7DQB6MB`}
      />
      <Component {...pageProps} />
      <GoogleAnalytics gaId="G-KWDXQWGFJG" />
    </>
  );
}

export default MyApp;
