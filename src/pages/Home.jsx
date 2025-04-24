import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faLock, faHeadset } from "@fortawesome/free-solid-svg-icons";
import CallToAction from "../components/CallToAction";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Home() {
	const [electronics, setElectronics] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchElectronicsProducts = async () => {
			try {
				const res = await fetch("https://fakestoreapi.com/products/category/electronics");
				const data = await res.json();
				setElectronics(data.slice(0, 4));
				setLoading(false);
			} catch (error) {
				console.error("Failed to fetch electronic products", error);
				setLoading(false);
			}
		};
		fetchElectronicsProducts();
	}, []);

		const [womensClothing, setWomensClothing] = useState([]);
		const [loadingWomens, setLoadingWomens] = useState(true);

		useEffect(() => {
			const fetchWomensClothing = async () => {
				try {
					const res = await fetch("https://fakestoreapi.com/products/category/women's clothing");
					const data = await res.json();
					setWomensClothing(data.slice(0, 4));
					setLoadingWomens(false);
				} catch (error) {
					console.error("Failed to fetch women's clothing", error);
					setLoadingWomens(false);
				}
			};
			fetchWomensClothing();
		}, []);

		const [mensClothing, setMensClothing] = useState([]);
		const [loadingMens, setLoadingMens] = useState(true);

		useEffect(() => {
			const fetchMensClothing = async () => {
				try {
					const res = await fetch("https://fakestoreapi.com/products/category/men's clothing");
					const data = await res.json();
					setMensClothing(data.slice(0, 4));
					setLoadingMens(false);
				} catch (error) {
					console.error("Failed to fetch men's clothing", error);
					setLoadingMens(false);
				}
			};
			fetchMensClothing();
		}, []);

	return (
		<div className="home-landing">
			<Hero />

			{/* Why Shop With Us */}
			<section className="bg-white py-14">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-2xl font-semibold mb-8 pb-5">Why Shop With Us?</h2>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
						<div className="flex flex-col items-center">
							<FontAwesomeIcon icon={faTruck} className="text-4xl text-blue-500 mb-4" />
							<h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
							<p className="text-neutral-600 max-w-xs">Enjoy fast, free shipping on all orders over $50.</p>
						</div>
						<div className="flex flex-col items-center">
							<FontAwesomeIcon icon={faLock} className="text-4xl text-blue-500 mb-4" />
							<h3 className="text-lg font-semibold mb-2">Secure Checkout</h3>
							<p className="text-neutral-600 max-w-xs">Your data is protected with encrypted transactions.</p>
						</div>
						<div className="flex flex-col items-center">
							<FontAwesomeIcon icon={faHeadset} className="text-4xl text-blue-500 mb-4" />
							<h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
							<p className="text-neutral-600 max-w-xs">We’re here to help with your shopping experience.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Electronics */}
			<section className="py-8 text-center">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="section-title">Featured Electronics</h2>
					{loading ? (
						<LoadingSpinner />
					) : (
						<div className="grid-4 mb-10">
							{electronics.map((product) => (
								<ProductCard key={product.id} product={product} />
							))}
						</div>
					)}
				</div>
			</section>

			{/* Featured Men's Clothing */}
			<section className="py-8 text-center">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="section-title">Featured Menswear</h2>
					{loadingMens ? (
						<p className="py-10">Loading fashion picks...</p>
					) : (
						<div className="grid-4 mb-10">
							{mensClothing.map((product) => (
								<ProductCard key={product.id} product={product} />
							))}
						</div>
					)}
				</div>
			</section>

			{/* Featured Women's Clothing */}
			<section className="py-8 text-center">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="section-title">Featured Womenswear</h2>
					{loadingWomens ? (
						<p className="py-10">Loading fashion picks...</p>
					) : (
						<div className="grid-4 mb-10">
							{womensClothing.map((product) => (
								<ProductCard key={product.id} product={product} />
							))}
						</div>
					)}
				</div>
			</section>

			{/* CTA */}
			<CallToAction />
		</div>
	);
};
