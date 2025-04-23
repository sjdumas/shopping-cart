import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
}
