import Image from 'next/image'

const WalletTools = () => {
  return (
    <section className="py-20 bg-pattern-wallet-tools" id="wallet-tools">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Advanced Wallet Analysis Tools</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Smart Wallet Finder */}
          <div className="bg-secondary shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-4 text-primary">🔍 Smart Wallet Finder</h3>
            <p className="text-purple-400 mb-4">Discover high-performing wallets based on your specific criteria:</p>
            <ul className="space-y-3 text-purple-400">
              <li>Filter by trading volume, win rate, and ROI</li>
              <li>Track historical performance patterns</li>
              <li>Identify emerging trading strategies</li>
            </ul>
          </div>

          {/* Curated Wallets */}
          <div className="bg-secondary shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-4 text-primary">📋 Curated Wallet Lists</h3>
            <p className="text-purple-400 mb-4">Access our professionally curated lists of top-performing wallets:</p>
            <ul className="space-y-3 text-purple-400">
              <li>Daily updated top performers</li>
              <li>Strategy-specific wallet collections</li>
              <li>Detailed performance metrics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WalletTools