const Footer = () => {
    return (
      <footer className="bg-pattern-footer py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-primary">&copy; 2024 dEdge. All rights reserved.</p>
          <div className="mt-4">
            <a 
              href="https://t.me/dEdge_Solana" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-purple-150 hover:text-primary transition duration-300 underline"
            >
              Join our Telegram Group
            </a>
            <a 
              href="https://x.com/dEdge_Solana" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-purple-150 hover:text-primary transition duration-300 underline ml-4"
            >
              Follow us on X
            </a>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
