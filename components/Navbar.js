import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-[#1E1E1E] shadow">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image 
            src="/images/dedge-logo.jpeg" 
            alt="dEdge Logo - Your Ultimate Solana Wallet Analyzer" 
            width={40} 
            height={40} 
            className="transition-transform duration-300"
          />
          <Link href="/" className="text-xl font-bold text-[#D0D0D0] hidden ml-2 md:block">dEdge</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="#features" className="text-[#D0D0D0] hover:text-white">Features</Link>
          <Link href="#testimonials" className="text-[#D0D0D0] hover:text-white">Testimonials</Link>
          <Link href="#faq" className="text-[#D0D0D0] hover:text-white">FAQ</Link>
          <Link 
            href="/blog" 
            className="text-[#D0D0D0] hover:text-white">Blog</Link>
          <Link 
            href="https://t.me/dEdge_solana_bot?start=51733" 
            className="text-white font-bold bg-purple-500 px-4 py-2 rounded-lg transition duration-300 hover:bg-purple-600"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'click_telegram_navbar', {
                  'event_category': 'Outbound Link',
                  'event_label': 'Telegram Bot',
                  'transport_type': 'beacon'
                });
              }
            }}
          >
            Launch dEdge
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
