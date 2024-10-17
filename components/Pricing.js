import PricingTable from './PricingTable'

const PricingPage = () => {
  const tiers = [
    {
      name: 'Premium Edge',
      description: 'Perfect for active traders looking to enhance their analysis capabilities with more searches and advanced metrics.',
      price: '0.2 SOL',
      features: [
        'Enhanced search capabilities',
        'Advanced metrics',
        'Priority support',
        'Access to core features'
      ]
    },
    {
      name: 'Ultimate Edge',
      description: 'Ideal for professional traders and analysts requiring unlimited access, advanced features, and exclusive community access for premium networking opportunities.',
      price: '1 SOL',
      features: [
        'Unlimited searches',
        'All advanced features',
        'Exclusive community access',
        'Priority support',
        'Access to core features'
      ]
    },
    {
      name: 'Lifetime Edge',
      description: 'Exclusive offer for dedicated users seeking long-term value, insider benefits, and top-tier connections in the Solana trading world.',
      price: '10 SOL',
      features: [
        'Lifetime access to all features',
        'Insider benefits',
        'Top-tier networking',
        'Priority support',
        'Access to core features'
      ]
    }
  ];

  const discounts = [
    { duration: '3-month', discount: '10%' },
    { duration: '6-month', discount: '15%' },
    { duration: '12-month', discount: '25%' }
  ];

  return (
    <section className="py-20 bg-pattern-pricing">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">dEdge Subscription Benefits</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier, index) => (
            <a 
              key={index} 
              href="https://t.me/dEdge_solana_bot?start=51733"
              className="bg-secondary shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 border-2 border-transparent hover:border-purple-500"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'click_tier', {
                    'event_category': 'Pricing',
                    'event_label': tier.name,
                    'transport_type': 'beacon'
                  });
                }
              }}
            >
              <h2 className="text-2xl font mb-4 text-primary">{tier.name}</h2>
              <p className="text-purple-200 mb-4">{tier.description}</p>
              <p className="text-4xl font-bold text-primary mb-6">{tier.price}</p>
              <ul className="space-y-2">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-purple-200">
                    <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>
        <PricingTable />
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">Subscription Discounts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {discounts.map((discount, index) => (
              <div key={index} className="bg-secondary shadow-lg rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-4 text-primary">{discount.duration} subscription</h3>
                <p className="text-3xl font-bold text-green-400">{discount.discount} off</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-secondary shadow-lg rounded-lg p-6 mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Important Note</h2>
          <p className="text-purple-200">Lifetime Edge is a one-time payment of 10 SOL and therefore is not eligible for discounts.</p>
        </div>

        <div className="text-center">
          <a
            href="https://t.me/dEdge_solana_bot?start=51733"
            className="bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center hover:bg-purple-500 transition duration-300"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'click_upgrade', {
                  'event_category': 'Pricing',
                  'event_label': 'Upgrade Now',
                  'transport_type': 'beacon'
                });
              }
            }}
          >
            🚀 Upgrade Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
