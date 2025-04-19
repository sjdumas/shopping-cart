const artists = [
	{
		id: 1,
		name: "Nine Inch Nails",
		bio: "Nine Inch Nails, commonly abbreviated as NIN (stylized as NIИ), is an American industrial rock band formed in Cleveland, Ohio in 1988. Its members are the singer-songwriter, multi-instrumentalist and producer Trent Reznor and his frequent collaborator, Atticus Ross.",
		image: "./images/img-1.png",
		discography: [
			{ title: "Pretty Hate Machine", year: 1989, artwork: "./images/album-img-1.png", price: 14.99, genre: "Industrial Rock" },
			{ title: "Broken", year: 1992, artwork: "./images/album-img-2.png", price: 9.99, genre: "Industrial Metal" },
			{ title: "The Downward Spiral", year: 1994, artwork: "./images/album-img-3.png", price: 16.99, genre: "Alternative Metal" },
			{ title: "The Fragile", year: 1999, artwork: "./images/album-img-4.png", price: 16.99, genre: "Art Rock" },
		],
	},
	{
		id: 2,
		name: "Gary Numan",
		bio: "Gary Anthony James Webb (born 8 March 1958), known professionally as Gary Numan, is an English musician. He entered the music industry as frontman of the new wave band Tubeway Army.",
		image: "./images/img-2.png",
		discography: [
			{ title: "Tubeway Army", year: 1978, artwork: "./images/album-img-1.png", price: 12.99, genre: "Post-Punk" },
			{ title: "Replicas", year: 1979, artwork: "./images/album-img-2.png", price: 14.99, genre: "Synth-Pop" },
			{ title: "The Pleasure Principle", year: 1979, artwork: "./images/album-img-3.png", price: 17.99, genre: "New Wave" },
			{ title: "Telekon", year: 1980, artwork: "./images/album-img-4.png", price: 17.99, genre: "Electronic Rock" },
		],
	},
	{
		id: 3,
		name: "Tangerine Dream",
		bio: "Tangerine Dream is a German electronic music band founded in 1967 by Edgar Froese. The group has seen many personnel changes over the years, with Froese the only constant member until his death in January 2015.",
		image: "./images/img-3.png",
		discography: [
			{ title: "Green Desert", year: 1973, artwork: "./images/album-img-1.png", price: 14.99, genre: "Ambient" },
			{ title: "Phaedra", year: 1974, artwork: "./images/album-img-2.png", price: 15.99, genre: "Electronic" },
			{ title: "Rubycon", year: 1975, artwork: "./images/album-img-3.png", price: 14.99, genre: "Berlin School" },
			{ title: "Legend", year: 1985, artwork: "./images/album-img-4.png", price: 14.99, genre: "Soundtrack" },
		],
	},
	{
		id: 4,
		name: "Radiohead",
		bio: "Radiohead are an English rock band formed in Abingdon, Oxfordshire, in 1985. They comprise Thom Yorke (vocals, guitar, piano, keyboards); brothers Jonny Greenwood (guitar, keyboards, other instruments) and Colin Greenwood (bass); Ed O'Brien (guitar, backing vocals); and Philip Selway (drums, percussion).",
		image: "./images/img-4.png",
		discography: [
			{ title: "Pablo Honey", year: 1993, artwork: "./images/album-img-1.png", price: 14.99, genre: "Alternative Rock" },
			{ title: "The Bends", year: 1995, artwork: "./images/album-img-2.png", price: 16.99, genre: "Britpop" },
			{ title: "OK Computer", year: 1997, artwork: "./images/album-img-3.png", price: 17.99, genre: "Art Rock" },
			{ title: "In Rainbows", year: 2007, artwork: "./images/album-img-4.png", price: 16.99, genre: "Experimental Rock" },
		],
	},
	{
		id: 5,
		name: "Moby",
		bio: "Richard Melville Hall (September 11, 1965), known professionally as Moby, is an American musician, songwriter, record producer, disc jockey, and animal rights activist. He has sold 20 million records worldwide.",
		image: "./images/img-5.png",
		discography: [
			{ title: "Moby", year: 1992, artwork: "./images/album-img-1.png", price: 14.99, genre: "Techno" },
			{ title: "Ambient", year: 1993, artwork: "./images/album-img-2.png", price: 15.99, genre: "Ambient" },
			{ title: "Play", year: 1999, artwork: "./images/album-img-3.png", price: 17.99, genre: "Electronic" },
			{ title: "18", year: 2002, artwork: "./images/album-img-4.png", price: 14.99, genre: "Downtempo" },
		],
	},
	{
		id: 6,
		name: "Depeche Mode",
		bio: "Depeche Mode[a] are an English electronic band formed in Basildon, Essex in 1980.[2] Originally formed with the line-up of Dave Gahan, Martin Gore, Andy Fletcher and Vince Clarke, the band currently consists of Gahan and Gore.",
		image: "./images/img-6.png",
		discography: [
			{ title: "Music for the Masses", year: 1987, artwork: "./images/album-img-1.png", price: 12.99, genre: "Synth-Pop" },
			{ title: "Violator", year: 1990, artwork: "./images/album-img-2.png", price: 16.99, genre: "Electronic Rock" },
			{ title: "Songs of Faith and Devotion", year: 1993, artwork: "./images/album-img-3.png", price: 17.99, genre: "Alternative Rock" },
			{ title: "Ultra", year: 1997, artwork: "./images/album-img-4.png", price: 11.99, genre: "Industrial Rock" },
		],
	},
	{
		id: 7,
		name: "The Prodigy",
		bio: "The Prodigy are an English electronic music band formed in Braintree, Essex, in 1990 by producer, keyboardist, and songwriter Liam Howlett. The original line-up also featured MC and vocalist Maxim, dancer and occasionally live keyboardist Leeroy Thornhill, dancer Sharky, and dancer and vocalist Keith Flint. They describe their style as electronic punk.",
		image: "./images/img-7.png",
		discography: [
			{ title: "Music for the Jilted Generation", year: 1994, artwork: "./images/album-img-1.png", price: 14.99, genre: "Breakbeat" },
			{ title: "The Fat of the Land", year: 1997, artwork: "./images/album-img-2.png", price: 17.99, genre: "Big Beat" },
			{ title: "Always Outnumbered, Never Outgunned", year: 2004, artwork: "./images/album-img-3.png", price: 16.99, genre: "Electronic Rock" },
			{ title: "Invaders Must Die", year: 2009, artwork: "./images/album-img-4.png", price: 14.99, genre: "Rave" },
		],
	},
	{
		id: 8,
		name: "Kraftwerk",
		bio: "Kraftwerk are a German electronic band formed in Düsseldorf in 1970 by Ralf Hütter and Florian Schneider. Widely considered innovators and pioneers of electronic music, Kraftwerk were among the first successful acts to popularize the genre.",
		image: "./images/img-8.png",
		discography: [
			{ title: "Trans-Europe Express", year: 1977, artwork: "./images/album-img-1.png", price: 12.99, genre: "Electronic" },
			{ title: "The Man-Machine", year: 1978, artwork: "./images/album-img-2.png", price: 15.99, genre: "Synth-Pop" },
			{ title: "Computer World", year: 1981, artwork: "./images/album-img-3.png", price: 16.99, genre: "Electropop" },
			{ title: "Electric Café", year: 1986, artwork: "./images/album-img-4.png", price: 14.99, genre: "Techno Pop" },
		],
	},
	{
		id: 9,
		name: "Tears for Fears",
		bio: "Tears for Fears are an English pop rock band formed in Bath in 1981 by Curt Smith and Roland Orzabal. Founded after the dissolution of their first band, the mod-influenced Graduate, Tears for Fears were associated with the synth-pop bands of the 1980s.",
		image: "./images/img-9.png",
		discography: [
			{ title: "The Hurting", year: 1983, artwork: "./images/album-img-1.png", price: 11.99, genre: "Synth-Pop" },
			{ title: "Songs from the Big Chair", year: 1985, artwork: "./images/album-img-2.png", price: 16.99, genre: "Pop Rock" },
			{ title: "The Seeds of Love", year: 1989, artwork: "./images/album-img-3.png", price: 14.99, genre: "Sophisti-Pop" },
			{ title: "Elemental", year: 1993, artwork: "./images/album-img-4.png", price: 13.99, genre: "Alternative Pop" },
		],
	},
];

export default artists;
