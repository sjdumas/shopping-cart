const artists = [
	{
		id: 1,
		name: "Nine Inch Nails",
		bio: "Nine Inch Nails, commonly abbreviated as NIN (stylized as NIИ), is an American industrial rock band formed in Cleveland, Ohio in 1988.",
		image: "./images/img-1.png",
		discography: [
			{
				title: "Pretty Hate Machine",
				year: 1989,
				artwork: "./images/album-img-1.png",
			},
			{
				title: "Broken",
				year: 1992,
				artwork: "./images/album-img-2.png",
			},
			{
				title: "The Downward Spiral",
				year: 1994,
				artwork: "./images/album-img-3.png",
			},
			{
				title: "The Fragile",
				year: 1999,
				artwork: "./images/album-img-4.png",
			},
		],
	},
	{
		id: 2,
		name: "Gary Numan",
		bio: "Gary Anthony James Webb, known professionally as Gary Numan, is an English musician. He entered the music industry as frontman of the new wave band Tubeway Army.",
		image: "./images/img-2.png",
		discography: [
			{
				title: "Tubeway Army",
				year: 1978,
				artwork: "./images/album-img-1.png",
			},
			{
				title: "Replicas",
				year: 1979,
				artwork: "./images/album-img-2.png",
			},
			{
				title: "The Pleasure Principle",
				year: 1979,
				artwork: "./images/album-img-3.png",
			},
			{
				title: "Telekon",
				year: 1980,
				artwork: "./images/album-img-4.png",
			},
		],
	},
	{
		id: 3,
		name: "Tangerine Dream",
		bio: "Tangerine Dream is a German electronic music band founded in 1967 by Edgar Froese. The group has seen many personnel changes over the years, with Froese the only constant member until his death in January 2015.",
		image: "./images/img-3.png",
		discography: [
			{
				title: "Green Desert",
				year: 1973,
				artwork: "./images/album-img-1.png",
			},
			{
				title: "Phaedra",
				year: 1974,
				artwork: "./images/album-img-2.png",
			},
			{
				title: "Rubycon",
				year: 1975,
				artwork: "./images/album-img-3.png",
			},
			{
				title: "Legend",
				year: 1985,
				artwork: "./images/album-img-4.png",
			},
		],
	},
	{
		id: 4,
		name: "Radiohead",
		bio: "Radiohead are an English rock band formed in Abingdon, Oxfordshire, in 1985. They comprise Thom Yorke (vocals, guitar, piano, keyboards); brothers Jonny Greenwood (guitar, keyboards, other instruments) and Colin Greenwood (bass); Ed O'Brien (guitar, backing vocals); and Philip Selway (drums, percussion).",
		image: "./images/img-4.png",
		discography: [
			{
				title: "Pablo Honey",
				year: 1993,
				artwork: "./images/album-img-1.png",
			},
			{
				title: "The Bends",
				year: 1995,
				artwork: "./images/album-img-2.png",
			},
			{
				title: "OK Computer",
				year: 1997,
				artwork: "./images/album-img-3.png",
			},
			{
				title: "In Rainbows",
				year: 2007,
				artwork: "./images/album-img-4.png",
			},
		],
	},
	{
		id: 5,
		name: "Moby",
		bio: "Richard Melville Hall, known professionally as Moby, is an American musician, songwriter, record producer, and disc jockey. He is an important dance music figure of the early 1990s, helping bring dance music to a mainstream audience both in the United States and the United Kingdom.",
		image: "./images/img-5.png",
		discography: [
			{
				title: "Moby",
				year: 1992,
				artwork: "./images/album-img-1.png",
			},
			{
				title: "Ambient",
				year: 1993,
				artwork: "./images/album-img-2.png",
			},
			{
				title: "Play",
				year: 1999,
				artwork: "./images/album-img-3.png",
			},
			{
				title: "18",
				year: 2002,
				artwork: "./images/album-img-4.png",
			},
		],
	},
	{
		id: 6,
		name: "Depeche Mode",
		bio: "Depeche Mode are an English electronic music band formed in Basildon, Essex in 1980. Originally formed with the lineup of Dave Gahan, Martin Gore, Andy Fletcher and Vince Clarke, the band currently consists of Gahan and Gore.",
		image: "./images/img-6.png",
		discography: [
			{
				title: "Music for the Masses",
				year: 1987,
				artwork: "./images/album-img-1.png",
			},
			{
				title: "Violator",
				year: 1990,
				artwork: "./images/album-img-2.png",
			},
			{
				title: "Songs of Faith and Devotion",
				year: 1993,
				artwork: "./images/album-img-3.png",
			},
			{
				title: "Ultra",
				year: 1997,
				artwork: "./images/album-img-4.png",
			},
		],
	},
	{
		id: 7,
		name: "The Prodigy",
		bio: "The Prodigy are an English electronic music band formed in Braintree, Essex, in 1990 by producer, keyboardist, and songwriter Liam Howlett. The original line-up also featured MC and vocalist Maxim, dancer and occasionally live keyboardist Leeroy Thornhill, dancer Sharky, and dancer and vocalist Keith Flint. They describe their style as electronic punk.",
		image: "./images/img-7.png",
		discography: [
			{
				title: "Music for the Jilted Generation",
				year: 1994,
				artwork: "./images/album-img-1.png",
			},
			{
				title: "The Fat of the Land",
				year: 1997,
				artwork: "./images/album-img-2.png",
			},
			{
				title: "Always Outnumbered, Never Outgunned",
				year: 2004,
				artwork: "./images/album-img-3.png",
			},
			{
				title: "Invaders Must Die",
				year: 2009,
				artwork: "./images/album-img-4.png",
			},
		],
	},
	{
		id: 8,
		name: "Kraftwerk",
		bio: "Kraftwerk are a German electronic band formed in Düsseldorf in 1970 by Ralf Hütter and Florian Schneider. Widely considered innovators and pioneers of electronic music, Kraftwerk were among the first successful acts to popularize the genre. The group began as part of West Germany's experimental krautrock scene in the early 1970s before fully embracing electronic instrumentation, including synthesizers, drum machines, and vocoders.",
		image: "./images/img-8.png",
		discography: [
			{
				title: "Trans-Europe Express",
				year: 1977,
				artwork: "./images/album-img-1.png",
			},
			{
				title: "The Man-Machine",
				year: 1978,
				artwork: "./images/album-img-2.png",
			},
			{
				title: "Computer World",
				year: 1981,
				artwork: "./images/album-img-3.png",
			},
			{
				title: "Electric Café",
				year: 1986,
				artwork: "./images/album-img-4.png",
			},
		],
	},
	{
		id: 9,
		name: "Tears for Fears",
		bio: "Tears for Fears are an English pop rock band formed in Bath in 1981 by Curt Smith and Roland Orzabal. Founded after the dissolution of their first band, the mod-influenced Graduate, Tears for Fears were associated with the synth-pop bands of the 1980s, and attained international chart success as part of the Second British Invasion.",
		image: "./images/img-9.png",
		discography: [
			{
				title: "The Hurting",
				year: 1983,
				artwork: "./images/album-img-1.png",
			},
			{
				title: "Songs from the Big Chair",
				year: 1985,
				artwork: "./images/album-img-2.png",
			},
			{
				title: "The Seeds of Love",
				year: 1989,
				artwork: "./images/album-img-3.png",
			},
			{
				title: "Elemental",
				year: 1993,
				artwork: "./images/album-img-4.png",
			},
		],
	},
];

export default artists;
