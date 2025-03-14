const Hero = () => {
  return (
    <section className="relative py-20 bg-pattern-hero" id="hero">
      <div className="container relative mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-4 text-primary text-purple-150">
          Looking for the Best Wallets to Copy Trade on Solana?
        </h1>
        <h2 className="text-3xl font-bold mb-10 text-purple-150">
          Trade Smarter, Not Harder. Find the Best Traders to Copy Trade. The Easiest Way to Analyze and Track Wallets on Solana.
        </h2>
        <a
          href="https://t.me/dEdge_solana_bot?start=51733"
          className="bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center hover:bg-purple-500 transition duration-300"
          onClick={() => {
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'click_telegram', {
                'event_category': 'Outbound Link',
                'event_label': 'Launch dEdge on Telegram (Hero)',
                'transport_type': 'beacon'
              });
            }
          }}
        >
          Launch dEdge on Telegram
        </a>
      </div>
    </section>
  );
};

export default Hero;
