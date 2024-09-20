import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar'; // Import the Navbar component

const Blog = () => {
    return (
      <div className="bg-white"> {/* Set the background to white */}
        <Head>
          <title>Comprehensive Guide to Copy Trading</title>
          <meta name="description" content="A comprehensive guide to copy trading in the cryptocurrency world." />
          <meta name="keywords" content="copy trading, cryptocurrency, trading strategies, dEdge" /> {/* Added keywords for SEO */}
          <meta name="author" content="dEdge Team" /> {/* Added author meta tag */}
          <link rel="canonical" href="https://dedge.pro/copytrading" /> {/* Added canonical link */}
          <script type="application/ld+json"> {/* Added structured data for SEO */}
            {`
              {
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "Comprehensive Guide to Copy Trading",
                "author": {
                  "@type": "Organization",
                  "name": "dEdge Team"
                },
                "datePublished": "2023-10-01",
                "image": "/images/blog1.jpg",
                "description": "A comprehensive guide to copy trading in the cryptocurrency world."
              }
            `}
          </script>
        </Head>
        <Navbar /> {/* Include the Navbar */}
        <main className="container mx-auto px-6 py-10 max-w-3xl"> {/* Set max width for generous margins */}
          <div className="relative mb-6">
          <Image 
              src="/images/blog1.jpg" // Replace with your header image path
              alt="dEdge Blog Header"
              layout="responsive"
              width={1200}
              height={400}
              className="rounded-lg shadow-lg"
          />
          </div>
          <h1 className="text-5xl font-bold mb-6 text-gray-900 text-left">Comprehensive Guide to Copy Trading</h1>
          
          <h2 className="text-2xl font-bold mt-6 text-gray-900 text-left">Introduction to Copy Trading</h2>
          <p className="text-gray-800 mb-4 text-left text-lg">Copy trading is an innovative feature in the cryptocurrency world that allows traders to automatically replicate the trading actions of experienced and successful traders. This approach offers several benefits:</p>
          <ul className="list-disc ml-6 mb-4 text-left text-lg">
            <li className="text-gray-800 mb-4">Leverage expertise: Benefit from the knowledge and strategies of seasoned traders.</li>
            <li className="text-gray-800 mb-4">Time-saving: Automate your trading activities without constant market monitoring.</li>
            <li className="text-gray-800 mb-4">Learning opportunity: Observe and understand successful trading patterns.</li>
            <li className="text-gray-800 mb-4">Diversification: Easily diversify your trading strategy by following multiple traders.</li>
          </ul>
          <p className="text-gray-800 mb-4 text-left text-lg">However, it's crucial to understand that copy trading also carries risks and requires careful consideration and monitoring.</p>
          
          <h2 className="text-2xl font-bold mt-6 text-gray-900 text-left">Activating and Accessing Copy Trading</h2>
          <p className="text-gray-800 mb-4 text-left text-lg">To get started with copy trading:</p>
          <ol className="list-decimal ml-6 mb-4 text-left text-lg">
            <li className="text-gray-800 mb-4">Switch to Advanced Mode: Ensure your trading bot is set to Advanced Mode to unlock sophisticated features, including copy trading.</li>
            <li className="text-gray-800 mb-4">Access the Copy Trading Module: Navigate to the main menu and enter the copy trading module. This is your central hub for all copy trading activities.</li>
            <li className="text-gray-800 mb-4">Familiarize yourself with the interface: Take time to explore the various options and settings available in the copy trading module.</li>
          </ol>
  
          <h2 className="text-2xl font-bold mt-6 text-gray-900 text-left">Setting Up New Copy Trades</h2>
          <p className="text-gray-800 mb-4 text-left text-lg">When setting up a new copy trade:</p>
          <h3 className="text-lg font-semibold mt-4 text-gray-900 text-left">Add a New Trader:</h3>
          <p className="text-gray-800 mb-4 text-left text-lg">Click 'New' or 'Add' to begin the process of adding a wallet to copy. Assign a unique tag to easily identify and manage multiple strategies or traders.</p>
          <h3 className="text-lg font-semibold mt-4 text-gray-900 text-left">Enter Wallet Address:</h3>
          <p className="text-gray-800 mb-4 text-left text-lg">Input the address of the trader you wish to copy. Ensure the wallet is known for legitimate trading activities.</p>
          <h3 className="text-lg font-semibold mt-4 text-gray-900 text-left">Configure Copy Trade Options:</h3>
          <p className="text-gray-800 mb-4 text-left text-lg">Decide whether to replicate sell orders and consider AutoSell integration based on your own profit targets and risk thresholds.</p>
  
          <h2 className="text-2xl font-bold mt-6 text-gray-900 text-left">Managing and Monitoring Copy Trades</h2>
          <p className="text-gray-800 mb-4 text-left text-lg">Effective management of your copy trades is crucial for success:</p>
          <h3 className="text-lg font-semibold mt-4 text-gray-900 text-left">Copy Trading Dashboard:</h3>
          <p className="text-gray-800 mb-4 text-left text-lg">This is your central control panel, listing all wallets you're currently copying.</p>
  
          <h2 className="text-2xl font-bold mt-6 text-gray-900 text-left">Copy Trading Limitations</h2>
          <p className="text-gray-800 mb-4 text-left text-lg">Understanding the limitations of copy trading is essential:</p>
          
          <h2 className="text-2xl font-bold mt-6 text-gray-900 text-left">FAQ and Troubleshooting</h2>
          <p className="text-gray-800 mb-4 text-left text-lg">Common issues and their solutions:</p>
  
          <h2 className="text-2xl font-bold mt-6 text-gray-900 text-left">Introducing dEdge: Elevating Your Copy Trading Experience</h2>
          <p className="text-gray-800 mb-4 text-left text-lg">For traders seeking a more sophisticated and user-friendly copy trading experience, dEdge offers a comprehensive solution.</p>
          <p className="text-gray-800 mb-4 text-left text-lg">To get started with dEdge and take your copy trading to the next level, check out our official channels:</p>
          <ul className="list-disc ml-6 mb-4 text-left text-lg">
            <li className="text-gray-800 mb-4">Bot: <a href="https://t.me/dEdge_solana_bot">https://t.me/dEdge_solana_bot</a></li>
            <li className="text-gray-800 mb-4">Telegram Group: <a href="https://t.me/dEdge_solana">https://t.me/dEdge_solana</a></li>
            <li className="text-gray-800 mb-4">Twitter: <a href="https://x.com/dEdge_Solana">https://x.com/dEdge_Solana</a></li>
            <li className="text-gray-800 mb-4">Website: <a href="https://dedge.pro/">https://dedge.pro/</a></li>
          </ul>
                  {/* Author Section */}
        <div className="mt-10 p-4 bg-gray-100 rounded-lg shadow-md">
          <h3 className="font-semibold text-gray-900">About the Author</h3>
          <p className="text-gray-700">Written by the dEdge Team, passionate about empowering traders in the Solana ecosystem.</p>
        </div>

        </main>
      </div>
    );
  };
  
  export default Blog;