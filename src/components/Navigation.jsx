import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
	return (
		<nav className="sticky top-0 z-50 bg-white px-6 py-4 flex justify-between items-center">
			<div className="text-base font-medium text-neutral-700">
				<Link 
					to="/"
					className="hover:text-blue-600 transition-colors duration-200"
				>
					Vinyl Mania
				</Link>
			</div>
			<ul className="flex gap-6 text-base font-medium text-neutral-700">
				<li>
					<Link
						to="/"
						className="hover:text-blue-600 transition-colors duration-200"
					>
						<span className="ml-2">Home</span>
					</Link>
				</li>
				<li>
					<Link
						to="/products"
						className="hover:text-blue-600 transition-colors duration-200"
					>
						<span className="ml-2">Products</span>
					</Link>
				</li>
				<li>
					<Link
						to="/cart"
						className="hover:text-blue-600 transition-colors duration-200"
						aria-label="Shopping Cart"
					>
						<FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
						<span className="ml-2">Cart</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
};
