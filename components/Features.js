const Features = () => {
    return (
      <section className="relative py-12 bg-pattern" id="features">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-6 text-primary">All You Need to Make Money with Copy Trading</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-secondary shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4 text-primary">Wallet Finder</h3>
              <p className="text-purple-400">Find profitable wallets to copy trade for free. Get wallets at the ease of a click.</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-secondary shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4 text-primary">Curated Wallets</h3>
              <p className="text-purple-400">Access premium, handpicked wallets designed for higher profitability.</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-secondary shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4 text-primary">Custom Filters</h3>
              <p className="text-purple-400">Define your own criteria to filter wallets based on performance, ROI, and trading patterns.</p>
            </div>
            {/* Feature 4 */}
            <div className="bg-secondary shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4 text-primary">Tracing: Copytrade Analysis Tool</h3>
              <p className="text-purple-400">Compare your wallet's performance with the lead wallet to diagnose issues and optimize results.</p>
            </div>
            {/* Feature 5 */}
            <div className="bg-secondary shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4 text-primary">Alpha Group Access</h3>
              <p className="text-purple-400">Join an exclusive community where you'll receive weekly updates on ~300 selected wallets and insider alpha.</p>
            </div>
            {/* Feature 6 */}
            <div className="bg-secondary shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4 text-primary">Benchmarking Tool for Execution Bots</h3>
              <p className="text-purple-400">Weekly reports on transaction speeds and landing rates help you identify the best bots for maximum efficiency.</p>
            </div>
            {/* Feature 7 */}
            <div className="bg-secondary shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4 text-primary">Developer-Friendly API</h3>
              <p className="text-purple-400">Our Solana Wallet Analysis API provides comprehensive tools for analyzing trading performance and patterns of Solana wallets in batches.</p>
              <p className="text-purple-400"><a href="https://dedge-1.gitbook.io/dedge-sol-analyzer" className="text-primary underline hover:text-primary-light">Read the documentation</a></p>
            </div>
            {/* Feature 8 */}
            <div className="bg-secondary shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4 text-primary">Professional-Grade Analytics</h3>
              <p className="text-purple-400">Built with the precision of a quantitative trading desk, our wallet analyzer delivers reliable, data-driven metrics. Eliminates the noise of unreliable signals and focus on wallets that drive consistent profits.</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <a
            href="https://t.me/dEdge_solana_bot?start=51733"
            className="bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center hover:bg-purple-500 transition duration-300"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'click_telegram', {
                  'event_category': 'Outbound Link',
                  'event_label': 'Launch dEdge on Telegram (Hero)',
                  'transport_type': 'beacon'
                });
              }
            }}
          >
            Find wallets to copy trade now!
          </a>
        </div>
      </section>
    )
  }

export default Features
