<script lang="ts">
	import { Trophy, Calendar, MapPin, Users, Medal, Clock, Star, Zap, Target, Crown } from 'lucide-svelte';

	const currentTournament = {
		name: 'Mumbai Mahjong Championship 2025',
		status: 'Registration Open',
		startDate: '2025-12-15',
		endDate: '2025-12-17',
		registrationDeadline: '2025-12-01',
		venue: 'Mumbai Convention Center',
		address: 'Bandra Kurla Complex, Mumbai',
		entryFee: 2500,
		maxParticipants: 256,
		currentParticipants: 178,
		prizePool: 500000,
		format: 'Swiss System + Knockout Finals'
	};

	const upcomingTournaments = [
		{
			name: 'Regional Championship - North',
			date: '2025-01-20',
			venue: 'Delhi Sports Complex',
			participants: '64 players',
			entryFee: 1500,
			prizePool: 150000,
			status: 'Open'
		},
		{
			name: 'Regional Championship - South',
			date: '2025-02-10',
			venue: 'Bangalore Game Arena',
			participants: '64 players',
			entryFee: 1500,
			prizePool: 150000,
			status: 'Open'
		},
		{
			name: 'Regional Championship - West',
			date: '2025-02-24',
			venue: 'Pune Convention Hall',
			participants: '64 players',
			entryFee: 1500,
			prizePool: 150000,
			status: 'Open'
		}
	];

	const pastChampions = [
		{
			year: '2024',
			champion: 'Priya Sharma',
			location: 'Mumbai',
			style: 'Taiwanese',
			prize: '₹2,50,000'
		},
		{
			year: '2023',
			champion: 'Rajesh Kumar',
			location: 'Delhi',
			style: 'Hong Kong',
			prize: '₹2,00,000'
		},
		{
			year: '2022',
			champion: 'Meera Patel',
			location: 'Bangalore',
			style: 'Riichi',
			prize: '₹1,75,000'
		}
	];

	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString('en-IN', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		});
	};
</script>

<svelte:head>
	<title>India Mahjong Championship - Official Tournament</title>
	<meta name="description" content="Join the official India Mahjong Championship. Register for tournaments, view past champions, and compete for the ultimate title." />
</svelte:head>

<div class="bg-white">
	<!-- Hero Section -->
	<div class="relative isolate overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-emerald-50">
		<!-- Background decoration -->
		<div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
			<div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-yellow-400 to-orange-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
		</div>
		
		<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
			<div class="mx-auto max-w-4xl text-center">
				<!-- Premium Badge -->
				<div class="flex justify-center mb-8">
					<div class="inline-flex items-center rounded-full bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-200 px-6 py-3 text-sm font-medium text-amber-900 shadow-sm">
						<div class="w-2 h-2 bg-amber-500 rounded-full mr-3 animate-pulse"></div>
						<Crown class="w-4 h-4 mr-2" />
						Prestigious Championship • Excellence Awaits
					</div>
				</div>
				
				<!-- Trophy Animation -->
				<div class="flex justify-center mb-8">
					<div class="relative">
						<div class="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-xl">
							<Trophy class="w-12 h-12 text-white" />
						</div>
						<!-- Glow effect -->
						<div class="absolute inset-0 w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full animate-pulse opacity-75"></div>
						<div class="absolute -inset-2 w-28 h-28 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full animate-pulse opacity-50"></div>
					</div>
				</div>
				
				<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6 leading-tight">
					India's Most <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600">Celebrated</span><br/>Mahjong Championship
				</h1>
				
				<p class="text-xl leading-8 text-gray-700 mb-4 max-w-3xl mx-auto">
					Where passionate players come together to celebrate skill, friendship, and the 
					beautiful game we all love.
				</p>

				<!-- Trust Indicators -->
				<div class="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm text-gray-600">
					<div class="flex items-center">
						<div class="w-5 h-5 text-green-600 mr-2">
							<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
						</div>
						<span class="font-medium">Welcoming Community</span>
					</div>
					<div class="flex items-center">
						<div class="w-5 h-5 text-green-600 mr-2">
							<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
						</div>
						<span class="font-medium">Fair Play Guaranteed</span>
					</div>
					<div class="flex items-center">
						<div class="w-5 h-5 text-green-600 mr-2">
							<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
						</div>
						<span class="font-medium">Celebrate Together</span>
					</div>
				</div>

				<!-- Championship Stats -->
				<div class="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-12">
					<div class="text-center">
						<div class="flex justify-center mb-3">
							<div class="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
								<Trophy class="w-6 h-6 text-yellow-600" />
							</div>
						</div>
						<div class="text-2xl font-bold text-gray-900">₹5,00,000</div>
						<div class="text-sm text-gray-600">Prize Pool</div>
					</div>
					
					<div class="text-center">
						<div class="flex justify-center mb-3">
							<div class="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
								<Users class="w-6 h-6 text-yellow-600" />
							</div>
						</div>
						<div class="text-2xl font-bold text-gray-900">256</div>
						<div class="text-sm text-gray-600">Max Players</div>
					</div>
					
					<div class="text-center">
						<div class="flex justify-center mb-3">
							<div class="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
								<Star class="w-6 h-6 text-yellow-600" />
							</div>
						</div>
						<div class="text-2xl font-bold text-gray-900">3 Days</div>
						<div class="text-sm text-gray-600">Tournament</div>
					</div>
				</div>
				
				<!-- Premium CTA Buttons -->
				<div class="flex flex-col sm:flex-row items-center justify-center gap-6">
					<a
						href="#register"
						class="w-full sm:w-auto group inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 px-10 py-5 rounded-2xl text-lg font-bold text-white shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105 border-4 border-white/20"
					>
						<div class="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-white/30 transition-colors">
							<Trophy class="h-4 w-4 text-white" />
						</div>
						Join the Celebration
					</a>
					<a
						href="#champions"
						class="w-full sm:w-auto inline-flex items-center justify-center bg-white/90 backdrop-blur-sm border-2 border-amber-200 hover:border-amber-300 px-8 py-4 rounded-2xl text-base font-bold text-amber-700 hover:bg-amber-50 shadow-lg hover:shadow-xl transition-all duration-300"
					>
						<Medal class="h-5 w-5 mr-3" />
						Meet Our Champions
					</a>
				</div>
			</div>
		</div>
		
		<div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
			<div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-yellow-400 to-orange-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
		</div>
	</div>

	<!-- Current Tournament -->
	<div id="register" class="bg-white py-16 sm:py-24">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-5xl">
				<div class="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-emerald-50 rounded-3xl shadow-2xl ring-1 ring-yellow-200">
					<!-- Background Pattern -->
					<div class="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-emerald-400/5"></div>
					
					<div class="relative p-8 sm:p-12">
						<!-- Header -->
						<div class="text-center mb-10">
							<div class="flex items-center justify-center gap-3 mb-4">
								<div class="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800 ring-1 ring-inset ring-green-600/20">
									<Zap class="w-4 h-4 mr-2" />
									{currentTournament.status}
								</div>
								<div class="bg-yellow-100 text-yellow-800 px-3 py-1.5 rounded-full text-xs font-semibold">
									{currentTournament.currentParticipants} / {currentTournament.maxParticipants} SPOTS FILLED
								</div>
							</div>
							<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
								{currentTournament.name}
							</h2>
							<p class="text-lg text-gray-600 max-w-2xl mx-auto">
								A wonderful celebration where India's most passionate players come together 
				to share their love for this beautiful game.
							</p>
						</div>

						<!-- Tournament Details Grid -->
						<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
							<!-- Left Column -->
							<div class="space-y-6">
								<div class="flex items-start bg-white/80 backdrop-blur rounded-xl p-4 hover:bg-white/90 transition-colors">
									<div class="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4">
										<Calendar class="h-6 w-6 text-yellow-600" />
									</div>
									<div>
										<div class="font-semibold text-gray-900 mb-1">Tournament Dates</div>
										<div class="text-gray-600">{formatDate(currentTournament.startDate)} - {formatDate(currentTournament.endDate)}</div>
										<div class="text-sm text-emerald-600 font-medium mt-1">3 wonderful days together</div>
									</div>
								</div>
								
								<div class="flex items-start bg-white/80 backdrop-blur rounded-xl p-4 hover:bg-white/90 transition-colors">
									<div class="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4">
										<MapPin class="h-6 w-6 text-yellow-600" />
									</div>
									<div>
										<div class="font-semibold text-gray-900 mb-1">{currentTournament.venue}</div>
										<div class="text-gray-600">{currentTournament.address}</div>
										<div class="text-sm text-emerald-600 font-medium mt-1">Beautiful, welcoming venue</div>
									</div>
								</div>
								
								<div class="flex items-start bg-white/80 backdrop-blur rounded-xl p-4 hover:bg-white/90 transition-colors">
									<div class="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4">
										<Users class="h-6 w-6 text-yellow-600" />
									</div>
									<div>
										<div class="font-semibold text-gray-900 mb-1">Tournament Capacity</div>
										<div class="text-gray-600">{currentTournament.currentParticipants} / {currentTournament.maxParticipants} players registered</div>
										<div class="w-full bg-gray-200 rounded-full h-2 mt-2">
											<div class="bg-yellow-600 h-2 rounded-full" style="width: {(currentTournament.currentParticipants/currentTournament.maxParticipants)*100}%"></div>
										</div>
									</div>
								</div>
							</div>

							<!-- Right Column -->
							<div class="space-y-6">
								<div class="flex items-start bg-white/80 backdrop-blur rounded-xl p-4 hover:bg-white/90 transition-colors">
									<div class="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4">
										<Trophy class="h-6 w-6 text-yellow-600" />
									</div>
									<div>
										<div class="font-semibold text-gray-900 mb-1">Prize Pool</div>
										<div class="text-2xl font-bold text-emerald-600">₹{currentTournament.prizePool.toLocaleString('en-IN')}</div>
										<div class="text-sm text-gray-600 mt-1">Celebrating our community together</div>
									</div>
								</div>
								
								<div class="flex items-start bg-white/80 backdrop-blur rounded-xl p-4 hover:bg-white/90 transition-colors">
									<div class="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4">
										<Clock class="h-6 w-6 text-yellow-600" />
									</div>
									<div>
										<div class="font-semibold text-gray-900 mb-1">Registration Deadline</div>
										<div class="text-gray-600">{formatDate(currentTournament.registrationDeadline)}</div>
										<div class="text-sm text-red-600 font-medium mt-1">Limited spots remaining!</div>
									</div>
								</div>
								
								<div class="flex items-start bg-white/80 backdrop-blur rounded-xl p-4 hover:bg-white/90 transition-colors">
									<div class="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4">
										<Target class="h-6 w-6 text-yellow-600" />
									</div>
									<div>
										<div class="font-semibold text-gray-900 mb-1">Entry Fee</div>
										<div class="text-xl font-bold text-gray-900">₹{currentTournament.entryFee.toLocaleString('en-IN')}</div>
										<div class="text-sm text-gray-600 mt-1">Includes delicious meals & welcome kit</div>
									</div>
								</div>
							</div>
						</div>

						<!-- Registration CTA -->
						<div class="text-center border-t border-gray-200/50 pt-8">
							<div class="bg-gradient-to-r from-yellow-50 to-emerald-50 rounded-2xl p-6 mb-6">
								<div class="flex items-center justify-center gap-4 text-sm text-gray-600 mb-4">
									<div class="flex items-center">
										<Star class="w-4 h-4 text-yellow-500 mr-1" />
										Official Championship
									</div>
									<div class="flex items-center">
										<Medal class="w-4 h-4 text-yellow-500 mr-1" />
										Certified Referees
									</div>
									<div class="flex items-center">
										<Users class="w-4 h-4 text-yellow-500 mr-1" />
										Live Streaming
									</div>
								</div>
							</div>
							
							<div class="flex flex-col sm:flex-row gap-4 items-center justify-center">
								<button class="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-yellow-600 px-10 py-4 text-lg font-semibold text-white shadow-lg hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 transition-all duration-200 transform hover:scale-105">
									<Trophy class="w-5 h-5 mr-2" />
									🎉 Join the Celebration - ₹{currentTournament.entryFee.toLocaleString('en-IN')}
								</button>
								<button class="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors">
									<Clock class="w-4 h-4 mr-2" />
									📖 Learn More & Rules
								</button>
							</div>
							
							<p class="text-sm text-gray-500 mt-4">
								✓ Secure payment &nbsp; ✓ Full refund if cancelled &nbsp; ✓ Official certificate
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Upcoming Tournaments -->
	<div class="bg-gray-50 py-16 sm:py-24">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl text-center mb-16">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Regional Celebrations</h2>
				<p class="text-lg text-gray-600">
					Join wonderful regional gatherings and connect with players in your area
				</p>
			</div>

			<div class="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
				{#each upcomingTournaments as tournament, index}
					<div class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-emerald-200">
						<!-- Header with gradient -->
						<div class="bg-gradient-to-br {index === 0 ? 'from-emerald-500 to-emerald-600' : index === 1 ? 'from-blue-500 to-blue-600' : 'from-purple-500 to-purple-600'} px-6 py-8 text-center relative overflow-hidden">
							<div class="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors"></div>
							<div class="relative">
								<div class="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mx-auto mb-4">
									<Trophy class="w-6 h-6 text-white" />
								</div>
								<h3 class="text-xl font-bold text-white mb-2 group-hover:scale-105 transition-transform">{tournament.name}</h3>
								<div class="inline-flex items-center bg-white/20 backdrop-blur rounded-full px-3 py-1 text-xs font-semibold text-white">
									<Zap class="w-3 h-3 mr-1" />
									{tournament.status}
								</div>
							</div>
						</div>
						
						<!-- Content -->
						<div class="p-6">
							<!-- Tournament Details -->
							<div class="space-y-4 mb-6">
								<div class="flex items-center text-gray-600">
									<div class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
										<Calendar class="h-4 w-4 text-gray-600" />
									</div>
									<div>
										<div class="font-medium text-gray-900">{formatDate(tournament.date)}</div>
										<div class="text-sm text-gray-500">Competition Day</div>
									</div>
								</div>
								
								<div class="flex items-center text-gray-600">
									<div class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
										<MapPin class="h-4 w-4 text-gray-600" />
									</div>
									<div>
										<div class="font-medium text-gray-900">{tournament.venue}</div>
										<div class="text-sm text-gray-500">{tournament.participants}</div>
									</div>
								</div>
							</div>
							
							<!-- Prize and Fee -->
							<div class="bg-gray-50 rounded-xl p-4 mb-6">
								<div class="grid grid-cols-2 gap-4">
									<div class="text-center">
										<div class="text-2xl font-bold text-emerald-600">₹{tournament.prizePool.toLocaleString('en-IN')}</div>
										<div class="text-xs text-gray-600">Prize Pool</div>
									</div>
									<div class="text-center">
										<div class="text-2xl font-bold text-gray-900">₹{tournament.entryFee.toLocaleString('en-IN')}</div>
										<div class="text-xs text-gray-600">Entry Fee</div>
									</div>
								</div>
							</div>
							
							<!-- CTA Button -->
							<button class="w-full rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 group-hover:scale-105 transition-all duration-200">
								<Trophy class="w-4 h-4 inline mr-2" />
								Register Now
							</button>
						</div>
						
						<!-- Hover Effect Overlay -->
						<div class="absolute inset-0 ring-1 ring-emerald-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
					</div>
				{/each}
			</div>
			
			<!-- Qualification Info -->
			<div class="mt-16 bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
				<div class="text-center">
					<h3 class="text-xl font-bold text-gray-900 mb-4">Path to Championship</h3>
					<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div class="text-center">
							<div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
								<Users class="w-6 h-6 text-blue-600" />
							</div>
							<h4 class="font-semibold text-gray-900 mb-2">1. Regional Qualifier</h4>
							<p class="text-sm text-gray-600">Win your regional tournament</p>
						</div>
						
						<div class="text-center">
							<div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
								<Target class="w-6 h-6 text-purple-600" />
							</div>
							<h4 class="font-semibold text-gray-900 mb-2">2. Semi-Finals</h4>
							<p class="text-sm text-gray-600">Top 16 compete for finals</p>
						</div>
						
						<div class="text-center">
							<div class="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-3">
								<Crown class="w-6 h-6 text-yellow-600" />
							</div>
							<h4 class="font-semibold text-gray-900 mb-2">3. National Championship</h4>
							<p class="text-sm text-gray-600">Final 8 for the ultimate title</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Past Champions -->
	<div id="champions" class="bg-white py-16 sm:py-24">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl text-center mb-16">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Our Wonderful Champions</h2>
				<p class="text-lg text-gray-600">
					Celebrating the talented players who inspire our community with their passion and skill
				</p>
			</div>

			<div class="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
				{#each pastChampions as champion, index}
					<div class="group bg-gradient-to-br {index === 0 ? 'from-yellow-50 to-yellow-100' : 'from-gray-50 to-gray-100'} rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border {index === 0 ? 'border-yellow-200' : 'border-gray-200'} hover:border-{index === 0 ? 'yellow' : 'gray'}-300">
						<!-- Champion Badge -->
						<div class="text-center pt-8 pb-6">
							{#if index === 0}
								<div class="relative inline-block">
									<div class="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
										<Crown class="w-10 h-10 text-white" />
									</div>
									<!-- Glow effect for current champion -->
									<div class="absolute inset-0 w-20 h-20 bg-yellow-400 rounded-full animate-pulse opacity-30 group-hover:opacity-50 transition-opacity"></div>
									<div class="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
										Current
									</div>
								</div>
							{:else}
								<div class="w-20 h-20 bg-gradient-to-br {index === 1 ? 'from-gray-400 to-gray-600' : 'from-orange-400 to-orange-600'} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
									<Medal class="w-10 h-10 text-white" />
								</div>
							{/if}
						</div>
						
						<!-- Champion Details -->
						<div class="px-8 pb-8 text-center">
							<h3 class="text-2xl font-bold text-gray-900 mb-2 group-hover:text-{index === 0 ? 'yellow' : 'gray'}-600 transition-colors">{champion.champion}</h3>
							<p class="text-{index === 0 ? 'yellow' : 'emerald'}-600 font-bold mb-4 text-lg">Champion {champion.year}</p>
							
							<!-- Stats -->
							<div class="space-y-3 mb-6">
								<div class="flex items-center justify-center bg-white/80 rounded-lg py-2 px-4">
									<MapPin class="w-4 h-4 text-gray-500 mr-2" />
									<span class="text-gray-700 font-medium">{champion.location}</span>
								</div>
								
								<div class="flex items-center justify-center bg-white/80 rounded-lg py-2 px-4">
									<Star class="w-4 h-4 text-gray-500 mr-2" />
									<span class="text-gray-700">Specialty: <span class="font-medium">{champion.style} Mahjong</span></span>
								</div>
								
								<div class="bg-{index === 0 ? 'yellow' : 'emerald'}-50 rounded-lg py-3 px-4">
									<div class="text-2xl font-bold text-{index === 0 ? 'yellow' : 'emerald'}-600">{champion.prize}</div>
									<div class="text-sm text-gray-600">Prize Won</div>
								</div>
							</div>
							
							<!-- Legacy Quote for Current Champion -->
							{#if index === 0}
								<div class="bg-yellow-100/50 rounded-lg p-4 mt-4">
									<p class="text-sm italic text-gray-700">"Mahjong taught me patience and strategy. Every tile has its purpose, every move its consequence."</p>
								</div>
							{/if}
						</div>
					</div>
				{/each}
			</div>
			
			<!-- Champions Legacy -->
			<div class="mt-16 text-center">
				<div class="bg-gradient-to-r from-yellow-50 to-emerald-50 rounded-2xl p-8">
					<h3 class="text-xl font-bold text-gray-900 mb-4">Become Part of Our Story</h3>
					<p class="text-gray-600 mb-6">Every champion started as someone who simply loved the game. Your journey could be next!</p>
					<a href="#register" class="inline-flex items-center rounded-lg bg-yellow-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 transition-colors">
						<Trophy class="w-4 h-4 mr-2" />
						🌟 Begin Your Adventure
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- Rules & Info -->
	<div class="bg-emerald-50">
		<div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
			<div class="mx-auto max-w-4xl">
				<div class="text-center mb-12">
					<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Championship Information
					</h2>
				</div>
				
				<div class="grid gap-8 lg:grid-cols-2">
					<div class="bg-white rounded-lg p-6 shadow-sm">
						<h3 class="text-lg font-semibold text-gray-900 mb-4">Tournament Format</h3>
						<ul class="space-y-2 text-sm text-gray-600">
							<li>• Swiss system preliminary rounds</li>
							<li>• Top 8 advance to knockout finals</li>
							<li>• Multiple Mahjong styles accepted</li>
							<li>• Professional referees and scoring</li>
							<li>• Live streaming of finals</li>
						</ul>
					</div>
					
					<div class="bg-white rounded-lg p-6 shadow-sm">
						<h3 class="text-lg font-semibold text-gray-900 mb-4">Eligibility</h3>
						<ul class="space-y-2 text-sm text-gray-600">
							<li>• Indian residents of all ages welcome</li>
							<li>• Registration required by deadline</li>
							<li>• Entry fee must be paid in advance</li>
							<li>• Valid ID required for verification</li>
							<li>• Professional and amateur divisions</li>
						</ul>
					</div>
				</div>
				
				<div class="text-center mt-8">
					<a
						href="/championship/rules"
						class="rounded-md bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500"
					>
						View Complete Rules & Guidelines
					</a>
				</div>
			</div>
		</div>
	</div>
</div>