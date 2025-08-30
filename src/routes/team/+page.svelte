<script lang="ts">
	import { Users, MapPin, Award, BookOpen, Handshake, Briefcase, Scale, Megaphone } from 'lucide-svelte';

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
		},
		{
			name: 'Rohan Mehta',
			role: 'Community Engagement Manager',
			location: 'Worli',
			experience: '2 yrs playing',
			prefers: 'Riichi & Taiwanese mix',
			strength: 'Social media, youth outreach, tournament organizing',
			knownFor: 'bringing Gen-Z energy to traditional Mahjong circles',
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

	const operations = [
		{
			name: 'Vikram Singh',
			role: 'Head of Operations',
			location: 'BKC',
			experience: '4 yrs playing',
			prefers: 'Taiwanese & HK mix',
			strength: 'Process optimization, logistics, quality assurance',
			knownFor: 'streamlining event operations and venue coordination',
			image: '/api/placeholder/300/300'
		}
	];

	const legal = [
		{
			name: 'Priya Sharma',
			role: 'Legal Counsel',
			location: 'Fort',
			experience: '2 yrs playing',
			prefers: 'Indian style',
			strength: 'Regulatory compliance, contract negotiation, risk management',
			knownFor: 'ensuring all tournaments meet legal gaming standards',
			image: '/api/placeholder/300/300'
		}
	];

	const pr = [
		{
			name: 'Arjun Nair',
			role: 'PR & Communications',
			location: 'Linking Road',
			experience: '3 yrs playing',
			prefers: 'Riichi style',
			strength: 'Media relations, brand storytelling, crisis communication',
			knownFor: 'getting Mahjong featured in mainstream lifestyle publications',
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
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Led by Teachers</h2>
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

			<div class="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 max-w-4xl mx-auto">
				{#each community as member}
					<div class="bg-white rounded-lg shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow p-6">
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

	<!-- Operations Section -->
	<div class="bg-gray-50">
		<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
			<div class="mx-auto max-w-2xl text-center mb-16">
				<div class="flex justify-center mb-4">
					<div class="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg">
						<Briefcase class="w-6 h-6 text-indigo-600" />
					</div>
				</div>
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Operations</h2>
				<p class="mt-4 text-lg leading-8 text-gray-600">
					Streamlining processes and ensuring seamless experiences
				</p>
			</div>

			<div class="flex justify-center">
				{#each operations as member}
					<div class="bg-white rounded-lg shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow p-6 max-w-sm">
						<div class="aspect-square bg-gray-100 rounded-lg mb-4"></div>
						<div class="text-center">
							<h3 class="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
							<p class="text-indigo-600 font-medium mb-3">{member.role}</p>
							
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

	<!-- Legal Section -->
	<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
		<div class="mx-auto max-w-2xl text-center mb-16">
			<div class="flex justify-center mb-4">
				<div class="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg">
					<Scale class="w-6 h-6 text-red-600" />
				</div>
			</div>
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Legal</h2>
			<p class="mt-4 text-lg leading-8 text-gray-600">
				Ensuring compliance and protecting our community
			</p>
		</div>

		<div class="flex justify-center">
			{#each legal as member}
				<div class="bg-white rounded-lg shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow p-6 max-w-sm">
					<div class="aspect-square bg-gray-100 rounded-lg mb-4"></div>
					<div class="text-center">
						<h3 class="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
						<p class="text-red-600 font-medium mb-3">{member.role}</p>
						
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

	<!-- PR Section -->
	<div class="bg-gray-50">
		<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
			<div class="mx-auto max-w-2xl text-center mb-16">
				<div class="flex justify-center mb-4">
					<div class="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg">
						<Megaphone class="w-6 h-6 text-green-600" />
					</div>
				</div>
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">PR & Communications</h2>
				<p class="mt-4 text-lg leading-8 text-gray-600">
					Telling our story and building brand awareness
				</p>
			</div>

			<div class="flex justify-center">
				{#each pr as member}
					<div class="bg-white rounded-lg shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow p-6 max-w-sm">
						<div class="aspect-square bg-gray-100 rounded-lg mb-4"></div>
						<div class="text-center">
							<h3 class="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
							<p class="text-green-600 font-medium mb-3">{member.role}</p>
							
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