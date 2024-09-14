import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import BotDemo from '../components/BotDemo';

export default function Home() {
  return (
    <div>
      <Head>
        <title>dEdge - Elevate Your Solana Trading Experience</title>
        <meta name="description" content="dEdge: Your all-in-one Solana wallet analyzer and copytrading Telegram bot." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <BotDemo />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
