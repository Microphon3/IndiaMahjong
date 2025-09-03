<script lang="ts">
	import { Clock, Users, Star, ChevronRight, BookOpen, Award, Target } from 'lucide-svelte';

	let showAllClasses = $state(false);
	
	const skillLevels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];
	const classes = [
		{
			id: 1,
			title: 'Riichi Mahjong Mastery',
			instructor: 'Akira Tanaka',
			level: 'Intermediate',
			duration: 150,
			students: 42,
			rating: 4.9,
			price: 1600,
			description: 'Master the elegant Japanese Riichi style - the most strategic variant with complex yaku patterns.',
			image: '/api/placeholder/300/200',
			teacherNote: 'Authentic Japanese teaching',
			tileSymbol: '🀄'
		},
		{
			id: 2,
			title: 'Hong Kong Mahjong Classics',
			instructor: 'Mei-Ling Wong',
			level: 'Beginner',
			duration: 120,
			students: 38,
			rating: 4.8,
			price: 1400,
			description: 'Learn the popular Hong Kong style with its fast-paced gameplay and exciting scoring system.',
			image: '/api/placeholder/300/200',
			teacherNote: 'Traditional Cantonese style',
			tileSymbol: '🀅'
		},
		{
			id: 3,
			title: 'Taiwanese 16-Tile Mahjong',
			instructor: 'Lisa Chen',
			level: 'Beginner',
			duration: 90,
			students: 51,
			rating: 4.7,
			price: 1200,
			description: 'The most beginner-friendly variant - perfect for newcomers with simplified rules.',
			image: '/api/placeholder/300/200',
			teacherNote: 'Perfect for beginners',
			tileSymbol: '🀆'
		},
		{
			id: 4,
			title: 'Singapore Mahjong Style',
			instructor: 'David Lim',
			level: 'Intermediate',
			duration: 135,
			students: 29,
			rating: 4.8,
			price: 1500,
			description: 'Learn the unique Singapore variant with its animal tiles and special scoring combinations.',
			image: '/api/placeholder/300/200',
			teacherNote: 'Southeast Asian expertise',
			tileSymbol: '🀇'
		},
		{
			id: 5,
			title: 'American Mahjong (Mah Jongg)',
			instructor: 'Rebecca Davis',
			level: 'Beginner',
			duration: 105,
			students: 33,
			rating: 4.6,
			price: 1300,
			description: 'Discover the American variant with joker tiles and the annual card of hands.',
			image: '/api/placeholder/300/200',
			teacherNote: 'Western-friendly approach',
			tileSymbol: '🀈'
		},
		{
			id: 6,
			title: 'Classical Chinese Mahjong',
			instructor: 'Zhang Wei',
			level: 'Advanced',
			duration: 180,
			students: 22,
			rating: 4.9,
			price: 1800,
			description: 'The traditional root of all Mahjong - pure strategy without modern variations.',
			image: '/api/placeholder/300/200',
			teacherNote: 'Historical authenticity',
			tileSymbol: '🀉'
		}
	];
</script>

<svelte:head>
	<title>Learn Mahjong - Classes & Tutorials</title>
</svelte:head>

<div class="bg-white">
	<!-- Hero Section -->
	<div class="relative isolate overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-green-50">
		<!-- Background decoration -->
		<div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
			<div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-400 to-green-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
		</div>
		
		<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
			<div class="mx-auto max-w-4xl text-center">
				<!-- Premium Badge -->
				<div class="flex justify-center mb-8">
					<div class="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-100 to-green-100 border border-emerald-200 px-6 py-3 text-sm font-medium text-emerald-900 shadow-sm">
						<div class="w-2 h-2 bg-emerald-500 rounded-full mr-3 animate-pulse"></div>
						Patient Teachers • Personalized Learning
					</div>
				</div>
				
				<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
					<span class="block sm:inline">Learn</span> <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700">麻將 Mahjong</span>
					<span class="block">Your Way</span>
				</h1>
				
				<p class="text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-gray-700 mb-8 max-w-3xl mx-auto px-4 sm:px-0">
					Connect with patient, experienced teachers who understand your learning journey. 
					From your first tile to advanced strategy, find the perfect guide for your path.
				</p>

				<!-- Trust Indicators -->
				<div class="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm text-gray-600">
					<div class="flex items-center">
						<div class="w-5 h-5 text-green-600 mr-2">
							<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
						</div>
						<span class="font-medium">Experienced Teachers</span>
					</div>
					<div class="flex items-center">
						<div class="w-5 h-5 text-green-600 mr-2">
							<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
						</div>
						<span class="font-medium">Pay Directly to Teacher</span>
					</div>
					<div class="flex items-center">
						<div class="w-5 h-5 text-green-600 mr-2">
							<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
						</div>
						<span class="font-medium">Flexible Schedule</span>
					</div>
				</div>

				<!-- Premium Stats -->
				<div class="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-6 sm:p-8 lg:p-12 mb-12">
					<div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-400/10 via-green-400/10 to-emerald-400/10"></div>
					
					<div class="relative grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-3">
						<div class="text-center">
							<div class="flex justify-center mb-3 sm:mb-4">
								<div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-xl">
									<Users class="w-6 h-6 sm:w-8 sm:h-8 text-white" />
								</div>
							</div>
							<div class="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-1">2,500+</div>
							<div class="text-xs sm:text-sm font-medium text-gray-600">Happy Learners</div>
						</div>
						
						<div class="text-center">
							<div class="flex justify-center mb-3 sm:mb-4">
								<div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-xl">
									<Award class="w-6 h-6 sm:w-8 sm:h-8 text-white" />
								</div>
							</div>
							<div class="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-1">4.9/5</div>
							<div class="text-xs sm:text-sm font-medium text-gray-600">Teacher Rating</div>
						</div>
						
						<div class="text-center">
							<div class="flex justify-center mb-3 sm:mb-4">
								<div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-xl">
									<Target class="w-6 h-6 sm:w-8 sm:h-8 text-white" />
								</div>
							</div>
							<div class="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-1">95%</div>
							<div class="text-xs sm:text-sm font-medium text-gray-600">Learning Success</div>
						</div>
					</div>
				</div>
				
				<!-- Premium CTAs -->
				<div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4 sm:px-0">
					<a
						href="#classes"
						class="w-full max-w-sm sm:max-w-none sm:w-auto group relative rounded-2xl bg-gradient-to-r from-emerald-600 to-green-600 px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-bold text-white shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 min-h-[56px]"
					>
						<div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						<div class="relative flex items-center justify-center">
							<BookOpen class="h-5 w-5 sm:h-6 sm:w-6 mr-3" />
							<span>Browse Teachers</span>
						</div>
					</a>
					<a
						href="/community/join"
						class="w-full max-w-sm sm:max-w-none sm:w-auto group relative rounded-2xl border-2 border-emerald-200 bg-gradient-to-r from-emerald-50 to-green-50 px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-bold text-gray-900 shadow-xl hover:shadow-emerald-500/20 hover:bg-gradient-to-r hover:from-emerald-100 hover:to-green-100 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 min-h-[56px]"
					>
						<div class="relative flex items-center justify-center">
							<Users class="h-6 w-6 mr-3 text-emerald-700" />
							<span>Join Our Community</span>
						</div>
					</a>
				</div>
			</div>
		</div>
		
		<div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
			<div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-emerald-400 to-green-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
		</div>
	</div>

	<!-- Progressive Disclosure Section -->
	<div class="bg-white py-16 sm:py-24">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			
			{#if !showAllClasses}
				<!-- Newcomer Path -->
				<div class="mx-auto max-w-4xl text-center mb-16">
					<h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-6">
						New to Mahjong? Start Here
					</h2>
					<p class="text-lg text-gray-600 mb-12">
						We recommend starting with Taiwanese Mahjong - it's the easiest to learn and most beginner-friendly.
					</p>

					<!-- Recommended Class Card -->
					<div class="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 mb-8 border-2 border-emerald-200 shadow-xl">
						<div class="text-center">
							<div class="text-4xl mb-4">🀆</div>
							<h3 class="text-2xl font-bold text-gray-900 mb-3">Taiwanese 16-Tile Mahjong</h3>
							<p class="text-gray-600 mb-4">Perfect for beginners with simplified rules</p>
							
							<div class="flex items-center justify-center gap-6 text-sm text-gray-600 mb-6">
								<div class="flex items-center">
									<Clock class="w-4 h-4 mr-1" />
									<span>90 minutes</span>
								</div>
								<div class="flex items-center">
									<Users class="w-4 h-4 mr-1" />
									<span>51 students</span>
								</div>
								<div class="flex items-center">
									<Star class="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
									<span>4.7 rating</span>
								</div>
							</div>

							<div class="text-emerald-800 font-semibold mb-6">
								Instructor: Lisa Chen • ₹1,200 per 90-minute class
							</div>
							<p class="text-xs text-gray-600 mb-4">Includes: Personal instruction, practice tiles, tea & snacks</p>

							<a
								href="/book/taiwanese-mahjong"
								class="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-600 to-green-600 px-8 py-4 text-lg font-bold text-white shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
							>
								<BookOpen class="w-5 h-5 mr-2" />
								Book First Class
							</a>
						</div>
					</div>

					<!-- Show More Options -->
					<div class="text-center">
						<button
							onclick={() => showAllClasses = true}
							class="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
						>
							<span>I know Mahjong basics - show me all styles</span>
							<ChevronRight class="w-5 h-5 ml-1" />
						</button>
					</div>
					
					<!-- What's Next -->
					<div class="text-center mt-8 p-4 bg-emerald-50 rounded-2xl border border-emerald-200">
						<h4 class="font-semibold text-emerald-800 mb-2">What's Next?</h4>
						<p class="text-sm text-emerald-700">After your first class, we'll help you find friendly games in your area!</p>
					</div>
				</div>

			{:else}
				<!-- Veterans View - All Classes -->
				<div class="mx-auto max-w-2xl text-center mb-12">
					<h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-4">
						All Mahjong Styles
					</h2>
					<p class="text-lg text-gray-600 mb-6">
						Choose your preferred variant and skill level
					</p>
					
					<!-- Back to Simple View -->
					<button
						onclick={() => showAllClasses = false}
						class="text-sm text-gray-500 hover:text-gray-700"
					>
						← Back to beginner recommendation
					</button>
				</div>

				<!-- Skill Level Filters -->
				<div class="text-center mb-12">
					<div class="flex flex-wrap justify-center gap-3 sm:gap-4">
						{#each skillLevels as level, index}
							<button
								class="{index === 0 ? 'bg-emerald-600 text-white' : 'bg-white text-gray-900 hover:bg-emerald-50'} inline-flex items-center rounded-lg px-4 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold shadow-sm ring-1 ring-inset {index === 0 ? 'ring-emerald-600' : 'ring-gray-300'} transition-all duration-200 hover:shadow-md"
							>
								{level}
							</button>
						{/each}
					</div>
				</div>
			{/if}
			
			{#if showAllClasses}
				<!-- All Classes Grid -->
				<div class="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0">
				{#each classes as classItem, index}
					<div class="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-emerald-200">
						<!-- Image Container -->
						<div class="aspect-video bg-gradient-to-br from-emerald-400 via-teal-500 to-green-600 rounded-t-2xl relative overflow-hidden">
							<!-- Mahjong Tile Pattern Background -->
							<div class="absolute inset-0 opacity-10">
								<div class="grid grid-cols-8 gap-0.5 h-full p-3">
									{#each Array(24) as _, i}
										<div class="bg-white/80 rounded-sm flex items-center justify-center text-emerald-800 text-xs transform rotate-12">
											{['🀇', '🀈', '🀉', '🀊', '🀋', '🀌', '🀍', '🀎'][i % 8]}
										</div>
									{/each}
								</div>
							</div>
							
							<!-- Gradient Overlay -->
							<div class="absolute inset-0 bg-gradient-to-br from-emerald-500/70 via-transparent to-green-800/50"></div>
							
							<!-- Level Badge -->
							<div class="absolute top-4 left-4">
								<span class="inline-flex items-center rounded-full bg-white/95 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-lg border border-white/50">
									{classItem.level}
								</span>
							</div>
							
							<!-- Rating Badge -->
							<div class="absolute top-4 right-4">
								<div class="flex items-center bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg border border-white/50">
									<Star class="h-3 w-3 text-amber-500 fill-current mr-1" />
									<span class="text-xs font-bold text-gray-700">{classItem.rating}</span>
								</div>
							</div>
							
							<!-- Featured Mahjong Tile -->
							<div class="absolute inset-0 flex items-center justify-center">
								<div class="w-20 h-24 bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl flex items-center justify-center border-2 border-white/70 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
									<span class="text-3xl font-bold text-emerald-700">{classItem.tileSymbol}</span>
								</div>
							</div>
							
							<!-- Subtle decorative tiles in corners -->
							<div class="absolute bottom-4 left-4 w-8 h-10 bg-white/20 backdrop-blur rounded opacity-60">
								<div class="w-full h-full flex items-center justify-center text-white text-sm">🀄</div>
							</div>
							<div class="absolute bottom-4 right-4 w-8 h-10 bg-white/20 backdrop-blur rounded opacity-60">
								<div class="w-full h-full flex items-center justify-center text-white text-sm">🀅</div>
							</div>
						</div>
						
						<!-- Content -->
						<div class="p-4 sm:p-6">
							<h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
								{classItem.title}
							</h3>
							
							<p class="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
								{classItem.description}
							</p>
							
							<!-- Teacher Profile -->
							<div class="flex items-center mb-4">
								<div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
									<span class="text-white font-bold text-sm">{classItem.instructor.split(' ').map(n => n[0]).join('')}</span>
								</div>
								<div class="ml-4">
									<p class="text-sm font-bold text-gray-900">{classItem.instructor}</p>
									<p class="text-xs text-emerald-600 font-medium">{classItem.teacherNote}</p>
								</div>
							</div>
							
							<!-- Stats -->
							<div class="flex items-center justify-between text-sm text-gray-500 mb-6">
								<div class="flex items-center">
									<Clock class="h-4 w-4 mr-1" />
									{classItem.duration} min
								</div>
								<div class="flex items-center">
									<Users class="h-4 w-4 mr-1" />
									{classItem.students} students
								</div>
							</div>
							
							<!-- Price and CTA -->
							<div class="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4">
								<div class="flex items-center justify-between">
									<div>
										<div class="text-lg font-bold text-gray-900">₹{classItem.price.toLocaleString('en-IN')}</div>
										<div class="text-xs text-gray-600">Pay directly to teacher</div>
									</div>
									<button class="inline-flex items-center rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:shadow-md transition-all duration-200 min-h-[44px] min-w-[80px]">
										Connect
										<ChevronRight class="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
									</button>
								</div>
							</div>
						</div>
						
						<!-- Hover Effect Overlay -->
						<div class="absolute inset-0 ring-1 ring-emerald-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
					</div>
				{/each}
				</div>
			{/if}
		</div>
	</div>

</div>