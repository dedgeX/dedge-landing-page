const Hero = () => {
  return (
    <section className="relative py-20 bg-pattern-hero" id="hero">
      <div className="container relative mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-6 text-primary">
          dEdge: Elevate Your Solana Trading Experience
        </h1>
        <p className="text-xl text-secondary mb-10 max-w-2xl mx-auto">
          Unlock unparalleled insights and take your crypto trading to the next level with dEdge—your all-in-one Solana wallet analyzer and copytrading Telegram bot.
        </p>
        <a
          href="https://t.me/dEdge_solana_bot?start=3VYQjy"
          className="bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center hover:bg-blue-600 transition duration-300"
        >
          🚀 Launch dEdge on Telegram
        </a>
      </div>
    </section>
  );
};

export default Hero;
