import { useState, useEffect } from 'react';
import Home from "./components/Home";

function App() {

	useEffect(() => {
		document.title = "TOP: Shopping Cart";
	}, []);

	return (
		<div className="container mx-auto py-4 px-4">
			<Home />
		</div>
	)
}

export default App;
