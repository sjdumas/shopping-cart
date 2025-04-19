import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

function App() {
	return (
		<Router>
			<Navigation />
			<Header />
			<div className="container mx-auto py-4 px-4">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</div>
			<Footer />
		</Router>
	);
}

export default App;
