<script lang="ts">
	import { Calendar, MapPin, Users, Clock, Star, Ticket, Plus, Filter } from 'lucide-svelte';

	const eventCategories = ['All', 'Social', 'Tournament', 'Cruise', 'Villa Party', 'Bar Events', 'Workshop'];
	const priceRanges = ['All', 'Free', 'Under ₹500', '₹500-₹2000', '₹2000-₹5000', 'Above ₹5000'];

	const events = [
		{
			id: 1,
			title: 'Mahjong Cruise Night - Mumbai Harbor',
			category: 'Cruise',
			date: '2025-01-15',
			time: '19:00',
			endTime: '23:00',
			venue: 'Gateway of India',
			location: 'Mumbai',
			organizer: 'Mumbai Mahjong Society',
			image: '/api/placeholder/400/250',
			price: 3500,
			originalPrice: 4000,
			capacity: 80,
			registered: 47,
			rating: 4.8,
			reviews: 24,
			description: 'Join us for an elegant evening of Mahjong on Mumbai\'s premier cruise. Enjoy games while sailing past the iconic Mumbai skyline.',
			highlights: ['4-hour cruise experience', 'Professional Mahjong tables', 'Dinner & drinks included', 'Live DJ music', 'Networking opportunities'],
			difficulty: 'All Levels'
		},
		{
			id: 2,
			title: '2-Day Mahjong Retreat - Alibaug Villa',
			category: 'Villa Party',
			date: '2025-01-25',
			time: '15:00',
			endTime: '2025-01-26 18:00',
			venue: 'Luxury Villa Resort',
			location: 'Alibaug, Maharashtra',
			organizer: 'Elite Mahjong Club',
			image: '/api/placeholder/400/250',
			price: 8500,
			originalPrice: null,
			capacity: 24,
			registered: 18,
			rating: 4.9,
			reviews: 12,
			description: 'Weekend getaway combining competitive Mahjong with luxury accommodation. Perfect for serious players and relaxation.',
			highlights: ['2-day luxury stay', 'Multiple tournaments', 'Pool & beach access', 'All meals included', 'Transportation from Mumbai'],
			difficulty: 'Intermediate+'
		},
		{
			id: 3,
			title: 'Friday Night Mahjong @ The Den',
			category: 'Bar Events',
			date: '2025-01-17',
			time: '20:30',
			endTime: '01:00',
			venue: 'The Den - Bandra',
			location: 'Mumbai',
			organizer: 'Nightlife Mahjong League',
			image: '/api/placeholder/400/250',
			price: 800,
			originalPrice: 1000,
			capacity: 32,
			registered: 28,
			rating: 4.6,
			reviews: 45,
			description: 'Weekly casual Mahjong night in Mumbai\'s coolest bar. Great vibes, craft cocktails, and friendly competition.',
			highlights: ['Casual atmosphere', 'Craft cocktails & snacks', 'Weekly prizes', 'Meet other players', 'DJ music after games'],
			difficulty: 'Beginner Friendly'
		},
		{
			id: 4,
			title: 'Learn Riichi Mahjong - Workshop',
			category: 'Workshop',
			date: '2025-01-20',
			time: '14:00',
			endTime: '17:00',
			venue: 'Learning Center',
			location: 'Delhi',
			organizer: 'Delhi Mahjong Academy',
			image: '/api/placeholder/400/250',
			price: 0,
			originalPrice: null,
			capacity: 16,
			registered: 12,
			rating: 4.9,
			reviews: 8,
			description: 'Free workshop for beginners to learn Japanese Riichi Mahjong rules, strategies, and etiquette.',
			highlights: ['Expert instruction', 'Free learning materials', 'Practice games', 'Tea & snacks', 'Certificate of completion'],
			difficulty: 'Beginner'
		},
		{
			id: 5,
			title: 'Corporate Mahjong Championship',
			category: 'Tournament',
			date: '2025-02-01',
			time: '10:00',
			endTime: '18:00',
			venue: 'Business Center',
			location: 'Gurgaon',
			organizer: 'Corporate Games India',
			image: '/api/placeholder/400/250',
			price: 1500,
			originalPrice: null,
			capacity: 64,
			registered: 38,
			rating: 4.7,
			reviews: 19,
			description: 'Annual corporate tournament bringing together professionals from across NCR for a day of strategic competition.',
			highlights: ['Swiss tournament format', 'Professional prizes', 'Lunch & refreshments', 'Networking sessions', 'Team building activities'],
			difficulty: 'Intermediate'
		},
		{
			id: 6,
			title: 'Sunday Social Mahjong',
			category: 'Social',
			date: '2025-01-19',
			time: '16:00',
			endTime: '20:00',
			venue: 'Community Hall',
			location: 'Pune',
			organizer: 'Pune Mahjong Circle',
			image: '/api/placeholder/400/250',
			price: 300,
			originalPrice: null,
			capacity: 40,
			registered: 35,
			rating: 4.5,
			reviews: 67,
			description: 'Relaxed Sunday gathering for Mahjong enthusiasts. Perfect for families and casual players.',
			highlights: ['Family-friendly', 'Multiple skill levels', 'Tea & snacks', 'Friendly competition', 'Regular attendees'],
			difficulty: 'All Levels'
		}
	];

	let selectedCategory = $state('All');
	let selectedPriceRange = $state('All');
	let searchQuery = $state('');

	// Reactive filtering with $effect
	let filteredEvents = $state([]);
	
	$effect(() => {
		let filtered = events.filter(event => {
			const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
			const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			                      event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
			                      event.organizer.toLowerCase().includes(searchQuery.toLowerCase());
			
			let matchesPrice = true;
			if (selectedPriceRange !== 'All') {
				if (selectedPriceRange === 'Free') {
					matchesPrice = event.price === 0;
				} else if (selectedPriceRange === 'Under ₹500') {
					matchesPrice = event.price > 0 && event.price < 500;
				} else if (selectedPriceRange === '₹500-₹2000') {
					matchesPrice = event.price >= 500 && event.price <= 2000;
				} else if (selectedPriceRange === '₹2000-₹5000') {
					matchesPrice = event.price >= 2000 && event.price <= 5000;
				} else if (selectedPriceRange === 'Above ₹5000') {
					matchesPrice = event.price > 5000;
				}
			}

			return matchesCategory && matchesSearch && matchesPrice;
		});
		
		filteredEvents = filtered;
	});

	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString('en-IN', {
			day: 'numeric',
			month: 'short',
			year: 'numeric'
		});
	};

	const formatTime = (timeString: string) => {
		const [hours, minutes] = timeString.split(':');
		const hour = parseInt(hours);
		const ampm = hour >= 12 ? 'PM' : 'AM';
		const displayHour = hour % 12 || 12;
		return `${displayHour}:${minutes} ${ampm}`;
	};

	const getDaysFromNow = (dateString: string) => {
		const eventDate = new Date(dateString);
		const today = new Date();
		const diffTime = eventDate.getTime() - today.getTime();
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		
		if (diffDays === 0) return 'Today';
		if (diffDays === 1) return 'Tomorrow';
		if (diffDays > 0) return `In ${diffDays} days`;
		return 'Past event';
	};

	const buyTicket = (eventId: number) => {
		// In a real app, this would integrate with payment system
		alert('Ticket purchase functionality would be integrated with payment gateway');
	};

	const getVenueIllustration = (venue: string, category: string) => {
		const baseClass = "w-full h-full";
		
		// Mahjong tile component - subtle and clean
		const mahjongTile = (x: number, y: number, symbol: string, opacity = 0.15) => `
			<g transform="translate(${x}, ${y})">
				<rect width="16" height="22" fill="white" stroke="#10B981" stroke-width="0.5" opacity="${opacity}" rx="2"/>
				<text x="8" y="15" font-family="serif" font-size="10" text-anchor="middle" fill="#059669" opacity="${opacity + 0.1}">${symbol}</text>
			</g>
		`;
		
		if (venue.includes('Gateway of India') || category === 'Cruise') {
			return `<svg viewBox="0 0 400 225" class="${baseClass}">
				<defs>
					<linearGradient id="cruise" x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" style="stop-color:#ECFDF5"/>
						<stop offset="60%" style="stop-color:#D1FAE5"/>
						<stop offset="100%" style="stop-color:#A7F3D0"/>
					</linearGradient>
				</defs>
				<rect width="400" height="225" fill="url(#cruise)"/>
				<path d="M0 160 Q200 140 400 160 L400 225 L0 225 Z" fill="#10B981" opacity="0.1"/>
				<rect x="180" y="90" width="40" height="60" fill="#10B981" opacity="0.2" rx="2"/>
				<path d="M180 90 L200 70 L220 90" fill="#059669" opacity="0.3"/>
				${mahjongTile(80, 50, '🀀')}
				${mahjongTile(320, 70, '🀁')}
				${mahjongTile(60, 180, '🀂')}
				${mahjongTile(340, 190, '🀃')}
			</svg>`;
		}
		
		if (venue.includes('Villa') || category === 'Villa Party') {
			return `<svg viewBox="0 0 400 225" class="${baseClass}">
				<defs>
					<linearGradient id="villa" x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" style="stop-color:#F0FDF4"/>
						<stop offset="100%" style="stop-color:#DCFCE7"/>
					</linearGradient>
				</defs>
				<rect width="400" height="225" fill="url(#villa)"/>
				<ellipse cx="200" cy="180" rx="120" ry="20" fill="#10B981" opacity="0.1"/>
				<rect x="160" y="100" width="80" height="40" fill="#059669" opacity="0.2" rx="4"/>
				<path d="M160 100 L200 80 L240 100" fill="#047857" opacity="0.3"/>
				<circle cx="80" cy="140" r="15" fill="#22C55E" opacity="0.2"/>
				<circle cx="320" cy="160" r="12" fill="#16A34A" opacity="0.25"/>
				${mahjongTile(50, 60, '🀄')}
				${mahjongTile(300, 40, '🀅')}
				${mahjongTile(40, 190, '🀆')}
				${mahjongTile(320, 200, '🀀')}
			</svg>`;
		}
		
		if (venue.includes('Den') || venue.includes('Bar') || category === 'Bar Events') {
			return `<svg viewBox="0 0 400 225" class="${baseClass}">
				<defs>
					<linearGradient id="bar" x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" style="stop-color:#F9FAFB"/>
						<stop offset="100%" style="stop-color:#F3F4F6"/>
					</linearGradient>
				</defs>
				<rect width="400" height="225" fill="url(#bar)"/>
				<rect x="50" y="120" width="300" height="60" fill="#10B981" opacity="0.1" rx="4"/>
				<circle cx="120" cy="140" r="8" fill="#059669" opacity="0.3"/>
				<circle cx="200" cy="135" r="10" fill="#10B981" opacity="0.25"/>
				<circle cx="280" cy="145" r="6" fill="#16A34A" opacity="0.35"/>
				<rect x="0" y="40" width="400" height="30" fill="#10B981" opacity="0.05"/>
				${mahjongTile(30, 80, '🀇')}
				${mahjongTile(360, 60, '🀈')}
				${mahjongTile(20, 190, '🀉')}
				${mahjongTile(350, 180, '🀊')}
			</svg>`;
		}
		
		if (venue.includes('Learning') || venue.includes('Academy') || category === 'Workshop') {
			return `<svg viewBox="0 0 400 225" class="${baseClass}">
				<defs>
					<linearGradient id="workshop" x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" style="stop-color:#F0FDF4"/>
						<stop offset="100%" style="stop-color:#ECFDF5"/>
					</linearGradient>
				</defs>
				<rect width="400" height="225" fill="url(#workshop)"/>
				<rect x="80" y="80" width="240" height="80" fill="#10B981" opacity="0.1" rx="8"/>
				<rect x="100" y="100" width="200" height="40" fill="#059669" opacity="0.15" rx="4"/>
				<circle cx="130" cy="180" r="8" fill="#10B981" opacity="0.3"/>
				<circle cx="170" cy="180" r="8" fill="#16A34A" opacity="0.3"/>
				<circle cx="210" cy="180" r="8" fill="#059669" opacity="0.3"/>
				${mahjongTile(40, 40, '🀋')}
				${mahjongTile(340, 30, '🀌')}
				${mahjongTile(30, 190, '🀍')}
				${mahjongTile(350, 190, '🀎')}
			</svg>`;
		}
		
		if (venue.includes('Business') || venue.includes('Corporate') || category === 'Tournament') {
			return `<svg viewBox="0 0 400 225" class="${baseClass}">
				<defs>
					<linearGradient id="business" x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" style="stop-color:#FAFAFA"/>
						<stop offset="100%" style="stop-color:#F4F4F5"/>
					</linearGradient>
				</defs>
				<rect width="400" height="225" fill="url(#business)"/>
				<rect x="120" y="60" width="40" height="100" fill="#10B981" opacity="0.15"/>
				<rect x="180" y="80" width="40" height="80" fill="#059669" opacity="0.2"/>
				<rect x="240" y="70" width="40" height="90" fill="#16A34A" opacity="0.18"/>
				<rect x="0" y="50" width="400" height="8" fill="#10B981" opacity="0.1"/>
				${mahjongTile(60, 30, '🀏')}
				${mahjongTile(320, 20, '🀐')}
				${mahjongTile(40, 180, '🀑')}
				${mahjongTile(340, 170, '🀒')}
			</svg>`;
		}
		
		// Default for Community/Social events
		return `<svg viewBox="0 0 400 225" class="${baseClass}">
			<defs>
				<linearGradient id="community" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" style="stop-color:#F0FDF4"/>
					<stop offset="100%" style="stop-color:#ECFDF5"/>
				</linearGradient>
			</defs>
			<rect width="400" height="225" fill="url(#community)"/>
			<circle cx="200" cy="112" r="40" fill="#10B981" opacity="0.1"/>
			<circle cx="150" cy="90" r="15" fill="#059669" opacity="0.2"/>
			<circle cx="200" cy="85" r="18" fill="#10B981" opacity="0.18"/>
			<circle cx="250" cy="95" r="12" fill="#16A34A" opacity="0.25"/>
			<ellipse cx="200" cy="160" rx="80" ry="15" fill="#22C55E" opacity="0.1"/>
			${mahjongTile(70, 50, '🀓')}
			${mahjongTile(310, 40, '🀔')}
			${mahjongTile(50, 190, '🀕')}
			${mahjongTile(330, 180, '🀖')}
		</svg>`;
	};
</script>

<svelte:head>
	<title>Mahjong Events - Discover & Join Amazing Experiences</title>
	<meta name="description" content="Discover exciting Mahjong events across India. From cruise parties to villa retreats, bar nights to tournaments. Find your next amazing Mahjong experience." />
</svelte:head>

<div class="bg-white">
	<!-- Hero Section - Modern & Clean -->
	<div class="relative bg-gradient-to-br from-emerald-50 via-white to-green-50">
		<div class="absolute inset-0 bg-grid-gray-900/[0.04] bg-[size:20px_20px]" aria-hidden="true"></div>
		<div class="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
			<div class="text-center mb-12">
				<div class="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800 mb-6">
					<Calendar class="w-4 h-4 mr-2" />
					25+ events this month
				</div>
				
				<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
					Unforgettable <span class="text-emerald-600">Mahjong</span><br/>
					Experiences
				</h1>
				
				<p class="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
					From luxury cruise nights to intimate villa retreats. Bar competitions to expert workshops. Discover your next amazing Mahjong adventure.
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
								placeholder="Search events, locations, or organizers..."
								class="w-full text-lg text-gray-900 placeholder-gray-500 bg-transparent border-0 p-0 focus:ring-0 focus:outline-none"
							/>
						</div>
						<button class="bg-emerald-600 text-white rounded-xl px-8 py-4 text-sm font-semibold hover:bg-emerald-700 transition-colors flex items-center">
							<Calendar class="w-5 h-5 mr-2" />
							Find Events
						</button>
					</div>
				</div>
			</div>

		</div>
	</div>

	<!-- Filters - Clean Style -->
	<div id="events" class="bg-gray-50 border-t border-gray-200">
		<div class="mx-auto max-w-7xl px-6 py-4 lg:px-8">
			<div class="flex items-center justify-between">
				<div class="flex items-center space-x-4 text-sm">
					<button class="bg-white border border-gray-300 px-3 py-2 rounded-md hover:bg-gray-50 font-medium">
						<Filter class="w-4 h-4 inline mr-2" />
						Filters
					</button>
					{#each [
						{display: 'All Events', value: 'All'}, 
						{display: 'Social', value: 'Social'}, 
						{display: 'Tournament', value: 'Tournament'}, 
						{display: 'Workshop', value: 'Workshop'}, 
						{display: 'Cruise', value: 'Cruise'}, 
						{display: 'Villa Party', value: 'Villa Party'}
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
					<span class="font-semibold text-gray-900">{filteredEvents.length} events</span>
					{#if selectedCategory !== 'All'}in {selectedCategory}{/if}
				</p>
			</div>
			<div class="flex items-center space-x-4">
				<select 
					bind:value={selectedPriceRange}
					class="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-emerald-500 focus:border-emerald-500"
				>
					{#each priceRanges as range}
						<option value={range}>{range}</option>
					{/each}
				</select>
			</div>
		</div>
	</div>

	<!-- Events Grid -->
	<div class="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
		<div class="grid gap-6 sm:gap-8 md:grid-cols-2">
			{#each filteredEvents as event}
				<div class="bg-white rounded-lg shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow overflow-hidden">
					<div class="aspect-[16/9] relative">
						{@html getVenueIllustration(event.venue, event.category)}
						{#if event.originalPrice}
							<div class="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium z-10">
								Save ₹{(event.originalPrice - event.price).toLocaleString('en-IN')}
							</div>
						{/if}
						{#if event.price === 0}
							<div class="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded text-xs font-medium z-10">
								FREE
							</div>
						{/if}
						<div class="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium z-10">
							{getDaysFromNow(event.date)}
						</div>
					</div>
					
					<div class="p-6">
						<div class="flex items-center gap-2 mb-3">
							<span class="inline-flex items-center rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-700/10">
								{event.category}
							</span>
							<span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-700/10">
								{event.difficulty}
							</span>
							<div class="flex items-center ml-auto">
								<Star class="h-4 w-4 text-yellow-400 fill-current" />
								<span class="text-sm text-gray-600 ml-1">{event.rating}</span>
								<span class="text-sm text-gray-400 ml-1">({event.reviews})</span>
							</div>
						</div>
						
						<h3 class="text-xl font-bold text-gray-900 mb-2">
							{event.title}
						</h3>
						
						<p class="text-sm text-gray-600 mb-4 line-clamp-2">
							{event.description}
						</p>
						
						<div class="space-y-2 mb-4">
							<div class="flex items-center text-sm text-gray-600">
								<Calendar class="h-4 w-4 mr-2 text-emerald-600" />
								{formatDate(event.date)} at {formatTime(event.time)}
								{#if event.endTime.includes('2025')}
									- {formatDate(event.endTime.split(' ')[0])} {formatTime(event.endTime.split(' ')[1])}
								{:else}
									- {formatTime(event.endTime)}
								{/if}
							</div>
							<div class="flex items-center text-sm text-gray-600">
								<MapPin class="h-4 w-4 mr-2 text-emerald-600" />
								{event.venue}, {event.location}
							</div>
							<div class="flex items-center text-sm text-gray-600">
								<Users class="h-4 w-4 mr-2 text-emerald-600" />
								{event.registered} / {event.capacity} registered
							</div>
						</div>
						
						<div class="mb-4">
							<div class="text-xs text-gray-500 mb-2">Event Highlights:</div>
							<div class="flex flex-wrap gap-1">
								{#each event.highlights.slice(0, 3) as highlight}
									<span class="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
										{highlight}
									</span>
								{/each}
								{#if event.highlights.length > 3}
									<span class="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
										+{event.highlights.length - 3} more
									</span>
								{/if}
							</div>
						</div>
						
						<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
							<div>
								{#if event.price === 0}
									<span class="text-xl font-bold text-green-600">FREE</span>
								{:else if event.originalPrice}
									<div class="flex items-center space-x-2">
										<span class="text-lg sm:text-xl font-bold text-emerald-600">₹{event.price.toLocaleString('en-IN')}</span>
										<span class="text-sm text-gray-400 line-through">₹{event.originalPrice.toLocaleString('en-IN')}</span>
									</div>
								{:else}
									<span class="text-lg sm:text-xl font-bold text-emerald-600">₹{event.price.toLocaleString('en-IN')}</span>
								{/if}
								<div class="text-xs text-gray-500">by {event.organizer}</div>
							</div>
							<button 
								class="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500"
								onclick={() => buyTicket(event.id)}
							>
								<Ticket class="mr-2 h-4 w-4" />
								{event.price === 0 ? 'Register Free' : 'Buy Ticket'}
							</button>
						</div>
					</div>
				</div>
			{/each}
		</div>

		{#if filteredEvents.length === 0}
			<div class="text-center py-12">
				<div class="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
					<Calendar class="w-8 h-8 text-gray-400" />
				</div>
				<h3 class="text-lg font-medium text-gray-900 mb-2">No events found</h3>
				<p class="text-gray-600 mb-4">Try adjusting your search or filters to find events.</p>
				<button class="rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500">
					<Plus class="w-4 h-4 mr-2 inline" />
					Create Your Own Event
				</button>
			</div>
		{/if}
	</div>

	<!-- Host Event CTA -->
	<div class="bg-emerald-50">
		<div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
			<div class="mx-auto max-w-2xl text-center">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Host Your Own Event
				</h2>
				<p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
					Planning a Mahjong event? From intimate gatherings to large tournaments, 
					reach passionate players across India through our platform.
				</p>
				<div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
					<button class="w-full sm:w-auto rounded-md bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500">
						<Plus class="w-4 h-4 mr-2 inline" />
						List Your Event
					</button>
					<a href="/events/host-guide" class="text-sm font-semibold leading-6 text-gray-900">
						Event Hosting Guide <span aria-hidden="true">→</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>