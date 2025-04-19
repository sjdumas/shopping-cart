import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

export default function Header() {
	const location = useLocation();

	const pageData = {
		"/": {
			title: "Vinyl Mania",
			subtitle: "Your source for classic albums",
		},
		"/products": {
			title: "Product Catalog",
			subtitle: "Explore our exclusive vinyl collection",
		},
		"/cart": {
			title: "Shopping Cart",
			subtitle: "Review your selections before checkout",
		},
	};

	const { title, subtitle } = pageData[location.pathname] || {
		title: "Vinyl Mania",
		subtitle: "Your source for classic albums",
	};

	useEffect(() => {
		if (location.pathname === "/") {
			document.title = title;
		} else {
			document.title = `${title} | Vinyl Mania`;
		}
	}, [title, location.pathname]);

	return (
		<header className="bg-blue-500 text-white text-center py-20 md:py-24 lg:py-24 px-4 sm:px-6 lg:px-8">
			<h1 className="text-4xl md:text-5xl lg:text-6xl mb-2 md:mb-4">{title}</h1>
			<h2 className="text-xl md:text-2xl lg:text-3xl mb-6">{subtitle}</h2>
			{location.pathname === "/" && (
				<div className="mt-4">
					<p className="text-lg text-neutral-50 mb-4 max-w-xl mx-auto pb-3">
						Rediscover the music from some of the world's legendary artists.
					</p>
					<Link
						to="/products"
						className="inline-block bg-neutral-800 hover:bg-black text-white font-semibold text-lg px-6 py-3 rounded-md transition duration-300"
					>
						Shop for Records
					</Link>
				</div>
			)}
		</header>
	);
}
