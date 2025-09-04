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
	const itemsPerPage = 12;

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
				venue.city?.toLowerCase().includes(searchQuery.toLowerCase()) ||
				venue.gameStyle?.toLowerCase().includes(searchQuery.toLowerCase())
			);
			
			// Price filter
			const matchesPrice = venue.pricePerSession >= priceRange[0] && venue.pricePerSession <= priceRange[1];
			
			return matchesCity && matchesStyle && matchesTiming && matchesBookingType && matchesSearch && matchesPrice;
		});

		// Sort by rating and availability
		filtered.sort((a, b) => {
			if (a.seatsAvailable === 0 && b.seatsAvailable > 0) return 1;
			if (b.seatsAvailable === 0 && a.seatsAvailable > 0) return -1;
			return b.rating - a.rating;
		});

		filteredVenues = filtered;
		totalPages = Math.ceil(filtered.length / itemsPerPage);
		
		// Reset page if needed
		if (currentPage > totalPages && totalPages > 0) {
			currentPage = 1;
		}
		
		// Get paginated results
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		paginatedVenues = filtered.slice(startIndex, endIndex);
	});
</script>

<svelte:head>
	<title>Find Games - India Mahjong</title>
</svelte:head>

<!-- Hero Section -->
<div class="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-green-50">
	<div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
		<div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-400 to-green-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
	</div>

	<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
		<div class="mx-auto max-w-4xl text-center mb-12">
			<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
				Find <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Your Game</span>
			</h1>
			<p class="text-xl text-gray-600 mb-8">
				Join welcoming hosts and players across India. Search and filter to find your perfect match.
			</p>
		</div>
		
		<!-- Modern Search Interface -->
		<div class="max-w-5xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/50 mb-8">
			<!-- Main Search Row -->
			<div class="flex flex-col lg:flex-row gap-4 mb-4">
				<!-- Search Input -->
				<div class="relative flex-1">
					<Search class="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
					<input
						type="text"
						bind:value={searchQuery}
						placeholder="Search by location, host name, or area..."
						class="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-base"
					>
				</div>
				
				<!-- Filters Row -->
				<div class="flex gap-3">
					<select bind:value={selectedCity} class="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white min-w-[140px]">
						{#each cities as city}
							<option value={city}>{city}</option>
						{/each}
					</select>
					
					<select bind:value={selectedStyle} class="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white min-w-[140px]">
						{#each gameStyles as style}
							<option value={style}>{style}</option>
						{/each}
					</select>
					
					<select bind:value={selectedTiming} class="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white min-w-[140px]">
						{#each timings as timing}
							<option value={timing}>{timing}</option>
						{/each}
					</select>
				</div>
			</div>
			
			<!-- Results Count -->
			<div class="text-center text-sm text-gray-600">
				{filteredVenues.length} venues found
				{selectedCity !== 'All Cities' ? `in ${selectedCity}` : ''}
			</div>
		</div>
	</div>
</div>

<!-- Venues Grid -->
<div class="bg-white py-16">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		{#if paginatedVenues.length > 0}
			<!-- Venues Grid -->
			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{#each paginatedVenues as venue}
					<div class="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 overflow-hidden">
						<!-- Availability Badge -->
						<div class="absolute top-4 left-4 z-10">
							{#if venue.seatsAvailable > 0}
								<span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
									{venue.seatsAvailable} seats
								</span>
							{:else}
								<span class="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
									Full
								</span>
							{/if}
						</div>
						
						<!-- Image -->
						<div class="aspect-[4/3] bg-gradient-to-br from-emerald-400 via-teal-500 to-green-600 relative">
							<div class="absolute inset-0 bg-black/10"></div>
							<div class="absolute bottom-4 left-4 text-white">
								<h3 class="text-lg font-bold">{venue.hostName}</h3>
								<p class="text-sm opacity-90">{venue.city}</p>
							</div>
						</div>
						
						<!-- Content -->
						<div class="p-4">
							<p class="text-sm text-gray-600 mb-2">{venue.location}</p>
							<p class="text-sm text-emerald-600 font-medium mb-3">{venue.gameStyle}</p>
							
							<!-- Stats -->
							<div class="flex items-center justify-between text-xs text-gray-500 mb-4">
								<div class="flex items-center">
									<Clock class="h-3 w-3 mr-1" />
									{venue.timing}
								</div>
								<div class="flex items-center">
									<Star class="h-3 w-3 mr-1 text-yellow-400" />
									{venue.rating}
								</div>
							</div>
							
							<!-- Price and CTA -->
							<div class="flex items-center justify-between">
								<div>
									<div class="text-lg font-bold text-gray-900">₹{venue.pricePerSession.toLocaleString('en-IN')}</div>
								</div>
								<button class="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
									Connect
								</button>
							</div>
						</div>
					</div>
				{/each}
			</div>
			
			<!-- Pagination -->
			{#if totalPages > 1}
				<div class="flex justify-center mt-12 gap-2">
					{#each Array(totalPages) as _, i}
						<button 
							onclick={() => currentPage = i + 1}
							class="px-4 py-2 text-sm font-medium rounded-lg transition-colors {currentPage === i + 1 ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
						>
							{i + 1}
						</button>
					{/each}
				</div>
			{/if}
		{:else}
			<!-- Empty State -->
			<div class="text-center py-16">
				<div class="w-28 h-28 mx-auto mb-6 bg-gradient-to-br from-emerald-100 to-green-200 rounded-3xl flex items-center justify-center">
					<Search class="w-12 h-12 text-emerald-600" />
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-4">No venues found</h3>
				<p class="text-gray-600 mb-6">Try adjusting your search criteria or filters.</p>
				<button 
					onclick={() => {
						selectedCity = 'All Cities';
						selectedStyle = 'All Styles'; 
						selectedTiming = 'All Timings';
						searchQuery = '';
					}}
					class="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
				>
					Reset Filters
				</button>
			</div>
		{/if}
	</div>
</div>