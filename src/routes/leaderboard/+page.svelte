<script lang="ts">
	import { Trophy, Medal, Award, TrendingUp, MapPin, Calendar } from 'lucide-svelte';

	const topPlayers = [
		{
			rank: 1,
			name: 'Dr. Meera Vaidyanathan',
			location: 'South Mumbai',
			points: 2840,
			tournamentsWon: 12,
			tournamentsPlayed: 28,
			winPercentage: 85.7,
			preferredStyle: 'Taiwanese',
			lastActive: '2024-12-15',
			achievements: ['National Champion 2024', 'Regional Master', 'Perfect Game Award'],
			rankChange: 0
		},
		{
			rank: 2,
			name: 'Rajesh Kumar',
			location: 'Delhi',
			points: 2650,
			tournamentsWon: 10,
			tournamentsPlayed: 32,
			winPercentage: 78.1,
			preferredStyle: 'Hong Kong',
			lastActive: '2024-12-10',
			achievements: ['National Champion 2023', 'Speed Play Master'],
			rankChange: 1
		},
		{
			rank: 3,
			name: 'Priya Sharma',
			location: 'Bangalore',
			points: 2580,
			tournamentsWon: 8,
			tournamentsPlayed: 24,
			winPercentage: 83.3,
			preferredStyle: 'Riichi',
			lastActive: '2024-12-18',
			achievements: ['Rising Star 2024', 'Technical Excellence'],
			rankChange: -1
		},
		{
			rank: 4,
			name: 'Ananya Deshmukh',
			location: 'Bandra',
			points: 2420,
			tournamentsWon: 9,
			tournamentsPlayed: 30,
			winPercentage: 76.7,
			preferredStyle: 'Taiwanese',
			lastActive: '2024-12-12',
			achievements: ['Teaching Excellence', 'Community Builder'],
			rankChange: 2
		},
		{
			rank: 5,
			name: 'Kavitha Raghavan',
			location: 'Matunga',
			points: 2350,
			tournamentsWon: 7,
			tournamentsPlayed: 26,
			winPercentage: 80.8,
			preferredStyle: 'Indian Rules',
			lastActive: '2024-12-20',
			achievements: ['Traditional Master', 'Cultural Advocate'],
			rankChange: 0
		},
		{
			rank: 6,
			name: 'Ritu Bansal',
			location: 'Malabar Hill',
			points: 2280,
			tournamentsWon: 6,
			tournamentsPlayed: 22,
			winPercentage: 81.8,
			preferredStyle: 'Hong Kong',
			lastActive: '2024-12-08',
			achievements: ['International Style Expert'],
			rankChange: 1
		},
		{
			rank: 7,
			name: 'Sneha Mukherjee',
			location: 'Powai',
			points: 2180,
			tournamentsWon: 5,
			tournamentsPlayed: 20,
			winPercentage: 75.0,
			preferredStyle: 'Riichi',
			lastActive: '2024-12-16',
			achievements: ['Youth Champion', 'Innovation Award'],
			rankChange: -1
		},
		{
			rank: 8,
			name: 'Farah Merchant',
			location: 'Andheri',
			points: 2120,
			tournamentsWon: 4,
			tournamentsPlayed: 25,
			winPercentage: 72.0,
			preferredStyle: 'Mixed Styles',
			lastActive: '2024-12-22',
			achievements: ['Community Leader', 'Event Organizer'],
			rankChange: 3
		}
	];

	const regionalLeaders = [
		{ region: 'Mumbai', leader: 'Dr. Meera Vaidyanathan', points: 2840 },
		{ region: 'Delhi NCR', leader: 'Rajesh Kumar', points: 2650 },
		{ region: 'Bangalore', leader: 'Priya Sharma', points: 2580 },
		{ region: 'Pune', leader: 'Arjun Patel', points: 2180 },
		{ region: 'Chennai', leader: 'Lakshmi Reddy', points: 2050 },
		{ region: 'Kolkata', leader: 'Amit Ghosh', points: 1980 }
	];

	const recentAchievements = [
		{
			player: 'Dr. Meera Vaidyanathan',
			achievement: 'Perfect Game',
			date: '2024-12-15',
			description: 'Achieved a perfect score in tournament play'
		},
		{
			player: 'Farah Merchant',
			achievement: 'Community Champion',
			date: '2024-12-10',
			description: 'Organized 50+ community games this year'
		},
		{
			player: 'Priya Sharma',
			achievement: 'Speed Master',
			date: '2024-12-08',
			description: 'Fastest tournament completion record'
		}
	];

	const getRankIcon = (rank: number) => {
		if (rank === 1) return { icon: Trophy, color: 'text-yellow-600' };
		if (rank === 2) return { icon: Medal, color: 'text-gray-500' };
		if (rank === 3) return { icon: Award, color: 'text-amber-600' };
		return { icon: TrendingUp, color: 'text-emerald-600' };
	};

	const getRankChangeIcon = (change: number) => {
		if (change > 0) return '↑';
		if (change < 0) return '↓';
		return '—';
	};

	const getRankChangeColor = (change: number) => {
		if (change > 0) return 'text-green-600';
		if (change < 0) return 'text-red-600';
		return 'text-gray-400';
	};

	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString('en-IN', {
			month: 'short',
			day: 'numeric'
		});
	};
</script>

<svelte:head>
	<title>Leaderboard - India Mahjong Rankings</title>
	<meta name="description" content="View the official India Mahjong leaderboard. Track player rankings, tournament statistics, and achievements across the nation." />
</svelte:head>

<div class="bg-white">
	<!-- Premium Community Header -->
	<div class="relative isolate overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-green-50">
		<div class="absolute inset-0 bg-grid-gray-900/[0.04] bg-[size:20px_20px]" aria-hidden="true"></div>
		<!-- Decorative blur -->
		<div class="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full opacity-10 blur-3xl" aria-hidden="true"></div>
		<div class="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
			<div class="mx-auto max-w-3xl text-center">
				<!-- Premium Badge -->
				<div class="flex justify-center mb-8">
					<div class="inline-flex items-center rounded-full bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-200 px-6 py-3 text-sm font-medium text-amber-900 shadow-sm">
						<div class="w-2 h-2 bg-amber-500 rounded-full mr-3 animate-pulse"></div>
						🏆 Celebrating Our Players • Community Stars
					</div>
				</div>
				
				<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6 leading-tight">
					Our Wonderful <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700">Community</span>
				</h1>
				
				<p class="text-xl text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed">
					Celebrating the passionate players who make our Mahjong family so special. 
					Every name here represents dedication, friendship, and love for the game.
				</p>

				<!-- Trust Indicators -->
				<div class="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm text-gray-600">
					<div class="flex items-center">
						<div class="w-5 h-5 text-green-600 mr-2">
							<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
						</div>
						<span class="font-medium">Supportive Players</span>
					</div>
					<div class="flex items-center">
						<div class="w-5 h-5 text-green-600 mr-2">
							<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
						</div>
						<span class="font-medium">Friendly Competition</span>
					</div>
					<div class="flex items-center">
						<div class="w-5 h-5 text-green-600 mr-2">
							<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
						</div>
						<span class="font-medium">Growing Together</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Top 3 Podium -->
	<div class="mx-auto max-w-7xl px-6 py-16 lg:px-8">
		<div class="grid gap-8 lg:grid-cols-3 lg:gap-12 max-w-4xl mx-auto">
			<!-- 2nd Place -->
			<div class="order-2 lg:order-1">
				<div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 text-center border-2 border-gray-200">
					<div class="w-20 h-20 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
						<Medal class="w-10 h-10 text-white" />
					</div>
					<div class="text-2xl font-bold text-gray-700 mb-1">#2</div>
					<h3 class="text-xl font-bold text-gray-900 mb-2">{topPlayers[1].name}</h3>
					<p class="text-emerald-600 font-medium mb-4">{topPlayers[1].points} points</p>
					<div class="space-y-1 text-sm text-gray-600">
						<div>{topPlayers[1].location}</div>
						<div>{topPlayers[1].tournamentsWon} wins / {topPlayers[1].tournamentsPlayed} tournaments</div>
						<div>{topPlayers[1].winPercentage}% win rate</div>
					</div>
				</div>
			</div>

			<!-- 1st Place -->
			<div class="order-1 lg:order-2">
				<div class="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 text-center border-2 border-yellow-300 transform scale-105">
					<div class="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
						<Trophy class="w-12 h-12 text-white" />
					</div>
					<div class="text-3xl font-bold text-yellow-700 mb-2">#1</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-2">{topPlayers[0].name}</h3>
					<p class="text-emerald-600 font-bold text-lg mb-4">{topPlayers[0].points} points</p>
					<div class="space-y-1 text-sm text-gray-700">
						<div>{topPlayers[0].location}</div>
						<div>{topPlayers[0].tournamentsWon} wins / {topPlayers[0].tournamentsPlayed} tournaments</div>
						<div>{topPlayers[0].winPercentage}% win rate</div>
					</div>
					<div class="mt-4 inline-flex items-center rounded-full bg-yellow-200 px-3 py-1 text-xs font-medium text-yellow-800">
						👑 National Champion
					</div>
				</div>
			</div>

			<!-- 3rd Place -->
			<div class="order-3">
				<div class="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 text-center border-2 border-amber-200">
					<div class="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
						<Award class="w-10 h-10 text-white" />
					</div>
					<div class="text-2xl font-bold text-amber-700 mb-1">#3</div>
					<h3 class="text-xl font-bold text-gray-900 mb-2">{topPlayers[2].name}</h3>
					<p class="text-emerald-600 font-medium mb-4">{topPlayers[2].points} points</p>
					<div class="space-y-1 text-sm text-gray-600">
						<div>{topPlayers[2].location}</div>
						<div>{topPlayers[2].tournamentsWon} wins / {topPlayers[2].tournamentsPlayed} tournaments</div>
						<div>{topPlayers[2].winPercentage}% win rate</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Full Leaderboard -->
	<div class="mx-auto max-w-7xl px-6 py-16 lg:px-8">
		<div class="mb-8">
			<h2 class="text-2xl font-bold text-gray-900 mb-4">Our Community Stars</h2>
			<p class="text-gray-600">Celebrating everyone's journey and growth</p>
		</div>

		<div class="bg-white shadow-sm ring-1 ring-gray-200 rounded-lg overflow-hidden">
			<div class="overflow-x-auto">
				<table class="min-w-full divide-y divide-gray-200">
					<thead class="bg-gray-50">
						<tr>
							<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
							<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Player</th>
							<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
							<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Win Rate</th>
							<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Style</th>
							<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
						</tr>
					</thead>
					<tbody class="bg-white divide-y divide-gray-200">
						{#each topPlayers as player}
							<tr class="hover:bg-gray-50">
								<td class="px-6 py-4 whitespace-nowrap">
									<div class="flex items-center">
										<div class="flex items-center">
											{#if player.rank === 1}
												<Trophy class="w-5 h-5 text-yellow-600 mr-2" />
											{:else if player.rank === 2}
												<Medal class="w-5 h-5 text-gray-500 mr-2" />
											{:else if player.rank === 3}
												<Award class="w-5 h-5 text-amber-600 mr-2" />
											{:else}
												<TrendingUp class="w-5 h-5 text-emerald-600 mr-2" />
											{/if}
											<span class="font-bold text-lg">{player.rank}</span>
										</div>
									</div>
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									<div>
										<div class="text-sm font-medium text-gray-900">{player.name}</div>
										<div class="text-sm text-gray-500 flex items-center">
											<MapPin class="w-3 h-3 mr-1" />
											{player.location}
										</div>
									</div>
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									<div class="text-sm font-medium text-emerald-600">{player.points}</div>
									<div class="text-xs text-gray-500">{player.tournamentsWon}W / {player.tournamentsPlayed}T</div>
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									<div class="text-sm text-gray-900">{player.winPercentage}%</div>
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									<span class="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800">
										{player.preferredStyle}
									</span>
								</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm {getRankChangeColor(player.rankChange)}">
									{getRankChangeIcon(player.rankChange)} {Math.abs(player.rankChange) > 0 ? Math.abs(player.rankChange) : ''}
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>

	<!-- Regional Leaders -->
	<div class="bg-gray-50">
		<div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
			<div class="mx-auto max-w-2xl text-center mb-12">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Regional Community Leaders</h2>
				<p class="mt-4 text-lg leading-8 text-gray-600">
					Wonderful players who bring their communities together through Mahjong
				</p>
			</div>

			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each regionalLeaders as region}
					<div class="bg-white rounded-lg shadow-sm ring-1 ring-gray-200 p-6">
						<div class="text-center">
							<h3 class="text-lg font-semibold text-gray-900 mb-2">{region.region}</h3>
							<div class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
								<Trophy class="w-6 h-6 text-emerald-600" />
							</div>
							<div class="font-medium text-gray-900">{region.leader}</div>
							<div class="text-emerald-600 font-semibold">{region.points} points</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Community Celebrations -->
	<div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
		<div class="mx-auto max-w-2xl text-center mb-12">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Community Celebrations</h2>
			<p class="mt-4 text-lg leading-8 text-gray-600">
				Sharing joy and celebrating the special moments that make our community shine
			</p>
		</div>

		<div class="space-y-6">
			{#each recentAchievements as achievement}
				<div class="bg-white rounded-lg shadow-sm ring-1 ring-gray-200 p-6 flex items-center space-x-4">
					<div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
						<Award class="w-6 h-6 text-yellow-600" />
					</div>
					<div class="flex-1">
						<div class="flex items-center justify-between">
							<div>
								<h3 class="font-semibold text-gray-900">{achievement.player}</h3>
								<p class="text-emerald-600 font-medium">{achievement.achievement}</p>
								<p class="text-sm text-gray-600">{achievement.description}</p>
							</div>
							<div class="text-sm text-gray-500 flex items-center">
								<Calendar class="w-4 h-4 mr-1" />
								{formatDate(achievement.date)}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>