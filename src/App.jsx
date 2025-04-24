import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

function AppContent() {
	const location = useLocation();
	const [pageTitle, setPageTitle] = useState("Shopper's Delight");

	useEffect(() => {
		const path = location.pathname;

		const updateTitle = async () => {
			if (path === "/") {
				setPageTitle("Shopper's Delight");
			} else if (path === "/products") {
				setPageTitle("Product Catalog | Shopper's Delight");
			} else if (path === "/cart") {
				setPageTitle("Cart | Shopper's Delight");
			} else if (path === "/privacy") {
				setPageTitle("Privacy Policy | Shopper's Delight");
			} else if (path === "/terms") {
				setPageTitle("Terms & Conditions | Shopper's Delight");
			} else if (path.startsWith("/products/")) {
				const id = path.split("/products/")[1];
				if (id) {
					try {
						const res = await fetch(`https://fakestoreapi.com/products/${id}`);
						const data = await res.json();
						if (data?.title) {
							setPageTitle(`${data.title} | Shopper's Delight`);
						} else {
							setPageTitle("Product Details | Shopper's Delight");
						}
					} catch {
						setPageTitle("Product Details | Shopper's Delight");
					}
				}
			} else {
				setPageTitle("Shopper's Delight");
			}
		};

		updateTitle();
	}, [location.pathname]);

	useEffect(() => {
		document.title = pageTitle;
	}, [pageTitle]);

	const isHomePage = location.pathname === "/";
	const isProductsPage = location.pathname === "/products";

	return (
		<>
			<Navigation />
			{!isHomePage && <Header />}
			{isProductsPage ? (
				<div className="container mx-auto py-4 px-4">
					<Routes>
						<Route path="/products" element={<Products />} />
					</Routes>
				</div>
			) : (
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products/:id" element={<ProductDetails />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/privacy" element={<Privacy />} />
					<Route path="/terms" element={<Terms />} />
				</Routes>
			)}
			<Footer />
		</>
	);
};

export default function App() {
	return (
		<Router>
			<AppContent />
		</Router>
	);
};
