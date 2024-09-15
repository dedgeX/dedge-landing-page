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
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
