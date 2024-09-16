import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import BotDemo from '../components/BotDemo';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <div>
      <Head>
        <title>dEdge - Elevate Solana Trading with Our Wallet Analyzer</title>
        <meta name="description" content="dEdge: Your all-in-one Solana wallet analyzer and copytrading Telegram bot. Unlock unparalleled insights and take your crypto trading to the next level." />
        <meta name="keywords" content="dEdge, Solana, trading, crypto, wallet analyzer, copytrading, Telegram bot" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="dEdge - Elevate Your Solana Trading Experience" />
        <meta property="og:description" content="Unlock unparalleled insights and take your crypto trading to the next level with dEdge—your all-in-one Solana wallet analyzer and copytrading Telegram bot." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://dedge.pro" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="website" />
        <meta name="twitter:site" content="@dEdge_Solana" />
        <link rel="canonical" href="https://dedge.pro" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "dEdge",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "Telegram",
            "description": "dEdge is an all-in-one Solana wallet analyzer and copytrading Telegram bot.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Head>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <BotDemo />
        <Testimonials />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
