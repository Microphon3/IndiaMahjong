<script lang="ts">
	import { BookOpen, MapPin, ShoppingBag, Trophy, Calendar, TrendingUp } from 'lucide-svelte';

	let { data } = $props();

	const quickActions = [
		{
			name: 'Find Classes',
			description: 'Discover new classes to improve your skills',
			icon: BookOpen,
			href: '/learn',
			color: 'bg-blue-500'
		},
		{
			name: 'Book a Table',
			description: 'Reserve a table at a nearby venue',
			icon: MapPin,
			href: '/play',
			color: 'bg-emerald-500'
		},
		{
			name: 'Shop Equipment',
			description: 'Browse mahjong sets and accessories',
			icon: ShoppingBag,
			href: '/marketplace',
			color: 'bg-purple-500'
		},
		{
			name: 'View Tournaments',
			description: 'See upcoming competitions',
			icon: Trophy,
			href: '/championship',
			color: 'bg-yellow-500'
		}
	];

	const stats = [
		{ name: 'Classes Completed', value: '12', change: '+2 this month' },
		{ name: 'Games Played', value: '45', change: '+8 this week' },
		{ name: 'Current Rank', value: '#247', change: '↑ 23 positions' },
		{ name: 'Tournament Points', value: '1,420', change: '+150 this month' }
	];
</script>

<svelte:head>
	<title>Dashboard - India Mahjong</title>
</svelte:head>

<!-- Premium Dashboard Background -->
<div class="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 relative">
	<div class="absolute inset-0 bg-grid-gray-900/[0.04] bg-[size:20px_20px]" aria-hidden="true"></div>
	
	<!-- Premium Header -->
	<div class="relative bg-white/80 backdrop-blur-sm shadow-sm border-b border-emerald-200/50">
		<div class="mx-auto max-w-7xl px-6 py-8 lg:px-8">
			<div class="flex items-center gap-4 mb-4">
				<div class="w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-700 rounded-2xl flex items-center justify-center">
					<span class="text-white font-bold text-xl">麻</span>
				</div>
				<div>
					<h1 class="text-3xl font-bold text-gray-900">
						Welcome, {data.user?.user_metadata?.full_name || data.user?.email?.split('@')[0] || 'Player'}
					</h1>
					<p class="text-gray-600">
						Your Mahjong journey continues
					</p>
				</div>
			</div>
		</div>
	</div>

		<main class="relative mx-auto max-w-7xl px-6 py-8 lg:px-8">
			<!-- Premium Stats Grid -->
			<div class="mb-12">
				<h2 class="text-xl font-bold text-gray-900 mb-6">Your Journey</h2>
				<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{#each stats as stat, index}
						<div class="bg-white/80 backdrop-blur-sm border border-white/50 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
							<div class="p-6">
								<div class="flex items-center justify-between mb-4">
									<div class="w-12 h-12 bg-gradient-to-br {index === 0 ? 'from-emerald-500 to-green-600' : index === 1 ? 'from-blue-500 to-indigo-600' : index === 2 ? 'from-amber-500 to-yellow-600' : 'from-purple-500 to-pink-600'} rounded-xl flex items-center justify-center">
										<TrendingUp class="h-6 w-6 text-white" />
									</div>
								</div>
								<div class="text-sm font-medium text-gray-600 mb-1">
									{stat.name}
								</div>
								<div class="text-2xl font-bold text-gray-900 mb-2">
									{stat.value}
								</div>
								<div class="text-sm text-emerald-600 font-medium">
									{stat.change}
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Premium Quick Actions -->
			<div class="mb-12">
				<h2 class="text-xl font-bold text-gray-900 mb-6">What's Next</h2>
				<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{#each quickActions as action, index}
						{@const Icon = action.icon}
						<a href={action.href} class="group relative bg-white/80 backdrop-blur-sm border border-white/50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-emerald-500">
							<div class="w-14 h-14 bg-gradient-to-br {index === 0 ? 'from-blue-500 to-indigo-600' : index === 1 ? 'from-emerald-500 to-green-600' : index === 2 ? 'from-purple-500 to-pink-600' : 'from-amber-500 to-yellow-600'} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
								<Icon class="h-7 w-7 text-white" />
							</div>
							<h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
								{action.name}
							</h3>
							<p class="text-sm text-gray-600">
								{action.description}
							</p>
							<div class="absolute top-6 right-6 text-gray-300 group-hover:text-emerald-500 transition-colors">
								<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586l-4.293 4.293z"></path>
								</svg>
							</div>
						</a>
					{/each}
				</div>
		</div>

			<!-- Premium Recent Activity -->
			<div class="bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg rounded-3xl">
				<div class="px-8 py-6 border-b border-gray-200/50">
					<h2 class="text-xl font-bold text-gray-900">Recent Activity</h2>
				</div>
				<div class="px-8 py-6">
					<div class="flow-root">
						<ul class="-mb-8">
						<li>
							<div class="relative pb-8">
								<span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
								<div class="relative flex space-x-3">
									<div>
										<span class="bg-emerald-500 h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white">
											<BookOpen class="h-4 w-4 text-white" aria-hidden="true" />
										</span>
									</div>
									<div class="flex-1 min-w-0 pt-1.5">
										<div>
											<p class="text-sm text-gray-500">
												Completed <span class="font-medium text-gray-900">Beginner Strategies</span> class
												<time class="text-gray-400">2 days ago</time>
											</p>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div class="relative pb-8">
								<span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
								<div class="relative flex space-x-3">
									<div>
										<span class="bg-blue-500 h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white">
											<MapPin class="h-4 w-4 text-white" aria-hidden="true" />
										</span>
									</div>
									<div class="flex-1 min-w-0 pt-1.5">
										<div>
											<p class="text-sm text-gray-500">
												Played at <span class="font-medium text-gray-900">Mumbai Mahjong Club</span>
												<time class="text-gray-400">1 week ago</time>
											</p>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div class="relative">
								<div class="relative flex space-x-3">
									<div>
										<span class="bg-yellow-500 h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white">
											<Trophy class="h-4 w-4 text-white" aria-hidden="true" />
										</span>
									</div>
									<div class="flex-1 min-w-0 pt-1.5">
										<div>
											<p class="text-sm text-gray-500">
												Registered for <span class="font-medium text-gray-900">Regional Championship</span>
												<time class="text-gray-400">2 weeks ago</time>
											</p>
										</div>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
					</div>
					<div class="px-8 py-4 border-t border-gray-200/50 bg-gradient-to-r from-emerald-50 to-green-50 text-center rounded-b-3xl">
						<a href="#" class="text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
							View all activity
						</a>
					</div>
			</div>
		</main>
	</div>