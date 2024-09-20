import Head from 'next/head';
import Link from 'next/link'; // Import Link for navigation
import Image from 'next/image';
import Navbar from '../components/Navbar';

const Blog = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>Blog - dEdge | Insights on Solana Trading & Tools</title> {/* Updated title for better SEO */}
        <meta name="description" content="Explore dEdge's blog for insights on Solana trading, wallet analysis, and innovative trading tools. Stay updated with the latest trends and tips." /> {/* Enhanced description */}
        <meta name="keywords" content="dEdge, Solana, trading, wallet analysis, cryptocurrency, copy trading, blog" /> {/* Added keywords for SEO */}
        <meta name="robots" content="index, follow" />
      </Head>
      <Navbar />
      <main className="container mx-auto px-6 py-10 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-dark">Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Updated to have 2 columns on medium screens and above */}
          <Link href="/degen-Edge-Tool" className="block p-4 border rounded-lg shadow-lg hover:bg-gray-100">
            <Image src="/images/blog1.webp" alt="Thumbnail" width={340} height={100} className="mb-4 rounded-t-lg" />
            <h2 className="text-xl font-bold text-dark">Introducing dEdge: The Ultimate Degen Edge Tool for Solana Traders</h2>
            <p className="text-light">Learn about the powerful features of dEdge and how it can enhance your trading experience.</p>
          </Link>
          <Link href="/meet-dEdge" className="block p-4 border rounded-lg shadow-lg hover:bg-gray-100">
            <Image src="/images/blog2.webp" alt="Thumbnail" width={340} height={100} className="mb-4 rounded-t-lg" />
            <h2 className="text-xl font-bold text-dark">Meet dEdge: the sophisticated wallet analysis tool on Solana</h2>
            <p className="text-light">Discover how dEdge is revolutionizing Solana trading with advanced wallet analysis.</p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Blog;