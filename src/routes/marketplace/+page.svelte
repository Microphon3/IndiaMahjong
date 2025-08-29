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
			name: 'Custom Mahjong Set – Add Your Family Crest or Logo',
			category: 'Mahjong Sets',
			price: 30000,
			originalPrice: null,
			rating: 4.7,
			reviewCount: 62,
			brand: 'Personalised Play, Delhi',
			image: '/api/placeholder/300/300',
			description: 'Personalized mahjong set with your family crest, logo, or custom design.',
			features: ['Fully customizable', 'Family crest option', 'Logo integration', 'Personal touch']
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
		if (sortBy === 'Price: Low to High') {
			filtered = filtered.sort((a, b) => a.price - b.price);
		} else if (sortBy === 'Price: High to Low') {
			filtered = filtered.sort((a, b) => b.price - a.price);
		} else if (sortBy === 'Rating' || sortBy === 'Customer Rating') {
			filtered = filtered.sort((a, b) => b.rating - a.rating);
		} else if (sortBy === 'Newest' || sortBy === 'Newest Arrivals') {
			filtered = filtered.sort((a, b) => b.id - a.id); // Assume higher ID = newer
		}
		// 'Featured' or 'Sort by Featured' keeps original order
		
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
	<!-- Hero Section - Modern & Clean -->
	<div class="relative bg-gradient-to-br from-emerald-50 via-white to-green-50">
		<div class="absolute inset-0 bg-grid-gray-900/[0.04] bg-[size:20px_20px]" aria-hidden="true"></div>
		<div class="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
			<div class="text-center mb-12">
				<div class="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800 mb-6">
					<ShoppingCart class="w-4 h-4 mr-2" />
					50+ premium products
				</div>
				
				<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
					Premium <span class="text-emerald-600">Mahjong</span><br/>
					Marketplace
				</h1>
				
				<p class="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
					Discover curated collections from trusted artisans. Tournament-grade tiles, professional tables, and unique collectibles.
				</p>
			</div>

			<!-- Simplified Search Bar -->
			<div class="max-w-2xl mx-auto">
				<div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-1">
					<div class="flex">
						<div class="flex-1 px-6 py-4">
							<input
								type="text"
								bind:value={searchQuery}
								placeholder="Search tiles, tables, accessories, or brands..."
								class="w-full text-lg text-gray-900 placeholder-gray-500 bg-transparent border-0 p-0 focus:ring-0 focus:outline-none"
							/>
						</div>
						<button class="bg-emerald-600 text-white rounded-xl px-8 py-4 text-sm font-semibold hover:bg-emerald-700 transition-colors flex items-center">
							<Search class="w-5 h-5 mr-2" />
							Search Products
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Category Banner - Amazon Style -->
	<div class="bg-gray-50 border-b">
		<div class="mx-auto max-w-7xl px-6 py-4 lg:px-8">
			<div class="flex items-center justify-between">
				<div class="flex items-center space-x-4 text-sm">
					<button class="bg-white border border-gray-300 px-3 py-2 rounded-md hover:bg-gray-50 font-medium">
						<Filter class="w-4 h-4 inline mr-2" />
						Filters
					</button>
					{#each [
						{display: 'Mahjong Sets', value: 'Mahjong Sets'}, 
						{display: 'Tables', value: 'Tables & Furniture'}, 
						{display: 'Accessories', value: 'Accessories & Game Aids'}, 
						{display: 'Fashion', value: 'Fashion & Lifestyle'}, 
						{display: 'Learning', value: 'Learning & Community'}, 
						{display: 'Art', value: 'Collectibles & Art'}
					] as cat}
						<button 
							class="px-3 py-2 rounded-md hover:bg-white transition-colors {selectedCategory === cat.value ? 'bg-white font-medium' : 'text-gray-700'}"
							onclick={() => selectedCategory = cat.value}
						>
							{cat.display}
						</button>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<!-- Results Bar -->
	<div class="mx-auto max-w-7xl px-6 lg:px-8 py-4">
		<div class="flex items-center justify-between border-b border-gray-200 pb-4">
			<div class="flex items-center space-x-4">
				<p class="text-sm text-gray-600">
					<span class="font-semibold text-gray-900">{filteredProducts.length} results</span>
					{#if selectedCategory !== 'All'}for "{selectedCategory}"{/if}
				</p>
			</div>
			<div class="flex items-center space-x-4">
				{#if cartItems > 0}
					<div class="flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-3 py-2 rounded-md">
						<ShoppingCart class="h-4 w-4" />
						<span class="text-sm font-medium">{cartItems} items in cart</span>
					</div>
				{/if}
				<select 
					bind:value={sortBy}
					class="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-emerald-500 focus:border-emerald-500"
				>
					<option>Sort by Featured</option>
					<option>Price: Low to High</option>
					<option>Price: High to Low</option>
					<option>Customer Rating</option>
					<option>Newest Arrivals</option>
				</select>
			</div>
		</div>
	</div>

	<!-- Products Grid - Amazon Style -->
	<div class="mx-auto max-w-7xl px-6 lg:px-8 pb-12">
		
		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{#each paginatedProducts as product}
				<div class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
					<!-- Product Image -->
					<div class="aspect-square bg-gray-100 rounded-md mb-3 relative">
						{#if product.originalPrice}
							<div class="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
								-{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
							</div>
						{/if}
						<div class="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow-sm">
							<button class="text-gray-400 hover:text-red-500">
								<Heart class="w-4 h-4" />
							</button>
						</div>
					</div>

					<!-- Product Info -->
					<div class="space-y-2">
						<!-- Brand -->
						<p class="text-xs text-emerald-600 font-medium">{product.brand}</p>
						
						<!-- Title -->
						<h3 class="text-sm font-medium text-gray-900 line-clamp-2 hover:text-emerald-600">
							{product.name}
						</h3>
						
						<!-- Rating -->
						<div class="flex items-center space-x-1">
							<div class="flex">
								{#each Array(5) as _, i}
									<Star class="w-3 h-3 {i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}" />
								{/each}
							</div>
							<span class="text-xs text-gray-500">({product.reviewCount})</span>
						</div>

						<!-- Price -->
						<div class="space-y-1">
							{#if product.originalPrice}
								<div class="flex items-center space-x-2">
									<span class="text-lg font-bold text-gray-900">₹{product.price.toLocaleString('en-IN')}</span>
									<span class="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
								</div>
							{:else}
								<span class="text-lg font-bold text-gray-900">₹{product.price.toLocaleString('en-IN')}</span>
							{/if}
							
							<!-- Prime badge for expensive items -->
							{#if product.price > 50000}
								<div class="flex items-center space-x-1">
									<span class="text-xs text-emerald-600 font-bold">Premium</span>
									<span class="text-xs text-gray-500">Free shipping</span>
								</div>
							{/if}
						</div>

						<!-- Add to Cart Button -->
						<button 
							class="w-full bg-emerald-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-emerald-700 transition-colors mt-2"
							onclick={() => addToCart(product.id)}
						>
							Add to Cart
						</button>
						
						<!-- Features -->
						<div class="mt-2">
							<div class="flex flex-wrap gap-1">
								{#each product.features.slice(0, 2) as feature}
									<span class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
										{feature}
									</span>
								{/each}
								{#if product.features.length > 2}
									<span class="text-xs text-gray-500">+{product.features.length - 2} more</span>
								{/if}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Pagination -->
		{#if totalPages > 1 && filteredProducts.length > 0}
			<div class="flex items-center justify-center mt-12 space-x-2">
				<!-- Previous Button -->
				<button 
					onclick={() => currentPage = Math.max(1, currentPage - 1)}
					disabled={currentPage === 1}
					class="inline-flex items-center rounded-lg bg-white border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
				>
					Previous
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
							class="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-colors {
								currentPage === page 
									? 'bg-emerald-600 text-white' 
									: 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
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
					class="inline-flex items-center rounded-lg bg-white border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
				>
					Next
				</button>
			</div>
		{/if}
		
		{#if filteredProducts.length === 0}
			<div class="text-center py-12">
				<div class="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
					<Search class="w-8 h-8 text-gray-400" />
				</div>
				<h3 class="text-lg font-medium text-gray-900 mb-2">No products found</h3>
				<p class="text-gray-600">Try adjusting your search or filters to find what you're looking for.</p>
			</div>
		{/if}
	</div>

	<!-- CTA Section -->
	<div class="bg-emerald-50">
		<div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
			<div class="mx-auto max-w-2xl text-center">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Sell Your Products
				</h2>
				<p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
					Are you a Mahjong product manufacturer or retailer? Join our marketplace and reach passionate players across India.
				</p>
				<div class="mt-10">
					<a
						href="/vendor/apply"
						class="rounded-md bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500"
					>
						Become a Vendor
					</a>
				</div>
			</div>
		</div>
	</div>
</div>