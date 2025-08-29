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
		{ name: 'Active Players', value: '2,500+' },
		{ name: 'Classes Taught', value: '150+' },
		{ name: 'Venues Listed', value: '75+' },
		{ name: 'Tournaments Held', value: '25+' }
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
			<!-- Action-Focused Headline -->
			<div class="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800 mb-8">
				<Star class="w-4 h-4 mr-2 fill-current" />
				2,500+ active players across India
			</div>
			
			<h1 class="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl mb-6">
				Learn <span class="text-emerald-600">Mahjong</span><br/>
				or Find Players
			</h1>
			
			<p class="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
				Join classes with expert instructors or find offline games at venues near you.
			</p>
			
			<!-- Primary CTAs - Two Clear Actions -->
			<div class="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
				<a
					href="/learn"
					class="w-full sm:w-auto group relative rounded-2xl bg-emerald-600 px-10 py-5 text-lg font-semibold text-white shadow-xl hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition-all duration-200 transform hover:scale-105"
				>
					<BookOpen class="h-6 w-6 mr-3 inline" />
					Join a Class
					<div class="text-sm opacity-90 mt-1">From ₹800/session</div>
				</a>
				
				<a
					href="/play"
					class="w-full sm:w-auto group relative rounded-2xl border-2 border-gray-300 bg-white px-10 py-5 text-lg font-semibold text-gray-900 shadow-lg hover:bg-gray-50 hover:border-emerald-300 transition-all duration-200 transform hover:scale-105"
				>
					<Play class="h-6 w-6 mr-3 inline" />
					Find Players
					<div class="text-sm text-gray-600 mt-1">75+ venues available</div>
				</a>
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

		<!-- Stats -->
		<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
			<dl class="grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
				{#each stats as stat}
					<div class="flex flex-col bg-white/60 backdrop-blur-sm p-8">
						<dt class="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
						<dd class="order-first text-3xl font-semibold tracking-tight text-emerald-600">{stat.value}</dd>
					</div>
				{/each}
			</dl>
		</div>
	</div>

	<div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
		<div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-emerald-400 to-green-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
	</div>
</div>

<!-- Community Membership CTA -->
<div class="bg-gradient-to-br from-emerald-600 to-green-700 py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-4xl text-center">
			<div class="flex justify-center mb-6">
				<div class="inline-flex items-center rounded-full bg-emerald-400/20 px-4 py-2 text-sm font-medium text-emerald-100">
					<Users class="w-4 h-4 mr-2" />
					2,500+ Active Members
				</div>
			</div>
			
			<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
				Join India's Largest Mahjong Community
			</h2>
			
			<p class="text-xl leading-8 text-emerald-100 mb-8">
				Become a member for FREE and unlock exclusive access to events, tournaments, 
				expert guidance, and connect with passionate players across India.
			</p>

			<div class="grid gap-6 sm:grid-cols-3 mb-10">
				<div class="text-center">
					<div class="flex justify-center mb-3">
						<div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
							<Users class="w-6 h-6 text-white" />
						</div>
					</div>
					<h3 class="text-lg font-semibold text-white mb-2">WhatsApp Community</h3>
					<p class="text-emerald-100 text-sm">Join 500+ players for daily games, tips, and local meetups</p>
				</div>

				<div class="text-center">
					<div class="flex justify-center mb-3">
						<div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
							<Trophy class="w-6 h-6 text-white" />
						</div>
					</div>
					<h3 class="text-lg font-semibold text-white mb-2">Exclusive Events</h3>
					<p class="text-emerald-100 text-sm">First access to tournaments, workshops, and special events</p>
				</div>

				<div class="text-center">
					<div class="flex justify-center mb-3">
						<div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
							<BookOpen class="w-6 h-6 text-white" />
						</div>
					</div>
					<h3 class="text-lg font-semibold text-white mb-2">Learning Resources</h3>
					<p class="text-emerald-100 text-sm">Free guides, strategies, and mentorship from experts</p>
				</div>
			</div>

			<div class="flex flex-col sm:flex-row gap-4 items-center justify-center">
				<a
					href="/community/join"
					class="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-semibold text-emerald-600 shadow-lg hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 transform hover:scale-105"
				>
					<Users class="w-5 h-5 mr-2" />
					Become a Member - FREE
				</a>
				
				<div class="text-emerald-100 text-sm">
					✓ Instant access &nbsp; ✓ No hidden fees &nbsp; ✓ Cancel anytime
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Features Section -->
<div class="bg-gray-50 py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center mb-16">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
				Everything you need for Mahjong
			</h2>
			<p class="text-xl leading-8 text-gray-600">
				From beginner lessons to championship tournaments, we provide a complete ecosystem for the Mahjong community in India.
			</p>
		</div>

		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
			{#each features as feature}
				<div class="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
					<!-- Gradient Background -->
					<div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50"></div>
					
					<!-- Content -->
					<div class="relative p-8">
						<!-- Icon -->
						<div class="mb-6">
							<div class="{feature.color} w-14 h-14 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
								<svelte:component this={feature.icon} class="w-7 h-7 text-white" />
							</div>
						</div>

						<!-- Title -->
						<h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
							{feature.name}
						</h3>

						<!-- Description -->
						<p class="text-gray-600 leading-relaxed mb-6 text-sm">
							{feature.description}
						</p>

						<!-- CTA -->
						<a 
							href={feature.href}
							class="inline-flex items-center text-emerald-600 font-semibold text-sm hover:text-emerald-500 group-hover:translate-x-1 transition-all duration-200"
						>
							Explore Now
							<svg class="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</a>
					</div>

					<!-- Hover Effect Overlay -->
					<div class="absolute inset-0 ring-1 ring-emerald-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
				</div>
			{/each}
		</div>

		<!-- Additional Features Row -->
		<div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
				<div class="flex items-center mb-4">
					<div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
						<Users class="w-5 h-5 text-white" />
					</div>
					<h4 class="ml-3 font-semibold text-gray-900">Active Community</h4>
				</div>
				<p class="text-sm text-gray-600">Connect with 2,500+ passionate players across India</p>
			</div>

			<div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
				<div class="flex items-center mb-4">
					<div class="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
						<Trophy class="w-5 h-5 text-white" />
					</div>
					<h4 class="ml-3 font-semibold text-gray-900">Expert Instructors</h4>
				</div>
				<p class="text-sm text-gray-600">Learn from certified masters and tournament champions</p>
			</div>

			<div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
				<div class="flex items-center mb-4">
					<div class="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
						<MapPin class="w-5 h-5 text-white" />
					</div>
					<h4 class="ml-3 font-semibold text-gray-900">Nationwide Network</h4>
				</div>
				<p class="text-sm text-gray-600">Find tables and events in 25+ cities across India</p>
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
