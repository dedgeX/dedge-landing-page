const DocsSection = () => {
    return (
      <section id="docs" className="py-20 bg-pattern-docs">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Documentation</h2>
          <div className="bg-secondary shadow-lg rounded-sm p-4">
            <p className="mt-4 text-purple-200">
              Explore our comprehensive documentation to unlock the full potential of dEdge's Solana Wallet Analyzer. Whether you're a developer looking to integrate our services or a trader seeking deeper insights, our documentation provides all the tools you need.
            </p>
            <p className="mt-2 text-purple-200">
              Our documentation includes detailed guides on using the Wallet Batch API, understanding key performance metrics, and leveraging our tools for copy trading. With our resources, you can make informed decisions and enhance your trading strategies.
            </p>
            <a 
              href="https://dedge-1.gitbook.io/dedge-sol-analyzer-api" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-6 inline-block bg-purple-500 text-white font-bold py-3 px-6 rounded-lg transition duration-300 hover:bg-purple-600"
            >
              View Docs
            </a>
          </div>
        </div>
      </section>
    );
};

export default DocsSection;