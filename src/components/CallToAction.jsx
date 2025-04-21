import { Link } from "react-router-dom";

export default function CallToAction() {
	return (
		<section className="mt-16 py-12 px-4 bg-neutral-200 text-neutral-900 text-center w-full">
			<h2 className="text-3xl font-semibold mb-4">
				Don't Miss Out on the Latest Drops
			</h2>
			<p className="text-md mb-6 text-neutral-700">
				Shop our top-rated products and best deals before they're gone!
			</p>
			<Link
				to="/products"
				className="inline-block bg-neutral-800 hover:bg-black text-white font-semibold text-lg px-6 py-3 rounded-md transition duration-300"
			>
				View Catalog
			</Link>
		</section>
	);
}
