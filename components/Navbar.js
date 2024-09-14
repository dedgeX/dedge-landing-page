import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-[#1E1E1E] shadow">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/images/dedge-logo.jpeg" alt="dEdge Logo" width={40} height={40} />
          <a href="#" className="text-xl font-bold text-[#D0D0D0] ml-2">dEdge</a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#features" className="text-[#D0D0D0] hover:text-white">Features</a>
          <a href="#testimonials" className="text-[#D0D0D0] hover:text-white">Testimonials</a>
          <a href="#faq" className="text-[#D0D0D0] hover:text-white">FAQ</a>
          <a href="https://t.me/dEdge_solana_bot?start=3VYQjy" className="text-[#D0D0D0] hover:text-white bg-blue-500 px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-600">Launch dEdge</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
