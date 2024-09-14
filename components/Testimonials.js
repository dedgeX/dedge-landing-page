const Testimonials = () => {
	const testimonials = [
		{
			name: "Alex Thompson",
			role: "Crypto Trader",
			content: "dEdge has revolutionized my trading strategy. The real-time wallet analysis is a game-changer!"
		},
		{
			name: "Sarah Lee",
			role: "Blockchain Developer",
			content: "As a developer, I appreciate the technical depth dEdge provides. It's an essential tool for anyone serious about Solana trading."
		},
		{
			name: "Michael Chen",
			role: "Investment Analyst",
			content: "The copytrading feature on dEdge has significantly improved my portfolio performance. Highly recommended!"
		}
	];

	return (
		<section className="py-20 bg-pattern-testimonials">
			<div className="container mx-auto px-6">
				<h2 className="text-4xl font-bold text-center mb-12 text-primary">What Our Users Say</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<div key={index} className="bg-secondary shadow-lg rounded-lg p-6">
							<p className="text-secondary mb-4">&ldquo;{testimonial.content}&rdquo;</p>
							<div className="font-semibold text-primary">{testimonial.name}</div>
							<div className="text-sm text-secondary">{testimonial.role}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Testimonials
