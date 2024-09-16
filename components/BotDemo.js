import Image from 'next/image';

const BotDemo = () => {
  return (
    <section className="py-16 bg-pattern-bot-demo">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="md:w-1/2 max-w-lg">
            <h1 className="text-4xl font-bold mb-6 text-purple-100">dEdge Bot: Unleashed</h1>
            <p className="text-lg text-purple-200 mb-8">
              Experience the power of active monitoring with dEdge Bot. Maximize your insights and
              minimize risks in the volatile crypto market.
            </p>
            <ul className="space-y-4 text-purple-200">
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Advanced MONITORING
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Comprehensive WALLET ANALYZER
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Real-time market insights
              </li>
            </ul>
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
                alt="DedgeBot Demo"
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