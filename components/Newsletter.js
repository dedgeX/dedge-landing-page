import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Subscribing...');
    try {
      const response = await fetch('https://formspree.io/f/mgvwbjjq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('Thanks for subscribing!');
        setEmail('');
      } else {
        setStatus('An error occurred. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <section className="py-20 bg-pattern-newsletter">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-primary">Stay Ahead of the Game</h2>
        <p className="text-xl text-purple-200 mb-10 max-w-2xl mx-auto">
          Don't miss out on the hottest copytrading wallets and Solana network updates! Subscribe to our newsletter and gain a competitive edge in the fast-paced world of crypto trading.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-r-lg hover:bg-blue-600 transition duration-300"
            >
              Subscribe
            </button>
          </div>
          {status && <p className="mt-4 text-secondary">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Newsletter;