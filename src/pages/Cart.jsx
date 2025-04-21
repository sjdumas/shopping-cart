import { useCart } from "../components/CartContext";

export default function Cart() {
	const { cartItems, clearCart } = useCart();
	const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

	return (
		<div className="cart-container">
			<h2 className="text-3xl mb-6">Your Cart</h2>

			{cartItems.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				<>
					<ul className="space-y-4 mb-6">
						{cartItems.map((item) => (
							<li key={item.id} className="cart-item">
								<img src={item.image} alt={item.title} />
								<div className="flex-1">
									<h3>{item.title}</h3>
									<p>
										${item.price} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
									</p>
								</div>
							</li>
						))}
					</ul>

					<div className="cart-total">
						<h4 className="text-xl font-semibold">
							Total: <span className="text-blue-600">${total}</span>
						</h4>
						<button
							className="cart-checkout-btn"
							onClick={() => {
								alert("Thank you for your purchase!");
								clearCart();
							}}
						>
							Proceed to Checkout
						</button>
					</div>
				</>
			)}
		</div>
	);
}
