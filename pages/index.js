import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import BotDemo from '../components/BotDemo';
import Newsletter from '../components/Newsletter';
import Pricing from '../components/Pricing'
import DocsSection from '../components/Docs'
import WalletTools from '../components/WalletTools'
export default function Home() {
  return (
    <div>
      <Head>
        <title>dEdge - Professional Solana Wallet Analyzer & Tracking Tool</title>
        <meta name="description" content="Analyze any Solana wallet with dEdge's professional wallet analyzer. Track performance metrics, discover top wallets, and get real-time insights for better trading decisions." />
        <meta name="keywords" content="wallet analyzer, Solana wallet tracker, crypto wallet analysis, wallet finder, wallet tracking tool, wallet performance metrics, Solana trading, cryptocurrency analysis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="dEdge - Professional Solana Wallet Analyzer & Tracking Tool" />
        <meta property="og:description" content="Discover and analyze top-performing Solana wallets. Get detailed metrics, track wallet performance, and find profitable trading opportunities with dEdge's advanced wallet analyzer." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://dedge.pro" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="website" />
        <meta name="twitter:site" content="@dEdge_Solana" />
        <link rel="canonical" href="https://dedge.pro" />
        <script type="application/ld+json">
          {`{
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "dEdge",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Telegram",
    "description": "dEdge is an all-in-one advanced Solana wallet analyzer and copytrading Telegram bot.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "url": "https://dedge.pro/",
    "sameAs": [
      "https://t.me/dEdge_Solana",
      "https://t.me/dEdge_solana_bot",
      "https://x.com/dEdge_Solana"
    ],
    "provider": {
      "@type": "Organization",
      "name": "dEdge",
      "url": "https://dedge.pro/",
      "sameAs": [
        "https://t.me/dEdge_Solana",
        "https://x.com/dEdge_Solana"
      ]
    },
    "applicationSubCategory": "Financial Tool and Trading Bot",
    "requirements": "Active Telegram Account",
    "softwareVersion": "1.0",
    "author": {
      "@type": "Organization",
      "name": "dEdge",
      "url": "https://dedge.pro/"
    },
    "potentialAction": {
      "@type": "UseAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://t.me/dEdge_solana_bot",
        "actionPlatform": ["https://schema.org/TelegramPlatform"]
      }
    },
    "about": {
      "@type": "Thing",
      "name": "Solana Trading Bot",
      "description": "Advanced Solana wallet analyzer and copytrading solution on Telegram"
    },
    "featureList": [
      "Real-time Solana wallet analysis",
      "Automated copytrading",
      "Trading edge, signals and alerts",
      "Advanced wallet mapping and tracking",
      "Professional-grade analysis tools"
    ],
    "keywords": "Solana, Trading Bot, Wallet Analyzer, Copy Trading, Crypto Trading, Telegram Bot, dEdge, Cryptocurrency, Solana Trading, memecoins, wallet PnL, wallet analysis",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://dedge.pro/"
    },
    "isAccessibleForFree": true
  }`}
        </script>
      </Head>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <WalletTools />
        <BotDemo />
        <Pricing />
        <DocsSection />
        <Testimonials />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
