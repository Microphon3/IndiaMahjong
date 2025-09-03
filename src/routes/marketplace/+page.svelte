<script lang="ts">
	import { ShoppingCart, Star, Filter, Search, Heart } from 'lucide-svelte';

	const categories = ['All', 'Mahjong Sets', 'Tables & Furniture', 'Accessories & Game Aids', 'Fashion & Lifestyle', 'Learning & Community', 'Collectibles & Art'];
	const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Rating', 'Newest'];

	let products = $state([
		// Mahjong Sets (12 listings)
		{
			id: 1,
			name: 'Classic Hong Kong Mahjong Set – Bamboo & Bone Replica',
			category: 'Mahjong Sets',
			price: 22000,
			originalPrice: null,
			rating: 4.8,
			reviewCount: 45,
			brand: 'Heritage Games, Hong Kong',
			image: '/api/placeholder/300/300',
			description: 'Authentic bamboo and bone replica with traditional Hong Kong styling.',
			features: ['144 tiles', 'Bamboo & bone replica', 'Traditional design', 'Premium case']
		},
		{
			id: 2,
			name: 'Taiwanese 16-Tile Tournament Set – Premium Resin',
			category: 'Mahjong Sets',
			price: 18500,
			originalPrice: null,
			rating: 4.9,
			reviewCount: 87,
			brand: 'Formosa Play, Taipei',
			image: '/api/placeholder/300/300',
			description: 'Professional tournament-grade tiles made from premium resin.',
			features: ['Tournament grade', 'Premium resin', '16-tile system', 'Official size']
		},
		{
			id: 3,
			name: 'Japanese Riichi Automatic Mahjong Table Set – Digital Timer',
			category: 'Mahjong Sets',
			price: 125000,
			originalPrice: null,
			rating: 4.7,
			reviewCount: 23,
			brand: 'Tokyo Gameworks, Japan',
			image: '/api/placeholder/300/300',
			description: 'Complete automatic table with digital timer for professional Riichi play.',
			features: ['Auto-shuffle system', 'Digital timer', 'Professional setup', 'LED display']
		},
		{
			id: 4,
			name: 'American Mahjong Deluxe Kit – Acrylic Tiles with 4 Racks & Coins',
			category: 'Mahjong Sets',
			price: 28000,
			originalPrice: null,
			rating: 4.6,
			reviewCount: 156,
			brand: 'Mahjong America, NY',
			image: '/api/placeholder/300/300',
			description: 'Complete American Mahjong set with acrylic tiles, racks, and betting coins.',
			features: ['Acrylic tiles', '4 racks included', 'Betting coins', 'American rules']
		},
		{
			id: 5,
			name: 'Singapore Style Mahjong Travel Set – Compact Magnetic Tiles',
			category: 'Mahjong Sets',
			price: 12000,
			originalPrice: null,
			rating: 4.5,
			reviewCount: 78,
			brand: 'Little Red Dot Games, Singapore',
			image: '/api/placeholder/300/300',
			description: 'Portable magnetic tiles perfect for travel and compact spaces.',
			features: ['Magnetic tiles', 'Travel size', 'Compact design', 'Singapore style']
		},
		{
			id: 6,
			name: 'Limited-Edition Dragon Phoenix Mahjong Set – Hand-Painted Tiles',
			category: 'Mahjong Sets',
			price: 45000,
			originalPrice: null,
			rating: 4.9,
			reviewCount: 34,
			brand: 'Artisan Tiles, Mumbai',
			image: '/api/placeholder/300/300',
			description: 'Exquisite hand-painted tiles featuring dragon and phoenix motifs.',
			features: ['Hand-painted', 'Dragon Phoenix design', 'Limited edition', 'Artisan crafted']
		},
		{
			id: 7,
			name: 'Luxury Rosewood Mahjong Set with Carved Tile Box',
			category: 'Mahjong Sets',
			price: 40000,
			originalPrice: null,
			rating: 4.8,
			reviewCount: 29,
			brand: 'Royal Crafts, Jaipur',
			image: '/api/placeholder/300/300',
			description: 'Premium rosewood set with intricately carved storage box.',
			features: ['Rosewood construction', 'Carved tile box', 'Luxury finish', 'Premium quality']
		},
		{
			id: 8,
			name: 'Mother of Pearl Mahjong Set – Handmade Collectible',
			category: 'Mahjong Sets',
			price: 95000,
			originalPrice: null,
			rating: 4.9,
			reviewCount: 16,
			brand: 'Shanghai Pearl Studio, China',
			image: '/api/placeholder/300/300',
			description: 'Exquisite handmade tiles crafted from genuine mother of pearl.',
			features: ['Mother of pearl', 'Handmade', 'Collectible quality', 'Luxury presentation']
		},
		{
			id: 9,
			name: 'Glow-in-the-Dark Mahjong Tiles – Modern Twist',
			category: 'Mahjong Sets',
			price: 9000,
			originalPrice: null,
			rating: 4.3,
			reviewCount: 145,
			brand: 'PlayLab, Berlin',
			image: '/api/placeholder/300/300',
			description: 'Innovative glow-in-the-dark tiles for unique gaming experiences.',
			features: ['Glow-in-the-dark', 'Modern design', 'Night gaming', 'Unique experience']
		},
		{
			id: 10,
			name: '1920s Antique Bakelite Mahjong Set – Collector\'s Piece',
			category: 'Mahjong Sets',
			price: 175000,
			originalPrice: null,
			rating: 5.0,
			reviewCount: 8,
			brand: 'Vintage Vault, London',
			image: '/api/placeholder/300/300',
			description: 'Rare 1920s bakelite set in pristine condition. Museum-quality piece.',
			features: ['1920s authentic', 'Bakelite material', 'Museum quality', 'Collector item']
		},
		{
			id: 11,
			name: 'Custom Mahjong Set – Add Your Community Crest or Logo',
			category: 'Mahjong Sets',
			price: 30000,
			originalPrice: null,
			rating: 4.7,
			reviewCount: 62,
			brand: 'Personalised Play, Delhi',
			image: '/api/placeholder/300/300',
			description: 'Personalized mahjong set with your community crest, logo, or custom design.',
			features: ['Fully customizable', 'Community crest option', 'Logo integration', 'Personal touch']
		},
		{
			id: 12,
			name: 'Mahjong NFT + Physical Jade-Inspired Tile Bundle',
			category: 'Mahjong Sets',
			price: 60000,
			originalPrice: null,
			rating: 4.2,
			reviewCount: 91,
			brand: 'CryptoCrafters, Global',
			image: '/api/placeholder/300/300',
			description: 'Revolutionary NFT collection paired with physical jade-inspired tiles.',
			features: ['NFT included', 'Jade-inspired tiles', 'Blockchain verified', 'Future tech']
		},

		// Tables & Furniture (7 listings)
		{
			id: 13,
			name: 'Automatic Mahjong Table – Foldable with USB Chargers',
			category: 'Tables & Furniture',
			price: 85000,
			originalPrice: null,
			rating: 4.6,
			reviewCount: 54,
			brand: 'SmartPlay, Guangzhou',
			image: '/api/placeholder/300/300',
			description: 'Modern automatic table with folding design and built-in USB charging ports.',
			features: ['Auto-shuffle', 'Foldable design', 'USB chargers', 'Modern tech']
		},
		{
			id: 14,
			name: 'Convertible Dining-to-Mahjong Table – Teakwood Finish',
			category: 'Tables & Furniture',
			price: 55000,
			originalPrice: null,
			rating: 4.8,
			reviewCount: 38,
			brand: 'WoodWorks, Pune',
			image: '/api/placeholder/300/300',
			description: 'Elegant convertible table that transforms from dining to game table.',
			features: ['Convertible design', 'Teakwood finish', 'Dual purpose', 'Premium wood']
		},
		{
			id: 15,
			name: 'Luxury Inlaid Marble Mahjong Table – Handcrafted',
			category: 'Tables & Furniture',
			price: 150000,
			originalPrice: null,
			rating: 4.9,
			reviewCount: 12,
			brand: 'StoneArtisans, Rajasthan',
			image: '/api/placeholder/300/300',
			description: 'Exquisite handcrafted table with intricate marble inlay work.',
			features: ['Marble inlay', 'Handcrafted', 'Luxury design', 'Artistic details']
		},
		{
			id: 16,
			name: 'Compact Mahjong Coffee Table – Hidden Tile Drawer',
			category: 'Tables & Furniture',
			price: 32000,
			originalPrice: null,
			rating: 4.5,
			reviewCount: 89,
			brand: 'Urban Home, Bangalore',
			image: '/api/placeholder/300/300',
			description: 'Space-saving coffee table with concealed drawer for tile storage.',
			features: ['Coffee table design', 'Hidden drawer', 'Space saving', 'Modern style']
		},
		{
			id: 17,
			name: 'Professional Tournament Table with Speed Shuffle System',
			category: 'Tables & Furniture',
			price: 120000,
			originalPrice: null,
			rating: 4.8,
			reviewCount: 27,
			brand: 'EastWind, Hong Kong',
			image: '/api/placeholder/300/300',
			description: 'Professional-grade tournament table with advanced speed shuffle technology.',
			features: ['Tournament grade', 'Speed shuffle', 'Professional setup', 'Competition ready']
		},
		{
			id: 18,
			name: 'Heritage Game Table – Carved with Lotus Motifs',
			category: 'Tables & Furniture',
			price: 220000,
			originalPrice: null,
			rating: 5.0,
			reviewCount: 6,
			brand: 'Antique Craft Guild, Mysore',
			image: '/api/placeholder/300/300',
			description: 'Heritage table featuring intricate lotus motif carvings by master artisans.',
			features: ['Heritage design', 'Lotus carvings', 'Master crafted', 'Antique style']
		},
		{
			id: 19,
			name: 'Smart Mahjong Mat – Digital Scoring Integrated',
			category: 'Tables & Furniture',
			price: 42000,
			originalPrice: null,
			rating: 4.4,
			reviewCount: 73,
			brand: 'TechPlay, Shenzhen',
			image: '/api/placeholder/300/300',
			description: 'High-tech gaming mat with integrated digital scoring system.',
			features: ['Digital scoring', 'Smart technology', 'Portable mat', 'Tech integration']
		},

		// Accessories & Game Aids (10 listings)
		{
			id: 20,
			name: 'Wind Direction Indicator – Brass Compass Style',
			category: 'Accessories & Game Aids',
			price: 5500,
			originalPrice: null,
			rating: 4.7,
			reviewCount: 124,
			brand: 'Heritage Brass, Delhi',
			image: '/api/placeholder/300/300',
			description: 'Traditional brass compass-style wind direction indicator for authentic gameplay.',
			features: ['Brass construction', 'Compass design', 'Wind indicator', 'Traditional style']
		},
		{
			id: 21,
			name: 'Mahjong Scoring Sticks – Japanese Riichi Style',
			category: 'Accessories & Game Aids',
			price: 3000,
			originalPrice: null,
			rating: 4.8,
			reviewCount: 186,
			brand: 'Tokyo Imports',
			image: '/api/placeholder/300/300',
			description: 'Authentic Japanese scoring sticks for traditional Riichi Mahjong play.',
			features: ['Japanese style', 'Riichi scoring', 'Authentic design', 'Complete set']
		},
		{
			id: 22,
			name: '500-Point Taiwanese Mahjong Chip Bank Set',
			category: 'Accessories & Game Aids',
			price: 4200,
			originalPrice: null,
			rating: 4.6,
			reviewCount: 95,
			brand: 'Taipei Club',
			image: '/api/placeholder/300/300',
			description: 'Professional chip bank with 500-point denomination for Taiwanese Mahjong.',
			features: ['500-point chips', 'Taiwanese style', 'Bank set', 'Professional grade']
		},
		{
			id: 23,
			name: 'Luxury Dice Set – Jade & Silver',
			category: 'Accessories & Game Aids',
			price: 9800,
			originalPrice: null,
			rating: 4.9,
			reviewCount: 41,
			brand: 'Art of Play, Jaipur',
			image: '/api/placeholder/300/300',
			description: 'Exquisite dice set crafted from jade and silver for luxury gaming.',
			features: ['Jade material', 'Silver accents', 'Luxury finish', 'Premium quality']
		},
		{
			id: 24,
			name: 'Portable Automatic Tile Shuffler – Battery Operated',
			category: 'Accessories & Game Aids',
			price: 6200,
			originalPrice: null,
			rating: 4.3,
			reviewCount: 158,
			brand: 'PlayMate, Korea',
			image: '/api/placeholder/300/300',
			description: 'Compact battery-operated shuffler for quick and fair tile distribution.',
			features: ['Battery operated', 'Portable design', 'Auto shuffle', 'Quick setup']
		},
		{
			id: 25,
			name: 'Custom Mahjong Score Pads – Printable & App Synced',
			category: 'Accessories & Game Aids',
			price: 2500,
			originalPrice: null,
			rating: 4.5,
			reviewCount: 203,
			brand: 'ScoreMate, Global',
			image: '/api/placeholder/300/300',
			description: 'Modern score pads with app integration for digital score tracking.',
			features: ['App synced', 'Printable format', 'Digital tracking', 'Modern solution']
		},
		{
			id: 26,
			name: 'Velvet Mahjong Mat – Anti-Slip with Gold Edging',
			category: 'Accessories & Game Aids',
			price: 4000,
			originalPrice: null,
			rating: 4.7,
			reviewCount: 142,
			brand: 'Table Luxe, Mumbai',
			image: '/api/placeholder/300/300',
			description: 'Premium velvet gaming mat with anti-slip base and elegant gold edging.',
			features: ['Velvet material', 'Anti-slip base', 'Gold edging', 'Premium quality']
		},
		{
			id: 27,
			name: 'Handcrafted Bamboo Tile Racks (Set of 4)',
			category: 'Accessories & Game Aids',
			price: 7500,
			originalPrice: null,
			rating: 4.8,
			reviewCount: 86,
			brand: 'BambooWorks, Nagaland',
			image: '/api/placeholder/300/300',
			description: 'Eco-friendly handcrafted bamboo tile racks with traditional design.',
			features: ['Handcrafted bamboo', 'Set of 4', 'Eco-friendly', 'Traditional design']
		},
		{
			id: 28,
			name: 'Mahjong Timer & Counter – Digital Edition',
			category: 'Accessories & Game Aids',
			price: 3200,
			originalPrice: null,
			rating: 4.4,
			reviewCount: 167,
			brand: 'GameClock Pro',
			image: '/api/placeholder/300/300',
			description: 'Digital timer and counter system for tournament-style play.',
			features: ['Digital timer', 'Round counter', 'Tournament ready', 'Easy operation']
		},
		{
			id: 29,
			name: 'Collector\'s Edition Cheat Sheet & Rulebook Set',
			category: 'Accessories & Game Aids',
			price: 1800,
			originalPrice: null,
			rating: 4.9,
			reviewCount: 234,
			brand: 'Mahjong Masters, HK',
			image: '/api/placeholder/300/300',
			description: 'Comprehensive reference set with cheat sheets and detailed rulebooks.',
			features: ['Collector edition', 'Cheat sheets', 'Complete rulebook', 'Reference guide']
		},

		// Fashion & Lifestyle (8 listings)
		{
			id: 30,
			name: 'Mahjong Tile Pendant – Sterling Silver Red Dragon',
			category: 'Fashion & Lifestyle',
			price: 6500,
			originalPrice: null,
			rating: 4.6,
			reviewCount: 78,
			brand: 'Silver Stories, Jaipur',
			image: '/api/placeholder/300/300',
			description: 'Elegant sterling silver pendant featuring the iconic Red Dragon tile design.',
			features: ['Sterling silver', 'Red Dragon design', 'Elegant pendant', 'Jewelry quality']
		},
		{
			id: 31,
			name: 'Bamboo Suit Printed Silk Scarf',
			category: 'Fashion & Lifestyle',
			price: 8200,
			originalPrice: null,
			rating: 4.7,
			reviewCount: 52,
			brand: 'Shanghai Luxe Wear',
			image: '/api/placeholder/300/300',
			description: 'Luxurious silk scarf featuring beautiful bamboo suit tile patterns.',
			features: ['Pure silk', 'Bamboo pattern', 'Luxury fashion', 'Designer piece']
		},
		{
			id: 32,
			name: 'Mahjong Inspired Sneakers – Limited Run',
			category: 'Fashion & Lifestyle',
			price: 12000,
			originalPrice: null,
			rating: 4.4,
			reviewCount: 93,
			brand: 'StreetPlay, Tokyo',
			image: '/api/placeholder/300/300',
			description: 'Trendy sneakers with Mahjong tile-inspired design patterns.',
			features: ['Limited edition', 'Tile patterns', 'Street fashion', 'Comfortable fit']
		},
		{
			id: 33,
			name: 'Embroidered Mahjong Jacket – East Wind Design',
			category: 'Fashion & Lifestyle',
			price: 18500,
			originalPrice: null,
			rating: 4.8,
			reviewCount: 31,
			brand: 'Kolkata Tailors',
			image: '/api/placeholder/300/300',
			description: 'Sophisticated jacket with intricate East Wind tile embroidery.',
			features: ['Hand embroidered', 'East Wind design', 'Premium fabric', 'Custom tailoring']
		},
		{
			id: 34,
			name: 'Tile-Themed Cushion Covers – Set of 4',
			category: 'Fashion & Lifestyle',
			price: 3200,
			originalPrice: null,
			rating: 4.5,
			reviewCount: 125,
			brand: 'HomeCharm, Chennai',
			image: '/api/placeholder/300/300',
			description: 'Decorative cushion covers featuring various Mahjong tile designs.',
			features: ['Set of 4', 'Tile designs', 'Home decor', 'Quality fabric']
		},
		{
			id: 35,
			name: 'Wall Art: Mahjong Hands Illustrated Canvas',
			category: 'Fashion & Lifestyle',
			price: 7800,
			originalPrice: null,
			rating: 4.6,
			reviewCount: 67,
			brand: 'ArtHaus, Berlin',
			image: '/api/placeholder/300/300',
			description: 'Artistic canvas print showcasing beautiful Mahjong hand illustrations.',
			features: ['Canvas print', 'Artistic design', 'Wall decor', 'Gallery quality']
		},
		{
			id: 36,
			name: 'Limited Edition Mahjong Watch – Dragon Face Dial',
			category: 'Fashion & Lifestyle',
			price: 190000,
			originalPrice: null,
			rating: 4.9,
			reviewCount: 14,
			brand: 'TimeCraft, Switzerland',
			image: '/api/placeholder/300/300',
			description: 'Luxury Swiss timepiece with dragon-faced dial inspired by Mahjong tiles.',
			features: ['Swiss movement', 'Dragon dial', 'Limited edition', 'Luxury timepiece']
		},
		{
			id: 37,
			name: 'Mahjong Whiskey Glass Set – Laser Etched Tiles',
			category: 'Fashion & Lifestyle',
			price: 15000,
			originalPrice: null,
			rating: 4.7,
			reviewCount: 89,
			brand: 'Crystal Luxe, Czech Republic',
			image: '/api/placeholder/300/300',
			description: 'Premium crystal whiskey glasses with laser-etched Mahjong tile designs.',
			features: ['Crystal glass', 'Laser etching', 'Whiskey set', 'Premium quality']
		},

		// Learning & Community (5 listings)
		{
			id: 38,
			name: 'The Complete Book of Mah Jongg by Amy Lo (Hardcover Edition)',
			category: 'Learning & Community',
			price: 4200,
			originalPrice: null,
			rating: 4.9,
			reviewCount: 156,
			brand: 'Amy Lo Publications',
			image: '/api/placeholder/300/300',
			description: 'Comprehensive hardcover guide to Mahjong by renowned expert Amy Lo.',
			features: ['Hardcover edition', 'Expert author', 'Complete guide', '400+ pages']
		},
		{
			id: 39,
			name: 'Mahjong Strategy Workshop with HK Champion – Online Class',
			category: 'Learning & Community',
			price: 12000,
			originalPrice: null,
			rating: 4.8,
			reviewCount: 43,
			brand: 'Hong Kong Mahjong Academy',
			image: '/api/placeholder/300/300',
			description: 'Exclusive online workshop with Hong Kong championship winner.',
			features: ['Champion instructor', 'Online format', 'Strategy focused', 'Certificate included']
		},
		{
			id: 40,
			name: 'Taiwanese Mahjong Scoring Guidebook 2024 Edition',
			category: 'Learning & Community',
			price: 1200,
			originalPrice: null,
			rating: 4.7,
			reviewCount: 189,
			brand: 'Taipei Gaming Publications',
			image: '/api/placeholder/300/300',
			description: 'Latest edition scoring guide for Taiwanese Mahjong with updated rules.',
			features: ['2024 edition', 'Taiwanese rules', 'Scoring guide', 'Updated content']
		},
		{
			id: 41,
			name: 'Beginner\'s Mahjong e-Course with Interactive Practice Tiles',
			category: 'Learning & Community',
			price: 6000,
			originalPrice: null,
			rating: 4.6,
			reviewCount: 234,
			brand: 'MahjongEdu Online',
			image: '/api/placeholder/300/300',
			description: 'Interactive online course for beginners with virtual practice environment.',
			features: ['Interactive course', 'Virtual tiles', 'Beginner friendly', 'Self-paced']
		},
		{
			id: 42,
			name: 'Tournament Pass – LRC Mahjong Charity Event, Hong Kong',
			category: 'Learning & Community',
			price: 18000,
			originalPrice: null,
			rating: 4.8,
			reviewCount: 67,
			brand: 'LRC Hong Kong',
			image: '/api/placeholder/300/300',
			description: 'Entry pass for prestigious Hong Kong charity tournament event.',
			features: ['Tournament entry', 'Charity event', 'Hong Kong venue', 'Networking opportunity']
		},

		// Collectibles & Art (8 listings)
		{
			id: 43,
			name: '1920s Bone-and-Bamboo Mahjong Set – Museum Verified',
			category: 'Collectibles & Art',
			price: 250000,
			originalPrice: null,
			rating: 5.0,
			reviewCount: 5,
			brand: 'Museum Antiques, Shanghai',
			image: '/api/placeholder/300/300',
			description: 'Authentic 1920s bone and bamboo set with museum verification certificate.',
			features: ['Museum verified', '1920s authentic', 'Bone & bamboo', 'Certificate included']
		},
		{
			id: 44,
			name: 'Hand-Painted Mahjong Dragon Scroll (Wall Art)',
			category: 'Collectibles & Art',
			price: 28000,
			originalPrice: null,
			rating: 4.9,
			reviewCount: 23,
			brand: 'Dragon Art Studio, Beijing',
			image: '/api/placeholder/300/300',
			description: 'Traditional hand-painted scroll featuring majestic dragon artwork.',
			features: ['Hand painted', 'Dragon artwork', 'Traditional scroll', 'Wall art']
		},
		{
			id: 45,
			name: 'Mahjong Sculpture in Bronze – Limited 20 Units',
			category: 'Collectibles & Art',
			price: 90000,
			originalPrice: null,
			rating: 4.8,
			reviewCount: 12,
			brand: 'Bronze Masters, Taiwan',
			image: '/api/placeholder/300/300',
			description: 'Limited edition bronze sculpture depicting classic Mahjong gameplay.',
			features: ['Bronze sculpture', 'Limited to 20', 'Collectible art', 'Numbered piece']
		},
		{
			id: 46,
			name: 'NFT Mahjong Art Series – "Winds of Fortune"',
			category: 'Collectibles & Art',
			price: 15000,
			originalPrice: null,
			rating: 4.2,
			reviewCount: 87,
			brand: 'CryptoArt Collective',
			image: '/api/placeholder/300/300',
			description: 'Digital art NFT series featuring abstract interpretations of wind tiles.',
			features: ['NFT artwork', 'Wind tile theme', 'Digital collectible', 'Blockchain verified']
		},
		{
			id: 47,
			name: 'Vintage Hong Kong Flower Tile Set (Original 1950s)',
			category: 'Collectibles & Art',
			price: 75000,
			originalPrice: null,
			rating: 4.9,
			reviewCount: 18,
			brand: 'Vintage Hong Kong Collections',
			image: '/api/placeholder/300/300',
			description: 'Rare 1950s Hong Kong flower tile set in excellent condition.',
			features: ['1950s original', 'Flower tiles', 'Vintage condition', 'Hong Kong style']
		},
		{
			id: 48,
			name: 'Custom Mahjong Calligraphy Scroll – Your Name in Wind Tiles',
			category: 'Collectibles & Art',
			price: 12500,
			originalPrice: null,
			rating: 4.7,
			reviewCount: 56,
			brand: 'Calligraphy Masters, Kyoto',
			image: '/api/placeholder/300/300',
			description: 'Personalized calligraphy scroll featuring your name written in wind tile style.',
			features: ['Custom calligraphy', 'Wind tile style', 'Personalized art', 'Traditional paper']
		},
		{
			id: 49,
			name: 'Artisan-Crafted Mahjong-Themed Ceramic Tea Set',
			category: 'Collectibles & Art',
			price: 22000,
			originalPrice: null,
			rating: 4.8,
			reviewCount: 34,
			brand: 'Ceramic Arts, Jingdezhen',
			image: '/api/placeholder/300/300',
			description: 'Handcrafted ceramic tea set with intricate Mahjong tile patterns.',
			features: ['Handcrafted ceramic', 'Tea set', 'Mahjong patterns', 'Artisan quality']
		},
		{
			id: 50,
			name: 'Collaboration Drop: Mahjong x Pop Culture (Anime-Themed Tiles)',
			category: 'Collectibles & Art',
			price: 35000,
			originalPrice: null,
			rating: 4.5,
			reviewCount: 123,
			brand: 'PopCulture x Mahjong Co.',
			image: '/api/placeholder/300/300',
			description: 'Limited collaboration featuring anime-inspired Mahjong tile designs.',
			features: ['Anime themed', 'Pop culture', 'Limited collaboration', 'Collector item']
		}
	]);

	let selectedCategory = $state('All');
	let sortBy = $state('Featured');
	let searchQuery = $state('');
	let cartItems = $state(0);
	
	// Pagination
	let currentPage = $state(1);
	const itemsPerPage = 10;

	// Manual filtering with $effect instead of $derived
	let filteredProducts = $state([]);
	let totalPages = $state(1);
	let paginatedProducts = $state([]);
	
	// Update filtered products when filters change
	$effect(() => {
		// Simple filtering logic
		let filtered = products;
		
		if (selectedCategory !== 'All') {
			filtered = filtered.filter(product => product.category === selectedCategory);
		}
		
		if (searchQuery !== '') {
			const searchLower = searchQuery.toLowerCase();
			filtered = filtered.filter(product => 
				product.name.toLowerCase().includes(searchLower) ||
				product.brand.toLowerCase().includes(searchLower)
			);
		}
		
		// Apply sorting
		if (sortBy === 'Price: Budget Friendly') {
			filtered = filtered.sort((a, b) => a.price - b.price);
		} else if (sortBy === 'Price: Investment Pieces') {
			filtered = filtered.sort((a, b) => b.price - a.price);
		} else if (sortBy === 'Most Loved') {
			filtered = filtered.sort((a, b) => b.rating - a.rating);
		} else if (sortBy === 'New Arrivals') {
			filtered = filtered.sort((a, b) => b.id - a.id); // Assume higher ID = newer
		}
		// 'Our Favorites' keeps original order
		
		filteredProducts = filtered;
		totalPages = Math.ceil(filtered.length / itemsPerPage);
		
		// Update paginated products
		const startIndex = (currentPage - 1) * itemsPerPage;
		paginatedProducts = filtered.slice(startIndex, startIndex + itemsPerPage);
	});
	
	// Reset to page 1 when filters change
	$effect(() => {
		currentPage = 1;
		// Dependencies: selectedCategory, searchQuery, sortBy
	});

	const addToCart = (productId: number) => {
		cartItems++;
		// In a real app, this would add to cart store/database
	};
</script>

<svelte:head>
	<title>Marketplace - Premium Mahjong Products</title>
	<meta name="description" content="Shop premium Mahjong sets, tables, accessories, and books. Curated collection from trusted vendors across India." />
</svelte:head>

<div class="bg-white">
	<!-- Premium Hero Section -->
	<div class="relative bg-gradient-to-br from-emerald-50 via-white to-green-50 overflow-hidden">
		<div class="absolute inset-0 bg-grid-gray-900/[0.04] bg-[size:20px_20px]" aria-hidden="true"></div>
		<!-- Decorative blur -->
		<div class="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full opacity-10 blur-3xl" aria-hidden="true"></div>
		<div class="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
			<div class="text-center mb-12">
				<!-- Premium Badge -->
				<div class="inline-flex items-center rounded-full bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-200 px-6 py-3 text-sm font-medium text-amber-900 mb-8 shadow-sm">
					<div class="w-2 h-2 bg-amber-500 rounded-full mr-3 animate-pulse"></div>
					<ShoppingCart class="w-4 h-4 mr-2" />
					Handpicked Collection • Trusted Artisans
				</div>
				
				<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6 leading-tight">
					Beautiful <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700">Mahjong</span> Treasures
				</h1>
				
				<p class="text-xl text-gray-700 max-w-3xl mx-auto mb-4 leading-relaxed">
					Discover wonderful pieces crafted by talented artisans across India and beyond.
					From family heirloom sets to modern accessories.
				</p>

				<!-- Trust Indicators -->
				<div class="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm text-gray-600">
					<div class="flex items-center">
						<div class="w-5 h-5 text-green-600 mr-2">
							<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
						</div>
						<span class="font-medium">Authentic Craftsmanship</span>
					</div>
					<div class="flex items-center">
						<div class="w-5 h-5 text-green-600 mr-2">
							<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
						</div>
						<span class="font-medium">Buy Direct from Artisans</span>
					</div>
					<div class="flex items-center">
						<div class="w-5 h-5 text-green-600 mr-2">
							<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
						</div>
						<span class="font-medium">Secure & Safe Shopping</span>
					</div>
				</div>
			</div>

			<!-- Premium Search Bar -->
			<div class="max-w-2xl mx-auto">
				<div class="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-2">
					<div class="flex">
						<div class="flex-1 px-8 py-5">
							<input
								type="text"
								bind:value={searchQuery}
								placeholder="Search for sets, tables, or handcrafted pieces..."
								class="w-full text-lg text-gray-900 placeholder-gray-400 bg-transparent border-0 p-0 focus:ring-0 focus:outline-none font-medium"
							/>
						</div>
						<button class="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white rounded-xl px-6 py-3 text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 flex items-center">
							<Search class="w-5 h-5 mr-3" />
							Discover Treasures
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Premium Category Filters -->
	<div class="bg-gradient-to-r from-gray-50 via-white to-emerald-50 border-t border-gray-200/50">
		<div class="mx-auto max-w-7xl px-6 py-6 lg:px-8">
			<div class="flex flex-wrap items-center gap-4">
				<div class="flex items-center gap-3">
					<div class="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
						<Filter class="w-4 h-4 text-white" />
					</div>
					<span class="text-sm font-bold text-gray-800">Browse by Collection:</span>
				</div>
				<button 
					class="inline-flex items-center px-5 py-3 border-2 {selectedCategory === 'All' ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-700'} rounded-xl text-sm font-bold hover:shadow-lg transition-all duration-300"
					onclick={() => selectedCategory = 'All'}
				>
					🎆 All Collections
				</button>
				{#each [
					{display: 'Beautiful Sets', value: 'Mahjong Sets', emoji: '🎲'}, 
					{display: 'Elegant Tables', value: 'Tables & Furniture', emoji: '🪑'}, 
					{display: 'Smart Accessories', value: 'Accessories & Game Aids', emoji: '✨'}, 
					{display: 'Lifestyle Pieces', value: 'Fashion & Lifestyle', emoji: '💎'}, 
					{display: 'Learning Tools', value: 'Learning & Community', emoji: '📚'}, 
					{display: 'Collector Items', value: 'Collectibles & Art', emoji: '🎨'}
				] as cat}
					<button 
						class="inline-flex items-center px-5 py-3 border-2 {selectedCategory === cat.value ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-700'} rounded-xl text-sm font-bold hover:shadow-lg transition-all duration-300"
						onclick={() => selectedCategory = cat.value}
					>
						{cat.emoji} {cat.display}
					</button>
				{/each}
			</div>
		</div>
	</div>

	<!-- Premium Results Bar -->
	<div class="mx-auto max-w-7xl px-6 lg:px-8 py-6">
		<div class="flex items-center justify-between bg-gradient-to-r from-white via-gray-50 to-white rounded-2xl p-6 border border-gray-200/50 shadow-sm">
			<div class="flex items-center">
				<div class="w-3 h-3 bg-emerald-500 rounded-full mr-3 animate-pulse"></div>
				<p class="text-base font-medium text-gray-800">
					<span class="font-bold text-emerald-600">{filteredProducts.length} beautiful pieces</span>
					{#if selectedCategory !== 'All'}in {selectedCategory.replace('Mahjong ', '').replace('Tables & ', '').replace('Accessories & ', '').replace('Fashion & ', '').replace('Learning & ', '').replace('Collectibles & ', '')}{/if} waiting for you
				</p>
			</div>
			<div class="flex items-center gap-4">
				{#if cartItems > 0}
					<div class="flex items-center bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 text-emerald-700 px-5 py-3 rounded-xl shadow-md">
						<ShoppingCart class="h-4 w-4 mr-2" />
						<span class="text-sm font-bold">{cartItems} in your collection</span>
					</div>
				{/if}
				<select 
					bind:value={sortBy}
					class="border-2 border-gray-200 bg-white rounded-xl px-4 py-3 text-sm font-medium focus:ring-emerald-500 focus:border-emerald-500 shadow-md hover:shadow-lg transition-all duration-300"
				>
					<option>Our Favorites</option>
					<option>Price: Budget Friendly</option>
					<option>Price: Investment Pieces</option>
					<option>Most Loved</option>
					<option>New Arrivals</option>
				</select>
			</div>
		</div>
	</div>

	<!-- Products Grid - Amazon Style -->
	<div class="mx-auto max-w-7xl px-6 lg:px-8 pb-12">
		
		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{#each paginatedProducts as product, index}
				<div class="group bg-white/80 backdrop-blur-sm border border-white/50 rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer">
					<!-- Premium Product Image -->
					<div class="aspect-square bg-gradient-to-br {index % 4 === 0 ? 'from-emerald-100 to-green-200' : index % 4 === 1 ? 'from-amber-100 to-yellow-200' : index % 4 === 2 ? 'from-purple-100 to-indigo-200' : 'from-rose-100 to-pink-200'} relative overflow-hidden">
						<!-- Premium badges -->
						{#if product.originalPrice}
							<div class="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-2 rounded-xl text-xs font-bold shadow-lg">
								✨ {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
							</div>
						{/if}
						{#if product.price > 100000}
							<div class="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-white px-3 py-2 rounded-xl text-xs font-bold shadow-lg">
								🏆 Luxury
							</div>
						{:else if product.rating >= 4.8}
							<div class="absolute top-4 right-4 bg-gradient-to-r from-emerald-400 to-green-500 text-white px-3 py-2 rounded-xl text-xs font-bold shadow-lg">
								⭐ Loved
							</div>
						{/if}
						<div class="absolute bottom-4 right-4 bg-white/90 backdrop-blur rounded-full p-2 shadow-lg group-hover:scale-110 transition-transform">
							<button class="text-gray-400 hover:text-red-500 transition-colors">
								<Heart class="w-5 h-5" />
							</button>
						</div>
					</div>

					<!-- Premium Product Info -->
					<div class="p-6 space-y-4">
						<!-- Brand -->
						<div class="flex items-center justify-between">
							<p class="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded-lg">{product.brand}</p>
							<div class="flex items-center bg-amber-50 px-2 py-1 rounded-lg">
								<Star class="w-4 h-4 text-amber-500 fill-current mr-1" />
								<span class="text-sm font-bold text-amber-700">{product.rating}</span>
								<span class="text-xs text-amber-600 ml-1">({product.reviewCount})</span>
							</div>
						</div>
						
						<!-- Title -->
						<h3 class="text-base font-bold text-gray-900 leading-tight group-hover:text-emerald-600 transition-colors">
							{product.name}
						</h3>
						
						<!-- Features Tags -->
						<div class="flex flex-wrap gap-2">
							{#each product.features.slice(0, 2) as feature, i}
								<span class="inline-block bg-gradient-to-r {i === 0 ? 'from-emerald-50 to-green-50 text-emerald-700 border-emerald-200' : 'from-purple-50 to-indigo-50 text-purple-700 border-purple-200'} border text-xs px-3 py-1 rounded-lg font-medium">
									{feature}
								</span>
							{/each}
							{#if product.features.length > 2}
								<span class="text-xs text-gray-500 font-medium">+{product.features.length - 2} more</span>
							{/if}
						</div>

						
						<!-- Premium Pricing Section -->
						<div class="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-4">
							<div class="flex items-center justify-between mb-3">
								<div>
									{#if product.originalPrice}
										<div class="flex items-baseline space-x-2">
											<span class="text-xl font-bold text-gray-900">₹{product.price.toLocaleString('en-IN')}</span>
											<span class="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
										</div>
									{:else}
										<span class="text-xl font-bold text-gray-900">₹{product.price.toLocaleString('en-IN')}</span>
									{/if}
									<div class="text-xs text-gray-600 font-medium">Buy direct from artisan</div>
								</div>
								{#if product.price > 50000}
									<div class="bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-200 px-3 py-2 rounded-xl text-xs font-bold text-amber-800">
										🚚 Free shipping
									</div>
								{/if}
							</div>

							<!-- Premium CTA Button -->
							<button 
								class="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white px-4 py-2.5 rounded-lg text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200"
								onclick={() => addToCart(product.id)}
							>
								🛍️ Add to Collection
							</button>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Premium Pagination -->
		{#if totalPages > 1 && filteredProducts.length > 0}
			<div class="text-center mt-16">
				<div class="inline-flex items-center bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl shadow-2xl p-2">
					<!-- Previous Button -->
					<button 
						onclick={() => currentPage = Math.max(1, currentPage - 1)}
						disabled={currentPage === 1}
						class="px-6 py-3 text-sm font-bold text-gray-700 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-emerald-50 hover:to-green-50 hover:text-emerald-600 rounded-xl shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
					>
						← Previous
					</button>
					
					<!-- Page Numbers -->
					{#each Array.from({length: Math.min(5, totalPages)}, (_, i) => {
						let start = Math.max(1, currentPage - 2);
						let end = Math.min(totalPages, start + 4);
						start = Math.max(1, end - 4);
						return start + i;
					}) as page}
						{#if page <= totalPages}
							<button 
								onclick={() => currentPage = page}
								class="px-4 py-3 text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 {
									currentPage === page 
										? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white' 
										: 'bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 hover:from-emerald-50 hover:to-green-50 hover:text-emerald-600'
								}"
							>
								{page}
							</button>
						{/if}
					{/each}
					
					<!-- Next Button -->
					<button 
						onclick={() => currentPage = Math.min(totalPages, currentPage + 1)}
						disabled={currentPage === totalPages}
						class="px-6 py-3 text-sm font-bold text-gray-700 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-emerald-50 hover:to-green-50 hover:text-emerald-600 rounded-xl shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
					>
						Next →
					</button>
				</div>
			</div>
		{/if}
		
		{#if filteredProducts.length === 0}
			<div class="text-center py-16">
				<div class="w-28 h-28 mx-auto mb-6 bg-gradient-to-br from-emerald-100 to-green-200 rounded-3xl flex items-center justify-center">
					<div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center">
						<Search class="w-8 h-8 text-white" />
					</div>
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-4">Looking for something specific?</h3>
				<p class="text-lg text-gray-600 mb-6">Our artisans are always creating new pieces. Try adjusting your search or check back soon!</p>
				<button 
					class="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white px-8 py-4 rounded-xl text-sm font-bold shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
					onclick={() => { selectedCategory = 'All'; searchQuery = ''; }}
				>
					🔎 Browse All Collections
				</button>
			</div>
		{/if}
	</div>

	<!-- Premium CTA Section -->
	<div class="bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 py-20 sm:py-28 relative overflow-hidden">
		<!-- Background Pattern -->
		<div class="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" aria-hidden="true"></div>
		<div class="relative mx-auto max-w-7xl px-6 lg:px-8">
			<div class="relative isolate overflow-hidden bg-white/5 backdrop-blur-sm px-8 py-24 sm:rounded-3xl sm:px-12 sm:py-32 md:px-16 lg:px-20 border border-white/10 shadow-2xl">
				<div class="mx-auto max-w-2xl text-center">
					<div class="inline-flex items-center rounded-full bg-white/20 border border-white/30 px-6 py-3 text-sm font-medium text-white mb-8 shadow-lg backdrop-blur-sm">
						<div class="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></div>
						Join Our Artisan Community
					</div>
					<h2 class="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6 leading-tight">
						Share Your Beautiful <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-300">Creations</span>
					</h2>
					<p class="text-xl leading-8 text-emerald-100 mb-12">
						Are you a talented artisan or maker? Join our marketplace and connect with 
						Mahjong enthusiasts who appreciate quality craftsmanship.
					</p>

					<!-- Premium Benefits -->
					<div class="grid gap-8 sm:grid-cols-3 mb-12">
						<div class="text-center group">
							<div class="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
								<ShoppingCart class="w-8 h-8 text-white" />
							</div>
							<h4 class="text-lg font-bold text-white mb-3">Passionate Buyers</h4>
							<p class="text-emerald-100 leading-relaxed">Connect with customers who<br/>truly value your craft</p>
						</div>
						
						<div class="text-center group">
							<div class="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
								<Star class="w-8 h-8 text-white" />
							</div>
							<h4 class="text-lg font-bold text-white mb-3">Fair Pricing</h4>
							<p class="text-emerald-100 leading-relaxed">Set your own prices and<br/>keep what you deserve</p>
						</div>
						
						<div class="text-center group">
							<div class="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
								<Heart class="w-8 h-8 text-white" />
							</div>
							<h4 class="text-lg font-bold text-white mb-3">Community Support</h4>
							<p class="text-emerald-100 leading-relaxed">Join a community that<br/>celebrates your artistry</p>
						</div>
					</div>

					<div class="flex flex-col sm:flex-row gap-6 items-center justify-center">
						<a
							href="/vendor/apply"
							class="w-full sm:w-auto group inline-flex items-center justify-center bg-white px-10 py-5 rounded-2xl text-lg font-bold text-emerald-600 shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105 border-4 border-white/20"
						>
							<div class="w-6 h-6 bg-emerald-600 rounded-lg flex items-center justify-center mr-3 group-hover:bg-emerald-500 transition-colors">
								<ShoppingCart class="w-4 h-4 text-white" />
							</div>
							Join as Artisan
						</a>
						
						<div class="bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-6 py-3">
							<div class="text-white text-sm font-medium text-center">
								<span class="text-emerald-200">🎆</span> No setup fees
								<span class="mx-3 text-white/40">•</span>
								<span class="text-emerald-200">💝</span> Full support
								<span class="mx-3 text-white/40">•</span>
								<span class="text-emerald-200">🌟</span> Fair terms
							</div>
						</div>
					</div>
				</div>
				
				<!-- Background decoration -->
				<div class="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
					<div class="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-emerald-400 to-green-600 opacity-25" style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"></div>
				</div>
			</div>
		</div>
	</div>
</div>