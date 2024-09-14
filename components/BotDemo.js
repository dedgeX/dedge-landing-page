import Image from 'next/image';

const BotDemo = () => {
  return (
    <section className="py-20 bg-pattern-bot-demo">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">dEdge Bot: Unleashed</h2>
        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl rounded-lg overflow-hidden shadow-xl" style={{ paddingTop: '56.25%' }}>
            <Image
              src="https://dedgex.github.io/dedge-landing-page/dedgeBot.gif"
              layout="fill"
              objectFit="contain"
              alt="DedgeBot Demo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BotDemo;