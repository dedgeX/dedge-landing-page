import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SolanaWalletAnalyzer() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Head>
        <title>Dedge: The Leading Solana Wallet Analyzer for On-Chain Insights</title>
        <meta 
          name="description" 
          content="Discover real-time on-chain data, track wallet performance, and optimize your Solana strategy with Dedge's powerful Solana wallet analyzer."
        />
        <meta name="keywords" content="Solana wallet analyzer, analyze Solana wallet, Sol wallet analytics, Solana on-chain data, Solana wallet tracker" />
        <link rel="canonical" href="https://dedge.pro/solana-wallet-analyzer" />
        <meta property="og:title" content="Dedge - The Leading Solana Wallet Analyzer for On-Chain Insights" />
        <meta property="og:description" content="Discover real-time on-chain data, track wallet performance, and optimize your Solana strategy with Dedge's powerful Solana wallet analyzer." />
        <meta property="og:url" content="https://dedge.pro/solana-wallet-analyzer" />
        <meta property="og:type" content="website" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            The Ultimate <span className="text-purple-500">Solana Wallet Analyzer</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Get comprehensive insights into any Solana wallet with real-time on-chain data analysis
          </p>
          <a 
            href="https://t.me/dEdge_solana_bot?start=51733" 
            className="text-white font-bold bg-purple-500 px-6 py-3 rounded-lg transition duration-300 hover:bg-purple-600 text-lg"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'click_telegram_analyzer_page', {
                  'event_category': 'Outbound Link',
                  'event_label': 'Telegram Bot from Analyzer Page',
                  'transport_type': 'beacon'
                });
              }
            }}
          >
            Analyze Any Solana Wallet Now
          </a>
        </section>

        {/* What is a Solana Wallet Analyzer */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">What is a Solana Wallet Analyzer?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-4">
                A Solana wallet analyzer is a powerful tool that examines on-chain data to provide insights into wallet activity, token holdings, transaction history, and performance metrics on the Solana blockchain.
              </p>
              <p className="text-gray-300 mb-4">
                Dedge's Solana wallet analyzer goes beyond basic blockchain explorers by offering advanced analytics, performance tracking, and actionable insights that help you make informed decisions about your Solana investments.
              </p>
              <p className="text-gray-300">
                Whether you're tracking your own wallet, researching potential investments, or monitoring whale activity, our Solana wallet analyzer provides the comprehensive data you need in an easy-to-understand format.
              </p>
            </div>
            <div className="bg-[#1E1E1E] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Key Features of Our Solana Wallet Analyzer</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span>Real-time token holdings and valuations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span>Historical performance tracking and ROI calculations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span>Transaction history with detailed breakdowns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span>NFT portfolio analysis and valuation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span>DeFi protocol interactions and positions</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">How Our Solana Wallet Analyzer Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1E1E1E] p-6 rounded-lg">
              <div className="text-purple-500 text-4xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Enter Any Solana Wallet Address</h3>
              <p className="text-gray-300">
                Simply paste any Solana wallet address into our analyzer. No registration required, and your privacy is always protected.
              </p>
            </div>
            <div className="bg-[#1E1E1E] p-6 rounded-lg">
              <div className="text-purple-500 text-4xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Get Instant On-Chain Analysis</h3>
              <p className="text-gray-300">
                Our powerful algorithms scan the Solana blockchain and compile comprehensive data about the wallet's activity and holdings.
              </p>
            </div>
            <div className="bg-[#1E1E1E] p-6 rounded-lg">
              <div className="text-purple-500 text-4xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Review Detailed Insights</h3>
              <p className="text-gray-300">
                Explore easy-to-understand reports showing token holdings, transaction history, performance metrics, and more.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Why Use a Solana Wallet Analyzer?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1E1E1E] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">For Investors</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Track your portfolio performance over time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Analyze your trading patterns and improve strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Monitor gas fees and optimize transaction timing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Discover new tokens and investment opportunities</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#1E1E1E] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">For Researchers</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Study whale wallet behavior and token movements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Verify project team token holdings and transactions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Identify patterns in successful trading strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Track protocol adoption and user engagement</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16 bg-gradient-to-r from-purple-900 to-purple-600 p-10 rounded-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Analyze Any Solana Wallet?</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Get started with Dedge's powerful Solana wallet analyzer today and unlock valuable insights into on-chain activity.
          </p>
          <a 
            href="https://t.me/dEdge_solana_bot?start=51733" 
            className="text-purple-600 font-bold bg-white px-6 py-3 rounded-lg transition duration-300 hover:bg-gray-100 text-lg"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'click_telegram_analyzer_cta', {
                  'event_category': 'Outbound Link',
                  'event_label': 'Telegram Bot from CTA',
                  'transport_type': 'beacon'
                });
              }
            }}
          >
            Launch Solana Wallet Analyzer
          </a>
        </section>

        {/* FAQ Section with Schema */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions About Solana Wallet Analysis</h2>
          <div className="space-y-6">
            <div className="bg-[#1E1E1E] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">What information can I see with a Solana wallet analyzer?</h3>
              <p className="text-gray-300">
                With Dedge's Solana wallet analyzer, you can view token holdings, transaction history, historical performance, NFT collections, DeFi positions, and much more. Our comprehensive analysis provides both high-level overviews and detailed breakdowns of on-chain activity.
              </p>
            </div>
            <div className="bg-[#1E1E1E] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Is it safe to use a Solana wallet analyzer?</h3>
              <p className="text-gray-300">
                Yes, Dedge's Solana wallet analyzer is completely safe. We only read public on-chain data and never request private keys or sensitive information. Our tool is non-custodial, meaning we never have access to your funds or the ability to make transactions.
              </p>
            </div>
            <div className="bg-[#1E1E1E] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">How accurate is the data from a Solana wallet analyzer?</h3>
              <p className="text-gray-300">
                Our Solana wallet analyzer pulls data directly from the blockchain and trusted price oracles, ensuring high accuracy. We update information in real-time and maintain connections with multiple data sources to provide the most reliable analytics possible.
              </p>
            </div>
            <div className="bg-[#1E1E1E] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Can I analyze any Solana wallet or just my own?</h3>
              <p className="text-gray-300">
                You can analyze any public Solana wallet address using our tool. This includes your own wallets, project team wallets, whale addresses, or any other public address on the Solana blockchain. Simply enter the wallet address to begin analysis.
              </p>
            </div>
            <div className="bg-[#1E1E1E] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">How does Dedge's Solana wallet analyzer compare to blockchain explorers?</h3>
              <p className="text-gray-300">
                While blockchain explorers show raw transaction data, Dedge's Solana wallet analyzer interprets this data to provide meaningful insights. We calculate performance metrics, identify patterns, track historical values, and present information in an easy-to-understand format that helps you make informed decisions.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* FAQ Schema for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What information can I see with a Solana wallet analyzer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "With Dedge's Solana wallet analyzer, you can view token holdings, transaction history, historical performance, NFT collections, DeFi positions, and much more. Our comprehensive analysis provides both high-level overviews and detailed breakdowns of on-chain activity."
            }
          },
          {
            "@type": "Question",
            "name": "Is it safe to use a Solana wallet analyzer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Dedge's Solana wallet analyzer is completely safe. We only read public on-chain data and never request private keys or sensitive information. Our tool is non-custodial, meaning we never have access to your funds or the ability to make transactions."
            }
          },
          {
            "@type": "Question",
            "name": "How accurate is the data from a Solana wallet analyzer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our Solana wallet analyzer pulls data directly from the blockchain and trusted price oracles, ensuring high accuracy. We update information in real-time and maintain connections with multiple data sources to provide the most reliable analytics possible."
            }
          },
          {
            "@type": "Question",
            "name": "Can I analyze any Solana wallet or just my own?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can analyze any public Solana wallet address using our tool. This includes your own wallets, project team wallets, whale addresses, or any other public address on the Solana blockchain. Simply enter the wallet address to begin analysis."
            }
          },
          {
            "@type": "Question",
            "name": "How does Dedge's Solana wallet analyzer compare to blockchain explorers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While blockchain explorers show raw transaction data, Dedge's Solana wallet analyzer interprets this data to provide meaningful insights. We calculate performance metrics, identify patterns, track historical values, and present information in an easy-to-understand format that helps you make informed decisions."
            }
          }
        ]
      })}} />
    </div>
  );
} 