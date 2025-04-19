import { useState } from "react";
import artists from "../artists.js";
import AlbumItem from "../components/AlbumItem.jsx";

export default function Products() {
	const [sortKey, setSortKey] = useState("year");
	const [sortOrder, setSortOrder] = useState("asc");

	const albums = artists.flatMap((artist) =>
		artist.discography.map((album) => ({
			...album,
			artistName: artist.name,
		}))
	);

	const sortedAlbums = [...albums].sort((a, b) => {
		if (sortKey === "artist") {
			const nameA = a.artistName.toLowerCase();
			const nameB = b.artistName.toLowerCase();
			if (nameA < nameB) return sortOrder === "asc" ? -1 : 1;
			if (nameA > nameB) return sortOrder === "asc" ? 1 : -1;
			return 0;
		} else if (sortKey === "year") {
			return sortOrder === "asc" ? a.year - b.year : b.year - a.year;
		}
		return 0;
	});

	return (
		<div className="container mx-auto px-4 sm:px-6 py-8">
			<div className="flex flex-wrap justify-between items-center mb-6">
				<h2 className="text-3xl">Albums</h2>
				<div className="flex items-center gap-4">
					<label className="text-sm text-neutral-600">Sort by:</label>
					<select
						value={sortKey}
						onChange={(e) => setSortKey(e.target.value)}
						className="border px-2 py-1 rounded-sm text-sm"
					>
						<option value="year">Year</option>
						<option value="artist">Artist</option>
					</select>
					<select
						value={sortOrder}
						onChange={(e) => setSortOrder(e.target.value)}
						className="border px-2 py-1 rounded-md text-sm"
					>
						<option value="asc">Ascending</option>
						<option value="desc">Descending</option>
					</select>
				</div>
			</div>
			<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
				{sortedAlbums.map((album, index) => (
					<AlbumItem key={index} album={album} />
				))}
			</ul>
		</div>
	);
};
