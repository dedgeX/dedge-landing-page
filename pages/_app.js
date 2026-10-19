import Script from "next/script";
import "../styles/globals.css";
// All site links use document navigation. GA owns one explicit page view per load.
// GTM is retained for non-GA tags; its GA destination is blocked to avoid duplication.
export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        id="analytics-init"
        strategy="afterInteractive"
      >{`window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config','G-KWDXQWGFJG',{send_page_view:false,allow_google_signals:false,page_location:location.origin+location.pathname});gtag('event','page_view',{send_to:'G-KWDXQWGFJG',page_location:location.origin+location.pathname,page_path:location.pathname,page_title:document.title});window.gtmLayer=window.gtmLayer||[];gtmLayer.push({'gtm.start':Date.now(),event:'gtm.js','gtm.blocklist':['ga','gaawe','gaawc','googtag']});`}</Script>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KWDXQWGFJG"
        strategy="afterInteractive"
      />
      <Script
        src="https://www.googletagmanager.com/gtm.js?id=GTM-T7DQB6MB&l=gtmLayer"
        strategy="afterInteractive"
      />
      <Component {...pageProps} />
    </>
  );
}
