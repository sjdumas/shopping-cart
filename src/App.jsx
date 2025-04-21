import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

function AppContent() {
	const location = useLocation();
	const isHomePage = location.pathname === "/";

	return (
		<>
			<Navigation />
			{!isHomePage && <Header />}

			{isHomePage ? (
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			) : (
				<div className="container mx-auto py-4 px-4">
					<Routes>
						<Route path="/products" element={<Products />} />
						<Route path="/cart" element={<Cart />} />
					</Routes>
				</div>
			)}

			<Footer />
		</>
	);
}

export default function App() {
	return (
		<Router>
			<AppContent />
		</Router>
	);
}
