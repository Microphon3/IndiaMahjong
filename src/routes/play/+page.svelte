<script lang="ts">
	import { MapPin, Clock, Star, Phone, Calendar, Search, Filter, Users, Zap, Home, Coffee, Heart } from 'lucide-svelte';
	import { venues, type Venue } from './venues-data.js';

	const cities = ['All Cities', 'Mumbai', 'Delhi', 'Bangalore', 'Pune', 'Hyderabad', 'Chennai', 'Kolkata', 'Goa', 'Ahmedabad', 'Alibaug'];
	const gameStyles = ['All Styles', 'Riichi', 'Hong Kong', 'Taiwanese', 'Beginner-friendly', 'Tournament prep'];
	const timings = ['All Timings', 'Morning', 'Afternoon', 'Evening', 'Weekend', 'Flexible'];
	const bookingTypes = ['All Types', 'instant', 'approval', 'waitlist'];

	let selectedCity = $state('All Cities');
	let selectedStyle = $state('All Styles');
	let selectedTiming = $state('All Timings');
	let selectedBookingType = $state('All Types');
	let searchQuery = $state('');
	let priceRange = $state([800, 1500]);
	
	// Pagination
	let currentPage = $state(1);
	const itemsPerPage = 10;

	let filteredVenues = $state([]);
	let totalPages = $state(0);
	let paginatedVenues = $state([]);
	
	$effect(() => {
		if (!venues || !Array.isArray(venues) || venues.length === 0) {
			filteredVenues = [];
			totalPages = 0;
			paginatedVenues = [];
			return;
		}
		
		// Apply all filters
		const filtered = venues.filter((venue) => {
			// City filter
			const matchesCity = selectedCity === 'All Cities' || venue.city === selectedCity;
			
			// Style filter
			const matchesStyle = selectedStyle === 'All Styles' || (venue.gameStyle && venue.gameStyle.toLowerCase().includes(selectedStyle.toLowerCase()));
			
			// Timing filter
			const matchesTiming = selectedTiming === 'All Timings' || (venue.timing && venue.timing.toLowerCase().includes(selectedTiming.toLowerCase()));
			
			// Booking type filter
			const matchesBookingType = selectedBookingType === 'All Types' || venue.bookingType === selectedBookingType;
			
			// Search filter
			const matchesSearch = searchQuery === '' || (
				venue.hostName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
				venue.location?.toLowerCase().includes(searchQuery.toLowerCase()) ||
				venue.gameStyle?.toLowerCase().includes(searchQuery.toLowerCase())
			);
			
			// Price filter
			const matchesPrice = venue.pricePerSession >= priceRange[0] && venue.pricePerSession <= priceRange[1];
			
			return matchesCity && matchesStyle && matchesTiming && matchesBookingType && matchesSearch && matchesPrice;
		});
		
		filteredVenues = filtered;
		
		// Calculate pagination
		totalPages = Math.ceil(filtered.length / itemsPerPage);
		const startIndex = (currentPage - 1) * itemsPerPage;
		paginatedVenues = filtered.slice(startIndex, startIndex + itemsPerPage);
	});
	
	// Reset to page 1 when filters change
	$effect(() => {
		currentPage = 1;
	});

	const getBookingBadgeColor = (bookingType: string) => {
		switch(bookingType) {
			case 'instant': return 'bg-green-100 text-green-800';
			case 'approval': return 'bg-yellow-100 text-yellow-800';
			case 'waitlist': return 'bg-red-100 text-red-800';
			default: return 'bg-gray-100 text-gray-800';
		}
	};

	const getBookingText = (bookingType: string) => {
		switch(bookingType) {
			case 'instant': return 'Instant Book';
			case 'approval': return 'Host Approval';
			case 'waitlist': return 'Join Waitlist';
			default: return 'Contact Host';
		}
	};
</script>

<svelte:head>
	<title>Find Tables - Play Offline Mahjong</title>
</svelte:head>

<div class="bg-white">
	<!-- Hero Section - Modern & Clean -->
	<div class="relative bg-gradient-to-br from-emerald-50 via-white to-green-50">
		<div class="absolute inset-0 bg-grid-gray-900/[0.04] bg-[size:20px_20px]" aria-hidden="true"></div>
		<div class="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
			<div class="text-center mb-12">
				<div class="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800 mb-6">
					<span class="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
					72 active games today
				</div>
				
				<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
					Join a <span class="text-emerald-600">Mahjong Game</span><br/>
					Near You
				</h1>
				
				<p class="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
					Connect with passionate players across India. Home-hosted sessions with tea, snacks, and great company.
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
								placeholder="Search by city, area, or game style..."
								class="w-full text-lg text-gray-900 placeholder-gray-500 bg-transparent border-0 p-0 focus:ring-0 focus:outline-none"
							/>
						</div>
						<button class="bg-emerald-600 text-white rounded-xl px-8 py-4 text-sm font-semibold hover:bg-emerald-700 transition-colors flex items-center">
							<Search class="w-5 h-5 mr-2" />
							Find Games
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Filters - Zomato Style -->
	<div class="bg-gray-50 border-t border-gray-200">
		<div class="mx-auto max-w-7xl px-6 py-4 lg:px-8">
			<div class="flex flex-wrap items-center gap-3">
				<div class="flex items-center gap-2">
					<Filter class="w-4 h-4 text-gray-600" />
					<span class="text-sm font-medium text-gray-700">Filters:</span>
				</div>
				<button class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
					Available now
				</button>
				<button class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
					Beginner friendly
				</button>
				<button class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
					Professional setup
				</button>
				<button class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
					Snacks included
				</button>
			</div>
		</div>
	</div>

	<!-- Sort & Results Count -->
	<div class="mx-auto max-w-7xl px-6 lg:px-8 py-4">
		<div class="flex items-center justify-between">
			<p class="text-sm text-gray-600">
				<span class="font-semibold text-gray-900">72 games</span> found for your search
			</p>
			<div class="flex items-center gap-4">
				<button class="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
					<MapPin class="w-4 h-4 mr-2" />
					Map view
				</button>
				<select class="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-emerald-500 focus:border-emerald-500">
					<option>Distance</option>
					<option>Price: Low to High</option>
					<option>Price: High to Low</option>
					<option>Rating</option>
					<option>Availability</option>
				</select>
			</div>
		</div>
	</div>

	<!-- Listings - Airbnb Style Cards -->
	<div class="mx-auto max-w-7xl px-6 lg:px-8 pb-12">
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{#each paginatedVenues as venue}
				<div class="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
					<div class="aspect-[4/3] bg-gradient-to-br from-emerald-100 to-emerald-200 relative">
						<div class="absolute top-3 left-3 bg-white px-2 py-1 rounded text-xs font-medium">
							{venue.hostType === 'home' ? 'Home' : 'Venue'}
						</div>
						<div class="absolute top-3 right-3 {venue.seatsAvailable > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} px-2 py-1 rounded text-xs font-medium">
							{venue.seatsAvailable > 0 ? `${venue.seatsAvailable} seats left` : 'Full'}
						</div>
						<div class="absolute bottom-3 left-3 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs">
							{venue.location}
						</div>
					</div>
					<div class="p-4">
						<div class="flex items-start justify-between mb-2">
							<div>
								<h3 class="font-semibold text-gray-900">{venue.hostName}'s {venue.gameStyle}</h3>
								<p class="text-sm text-gray-600">Hosted by {venue.hostName}</p>
							</div>
							<div class="flex items-center">
								<Star class="w-4 h-4 text-yellow-400 fill-current" />
								<span class="text-sm font-medium ml-1">{venue.rating}</span>
							</div>
						</div>
						<div class="flex flex-wrap gap-1 mb-3">
							<span class="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">{venue.gameStyle}</span>
							<span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{venue.timing}</span>
							<span class="inline-block {getBookingBadgeColor(venue.bookingType)} text-xs px-2 py-1 rounded capitalize">
								{venue.bookingType}
							</span>
						</div>
						<p class="text-sm text-gray-600 mb-3">{venue.description}</p>
						<div class="flex items-center justify-between">
							<div>
								<span class="text-lg font-bold">₹{venue.pricePerSession.toLocaleString('en-IN')}</span>
								<span class="text-sm text-gray-600"> /session</span>
							</div>
							<button 
								class="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 {venue.seatsAvailable === 0 ? 'opacity-50 cursor-not-allowed' : ''}"
								disabled={venue.seatsAvailable === 0}>
								{venue.seatsAvailable === 0 ? 'Full' : venue.bookingType === 'waitlist' ? 'Join Waitlist' : 'Join Game'}
							</button>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Pagination -->
		{#if filteredVenues.length === 0}
			<div class="text-center py-12">
				<div class="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
					<MapPin class="w-8 h-8 text-gray-400" />
				</div>
				<h3 class="text-lg font-medium text-gray-900 mb-2">No venues found</h3>
				<p class="text-gray-600">Try adjusting your filters or search criteria.</p>
				
				<!-- Debug Information -->
				<div class="mt-6 p-4 bg-gray-100 rounded-lg text-sm text-gray-700 max-w-2xl mx-auto">
					<div><strong>Debug Info:</strong></div>
					<div>Total venues in data: {venues?.length || 'UNDEFINED'}</div>
					<div>Venues type: {typeof venues}</div>
					<div>Venues is array: {Array.isArray(venues)}</div>
					<div>Filtered venues: {filteredVenues.length}</div>
					<div>First venue name: {venues?.[0]?.hostName || 'NOT FOUND'}</div>
					<div>Current filters:</div>
					<div>• City: "{selectedCity}"</div>
					<div>• Style: "{selectedStyle}"</div>
					<div>• Timing: "{selectedTiming}"</div>
					<div>• Booking Type: "{selectedBookingType}"</div>
					<div>• Search: "{searchQuery}"</div>
					<div>• Price Range: [{priceRange[0]} - {priceRange[1]}]</div>
					
					<!-- Reset Button for Testing -->
					<button 
						onclick={() => {
							selectedCity = 'All Cities';
							selectedStyle = 'All Styles'; 
							selectedTiming = 'All Timings';
							selectedBookingType = 'All Types';
							searchQuery = '';
							priceRange = [800, 1500];
						}}
						class="mt-4 bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700"
					>
						Reset All Filters
					</button>
				</div>
			</div>
		{:else if totalPages > 1}
			<div class="text-center mt-12">
				<div class="flex items-center justify-center space-x-2">
					<button 
						onclick={() => currentPage = Math.max(1, currentPage - 1)}
						disabled={currentPage === 1}
						class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
					>
						Previous
					</button>
					<span class="px-4 py-2 text-sm text-gray-700">
						Page {currentPage} of {totalPages}
					</span>
					<button 
						onclick={() => currentPage = Math.min(totalPages, currentPage + 1)}
						disabled={currentPage === totalPages}
						class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
					>
						Next
					</button>
				</div>
			</div>
		{/if}
	</div>

	<!-- Results Summary -->
	{#if filteredVenues.length > 0}
		<div class="mx-auto max-w-7xl px-6 lg:px-8 pb-4">
			<p class="text-center text-sm text-gray-600">
				Showing {paginatedVenues.length} of {filteredVenues.length} venues
			</p>
		</div>
	{/if}

	<!-- CTA Section -->
	<div class="bg-gradient-to-br from-emerald-600 to-green-700 py-16 sm:py-24">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="relative isolate overflow-hidden bg-gradient-to-b from-emerald-50/10 to-emerald-100/10 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-16">
				<div class="mx-auto max-w-2xl text-center">
					<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
						Own a Venue?
					</h2>
					<p class="text-xl leading-8 text-emerald-100 mb-8">
						List your venue on our platform and connect with passionate Mahjong players in your area. 
						Grow your business and build the community.
					</p>
					
					<!-- Benefits -->  
					<div class="grid gap-6 sm:grid-cols-3 mb-10">
						<div class="text-center">
							<div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
								<Users class="w-6 h-6 text-white" />
							</div>
							<h4 class="font-semibold text-white mb-2">More Customers</h4>
							<p class="text-sm text-emerald-100">Reach 2,500+ active players</p>
						</div>
						
						<div class="text-center">
							<div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
								<Calendar class="w-6 h-6 text-white" />
							</div>
							<h4 class="font-semibold text-white mb-2">Easy Booking</h4>
							<p class="text-sm text-emerald-100">Automated reservation system</p>
						</div>
						
						<div class="text-center">
							<div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
								<Zap class="w-6 h-6 text-white" />
							</div>
							<h4 class="font-semibold text-white mb-2">Grow Revenue</h4>
							<p class="text-sm text-emerald-100">Maximize table utilization</p>
						</div>
					</div>
					
					<div class="flex flex-col sm:flex-row gap-4 items-center justify-center">
						<a
							href="/venue/register"
							class="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-semibold text-emerald-600 shadow-lg hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 transform hover:scale-105"
						>
							<MapPin class="w-5 h-5 mr-2" />
							List Your Venue
						</a>
						
						<div class="text-emerald-100 text-sm">
							✓ Free listing &nbsp; ✓ No setup fees &nbsp; ✓ 24/7 support
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
