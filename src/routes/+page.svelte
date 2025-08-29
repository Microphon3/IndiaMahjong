<script lang="ts">
	import { Play, Users, Trophy, ShoppingBag, BookOpen, MapPin, Star } from 'lucide-svelte';
	
	const features = [
		{
			name: 'Learn Mahjong',
			description: 'Master the ancient art of Mahjong with expert-led classes and comprehensive tutorials.',
			icon: BookOpen,
			href: '/learn',
			color: 'bg-emerald-500'
		},
		{
			name: 'Find Players',
			description: 'Discover and join offline Mahjong games at venues across India.',
			icon: MapPin,
			href: '/play',
			color: 'bg-emerald-500'
		},
		{
			name: 'Marketplace',
			description: 'Shop premium Mahjong sets, tiles, tables, and accessories from trusted vendors.',
			icon: ShoppingBag,
			href: '/marketplace',
			color: 'bg-emerald-500'
		},
		{
			name: 'Championships',
			description: 'Compete in official tournaments and climb the ranks in the India Mahjong Championship.',
			icon: Trophy,
			href: '/championship',
			color: 'bg-emerald-500'
		}
	];

	const stats = [
		{ name: 'Elite Members', value: '2,500+', description: 'Across 25+ cities' },
		{ name: 'Expert Masters', value: '15', description: 'Certified instructors' },
		{ name: 'Beautiful Venues', value: '75+', description: 'Curated locations' },
		{ name: 'Years of Heritage', value: '1,000+', description: 'Ancient tradition' }
	];
</script>

<svelte:head>
	<title>India Mahjong - Learn, Play, and Master the Game</title>
</svelte:head>

<!-- Hero Section -->
<div class="relative isolate overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-green-50">
	<div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
		<div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-400 to-green-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
	</div>

	<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
		<div class="mx-auto max-w-4xl text-center">
			<!-- Premium Badge with Cultural Touch -->
			<div class="inline-flex items-center rounded-full bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-200 px-6 py-3 text-sm font-medium text-amber-900 mb-8 shadow-sm">
				<div class="w-2 h-2 bg-amber-500 rounded-full mr-3 animate-pulse"></div>
				India's Most Exclusive Mahjong Community
				<div class="ml-2 text-xs bg-amber-200 text-amber-800 px-2 py-1 rounded-full font-semibold">MEMBERS ONLY</div>
			</div>
			
			<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6 leading-tight">
				Master the Ancient Art of<br/>
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700">麻將 Mahjong</span>
			</h1>
			
			<p class="text-xl text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed">
				Join India's premier Mahjong community. Learn from patient teachers, 
				connect with passionate players, and experience the timeless beauty of this ancient game.
			</p>
			
			<!-- Premium Trust Indicators -->
			<div class="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm text-gray-600">
				<div class="flex items-center">
					<div class="w-5 h-5 text-green-600 mr-2">
						<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
					</div>
					<span class="font-medium">Verified Instructors</span>
				</div>
				<div class="flex items-center">
					<div class="w-5 h-5 text-green-600 mr-2">
						<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
					</div>
					<span class="font-medium">Beautiful Venues</span>
				</div>
				<div class="flex items-center">
					<div class="w-5 h-5 text-green-600 mr-2">
						<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
					</div>
					<span class="font-medium">Thoughtful Community</span>
				</div>
			</div>
			
			<!-- Premium CTAs -->
			<div class="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
				<a
					href="/learn"
					class="w-full sm:w-auto group relative rounded-2xl bg-gradient-to-r from-emerald-600 to-green-600 px-12 py-6 text-lg font-bold text-white shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
				>
					<div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					<div class="relative flex flex-col items-center">
						<BookOpen class="h-6 w-6 mb-2" />
						<span class="text-lg">Find A Teacher</span>
						<div class="text-sm font-normal opacity-90 mt-1">Browse Expert Teachers • Pay Directly</div>
					</div>
				</a>
				
				<a
					href="/play"
					class="w-full sm:w-auto group relative rounded-2xl border-2 border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50 px-12 py-6 text-lg font-bold text-gray-900 shadow-xl hover:shadow-amber-500/20 hover:bg-gradient-to-r hover:from-amber-100 hover:to-yellow-100 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
				>
					<div class="relative flex flex-col items-center">
						<Users class="h-6 w-6 mb-2 text-amber-700" />
						<span class="text-lg">Join A Table</span>
						<div class="text-sm font-normal text-gray-600 mt-1">75+ Beautiful Venues • Book Direct</div>
					</div>
				</a>
			</div>
			
			<!-- Membership Highlight -->
			<div class="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-6 max-w-2xl mx-auto mb-8">
				<div class="flex items-center justify-center mb-3">
					<div class="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mr-3">
						<svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
					</div>
					<span class="text-lg font-bold text-gray-900">Lifetime Membership</span>
					<span class="ml-2 text-xs bg-purple-600 text-white px-3 py-1 rounded-full font-bold">₹2,999 ONE TIME</span>
				</div>
				<p class="text-sm text-gray-700 text-center">
					Unlock unlimited access to the entire platform, special deals, member events and our community
				</p>
			</div>
			
			<!-- Secondary Actions -->
			<div class="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
				<a href="/marketplace" class="flex items-center text-gray-600 hover:text-emerald-600 transition-colors">
					<ShoppingBag class="w-4 h-4 mr-2" />
					Shop Equipment
				</a>
				<a href="/events" class="flex items-center text-gray-600 hover:text-emerald-600 transition-colors">
					<Trophy class="w-4 h-4 mr-2" />
					Join Events
				</a>
			</div>
		</div>

		<!-- Premium Stats with Cultural Elements -->
		<div class="mx-auto mt-16 max-w-6xl sm:mt-20 lg:mt-24">
			<div class="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8 sm:p-12">
				<!-- Decorative Border -->
				<div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-400/10 via-emerald-400/10 to-purple-400/10"></div>
				
				<dl class="relative grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
					{#each stats as stat}
						<div class="flex flex-col">
							<dd class="text-4xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-2">{stat.value}</dd>
							<dt class="text-lg font-bold text-gray-900 mb-1">{stat.name}</dt>
							<div class="text-sm text-gray-600 font-medium">{stat.description}</div>
						</div>
					{/each}
				</dl>
				
				<!-- Cultural decoration -->
				<div class="absolute top-4 left-4 w-8 h-8 text-amber-400/30">
					<svg fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
				</div>
				<div class="absolute bottom-4 right-4 w-8 h-8 text-emerald-400/30">
					<svg fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
				</div>
			</div>
		</div>
	</div>

	<div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
		<div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-emerald-400 to-green-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
	</div>
</div>

<!-- Community Membership CTA -->
<div class="bg-gradient-to-br from-emerald-600 to-green-700 py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-5xl text-center">
			<!-- Premium Community Badge -->
			<div class="flex justify-center mb-6">
				<div class="inline-flex items-center rounded-full bg-gradient-to-r from-amber-400/30 to-yellow-400/30 border border-amber-300/50 px-6 py-3 text-sm font-bold text-white shadow-xl">
					<div class="w-3 h-3 bg-amber-400 rounded-full mr-3 animate-pulse"></div>
					India's Most Elite Mahjong Circle
					<div class="ml-3 text-xs bg-white/20 backdrop-blur-sm text-amber-100 px-3 py-1 rounded-full font-bold">INVITATION ONLY</div>
				</div>
			</div>
			
			<h2 class="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6 leading-tight">
				Connect with India's<br/>
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200">Most Passionate Players</span>
			</h2>
			
			<!-- Testimonial Quote -->
			<div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
				<blockquote class="text-xl italic text-emerald-100 mb-4">
					"Finding India Mahjong was like discovering a hidden gem. The quality of players, 
					the beautiful venues, and the respect for this ancient tradition is incredible."
				</blockquote>
				<div class="flex items-center justify-center">
					<div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
						P
					</div>
					<div class="text-left">
						<div class="text-white font-semibold">Priya Sharma</div>
						<div class="text-emerald-200 text-sm">Investment Banker, Mumbai • Member since 2022</div>
					</div>
				</div>
			</div>
			
			<p class="text-xl leading-8 text-emerald-100 mb-10">
				Join a community of accomplished women who value tradition, strategy, and meaningful connections. 
				<span class="font-semibold text-amber-200">Membership by invitation or application review.</span>
			</p>

			<div class="grid gap-6 sm:grid-cols-3 mb-10">
				<div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
					<div class="flex justify-center mb-4">
						<div class="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-xl">
							<Users class="w-8 h-8 text-white" />
						</div>
					</div>
					<h3 class="text-xl font-bold text-white mb-3">Your Circle</h3>
					<p class="text-emerald-100 text-sm leading-relaxed">Private WhatsApp groups organized by city and skill level. Connect with accomplished professionals who share your passion.</p>
				</div>

				<div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
					<div class="flex justify-center mb-4">
						<div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
							<Trophy class="w-8 h-8 text-white" />
						</div>
					</div>
					<h3 class="text-xl font-bold text-white mb-3">VIP Access</h3>
					<p class="text-emerald-100 text-sm leading-relaxed">Priority booking for tournaments, exclusive masterclasses, and invitation-only events in beautiful venues across India.</p>
				</div>

				<div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
					<div class="flex justify-center mb-4">
						<div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-xl">
							<BookOpen class="w-8 h-8 text-white" />
						</div>
					</div>
					<h3 class="text-xl font-bold text-white mb-3">Personal Guidance</h3>
					<p class="text-emerald-100 text-sm leading-relaxed">Personal mentorship from experienced teachers, advanced strategy sessions, and cultural history workshops.</p>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center gap-6">
				<a
					href="/community/join"
					class="group relative bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-gray-900 px-12 py-6 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
				>
					<div class="flex items-center">
						<div class="w-6 h-6 mr-3">
							<svg fill="currentColor" viewBox="0 0 20 20"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
						</div>
						Request Membership
						<div class="ml-3 text-xs bg-gray-900/20 text-gray-700 px-3 py-1 rounded-full font-bold">APPLICATION REQUIRED</div>
					</div>
				</a>
				
				<div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
					<div class="text-emerald-100 text-sm font-medium mb-2">Membership includes:</div>
					<div class="text-xs text-emerald-200 flex flex-wrap items-center justify-center gap-4">
						<span>✓ Lifetime access to all venues</span>
						<span>✓ Expert-led masterclasses</span>
						<span>✓ Exclusive cultural events</span>
						<span>✓ Personal mahjong mentor</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Features Section -->
<div class="relative bg-gradient-to-br from-gray-50 via-white to-emerald-50 py-24 sm:py-32">
	<!-- Subtle background decoration -->
	<div class="absolute inset-0 bg-grid-gray-900/[0.02] bg-[size:32px_32px]" aria-hidden="true"></div>
	
	<div class="relative mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center mb-16">
			<div class="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-100 to-green-100 border border-emerald-200 px-4 py-2 text-sm font-medium text-emerald-800 mb-6 shadow-sm">
				<div class="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
				Your Complete Mahjong Journey
			</div>
			
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
				Discover Your Path in <span class="text-emerald-600">Mahjong</span>
			</h2>
			<p class="text-xl leading-8 text-gray-600">
				Whether you're taking your first steps or perfecting your strategy, find exactly what you need in our thoughtfully curated community.
			</p>
		</div>

		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each features as feature, index}
				<div class="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 hover:-translate-y-2">
					<!-- Premium Gradient Background -->
					<div class="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-emerald-50/30 opacity-60"></div>
					
					<!-- Content -->
					<div class="relative p-8">
						<!-- Premium Icon with varied gradients -->
						<div class="mb-6">
							{#if index === 0}
								<div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
									<svelte:component this={feature.icon} class="w-8 h-8 text-white" />
								</div>
							{:else if index === 1}
								<div class="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
									<svelte:component this={feature.icon} class="w-8 h-8 text-white" />
								</div>
							{:else if index === 2}
								<div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
									<svelte:component this={feature.icon} class="w-8 h-8 text-white" />
								</div>
							{:else}
								<div class="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
									<svelte:component this={feature.icon} class="w-8 h-8 text-white" />
								</div>
							{/if}
						</div>

						<!-- Title -->
						<h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
							{feature.name}
						</h3>

						<!-- Description -->
						<p class="text-gray-600 leading-relaxed mb-6 text-sm">
							{feature.description}
						</p>

						<!-- Premium CTA -->
						<a 
							href={feature.href}
							class="inline-flex items-center bg-gradient-to-r from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 border border-emerald-200 text-emerald-700 font-semibold text-sm px-4 py-2 rounded-xl hover:shadow-lg group-hover:translate-x-1 transition-all duration-300"
						>
							Discover
							<svg class="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</a>
					</div>

					<!-- Premium Hover Effect -->
					<div class="absolute inset-0 ring-1 ring-emerald-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
				</div>
			{/each}
		</div>

		<!-- Additional Features Row -->
		<div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<div class="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
				<div class="flex items-center mb-4">
					<div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
						<Users class="w-6 h-6 text-white" />
					</div>
					<h4 class="ml-4 font-bold text-gray-900">Vibrant Community</h4>
				</div>
				<p class="text-sm text-gray-600 leading-relaxed">Connect with 2,500+ passionate players across India who share your love for this timeless game</p>
			</div>

			<div class="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
				<div class="flex items-center mb-4">
					<div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
						<Trophy class="w-6 h-6 text-white" />
					</div>
					<h4 class="ml-4 font-bold text-gray-900">Patient Teachers</h4>
				</div>
				<p class="text-sm text-gray-600 leading-relaxed">Learn from experienced instructors who understand your journey and guide you with care and expertise</p>
			</div>

			<div class="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
				<div class="flex items-center mb-4">
					<div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
						<MapPin class="w-6 h-6 text-white" />
					</div>
					<h4 class="ml-4 font-bold text-gray-900">Nationwide Network</h4>
				</div>
				<p class="text-sm text-gray-600 leading-relaxed">Discover beautiful venues and welcoming communities in 25+ cities across India</p>
			</div>
		</div>
	</div>
</div>

<!-- Final CTA Section -->
<div class="bg-white">
	<div class="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
		<div class="relative isolate overflow-hidden bg-gradient-to-b from-emerald-50 to-emerald-100 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-16">
			<div class="mx-auto max-w-2xl text-center">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
					Don't Play Alone
				</h2>
				<p class="text-xl leading-8 text-gray-700 mb-8">
					Join India's most active Mahjong community and transform your gaming experience. 
					<strong>Free membership</strong> gives you instant access to players, events, and expert guidance.
				</p>

				<!-- Social Proof -->
				<div class="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
					<div class="flex items-center">
						<div class="flex -space-x-2">
							<div class="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white text-xs font-medium">A</div>
							<div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-medium">S</div>
							<div class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-medium">R</div>
							<div class="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white text-xs font-medium">P</div>
							<div class="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white text-xs font-medium">+</div>
						</div>
						<span class="ml-3 text-sm font-medium text-gray-700">2,500+ members</span>
					</div>
					
					<div class="flex items-center">
						<div class="flex text-yellow-400">
							{#each Array(5) as _}
								<Star class="w-4 h-4 fill-current" />
							{/each}
						</div>
						<span class="ml-2 text-sm font-medium text-gray-700">4.9/5 community rating</span>
					</div>
				</div>

				<!-- Urgency/Scarcity -->
				<div class="bg-white/80 backdrop-blur rounded-lg p-4 mb-8 inline-block">
					<p class="text-sm text-gray-600">
						🔥 <strong>248 new members</strong> joined this month • 
						<strong>Next tournament</strong> starts in 12 days
					</p>
				</div>

				<!-- Primary CTA -->
				<div class="space-y-4">
					<a
						href="/community/join"
						class="inline-flex items-center rounded-md bg-emerald-600 px-10 py-4 text-lg font-semibold text-white shadow-lg hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition-all duration-200 transform hover:scale-105"
					>
						<Users class="w-5 h-5 mr-3" />
						Join the Community - FREE
					</a>
					
					<p class="text-sm text-gray-600">
						✓ Join WhatsApp group instantly &nbsp; ✓ Access to all events &nbsp; ✓ No commitments
					</p>
				</div>

				<!-- Secondary actions -->
				<div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
					<a
						href="/events"
						class="flex items-center gap-2 font-medium text-emerald-600 hover:text-emerald-500"
					>
						<Trophy class="h-4 w-4" />
						Browse Upcoming Events
					</a>
					<span class="hidden sm:block text-gray-300">•</span>
					<a
						href="/learn"
						class="flex items-center gap-2 font-medium text-emerald-600 hover:text-emerald-500"
					>
						<BookOpen class="h-4 w-4" />
						Start Learning Today
					</a>
				</div>
			</div>

			<!-- Background decoration -->
			<div class="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
				<div class="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-emerald-400 to-green-600 opacity-25" style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"></div>
			</div>
		</div>
	</div>
</div>
