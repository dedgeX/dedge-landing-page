const PricingTable = () => {
  return (
    <div className="w-full font-sans">
      <div className="w-[70%] mx-auto overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-900">
              <th className="py-3 px-4 border-b border-gray-700 text-left text-xs font-medium text-gray-400 uppercase tracking-wider rounded-tl-lg">Feature</th>
              <th className="py-3 px-4 border-b border-gray-700 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Free</th>
              <th className="py-3 px-4 border-b border-gray-700 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Premium Edge</th>
              <th className="py-3 px-4 border-b border-gray-700 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Ultimate Edge</th>
              <th className="py-3 px-4 border-b border-gray-700 text-left text-xs font-medium text-gray-400 uppercase tracking-wider rounded-tr-lg">Lifetime Edge</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-gray-300">Wallet Searches</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-gray-300">15 at once then 3/day</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-gray-300">20/day</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-gray-300">Unlimited</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-gray-300">Unlimited</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-gray-300">Basic Analysis</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-green-500">✅</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-green-500">✅</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-green-500">✅</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-green-500">✅</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-gray-300">Advanced Metrics</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-red-500">❌</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-green-500">✅</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-green-500">✅</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-green-500">✅</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-gray-300">Historical Data</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-gray-300">30 days</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-gray-300">6 months</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-gray-300">12 months</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-gray-300">12 months</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-gray-300">API Access</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-red-500">❌</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-red-500">❌</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-green-500">✅</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-green-500">✅</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-gray-300">Priority Processing</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-red-500">❌</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-green-500">✅</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-green-500">✅</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-green-500">✅</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-gray-300">Exclusive Reports</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-red-500">❌</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-gray-300">Monthly</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-gray-300">Weekly</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-gray-300">Weekly</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-gray-300">Exclusive Degen Group</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-red-500">❌</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-red-500">❌</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-green-500">✅</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-green-500">✅</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-gray-300">Expert Consulting Call</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-red-500">❌</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-red-500">❌</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-gray-300">45 min (first 10 subscribers)</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-gray-300">3x 45 min calls</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-gray-300">Alpha Access</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-red-500">❌</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-red-500">❌</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-red-500">❌</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-green-500">✅</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-gray-300">Number of Licenses</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-gray-300">Unlimited</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-gray-300">Unlimited</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-gray-300">Unlimited</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-gray-300">Only 3 available</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-gray-300">Price</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-gray-300 font-bold">Free</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-gray-300 font-bold">0.2 SOL per month</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-gray-300 font-bold">1 SOL per month</td>
              <td className="py-2 px-4 border-b border-gray-700 text-sm text-gray-300 font-bold">10 SOL (one-time)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingTable;
