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

	const updateQuantity = (productId, newQuantity) => {
		setCartItems((prevItems) =>
			prevItems.map(item =>
				item.id === productId
					? { ...item, quantity: newQuantity }
					: item
			)
		);
	};
	
	const removeFromCart = (productId) => {
		setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
	};	
	
	const clearCart = () => setCartItems([]);

	const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

	const value = {
		cartItems,
		addToCart,
		cartCount,
		clearCart,
		updateQuantity,
		removeFromCart,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export function useCart() {
	return useContext(CartContext);
};
