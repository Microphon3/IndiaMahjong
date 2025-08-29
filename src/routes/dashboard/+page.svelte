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

<div class="min-h-full">
	<!-- Header -->
	<div class="bg-white shadow">
		<div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
			<h1 class="text-3xl font-bold tracking-tight text-gray-900">
				Welcome back, {data.user?.user_metadata?.full_name || data.user?.email?.split('@')[0] || 'Player'}!
			</h1>
			<p class="mt-2 text-sm text-gray-600">
				Here's what's happening with your Mahjong journey today.
			</p>
		</div>
	</div>

	<main class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
		<!-- Stats Grid -->
		<div class="mb-8">
			<h2 class="text-lg font-medium text-gray-900 mb-4">Your Progress</h2>
			<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
				{#each stats as stat}
					<div class="bg-white overflow-hidden shadow rounded-lg">
						<div class="p-5">
							<div class="flex items-center">
								<div class="flex-shrink-0">
									<TrendingUp class="h-6 w-6 text-gray-400" />
								</div>
								<div class="ml-5 w-0 flex-1">
									<dl>
										<dt class="text-sm font-medium text-gray-500 truncate">
											{stat.name}
										</dt>
										<dd class="text-lg font-medium text-gray-900">
											{stat.value}
										</dd>
									</dl>
								</div>
							</div>
							<div class="mt-4">
								<div class="text-sm text-emerald-600">
									{stat.change}
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Quick Actions -->
		<div class="mb-8">
			<h2 class="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
				{#each quickActions as action}
					{@const Icon = action.icon}
					<div class="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-emerald-500 rounded-lg shadow hover:shadow-md transition-shadow">
						<div>
							<span class="{action.color} rounded-lg inline-flex p-3 ring-4 ring-white">
								<Icon class="h-6 w-6 text-white" aria-hidden="true" />
							</span>
						</div>
						<div class="mt-8">
							<h3 class="text-lg font-medium">
								<a href={action.href} class="focus:outline-none">
									<span class="absolute inset-0" aria-hidden="true"></span>
									{action.name}
								</a>
							</h3>
							<p class="mt-2 text-sm text-gray-500">
								{action.description}
							</p>
						</div>
						<span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
							<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586l-4.293 4.293z"></path>
							</svg>
						</span>
					</div>
				{/each}
			</div>
		</div>

		<!-- Recent Activity -->
		<div class="bg-white shadow rounded-lg">
			<div class="px-6 py-4 border-b border-gray-200">
				<h2 class="text-lg font-medium text-gray-900">Recent Activity</h2>
			</div>
			<div class="px-6 py-4">
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
			<div class="px-6 py-3 border-t border-gray-200 bg-gray-50 text-center">
				<a href="#" class="text-sm font-medium text-emerald-600 hover:text-emerald-500">
					View all activity
				</a>
			</div>
		</div>
	</main>
</div>