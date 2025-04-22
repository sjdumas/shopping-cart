import { Link } from "react-router-dom";

export default function CallToAction() {
	return (
		<section className="cta">
			<h2 className="text-3xl font-semibold mb-4">
				Don't Miss Out on the Latest Drops
			</h2>
			<p className="text-md mb-6 text-neutral-700 pb-4">
				Shop our top-rated products and best deals before they're gone!
			</p>
			<Link
				to="/products"
				className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-6 py-3 rounded-md transition duration-300"
			>
				View Products
			</Link>
		</section>
	);
}
