const FAQ = () => {
    return (
      <>
        <section className="py-20 bg-pattern-faq" id="faq">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {/* Existing questions 1-4 */}
              {/* Question 1 */}
              <div className="bg-secondary shadow-lg rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2 text-primary">What is dEdge?</h4>
                <p className="text-purple-200">dEdge is a Telegram bot that provides advanced Solana wallet analysis and copytrading features, allowing users to gain insights and execute trades efficiently.</p>
              </div>
              {/* Question 2 */}
              <div className="bg-secondary shadow-lg rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2 text-primary">How do I start using dEdge?</h4>
                <p className="text-purple-200">Simply click on the &ldquo;Launch dEdge on Telegram&rdquo; button and follow the on-screen instructions to integrate the bot with your Telegram account.</p>
              </div>
              {/* Question 3 */}
              <div className="bg-secondary shadow-lg rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2 text-primary">Is dEdge free to use?</h4>
                <p className="text-purple-200">Right now, dEdge is completely free to use. However, we plan to introduce premium features with paid subscription plans in the near future.</p>
              </div>
              <div className="bg-secondary shadow-lg rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2 text-primary">What trading venues does dEdge support?</h4>
                <p className="text-purple-200">Currently, dEdge supports trading on Pumpfun, Raydium, and Jupiter. We are actively working to add support for other venues in the near future to expand our offerings within the Solana ecosystem.</p>
              </div>
              <div className="bg-secondary shadow-lg rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2 text-primary">Can I use dEdge on mobile devices?</h4>
                <p className="text-purple-200">Yes, dEdge is fully compatible with mobile devices. As it operates through Telegram, you can use it on any device that supports the Telegram app.</p>
              </div>
              <div className="bg-secondary shadow-lg rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2 text-primary">How often is the wallet analysis updated?</h4>
                <p className="text-purple-200">Our wallet analysis is updated in real-time, providing you with the most current information to make informed trading decisions.</p>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
  
  export default FAQ
