<script lang="ts">
	import { MapPin, Clock, Star, Phone, Calendar, Search, Filter, Users, Zap, Home, Coffee, Heart } from 'lucide-svelte';
	import { venues, type Venue } from './venues-data.js';

	const cities = ['All Cities', 'Mumbai', 'Delhi', 'Bangalore', 'Pune', 'Hyderabad', 'Chennai', 'Kolkata', 'Goa', 'Ahmedabad', 'Alibaug'];
	const gameStyles = ['All Styles', 'Riichi', 'Hong Kong', 'Taiwanese', 'Beginner-friendly', 'Tournament prep'];
	const timings = ['All Timings', 'Morning', 'Afternoon', 'Evening', 'Weekend', 'Flexible'];
	const bookingTypes = ['All Types', 'instant', 'approval', 'waitlist'];

	let showAllVenues = $state(false);
	
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
		<div class="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
			<div class="text-center mb-12">
				<!-- Premium Badge -->
				<div class="inline-flex items-center rounded-full bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-200 px-6 py-3 text-sm font-medium text-amber-900 mb-8 shadow-sm">
					<div class="w-2 h-2 bg-amber-500 rounded-full mr-3 animate-pulse"></div>
					Beautiful Venues • Welcoming Hosts
				</div>
				
				<h1 class="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6 leading-tight">
					<span class="block sm:inline">Find Your</span> <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 block sm:inline">Perfect Table</span>
				</h1>
				
				<p class="text-lg sm:text-xl text-gray-700 mb-4 sm:mb-6 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
					Join wonderful hosts across India who love sharing Mahjong. From warm homes to 
					beautiful clubs, find your perfect table and new friends.
				</p>

				<!-- Trust Indicators -->
				<div class="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm text-gray-600">
					<div class="flex items-center">
						<div class="w-5 h-5 text-green-600 mr-2">
							<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
						</div>
						<span class="font-medium">Welcoming Hosts</span>
					</div>
					<div class="flex items-center">
						<div class="w-5 h-5 text-green-600 mr-2">
							<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
						</div>
						<span class="font-medium">Book Direct with Host</span>
					</div>
					<div class="flex items-center">
						<div class="w-5 h-5 text-green-600 mr-2">
							<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
						</div>
						<span class="font-medium">Tea & Snacks Included</span>
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
								placeholder="Search by city, neighborhood, or style..."
								class="w-full text-lg text-gray-900 placeholder-gray-400 bg-transparent border-0 p-0 focus:ring-0 focus:outline-none font-medium"
							/>
						</div>
						<button class="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white rounded-xl px-6 py-3 text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 flex items-center">
							<Search class="w-5 h-5 mr-3" />
							Discover Tables
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Progressive Disclosure Section -->
	<div class="bg-white py-16 sm:py-24">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			
			{#if !showAllVenues}
				<!-- Newcomer Path - Simple Recommendations -->
				<div class="mx-auto max-w-4xl text-center mb-16">
					<h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-6">
						Your First Game Awaits
					</h2>
					<p class="text-lg text-gray-600 mb-12">
						We've handpicked welcoming venues perfect for newcomers. Choose your city and we'll recommend the best place to start.
					</p>

					<!-- Simple City Selection -->
					<div class="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 mb-8 border-2 border-emerald-200 shadow-xl">
						<h3 class="text-xl font-bold text-gray-900 mb-6">Select Your City</h3>
						
						<div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
							{#each ['Mumbai', 'Delhi', 'Bangalore', 'Pune', 'Chennai', 'Hyderabad'] as city}
								<button 
									onclick={() => selectedCity = city}
									class="p-4 rounded-xl border-2 {selectedCity === city ? 'border-emerald-500 bg-emerald-100' : 'border-gray-200 bg-white hover:border-emerald-300'} transition-all duration-200"
								>
									<div class="text-lg font-semibold">{city}</div>
								</button>
							{/each}
						</div>

						{#if selectedCity !== 'All Cities'}
							<!-- Show Recommended Venue for Selected City -->
							{@const recommendedVenue = venues.filter(v => v.city === selectedCity && v.level === 'Beginner' || v.gameStyle?.includes('Beginner'))[0] || venues.filter(v => v.city === selectedCity)[0]}
							{#if recommendedVenue}
								<div class="bg-white rounded-2xl p-6 shadow-lg border border-emerald-200">
									<div class="text-center">
										<div class="text-2xl mb-3">🏠</div>
										<h4 class="text-xl font-bold text-gray-900 mb-2">{recommendedVenue.hostName}</h4>
										<p class="text-gray-600 mb-4">{recommendedVenue.location}</p>
										
										<div class="flex items-center justify-center gap-4 text-sm text-gray-600 mb-4">
											<div class="flex items-center">
												<Clock class="w-4 h-4 mr-1" />
												<span>{recommendedVenue.timing}</span>
											</div>
											<div class="flex items-center">
												<Users class="w-4 h-4 mr-1" />
												<span>{recommendedVenue.seatsAvailable} seats available</span>
											</div>
										</div>

										<div class="text-emerald-800 font-semibold mb-2">
											₹{recommendedVenue.pricePerSession} per session
										</div>
										<p class="text-xs text-gray-600 mb-4">Casual play session • Includes tea & snacks</p>

										<div class="flex flex-col gap-3">
											<a
												href="/book/{recommendedVenue.id}"
												class="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-3 text-base font-bold text-white shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
											>
												<Phone class="w-5 h-5 mr-2" />
												Book Your Spot
											</a>
											<p class="text-xs text-gray-500">Perfect for beginners • Welcoming atmosphere</p>
										</div>
										
										<!-- What's Next -->
										<div class="mt-6 p-3 bg-emerald-50 rounded-xl border border-emerald-200">
											<h4 class="font-semibold text-emerald-800 text-sm mb-1">What's Next?</h4>
											<p class="text-xs text-emerald-700">After your first game, consider joining our community for regular updates!</p>
										</div>
									</div>
								</div>
							{/if}
						{/if}
					</div>

					<!-- Show All Options -->
					<div class="text-center">
						<button
							onclick={() => showAllVenues = true}
							class="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
						>
							<span>I want to browse all venues and use filters</span>
							<Search class="w-5 h-5 ml-1" />
						</button>
					</div>
				</div>

			{:else}
				<!-- Veterans View - Full Search & Filter Experience -->
				<div class="mx-auto max-w-2xl text-center mb-12">
					<h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-4">
						Browse All Venues
					</h2>
					<p class="text-lg text-gray-600 mb-6">
						Use filters and search to find exactly what you're looking for
					</p>
					
					<!-- Back to Simple View -->
					<button
						onclick={() => showAllVenues = false}
						class="text-sm text-gray-500 hover:text-gray-700"
					>
						← Back to simple recommendations
					</button>
				</div>

				<!-- Full Filter System -->
				<div class="bg-gradient-to-r from-gray-50 via-white to-emerald-50 border border-gray-200/50 rounded-2xl p-6 mb-8">
					<div class="flex flex-wrap items-center gap-4">
						<div class="flex items-center gap-3">
							<div class="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
								<Filter class="w-4 h-4 text-white" />
							</div>
							<span class="text-sm font-bold text-gray-800">Find Your Vibe:</span>
						</div>
						<button class="inline-flex items-center px-3 py-2 border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 rounded-lg text-sm font-medium text-emerald-700">
							Available Today
						</button>
						<button class="inline-flex items-center px-3 py-2 border border-amber-200 bg-amber-50 hover:bg-amber-100 rounded-lg text-sm font-medium text-amber-700">
							Beginner Friendly  
						</button>
						<button class="inline-flex items-center px-3 py-2 border border-purple-200 bg-purple-50 hover:bg-purple-100 rounded-lg text-sm font-medium text-purple-700">
							Beautiful Setup
						</button>
					</div>
				</div>

				<!-- Results Count -->
				<div class="flex items-center justify-between bg-gradient-to-r from-white via-gray-50 to-white rounded-2xl p-6 border border-gray-200/50 shadow-sm mb-8">
					<div class="flex items-center">
						<div class="w-3 h-3 bg-emerald-500 rounded-full mr-3 animate-pulse"></div>
						<p class="text-base font-medium text-gray-800">
							<span class="font-bold text-emerald-600">{filteredVenues.length} venues</span> match your preferences
						</p>
					</div>
				</div>
			{/if}
			
			{#if showAllVenues}
				<!-- Sort Options for Veterans -->
				<div class="flex items-center justify-end gap-4 mb-8">
					<button class="inline-flex items-center px-3 py-2 border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 rounded-lg text-sm font-medium text-emerald-700">
						<MapPin class="w-4 h-4 mr-2" />
						Map View
					</button>
					<select class="border-2 border-gray-200 bg-white rounded-xl px-4 py-3 text-sm font-medium focus:ring-emerald-500 focus:border-emerald-500">
						<option>Nearest First</option>
						<option>Most Welcoming</option>
						<option>Price: Low to High</option>
						<option>Available Today</option>
					</select>
				</div>

				<!-- All Venue Cards -->
				<div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
					{#each paginatedVenues as venue, index}
				<div class="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-emerald-200 transition-all duration-300 cursor-pointer">
					<!-- Header -->
					<div class="p-6 pb-4">
						<div class="flex items-start justify-between mb-3">
							<div class="flex-1">
								<h3 class="font-semibold text-gray-900 text-lg leading-tight mb-1">{venue.hostName}'s Table</h3>
								<div class="flex items-center text-sm text-gray-600 mb-2">
									<MapPin class="w-4 h-4 mr-1" />
									{venue.location}
								</div>
							</div>
							<div class="flex items-center bg-emerald-50 px-2 py-1 rounded-lg ml-3">
								<Star class="w-4 h-4 text-emerald-600 fill-current mr-1" />
								<span class="text-sm font-medium text-emerald-700">{venue.rating}</span>
							</div>
						</div>
						
						<p class="text-sm text-gray-600 leading-relaxed mb-4">{venue.description}</p>
						
						<!-- Game Info -->
						<div class="flex items-center gap-4 text-sm text-gray-600 mb-4">
							<span>{venue.gameStyle}</span>
							<span class="w-1 h-1 bg-gray-400 rounded-full"></span>
							<span>{venue.timing}</span>
							{#if venue.seatsAvailable > 0}
								<span class="w-1 h-1 bg-gray-400 rounded-full"></span>
								<span class="text-emerald-600 font-medium">{venue.seatsAvailable} seats</span>
							{/if}
						</div>
					</div>
					
					<!-- Footer -->
					<div class="px-6 py-4 bg-gray-50 border-t border-gray-100">
						<div class="flex items-center justify-between">
							<div>
								<div class="text-lg font-semibold text-gray-900">₹{venue.pricePerSession.toLocaleString('en-IN')}</div>
								<div class="text-xs text-gray-500">per session</div>
							</div>
							<button 
								class="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 {venue.seatsAvailable === 0 ? 'opacity-50 cursor-not-allowed bg-gray-400 hover:bg-gray-400' : ''}"
								disabled={venue.seatsAvailable === 0}>
								{venue.seatsAvailable === 0 ? 'Full' : venue.bookingType === 'waitlist' ? 'Join Waitlist' : 'Book Table'}
							</button>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Empty State -->
		{#if paginatedVenues.length === 0}
			<div class="text-center py-16">
				<div class="w-28 h-28 mx-auto mb-6 bg-gradient-to-br from-emerald-100 to-green-200 rounded-3xl flex items-center justify-center">
					<div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center">
						<MapPin class="w-8 h-8 text-white" />
					</div>
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-4">Looking for something specific?</h3>
				<p class="text-lg text-gray-600 mb-6">We're always adding wonderful new hosts. Try adjusting your search or check back soon!</p>
			</div>
		{/if}
				
				<!-- Pagination -->
				{#if totalPages > 1}
					<div class="text-center mt-12">
						<div class="inline-flex items-center bg-white border border-gray-200 rounded-2xl shadow-lg p-2">
							<button 
								onclick={() => currentPage = Math.max(1, currentPage - 1)}
								disabled={currentPage === 1}
								class="px-6 py-3 text-sm font-medium text-gray-700 hover:text-emerald-600 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
							>
								← Previous
							</button>
							<div class="px-8 py-3 text-sm font-medium text-gray-800">
								Page {currentPage} of {totalPages}
							</div>
							<button 
								onclick={() => currentPage = Math.min(totalPages, currentPage + 1)}
								disabled={currentPage === totalPages}
								class="px-6 py-3 text-sm font-medium text-gray-700 hover:text-emerald-600 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
							>
								Next →
							</button>
						</div>
					</div>
				{/if}
			{/if}
		</div>
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
						Partner With Us
					</div>
					<h2 class="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6 leading-tight">
						Host Beautiful <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-300">Mahjong Tables</span>
					</h2>
					<p class="text-xl leading-8 text-emerald-100 mb-12">
						Welcome players to your space. Build friendships, share great moments, 
						and spread the joy of Mahjong.
					</p>
					
					<!-- Premium Benefits -->  
					<div class="grid gap-8 sm:grid-cols-3 mb-12">
						<div class="text-center group">
							<div class="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
								<Users class="w-8 h-8 text-white" />
							</div>
							<h4 class="text-lg font-bold text-white mb-3">Warm Community</h4>
							<p class="text-emerald-100 leading-relaxed">Connect with 2,500+ passionate<br/>players in your area</p>
						</div>
						
						<div class="text-center group">
							<div class="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
								<Calendar class="w-8 h-8 text-white" />
							</div>
							<h4 class="text-lg font-bold text-white mb-3">Simple Booking</h4>
							<p class="text-emerald-100 leading-relaxed">Easy reservation system<br/>for your peace of mind</p>
						</div>
						
						<div class="text-center group">
							<div class="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
								<Heart class="w-8 h-8 text-white" />
							</div>
							<h4 class="text-lg font-bold text-white mb-3">Share the Joy</h4>
							<p class="text-emerald-100 leading-relaxed">Build lasting friendships<br/>through the game you love</p>
						</div>
					</div>
					
					<div class="flex flex-col items-center justify-center gap-6">
						<a
							href="/venue/register"
							class="group inline-flex items-center justify-center bg-white/95 backdrop-blur-sm px-8 py-3.5 rounded-xl text-base font-semibold text-emerald-700 hover:bg-white transition-all duration-200 hover:shadow-lg border border-white/50"
						>
							<div class="w-5 h-5 bg-emerald-600 rounded-md flex items-center justify-center mr-3 group-hover:bg-emerald-500 transition-colors">
								<Home class="w-3 h-3 text-white" />
							</div>
							Become a Host
						</a>
						
						<div class="bg-white/5 backdrop-blur border border-white/10 rounded-xl px-5 py-2.5">
							<div class="text-white text-sm font-medium text-center">
								<span class="text-emerald-200">🎯</span> No listing fees
								<span class="mx-2 text-white/40">•</span>
								<span class="text-emerald-200">💝</span> Full support
								<span class="mx-2 text-white/40">•</span>
								<span class="text-emerald-200">🌟</span> Join 100+ hosts
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
