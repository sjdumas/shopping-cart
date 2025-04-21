import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
	const [cartItems, setCartItems] = useState([]);

	const addToCart = (product, quantity) => {
		setCartItems((prevItems) => {
			const existing = prevItems.find(item => item.id === product.id);
			if (existing) {
				return prevItems.map(item =>
					item.id === product.id
						? { ...item, quantity: item.quantity + quantity }
						: item
				);
			}
			return [...prevItems, { ...product, quantity }];
		});
	};
	
	const clearCart = () => setCartItems([]);

	const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

	const value = {
		cartItems,
		addToCart,
		cartCount,
		clearCart,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
	return useContext(CartContext);
}
