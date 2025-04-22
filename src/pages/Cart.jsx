import { useCart } from "../components/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
	const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();

	const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

	return (
		<div className="cart-container">
			<h2 className="text-3xl mb-6 pb-5">Your Cart</h2>
			{cartItems.length === 0 ? (
				<p className="text-lg">Your cart is empty.</p>
			) : (
				<>
					<ul className="space-y-4 mb-6">
						{cartItems.map((item) => (
							<li key={item.id} className="cart-item">
								<img src={item.image} alt={item.title} />
								<div className="flex-1">
									<h3>{item.title}</h3>
									<p className="text-neutral-600 mb-2">
										${item.price} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
									</p>
									<div className="flex items-center gap-3">
										<button
											onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
											aria-label="Decrease quantity"
											className="px-2 py-1 bg-gray-200 rounded"
										>
											<FontAwesomeIcon icon={faMinus} />
										</button>
										<span className="px-3 text-sm">{item.quantity}</span>
										<button
											onClick={() => updateQuantity(item.id, item.quantity + 1)}
											aria-label="Increase quantity"
											className="px-2 py-1 bg-gray-200 rounded"
										>
											<FontAwesomeIcon icon={faPlus} />
										</button>
										<button
											onClick={() => removeFromCart(item.id)}
											aria-label="Remove item"
											className="ml-4 text-red-600 hover:text-red-800"
										>
											<FontAwesomeIcon icon={faTrash} />
										</button>
									</div>
								</div>
							</li>
						))}
					</ul>
					<div className="cart-total">
						<h4 className="text-xl font-semibold">
							Total: <span className="text-neutral-900 font-semibold">${total}</span>
						</h4>
						<button
							className="cart-checkout-btn"
							onClick={() => {
								alert("Thank you for your purchase!");
								clearCart();
							}}
						>
							Checkout
						</button>
					</div>
				</>
			)}
		</div>
	);
};
