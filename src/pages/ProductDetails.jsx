import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../components/CartContext";
import LoadingSpinner from "../components/LoadingSpinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

export default function ProductDetails() {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const [quantity, setQuantity] = useState(1);
	const { addToCart } = useCart();

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const res = await fetch(`https://fakestoreapi.com/products/${id}`);
				const data = await res.json();
				setProduct(data);
				setLoading(false);
			} catch (error) {
				console.log("Failed to fetch product", error);
				setLoading(false);
			}
		};
		fetchProduct();
	}, [id]);
	

	if (loading) return <LoadingSpinner />;
	if (!product) return <p className="py-20 text-center">Product not found.</p>;

	return (
		<div className="product-details-bg">
			<div className="product-details">
				<div className="flex flex-col md:flex-row gap-8">
					<img src={product.image} alt={product.title} className="w-64 h-64 object-contain mx-auto" />
					<div className="flex-1 text-left">
						<h2 className="font-semibold mb-4">{product.title}</h2>
						<h3>${product.price}</h3>
						<p className="text-sm text-neutral-600 mb-6">{product.description}</p>
						<div className="qty-controls">
							<button
								onClick={() => setQuantity(Math.max(1, quantity - 1))}
								className="px-2 py-1 bg-gray-200 rounded"
							>
								<FontAwesomeIcon icon={faMinus} />
							</button>
							<input
								type="number"
								min="1"
								value={quantity}
								onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
								className="w-16 text-center border border-gray-300 rounded"
							/>
							<button
								onClick={() => setQuantity(quantity + 1)}
								className="px-2 py-1 bg-gray-200 rounded"
							>
								<FontAwesomeIcon icon={faPlus} />
							</button>
						</div>
						<button
							onClick={() => addToCart(product, quantity)}
							className="add-button"
						>
							Add to Cart
						</button>
						<div className="view-products">
							<Link to="/products" className="text-blue-600 hover:underline text-base mb-6 inline-block">
								<FontAwesomeIcon icon={faArrowLeftLong} /> Back to Products
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
