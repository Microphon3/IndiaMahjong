<script lang="ts">
	import { Clock, Users, Star, ChevronRight, BookOpen, Award, Target } from 'lucide-svelte';

	const skillLevels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];
	const classes = [
		{
			id: 1,
			title: 'Mahjong Fundamentals',
			instructor: 'Master Chen Wei',
			level: 'Beginner',
			duration: 120,
			students: 45,
			rating: 4.9,
			price: 2999,
			description: 'Learn the basic rules, tiles, and fundamental strategies of Mahjong.',
			image: '/api/placeholder/300/200'
		},
		{
			id: 2,
			title: 'Advanced Scoring Techniques',
			instructor: 'Dr. Priya Sharma',
			level: 'Advanced',
			duration: 180,
			students: 23,
			rating: 4.8,
			price: 4999,
			description: 'Master complex scoring patterns and strategic combinations.',
			image: '/api/placeholder/300/200'
		},
		{
			id: 3,
			title: 'Reading Opponents & Psychology',
			instructor: 'Rajesh Kumar',
			level: 'Intermediate',
			duration: 90,
			students: 32,
			rating: 4.7,
			price: 3499,
			description: 'Understand opponent behavior and psychological aspects of the game.',
			image: '/api/placeholder/300/200'
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
				<!-- Badge -->
				<div class="flex justify-center mb-6">
					<div class="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800">
						<BookOpen class="w-4 h-4 mr-2" />
						Expert-Led Classes
					</div>
				</div>
				
				<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
					Master <span class="text-emerald-600">Mahjong</span> with Expert Classes
				</h1>
				
				<p class="text-xl leading-8 text-gray-600 mb-10">
					Learn from India's top Mahjong instructors. From beginner fundamentals to advanced strategies, 
					find the perfect class to elevate your game and join thousands of successful students.
				</p>

				<!-- Stats -->
				<div class="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-12">
					<div class="text-center">
						<div class="flex justify-center mb-3">
							<div class="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
								<Users class="w-6 h-6 text-emerald-600" />
							</div>
						</div>
						<div class="text-2xl font-bold text-gray-900">2,500+</div>
						<div class="text-sm text-gray-600">Students Taught</div>
					</div>
					
					<div class="text-center">
						<div class="flex justify-center mb-3">
							<div class="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
								<Award class="w-6 h-6 text-emerald-600" />
							</div>
						</div>
						<div class="text-2xl font-bold text-gray-900">4.9/5</div>
						<div class="text-sm text-gray-600">Average Rating</div>
					</div>
					
					<div class="text-center">
						<div class="flex justify-center mb-3">
							<div class="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
								<Target class="w-6 h-6 text-emerald-600" />
							</div>
						</div>
						<div class="text-2xl font-bold text-gray-900">95%</div>
						<div class="text-sm text-gray-600">Success Rate</div>
					</div>
				</div>
				
				<!-- CTA Buttons -->
				<div class="flex flex-col sm:flex-row items-center justify-center gap-4">
					<a
						href="#classes"
						class="w-full sm:w-auto rounded-md bg-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition-all duration-200 text-center transform hover:scale-105"
					>
						<BookOpen class="h-5 w-5 mr-2 inline" />
						Explore Classes
					</a>
					<a
						href="/community/join"
						class="w-full sm:w-auto flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-colors"
					>
						<Users class="h-4 w-4" />
						Join Community
					</a>
				</div>
			</div>
		</div>
		
		<div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
			<div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-emerald-400 to-green-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
		</div>
	</div>

	<!-- Filters Section -->
	<div class="bg-gray-50 py-12">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="text-center mb-8">
				<h2 class="text-2xl font-bold text-gray-900 mb-4">Choose Your Learning Path</h2>
				<p class="text-gray-600">Find classes tailored to your skill level and goals</p>
			</div>
			<div class="flex flex-wrap justify-center gap-4">
				{#each skillLevels as level, index}
					<button
						class="{index === 0 ? 'bg-emerald-600 text-white' : 'bg-white text-gray-900 hover:bg-emerald-50'} inline-flex items-center rounded-lg px-6 py-3 text-sm font-semibold shadow-sm ring-1 ring-inset {index === 0 ? 'ring-emerald-600' : 'ring-gray-300'} transition-all duration-200 hover:shadow-md"
					>
						{level}
					</button>
				{/each}
			</div>
		</div>
	</div>

	<!-- Classes Grid -->
	<div id="classes" class="bg-white py-16 sm:py-24">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl text-center mb-12">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
					Featured Classes
				</h2>
				<p class="text-lg text-gray-600">
					Hand-picked courses by expert instructors to accelerate your Mahjong journey
				</p>
			</div>
			
			<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{#each classes as classItem, index}
					<div class="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-emerald-200">
						<!-- Image Container -->
						<div class="aspect-video bg-gradient-to-br {index === 0 ? 'from-blue-400 to-blue-600' : index === 1 ? 'from-purple-400 to-purple-600' : 'from-orange-400 to-orange-600'} rounded-t-2xl relative overflow-hidden">
							<div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
							<div class="absolute top-4 left-4">
								<span class="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700">
									{classItem.level}
								</span>
							</div>
							<div class="absolute top-4 right-4">
								<div class="flex items-center bg-white/90 rounded-full px-2 py-1">
									<Star class="h-3 w-3 text-yellow-400 fill-current" />
									<span class="text-xs font-medium text-gray-700 ml-1">{classItem.rating}</span>
								</div>
							</div>
							<!-- Centered icon -->
							<div class="absolute inset-0 flex items-center justify-center">
								<div class="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
									<BookOpen class="w-8 h-8 text-white" />
								</div>
							</div>
						</div>
						
						<!-- Content -->
						<div class="p-6">
							<h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
								{classItem.title}
							</h3>
							
							<p class="text-gray-600 mb-4 leading-relaxed">
								{classItem.description}
							</p>
							
							<!-- Instructor -->
							<div class="flex items-center mb-4">
								<div class="w-10 h-10 bg-gradient-to-br {index === 0 ? 'from-blue-500 to-blue-600' : index === 1 ? 'from-purple-500 to-purple-600' : 'from-orange-500 to-orange-600'} rounded-full flex items-center justify-center">
									<span class="text-white font-semibold text-sm">{classItem.instructor.split(' ').map(n => n[0]).join('')}</span>
								</div>
								<div class="ml-3">
									<p class="text-sm font-medium text-gray-900">{classItem.instructor}</p>
									<p class="text-xs text-gray-500">Expert Instructor</p>
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
							<div class="flex items-center justify-between">
								<div class="text-2xl font-bold text-emerald-600">
									₹{classItem.price.toLocaleString('en-IN')}
								</div>
								<button class="inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 group-hover:scale-105 transition-all duration-200">
									Enroll Now
									<ChevronRight class="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
								</button>
							</div>
						</div>
						
						<!-- Hover Effect Overlay -->
						<div class="absolute inset-0 ring-1 ring-emerald-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
					</div>
				{/each}
			</div>
			
			<!-- View All Classes -->
			<div class="text-center mt-12">
				<a
					href="#"
					class="inline-flex items-center rounded-lg bg-gray-100 px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-200 transition-colors"
				>
					View All Classes
					<ChevronRight class="ml-2 h-4 w-4" />
				</a>
			</div>
		</div>
	</div>

	<!-- CTA Section -->
	<div class="bg-gradient-to-br from-emerald-600 to-green-700 py-16 sm:py-24">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="relative isolate overflow-hidden bg-gradient-to-b from-emerald-50/10 to-emerald-100/10 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-16">
				<div class="mx-auto max-w-2xl text-center">
					<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
						Want to Teach Mahjong?
					</h2>
					<p class="text-xl leading-8 text-emerald-100 mb-8">
						Share your expertise with our community. Join our instructor network and help others discover the joy of Mahjong.
					</p>
					
					<!-- Benefits -->  
					<div class="grid gap-6 sm:grid-cols-3 mb-10">
						<div class="text-center">
							<div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
								<Users class="w-6 h-6 text-white" />
							</div>
							<h4 class="font-semibold text-white mb-2">Reach Thousands</h4>
							<p class="text-sm text-emerald-100">Share knowledge with eager students</p>
						</div>
						
						<div class="text-center">
							<div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
								<Award class="w-6 h-6 text-white" />
							</div>
							<h4 class="font-semibold text-white mb-2">Earn Recognition</h4>
							<p class="text-sm text-emerald-100">Build your reputation as an expert</p>
						</div>
						
						<div class="text-center">
							<div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
								<Target class="w-6 h-6 text-white" />
							</div>
							<h4 class="font-semibold text-white mb-2">Good Income</h4>
							<p class="text-sm text-emerald-100">Monetize your expertise effectively</p>
						</div>
					</div>
					
					<div class="flex flex-col sm:flex-row gap-4 items-center justify-center">
						<a
							href="/instructor/apply"
							class="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-semibold text-emerald-600 shadow-lg hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 transform hover:scale-105"
						>
							<BookOpen class="w-5 h-5 mr-2" />
							Become an Instructor
						</a>
						
						<div class="text-emerald-100 text-sm">
							✓ Free training provided &nbsp; ✓ Flexible schedule &nbsp; ✓ Supportive community
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