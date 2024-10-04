const Features = () => {
    return (
      <section className="py-20 bg-pattern-features" id="features">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-secondary shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4 text-primary">🚀 Real-Time Wallet Performance Analysis</h3>
              <p className="text-purple-400">Get comprehensive performance summaries of any Solana wallet at your fingertips.</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-secondary shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4 text-primary">🤖 Advanced Copytrading Features</h3>
              <p className="text-purple-400">Mirror the strategies of top-performing traders seamlessly.</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-secondary shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4 text-primary">📊 In-Depth Trade Analytics</h3>
              <p className="text-purple-400">Make informed decisions with detailed trade analysis.</p>
            </div>
            {/* Feature 4 */}
            <div className="bg-secondary shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4 text-primary">🔔 Real-Time Alerts and Notifications</h3>
              <p className="text-purple-400">Stay ahead with instant updates.</p>
            </div>
            {/* Feature 5 */}
            <div className="bg-secondary shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4 text-primary">🛠 User-Friendly Telegram Integration</h3>
              <p className="text-purple-400">Access powerful trading tools without leaving Telegram.</p>
            </div>
            {/* Feature 6 */}
            <div className="bg-secondary shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4 text-primary">🔒 Secure and Reliable</h3>
              <p className="text-purple-400">Your security is our priority.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

export default Features
