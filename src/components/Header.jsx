import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

export default function Header() {
	const location = useLocation();

	const pageData = {
		"/": {
			title: "Shop Mania",
			subtitle: "Your number 1 source for products",
		},
		"/products": {
			title: "Shop Catalog",
			subtitle: "Explore our shop and discover something new",
		},
		"/cart": {
			title: "Shopping Cart",
			subtitle: "Review your selections before checkout",
		},
	};

	const { title, subtitle } = pageData[location.pathname] || {
		title: "Shop Mania",
		subtitle: "Your number 1 shopping source",
	};

	useEffect(() => {
		document.title = location.pathname === "/" ? title : `${title} | Shop Mania`;
	}, [title, location.pathname]);

	return (
		<header className="page-header">
			<h1 className="page-title">{title}</h1>
			<h2 className="page-subtitle">{subtitle}</h2>

			{location.pathname === "/" && (
				<div className="header-cta">
					<p>Tagline for products go here...</p>
					<Link to="/products">Shop for Products</Link>
				</div>
			)}
		</header>
	);
}
