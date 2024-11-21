const Testimonials = () => {
	const testimonials = [
		{
			name: "Jessica Martinez",
			role: "Professional Trader",
			content: "dEdge has completely transformed my trading on Solana. The in-depth wallet analysis gives me insights I never thought possible. It's like having a secret weapon in the market!"
		},
		{
			name: "Liam O'Sullivan",
			role: "Crypto Enthusiast",
			content: "Before dEdge, I felt like I was trading blind. Now, with full visibility into wallet activities, I can anticipate market movements and make informed decisions. It's a game-changer!"
		},
		{
			name: "Emily Wang",
			role: "DeFi Strategist",
			content: "The copytrading feature on dEdge is a revelation. Mirroring the strategies of top traders has taken my portfolio to the next level. It's an indispensable tool for serious traders."
		},
		{
			name: "Ahmed Khan",
			role: "Blockchain Educator",
			content: "dEdge isn't just a tool; it's a learning platform. The analytics provided have deepened my understanding of blockchain behaviors on Solana. I recommend it to all my students and colleagues."
		}
	];

	return (
		<section id="testimonials" className="py-20 bg-pattern-testimonials">
			<div className="container mx-auto px-6">
				<h2 className="text-4xl font-bold text-center mb-12 text-primary">What Our Users Say</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<div key={index} className="bg-secondary shadow-lg rounded-lg p-6">
							<p className="text-purple-200 mb-4">&ldquo;{testimonial.content}&rdquo;</p>
							<div className="font-semibold text-primary">{testimonial.name}</div>
							<div className="text-sm text-purple-200">{testimonial.role}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Testimonials
