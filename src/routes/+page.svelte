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
		{ name: 'Elite Members', value: '2,500+' },
		{ name: 'Expert Masters', value: '15' },
		{ name: 'Beautiful Venues', value: '75+' },
		{ name: 'Years of Heritage', value: '1,000+' }
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
			<!-- Welcoming Badge -->
			<div class="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-100 to-green-100 border border-emerald-200 px-6 py-3 text-sm font-medium text-emerald-900 mb-8 shadow-sm">
				<div class="w-2 h-2 bg-emerald-500 rounded-full mr-3 animate-pulse"></div>
				Learn the Ancient Art of Mahjong
			</div>
			
			<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6 leading-tight">
				Discover the Beauty of<br/>
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700">麻將 Mahjong</span>
			</h1>
			
			<p class="text-xl text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed">
				New to Mahjong? You're in the right place! Learn this beautiful game with patient teachers and friendly players across India.
			</p>
			
			
			<!-- Hero CTAs -->
			<div class="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
				<a
					href="/learn"
					class="group relative rounded-3xl bg-gradient-to-r from-emerald-600 to-green-600 px-16 py-8 text-2xl font-bold text-white shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
				>
					<div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					<div class="relative flex items-center justify-center">
						<BookOpen class="h-8 w-8 mr-4" />
						<span>Learn Mahjong</span>
					</div>
				</a>
				
				<a
					href="/play"
					class="group relative rounded-3xl border-2 border-emerald-600 bg-white px-16 py-8 text-2xl font-bold text-emerald-600 shadow-xl hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
				>
					<div class="relative flex items-center justify-center">
						<Users class="h-8 w-8 mr-4" />
						<span>Find Players</span>
					</div>
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

	</div>

	<div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
		<div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-emerald-400 to-green-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
	</div>
</div>

<!-- Community Membership CTA -->
<div class="bg-gradient-to-br from-emerald-600 to-green-700 py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-5xl text-center">			
			<h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
				Come Learn With Us
			</h2>
			
			<!-- Testimonial Quote -->
			<div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-8 border border-white/20">
				<blockquote class="text-lg sm:text-xl italic text-emerald-100 mb-4">
					"I was completely new to Mahjong. The teachers were so patient, and now I play every week. 
					It's become my favorite way to relax and meet new friends."
				</blockquote>
				<div class="flex items-center justify-center">
					<div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
						P
					</div>
					<div class="text-left">
						<div class="text-white font-semibold">Priya Sharma</div>
						<div class="text-emerald-200 text-sm">Started 6 months ago</div>
					</div>
				</div>
			</div>
			
			<p class="text-xl leading-8 text-emerald-100 mb-10">
				Start your Mahjong journey with friendly teachers and welcoming players.
			</p>

			<div class="flex flex-col items-center justify-center gap-6">
				<a
					href="/community/join"
					class="group relative bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-gray-900 px-12 py-6 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
				>
					<div class="flex items-center">
						<Users class="w-6 h-6 mr-3" />
						Start Learning Today
					</div>
				</a>
			</div>
		</div>
	</div>
</div>

<!-- Simple What Is Mahjong Section -->
<div class="bg-gradient-to-br from-emerald-50 via-white to-green-50 py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-4xl text-center">			
			<h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
				What is Mahjong?
			</h2>
			
			<p class="text-xl text-gray-600 mb-12 leading-relaxed">
				Mahjong is a beautiful tile-based game that brings people together. It's like a mix of strategy and luck, 
				played with friends around a table. Don't worry about the rules - our patient teachers will guide you through everything.
			</p>
			
			<!-- Simple Benefits -->
			<div class="grid gap-8 sm:grid-cols-3 mb-12">
				<div class="text-center">
					<div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
						<BookOpen class="w-8 h-8 text-white" />
					</div>
					<h3 class="text-lg font-semibold text-gray-900 mb-2">Easy to Start</h3>
					<p class="text-gray-600 text-sm">No experience needed. Our teachers start from the very basics.</p>
				</div>
				
				<div class="text-center">
					<div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
						<Users class="w-8 h-8 text-white" />
					</div>
					<h3 class="text-lg font-semibold text-gray-900 mb-2">Meet New Friends</h3>
					<p class="text-gray-600 text-sm">Join a warm community of players who love sharing this game.</p>
				</div>
				
				<div class="text-center">
					<div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
						<Star class="w-8 h-8 text-white" />
					</div>
					<h3 class="text-lg font-semibold text-gray-900 mb-2">Pure Enjoyment</h3>
					<p class="text-gray-600 text-sm">A relaxing, engaging game that's perfect for any evening.</p>
				</div>
			</div>
			
			<!-- Clear Next Steps -->
			<div class="text-center mt-12">
				<h3 class="text-2xl font-bold text-gray-900 mb-6">Your Journey Starts Here</h3>
				<div class="flex flex-col sm:flex-row items-center justify-center gap-6">
					<div class="flex items-center gap-3 text-gray-600">
						<div class="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
						<span>Learn the basics</span>
					</div>
					<div class="hidden sm:block text-gray-400">→</div>
					<div class="flex items-center gap-3 text-gray-600">
						<div class="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
						<span>Find your first game</span>
					</div>
					<div class="hidden sm:block text-gray-400">→</div>
					<div class="flex items-center gap-3 text-gray-600">
						<div class="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
						<span>Join the community</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>


