import { Link } from "react-router-dom";

export default function Hero() {
	return (
		<section className="hero">
			<h1 className="text-5xl font-bold mb-4">Welcome to Shopper's Delight</h1>
			<p className="text-lg mb-6 max-w-xl mx-auto">
				Discover cool finds, unbeatable deals, and everyday essentials all in one place.
			</p>
			<Link
				to="/products"
				className="hero-button"
			>
				Browse Products
			</Link>
		</section>
	);
}
