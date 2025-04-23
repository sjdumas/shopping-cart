import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const truncateText = (text, maxLength) => {
	return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};


export default function ProductCard({ product, quantity, setQuantity, onAdd }) {
	return (
		<div className="product-card">
			<Link to={`/products/${product.id}`} className="text-center w-full">
				<img src={product.image} alt={product.title} />
				<h5>{truncateText(product.title, 25)}</h5>
			</Link>
			<h3>${product.price}</h3>

			{setQuantity && (
				<div className="qty-controls">
					<button
						onClick={() => setQuantity(product.id, quantity - 1)}
						aria-label="Decrease quantity"
					>
						<FontAwesomeIcon icon={faMinus} />
					</button>
					<input
						type="number"
						min="1"
						value={quantity}
						onChange={(e) => setQuantity(product.id, Number(e.target.value))}
					/>
					<button
						onClick={() => setQuantity(product.id, quantity + 1)}
						aria-label="Increase quantity"
					>
						<FontAwesomeIcon icon={faPlus} />
					</button>
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
