import { Link } from "react-router-dom";

export default function Hero() {
	return (
		<section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 px-6 text-center w-full">
			<h1 className="text-5xl font-bold mb-4">Welcome to Shop Mania</h1>
			<p className="text-lg mb-6 max-w-xl mx-auto">
				Discover unbeatable deals, stylish finds, and everyday essentials all in one place.
			</p>
			<Link
				to="/products"
				className="inline-block bg-white text-blue-600 font-semibold text-lg px-6 py-3 rounded-md shadow hover:bg-neutral-100 transition"
			>
				Browse Products
			</Link>
		</section>
	);
}
