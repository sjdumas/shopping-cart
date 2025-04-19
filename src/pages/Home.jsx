import { Link } from "react-router-dom";
import artists from "../artists.js";
import AlbumItem from "../components/AlbumItem";
import ArtistCardMini from "../components/ArtistCardMini";

export default function Home() {
	const featuredArtists = artists.slice(0, 3);
	const featuredAlbums = artists
		.flatMap((artist) =>
			artist.discography.map((album) => ({
				...album,
				artistName: artist.name,
			}))
		)
		.slice(0, 4); // Display 4 albums

	return (
		<section className="py-16 md:py-24">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
				{/* Featured Artists */}
				<div className="mb-16">
					<h2 className="text-3xl font-semibold text-neutral-800 mb-6 pb-6">Featured Artists</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
						{featuredArtists.map((artist) => (
							<ArtistCardMini key={artist.id} artist={artist} />
						))}
					</div>
				</div>

				{/* Featured Albums */}
				<div>
					<h2 className="text-3xl font-semibold text-neutral-800 mb-6 pb-6">Featured Albums</h2>
					<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
						{featuredAlbums.map((album, index) => (
							<AlbumItem key={index} album={album} />
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
