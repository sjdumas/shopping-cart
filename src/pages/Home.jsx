import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faLock, faHeadset } from "@fortawesome/free-solid-svg-icons";
import CallToAction from "../components/CallToAction";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";

export default function Home() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const res = await fetch("https://fakestoreapi.com/products");
				const data = await res.json();
				setProducts(data.slice(0, 4));
				setLoading(false);
			} catch (error) {
				console.error("Failed to fetch products", error);
				setLoading(false);
			}
		};
		fetchProducts();
	}, []);

	return (
		<div className="home-landing">
			{/* Full-width hero */}
			<Hero />

			{/* CENTERED: Featured products */}
			<section className="py-16 text-center">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="section-title">Featured Products</h2>
					{loading ? (
						<p className="py-10">Loading featured products...</p>
					) : (
						<div className="grid-4 mb-10">
							{products.map((product) => (
								<ProductCard key={product.id} product={product} />
							))}
						</div>
					)}
				</div>
			</section>

			{/* CENTERED: Why Shop With Us */}
			<section className="bg-neutral-100 py-14">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h3 className="text-2xl font-semibold mb-8">Why Shop With Us?</h3>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
						<div className="flex flex-col items-center">
							<FontAwesomeIcon icon={faTruck} className="text-4xl text-blue-500 mb-4" />
							<h4 className="text-lg font-semibold mb-2">Free Shipping</h4>
							<p className="text-sm text-neutral-600 max-w-xs">Enjoy fast, free shipping on all orders over $50.</p>
						</div>
						<div className="flex flex-col items-center">
							<FontAwesomeIcon icon={faLock} className="text-4xl text-blue-500 mb-4" />
							<h4 className="text-lg font-semibold mb-2">Secure Checkout</h4>
							<p className="text-sm text-neutral-600 max-w-xs">Your data is protected with encrypted transactions.</p>
						</div>
						<div className="flex flex-col items-center">
							<FontAwesomeIcon icon={faHeadset} className="text-4xl text-blue-500 mb-4" />
							<h4 className="text-lg font-semibold mb-2">24/7 Support</h4>
							<p className="text-sm text-neutral-600 max-w-xs">We’re here to help with your shopping experience.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Full-width CTA */}
			<CallToAction />
		</div>
	);
}
