import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "./CartContext";

export default function Navigation() {
	const { cartCount } = useCart();

	return (
		<nav className="navbar">
			<div className="nav-logo">
				<Link to="/">Shop Mania</Link>
			</div>
			<ul className="nav-links">
				<li>
					<Link to="/" className="nav-link">
						Home
					</Link>
				</li>
				<li>
					<Link to="/products" className="nav-link">
						Products
					</Link>
				</li>
				<li className="relative">
					<Link to="/cart" className="nav-link" aria-label="Shopping Cart">
						<FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
						<span className="ml-2">Cart</span>
						{cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
					</Link>
				</li>
			</ul>
		</nav>
	);
}