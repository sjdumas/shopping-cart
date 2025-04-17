import artists from "../artists";

export default function Home() {
	return(
		<>
			<h1 className="text-center">Vinyl Mania</h1>
			<h2 className="text-center text-xl">Your source for classic albums</h2>
			<div className="products grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-6 md:gap-10 lg:gap-16">
				{artists.map((artist) =>
					<div key={artist.id} className="product">
						<img 
							src={artist.image} 
							alt={artist.name}
							className="artist-img w-full max-h-full object-cover rounded-t-md mb-4"
						/>
						<div className="artist-info">
							<h2>{artist.name}</h2>
							<p>{artist.bio}</p>
							<div className="mt-4">
								<h3 className="font-bold mb-2">Selected Discography:</h3>
								<ul>
								{artist.discography.map((album, idx) => (
									<li
										key={idx}
										className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
										<img
											src={album.artwork}
											alt={artist.name}
											className="w-full h-full md:w-28 md:h-28 lg:w-32 lg:h-32 object-cover rounded-md"
										/>
										<div className="flex flex-col justify-center md:justify-between h-full">
											<h4 className="text-base md:text-lg font-medium text-neutral-700">
												{album.title}{" "}
												<span className="text-neutral-600">| {album.year}</span>
											</h4>
											<button className="mt-2 md:mt-4 rounded-md bg-sky-500 font-semibold text-white px-4 py-2 w-max">
												Buy Album
											</button>
										</div>
									</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
};
