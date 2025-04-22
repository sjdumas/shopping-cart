import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

export default function Header() {
	const location = useLocation();

	const pageData = {
		"/": {
			title: "Shopper's Delight",
			subtitle: "Your number 1 source",
		},
		"/products": {
			title: "Product Catalog",
			subtitle: "Explore our shop and discover something new",
		},
		"/cart": {
			title: "Cart",
			subtitle: "Review your selections before checkout",
		},
	};

	const { title, subtitle } = pageData[location.pathname] || {
		title: "Shopper's Delight",
		subtitle: "Your number 1 shopping source",
	};

	useEffect(() => {
		document.title = location.pathname === "/" ? title : `${title} | Shopper's Delight`;
	}, [title, location.pathname]);

	return (
		<header className="page-header">
			<h1 className="page-title">{title}</h1>
			<h2 className="page-subtitle">{subtitle}</h2>
		</header>
	);
}
