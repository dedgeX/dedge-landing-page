const FAQ = () => {
    return (
      <>
        <section className="py-20 bg-pattern-faq" id="faq">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">Frequently Asked Questions About dEdge</h2>
            <div className="space-y-6">
              {/* Question 1 */}
              <div className="bg-secondary shadow-lg rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2 text-primary">What is copy trading?</h4>
                <p className="text-purple-200">Copy trading allows you to automatically replicate the trades of experienced traders. With dEdge, you can follow top-performing wallets on Solana and grow your networth.</p>
              </div>
              {/* Question 2 */}
              <div className="bg-secondary shadow-lg rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2 text-primary">How do I find the best wallets to copy trade on Solana?</h4>
                <p className="text-purple-200">Use dEdge's Wallet Finder tool to analyze Solana addresses and identify consistent, profitable wallets. Our platform provides detailed insights to help you make informed decisions.</p>
              </div>
              {/* Question 3 */}
              <div className="bg-secondary shadow-lg rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2 text-primary">Is dEdge free to use?</h4>
                <p className="text-purple-200">Yes! We offer free tools like the Wallet Finder. For advanced features like Curated Wallets and Alpha Group access, we have subscription plans.</p>
              </div>
              {/* Question 4 */}
              <div className="bg-secondary shadow-lg rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2 text-primary">How does the Wallet Analyzer work?</h4>
                <p className="text-purple-200">Simply input a Solana wallet address into our bot, and we'll fetch its transactions and return a complete summary. It's quick, easy, and packed with actionable insights.</p>
              </div>
              {/* Question 5 */}
              <div className="bg-secondary shadow-lg rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2 text-primary">Can beginners use dEdge?</h4>
                <p className="text-purple-200">Absolutely! dEdge is designed for both beginners and experienced traders. Our intuitive tools make it easy for anyone to start copy trading. If you are new, start by reading our <a href="https://dedge-1.gitbook.io/dedge-sol-analyzer" className="text-primary underline hover:text-primary-light">documentation</a> (it takes 10 minutes and will help you a lot!).</p>
              </div>
              {/* Question 6 */}
              <div className="bg-secondary shadow-lg rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2 text-primary">What is the Tracing tool?</h4>
                <p className="text-purple-200">The Tracing tool compares your wallet's performance with the lead wallet to compare performance and optimize your operation. It helps you understand why your wallet may not be performing as expected.</p>
              </div>
              {/* Question 7 */}
              <div className="bg-secondary shadow-lg rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2 text-primary">How do I join the Alpha Group?</h4>
                <p className="text-purple-200">The Alpha Group is available to subscribers. Once you upgrade, you'll gain access to exclusive insights, weekly wallet updates, and closer contact with the dEdge team.</p>
              </div>
              {/* Question 8 */}
              <div className="bg-secondary shadow-lg rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2 text-primary">What is the Benchmarking Tool for execution bots?</h4>
                <p className="text-purple-200">Our Benchmarking Tool evaluates execution bots to identify the fastest and most reliable options. Weekly reports help you stay ahead of the competition.</p>
              </div>
              {/* Question 9 */}
              <div className="bg-secondary shadow-lg rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2 text-primary">Does dEdge offer an API?</h4>
                <p className="text-purple-200">Yes! Our Solana Wallet Analysis API provides developers with tools to analyze trading performance and patterns of Solana wallets in batches. Perfect for advanced users and integrations. <a href="https://dedge-1.gitbook.io/dedge-sol-analyzer" className="text-primary underline hover:text-primary-light">Read the documentation</a>.</p>
              </div>
            </div>
            
            {/* Final CTA */}
            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold mb-6 text-primary">Why Wait to Start Copying the Best Traders on Solana?</h2>
              <a 
                href="https://t.me/dEdge_solana_bot?start=51733" 
                className="bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center hover:bg-purple-500 transition duration-300"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'click_telegram', {
                      'event_category': 'Outbound Link',
                      'event_label': 'Start Copy Trading with dEdge Now! (FAQ)',
                      'transport_type': 'beacon'
                    });
                  }
                }}
              >
                👉 Start Copy Trading with dEdge Now!
              </a>
            </div>
          </div>
        </section>
      </>
    )
  }
  
  export default FAQ
