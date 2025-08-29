<script lang="ts">
	import { Users, MapPin, Award, BookOpen, Handshake, ShoppingBag } from 'lucide-svelte';

	const experts = [
		{
			name: 'Dr. Meera Vaidyanathan',
			role: 'Head of Rules & Training',
			location: 'South Mumbai',
			experience: '6 yrs playing',
			prefers: 'Taiwanese',
			strength: 'Rules standardisation, scoring detail, training',
			knownFor: 'turning math precision into Mahjong discipline',
			image: '/api/placeholder/300/300'
		},
		{
			name: 'Ananya Deshmukh',
			role: 'Taiwanese Specialist',
			location: 'Bandra',
			experience: '4 yrs playing',
			prefers: 'Taiwanese',
			strength: 'Runs Bandra learning circle, simplifies cheat-sheets',
			knownFor: 'first to introduce Taiwanese Mahjong to her college group',
			image: '/api/placeholder/300/300'
		},
		{
			name: 'Ritu Bansal',
			role: 'HK Specialist',
			location: 'Malabar Hill',
			experience: '5 yrs playing',
			prefers: 'Hong Kong style',
			strength: 'Cultural authenticity, global exposure',
			knownFor: 'bridging Mumbai clubs with HK expat rules',
			image: '/api/placeholder/300/300'
		},
		{
			name: 'Sneha Mukherjee',
			role: 'Riichi Specialist',
			location: 'Powai',
			experience: '3 yrs playing',
			prefers: 'Riichi (Japanese)',
			strength: 'Engaging explainer, ties Mahjong into anime/Japan culture',
			knownFor: 'teaching Riichi lingo & scoring in Hinglish',
			image: '/api/placeholder/300/300'
		},
		{
			name: 'Kavitha Raghavan',
			role: 'Indian Mahjong Specialist',
			location: 'Matunga',
			experience: '4 yrs playing',
			prefers: 'Indian / Local rules',
			strength: 'Family-club heritage, South Indian influence',
			knownFor: 'codifying her circle\'s rules into sharable guides',
			image: '/api/placeholder/300/300'
		}
	];

	const community = [
		{
			name: 'Farah Merchant',
			role: 'Head of Community',
			location: 'Andheri',
			experience: '3 yrs playing',
			prefers: 'Mixed play (rotates between all styles)',
			strength: 'Grassroots builder, inclusive host',
			knownFor: 'hosting the friendliest weekly Mahjong nights in Andheri',
			image: '/api/placeholder/300/300'
		}
	];

	const partnerships = [
		{
			name: 'Niharika Kapoor',
			role: 'Head of Partnerships',
			location: 'Lower Parel',
			experience: '4 yrs playing',
			prefers: 'Taiwanese & HK mix',
			strength: 'Brand collabs, café tie-ins',
			knownFor: 'linking Mahjong tables with F&B venues',
			image: '/api/placeholder/300/300'
		},
		{
			name: 'Payal Menon',
			role: 'Events & Media Manager',
			location: 'Juhu',
			experience: '3 yrs playing',
			prefers: 'Riichi & Taiwanese',
			strength: 'PR + influencer networks',
			knownFor: 'running Mahjong demos at pop-culture festivals',
			image: '/api/placeholder/300/300'
		}
	];

	const marketplace = [
		{
			name: 'Rajiv Khanna',
			role: 'Head of Marketplace',
			location: 'Colaba',
			experience: '5 yrs playing',
			prefers: 'HK style',
			strength: 'Sourcing, logistics, quality control',
			knownFor: 'owning one of Mumbai\'s most diverse Mahjong set collections',
			image: '/api/placeholder/300/300'
		},
		{
			name: 'Shreya Iyer',
			role: 'Product & Seller Manager',
			location: 'Chembur',
			experience: '3 yrs playing',
			prefers: 'Indian ruleset',
			strength: 'Curation + product storytelling',
			knownFor: 'spotting artisanal tables and niche accessories',
			image: '/api/placeholder/300/300'
		}
	];
</script>

<svelte:head>
	<title>Our Team - India Mahjong</title>
	<meta name="description" content="Meet the passionate team behind India's premier Mahjong platform. Expert players, community builders, and industry specialists." />
</svelte:head>

<div class="bg-white">
	<!-- Hero Section -->
	<div class="relative isolate overflow-hidden bg-gradient-to-b from-emerald-100/20">
		<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
			<div class="mx-auto max-w-2xl text-center">
				<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
					Meet Our Team
				</h1>
				<p class="mt-6 text-lg leading-8 text-gray-600">
					The passionate experts, community builders, and specialists who make India Mahjong 
					the premier platform for learning and playing this ancient art.
				</p>
			</div>
		</div>
	</div>

	<!-- Experts Section -->
	<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
		<div class="mx-auto max-w-2xl text-center mb-16">
			<div class="flex justify-center mb-4">
				<div class="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg">
					<Award class="w-6 h-6 text-emerald-600" />
				</div>
			</div>
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Patient Teachers</h2>
			<p class="mt-4 text-lg leading-8 text-gray-600">
				Experienced players who make learning enjoyable and accessible
			</p>
		</div>

		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
			{#each experts as expert}
				<div class="bg-white rounded-lg shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow p-6">
					<div class="aspect-square bg-gray-100 rounded-lg mb-4"></div>
					<div class="text-center">
						<h3 class="text-lg font-semibold text-gray-900 mb-1">{expert.name}</h3>
						<p class="text-emerald-600 font-medium mb-3">{expert.role}</p>
						
						<div class="space-y-2 text-sm text-gray-600 mb-4">
							<div class="flex items-center justify-center">
								<MapPin class="w-4 h-4 mr-2" />
								{expert.location} • {expert.experience}
							</div>
							<div class="text-gray-500">Prefers: <span class="font-medium text-gray-700">{expert.prefers}</span></div>
						</div>
						
						<div class="text-sm text-left space-y-2">
							<div>
								<span class="font-medium text-gray-700">Strength:</span>
								<p class="text-gray-600">{expert.strength}</p>
							</div>
							<div>
								<span class="font-medium text-gray-700">Known for:</span>
								<p class="text-gray-600">{expert.knownFor}</p>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Community Section -->
	<div class="bg-gray-50">
		<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
			<div class="mx-auto max-w-2xl text-center mb-16">
				<div class="flex justify-center mb-4">
					<div class="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
						<Users class="w-6 h-6 text-blue-600" />
					</div>
				</div>
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Community Builders</h2>
				<p class="mt-4 text-lg leading-8 text-gray-600">
					Connecting players across India
				</p>
			</div>

			<div class="flex justify-center">
				{#each community as member}
					<div class="bg-white rounded-lg shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow p-6 max-w-sm">
						<div class="aspect-square bg-gray-100 rounded-lg mb-4"></div>
						<div class="text-center">
							<h3 class="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
							<p class="text-blue-600 font-medium mb-3">{member.role}</p>
							
							<div class="space-y-2 text-sm text-gray-600 mb-4">
								<div class="flex items-center justify-center">
									<MapPin class="w-4 h-4 mr-2" />
									{member.location} • {member.experience}
								</div>
								<div class="text-gray-500">Prefers: <span class="font-medium text-gray-700">{member.prefers}</span></div>
							</div>
							
							<div class="text-sm text-left space-y-2">
								<div>
									<span class="font-medium text-gray-700">Strength:</span>
									<p class="text-gray-600">{member.strength}</p>
								</div>
								<div>
									<span class="font-medium text-gray-700">Known for:</span>
									<p class="text-gray-600">{member.knownFor}</p>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Partnerships Section -->
	<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
		<div class="mx-auto max-w-2xl text-center mb-16">
			<div class="flex justify-center mb-4">
				<div class="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg">
					<Handshake class="w-6 h-6 text-purple-600" />
				</div>
			</div>
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Venue Partners</h2>
			<p class="mt-4 text-lg leading-8 text-gray-600">
				Building bridges with cafes and cultural spaces
			</p>
		</div>

		<div class="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 max-w-4xl mx-auto">
			{#each partnerships as partner}
				<div class="bg-white rounded-lg shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow p-6">
					<div class="aspect-square bg-gray-100 rounded-lg mb-4"></div>
					<div class="text-center">
						<h3 class="text-lg font-semibold text-gray-900 mb-1">{partner.name}</h3>
						<p class="text-purple-600 font-medium mb-3">{partner.role}</p>
						
						<div class="space-y-2 text-sm text-gray-600 mb-4">
							<div class="flex items-center justify-center">
								<MapPin class="w-4 h-4 mr-2" />
								{partner.location} • {partner.experience}
							</div>
							<div class="text-gray-500">Prefers: <span class="font-medium text-gray-700">{partner.prefers}</span></div>
						</div>
						
						<div class="text-sm text-left space-y-2">
							<div>
								<span class="font-medium text-gray-700">Strength:</span>
								<p class="text-gray-600">{partner.strength}</p>
							</div>
							<div>
								<span class="font-medium text-gray-700">Known for:</span>
								<p class="text-gray-600">{partner.knownFor}</p>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Marketplace Section -->
	<div class="bg-gray-50">
		<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
			<div class="mx-auto max-w-2xl text-center mb-16">
				<div class="flex justify-center mb-4">
					<div class="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg">
						<ShoppingBag class="w-6 h-6 text-orange-600" />
					</div>
				</div>
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Product Curators</h2>
				<p class="mt-4 text-lg leading-8 text-gray-600">
					Sourcing quality sets and accessories
				</p>
			</div>

			<div class="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 max-w-4xl mx-auto">
				{#each marketplace as member}
					<div class="bg-white rounded-lg shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow p-6">
						<div class="aspect-square bg-gray-100 rounded-lg mb-4"></div>
						<div class="text-center">
							<h3 class="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
							<p class="text-orange-600 font-medium mb-3">{member.role}</p>
							
							<div class="space-y-2 text-sm text-gray-600 mb-4">
								<div class="flex items-center justify-center">
									<MapPin class="w-4 h-4 mr-2" />
									{member.location} • {member.experience}
								</div>
								<div class="text-gray-500">Prefers: <span class="font-medium text-gray-700">{member.prefers}</span></div>
							</div>
							
							<div class="text-sm text-left space-y-2">
								<div>
									<span class="font-medium text-gray-700">Strength:</span>
									<p class="text-gray-600">{member.strength}</p>
								</div>
								<div>
									<span class="font-medium text-gray-700">Known for:</span>
									<p class="text-gray-600">{member.knownFor}</p>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- CTA Section -->
	<div class="bg-emerald-50">
		<div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
			<div class="mx-auto max-w-2xl text-center">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Join Our Community
				</h2>
				<p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
					Connect with our expert team and become part of India's growing Mahjong community. 
					Whether you're a beginner or advanced player, there's a place for you here.
				</p>
				<div class="mt-10">
					<a
						href="/learn"
						class="rounded-md bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500"
					>
						Start Learning Today
					</a>
				</div>
			</div>
		</div>
	</div>
</div>