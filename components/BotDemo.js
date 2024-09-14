import Image from 'next/image';

const BotDemo = () => {
  return (
    <section className="py-20 bg-pattern-bot-demo">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">dEdge Bot: Unleashed</h2>
        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/dedgeBot.gif"
              alt="dEdge Bot Demo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BotDemo;