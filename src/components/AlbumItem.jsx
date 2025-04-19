import { useState } from "react";

export default function AlbumItem({ album }) {
	const [quantity, setQuantity] = useState(1);

	const increment = () => setQuantity((prev) => prev + 1);
	const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
	const handleInputChange = (e) => {
		const value = parseInt(e.target.value, 10);
		
		if (!isNaN(value) && value > 0) {
			setQuantity(value);
		} else {
			setQuantity(1);
		}
	};

	return (
		<li className="album-info flex flex-col gap-4 bg-white/80 p-4 rounded-sm shadow-sm w-full h-full text-center">
			<img
				src={album.artwork}
				alt={album.title}
				className="w-full h-auto object-cover rounded-sm"
			/>
			<div className="flex flex-col justify-between flex-1">
				<h3 className="text-neutral-900">{album.title}</h3>
				<h4 className="text-neutral-800">Artist: {album.artistName}</h4>
				<p className="text-neutral-500">Released: {album.year}</p>
				{album.genre && (
					<p className="text-neutral-500">Genre: {album.genre}</p>
				)}
				<span className="block font-bold text-xl text-black mt-2">
					${album.price.toFixed(2)}
				</span>
				<div className="flex justify-center w-full mt-3">
					<div className="flex items-center gap-2">
						<button
							onClick={decrement}
							className="bg-neutral-200 hover:bg-neutral-300 px-3 py-1 rounded-sm text-lg font-semibold"
							aria-label="Decrease quantity"
						>
							−
						</button>
						<input
							type="number"
							value={quantity}
							onChange={handleInputChange}
							min="1"
							className="w-10 text-center border border-neutral-300 rounded-sm py-1"
						/>
						<button
							onClick={increment}
							className="bg-neutral-200 hover:bg-neutral-300 px-3 py-1 rounded-sm text-lg font-semibold"
							aria-label="Increase quantity"
						>
							+
						</button>
					</div>
				</div>
				<button className="mt-3 rounded-sm bg-blue-600 text-white font-semibold px-4 py-2 hover:bg-blue-700">
					Add to Cart
				</button>
			</div>
		</li>
	);
}
