import Image from 'next/image';

const BotDemo = () => {
  return (
    <section className="py-16 bg-pattern-bot-demo">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="md:w-1/2 max-w-lg">
            <h2 className="text-4xl font-bold mb-6 text-purple-100">It's Time to Become Profitable Copy Trading Wallets on Solana</h2>
            <p className="text-lg text-purple-200 mb-8">
              Experience the power of active monitoring with dEdge Bot. Maximize your insights and
              minimize risks in the volatile crypto market.
            </p>
            <p className="text-lg text-purple-200 mb-8">
              With dEdge's Wallet Analyzer, you can easily analyze Solana addresses, track performance, and identify profitable wallets. Whether you're a beginner or an experienced trader, our tools make it simple to find good wallets to copy trade and start earning.
            </p>
          </div>
          <div className="md:w-1/2 max-w-md mt-8 md:mt-0">
            <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
              <div className="p-2 bg-gray-700">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <Image
                src={'/dedgeBot.gif'}
                width={400}
                height={600}
                alt="dEdge Wallet Analyzer Bot in Action – Analyze Solana Wallets and Find Profitable Traders to Copy Trade"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BotDemo;