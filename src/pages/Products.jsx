import { useEffect, useState } from "react";
import { useCart } from "../components/CartContext";
import ProductCard from "../components/ProductCard";

export default function Products() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [quantities, setQuantities] = useState({});
	const { addToCart } = useCart();

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const res = await fetch("https://fakestoreapi.com/products");
				const data = await res.json();
				setProducts(data);
				const defaultQuantities = {};
				data.forEach((item) => {
					defaultQuantities[item.id] = 1;
				});
				setQuantities(defaultQuantities);
				setLoading(false);
			} catch (error) {
				console.error("Failed to fetch products", error);
				setLoading(false);
			}
		};
		fetchProducts();
	}, []);

	const setQuantity = (id, value) => {
		setQuantities((prev) => ({
			...prev,
			[id]: Math.max(1, value),
		}));
	};

	const handleAddToCart = (product) => {
		addToCart(product, quantities[product.id]);
	};

	if (loading) return <p>Loading products...</p>;

	return (
		<div className="container mx-auto px-4 sm:px-6 py-8">
			<h2 className="text-3xl mb-6">Shop Products</h2>
			<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
				{products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						quantity={quantities[product.id]}
						setQuantity={setQuantity}
						onAdd={handleAddToCart}
					/>
				))}
			</ul>
		</div>
	);
}
