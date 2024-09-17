import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="alternate" hrefLang="x-default" href="https://dedge.pro" />
          <link rel="alternate" hrefLang="en" href="https://dedge.pro" />
        </Head>
        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T7DQB6MB"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
          {/* End Google Tag Manager (noscript) */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
