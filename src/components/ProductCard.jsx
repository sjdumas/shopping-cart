import PropTypes from "prop-types";

export default function ProductCard({ product, quantity, setQuantity, onAdd }) {
	return (
		<div className="product-card">
			<img src={product.image} alt={product.title} />
			<h3>{product.title}</h3>
			<p>${product.price}</p>

			{setQuantity && (
				<div className="qty-controls">
					<button onClick={() => setQuantity(product.id, quantity - 1)} className="px-2 py-1 bg-gray-200 rounded">-</button>
					<input
						type="number"
						min="1"
						value={quantity}
						onChange={(e) => setQuantity(product.id, Number(e.target.value))}
					/>
					<button onClick={() => setQuantity(product.id, quantity + 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
				</div>
			)}

			{onAdd && (
				<button onClick={() => onAdd(product)} className="add-button">
					Add to Cart
				</button>
			)}
		</div>
	);
}

ProductCard.propTypes = {
	product: PropTypes.object.isRequired,
	quantity: PropTypes.number,
	setQuantity: PropTypes.func,
	onAdd: PropTypes.func,
};
