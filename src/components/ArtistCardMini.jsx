export default function ArtistCardMini({ artist }) {
	return (
		<div className="bg-white rounded-sm p-6 flex flex-col items-center text-center">
			<img
				src={artist.image}
				alt={artist.name}
				className="w-32 h-32 object-cover rounded-full mb-4"
			/>
			<h3 className="text-lg font-semibold text-neutral-800 mb-1">{artist.name}</h3>
			<p className="text-sm text-neutral-600">{artist.bio.slice(0, 125)}...</p>
		</div>
	);
};
