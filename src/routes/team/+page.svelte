<script lang="ts">
	import { Users, MapPin, Award, BookOpen, Handshake, Briefcase, Scale, Megaphone } from 'lucide-svelte';

	// Team member illustration function
	const getMemberIllustration = (role: string, sectionColor: string) => {
		const roles = {
			'rules': { tiles: ['一', '二', '三'], bg: 'emerald' },
			'taiwanese': { tiles: ['🀑', '🀒', '🀓'], bg: 'emerald' }, 
			'hk': { tiles: ['🀇', '🀈', '🀉'], bg: 'emerald' },
			'community': { tiles: ['🀀', '🀁', '🀂'], bg: 'blue' },
			'engagement': { tiles: ['🀃', '🀄', '🀅'], bg: 'blue' },
			'partnerships': { tiles: ['🀆', '🀇', '🀈'], bg: 'purple' },
			'events': { tiles: ['🀉', '🀊', '🀋'], bg: 'purple' },
			'operations': { tiles: ['🀌', '🀍', '🀎'], bg: 'indigo' },
			'legal': { tiles: ['🀏', '🀐', '🀑'], bg: 'red' },
			'pr': { tiles: ['🀒', '🀓', '🀔'], bg: 'green' }
		};

		let tileSet = roles.rules.tiles; // default
		if (role.includes('Taiwanese')) tileSet = roles.taiwanese.tiles;
		else if (role.includes('HK')) tileSet = roles.hk.tiles;
		else if (role.includes('Community')) tileSet = roles.community.tiles;
		else if (role.includes('Engagement')) tileSet = roles.engagement.tiles;
		else if (role.includes('Partnership')) tileSet = roles.partnerships.tiles;
		else if (role.includes('Events') || role.includes('Media')) tileSet = roles.events.tiles;
		else if (role.includes('Operations')) tileSet = roles.operations.tiles;
		else if (role.includes('Legal')) tileSet = roles.legal.tiles;
		else if (role.includes('PR') || role.includes('Communications')) tileSet = roles.pr.tiles;

		const colorMap = {
			'emerald': { bg: '#10B981', text: '#059669', light: '#D1FAE5' },
			'blue': { bg: '#3B82F6', text: '#1D4ED8', light: '#DBEAFE' },
			'purple': { bg: '#8B5CF6', text: '#7C3AED', light: '#EDE9FE' },
			'indigo': { bg: '#6366F1', text: '#4F46E5', light: '#E0E7FF' },
			'red': { bg: '#EF4444', text: '#DC2626', light: '#FEE2E2' },
			'green': { bg: '#22C55E', text: '#16A34A', light: '#DCFCE7' }
		};

		const colors = colorMap[sectionColor] || colorMap['emerald'];

		return `
			<svg viewBox="0 0 200 200" class="w-full h-full">
				<defs>
					<linearGradient id="bg-${sectionColor}" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" style="stop-color:${colors.light};stop-opacity:1" />
						<stop offset="100%" style="stop-color:#F9FAFB;stop-opacity:1" />
					</linearGradient>
				</defs>
				<rect width="200" height="200" fill="url(#bg-${sectionColor})" rx="8"/>
				
				<!-- Central arrangement of 3 tiles -->
				<g transform="translate(100, 100)">
					<!-- Tile 1 -->
					<g transform="translate(-35, -25) rotate(-15)">
						<rect width="24" height="32" fill="white" stroke="${colors.bg}" stroke-width="1.5" rx="3" opacity="0.95"/>
						<text x="12" y="22" font-family="serif" font-size="14" text-anchor="middle" fill="${colors.text}" font-weight="bold">${tileSet[0]}</text>
					</g>
					
					<!-- Tile 2 (center, slightly forward) -->
					<g transform="translate(0, -15) rotate(5)">
						<rect width="24" height="32" fill="white" stroke="${colors.bg}" stroke-width="1.5" rx="3"/>
						<text x="12" y="22" font-family="serif" font-size="14" text-anchor="middle" fill="${colors.text}" font-weight="bold">${tileSet[1]}</text>
					</g>
					
					<!-- Tile 3 -->
					<g transform="translate(35, -25) rotate(15)">
						<rect width="24" height="32" fill="white" stroke="${colors.bg}" stroke-width="1.5" rx="3" opacity="0.95"/>
						<text x="12" y="22" font-family="serif" font-size="14" text-anchor="middle" fill="${colors.text}" font-weight="bold">${tileSet[2]}</text>
					</g>
					
					<!-- Subtle decorative dots -->
					<circle cx="-60" cy="40" r="2" fill="${colors.bg}" opacity="0.3"/>
					<circle cx="60" cy="35" r="2" fill="${colors.bg}" opacity="0.3"/>
					<circle cx="-50" cy="-50" r="1.5" fill="${colors.bg}" opacity="0.4"/>
					<circle cx="55" cy="-45" r="1.5" fill="${colors.bg}" opacity="0.4"/>
				</g>
			</svg>
		`;
	};

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
	<div class="relative isolate overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
		<!-- Background Mahjong Tiles Pattern -->
		<div class="absolute inset-0 opacity-5">
			<div class="grid grid-cols-12 gap-2 h-full p-8">
				{#each Array(60) as _, i}
					<div class="bg-emerald-600 rounded-sm flex items-center justify-center text-white text-xs transform" style="transform: rotate({(i * 15) % 360}deg)">
						{['🀇', '🀈', '🀉', '🀊', '🀋', '🀌', '🀍', '🀎', '🀏', '🀐', '🀑', '🀒'][i % 12]}
					</div>
				{/each}
			</div>
		</div>
		
		<!-- Decorative gradient blobs -->
		<div class="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full opacity-10 blur-xl"></div>
		<div class="absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full opacity-10 blur-2xl"></div>
		<div class="absolute bottom-20 left-1/3 w-24 h-24 bg-gradient-to-r from-green-400 to-teal-500 rounded-full opacity-10 blur-lg"></div>
		
		<div class="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
			<div class="mx-auto max-w-4xl text-center">
				<!-- Team badge -->
				<div class="flex justify-center mb-8">
					<div class="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-100 to-green-100 border border-emerald-200 px-6 py-3 text-sm font-medium text-emerald-900 shadow-lg backdrop-blur-sm">
						<div class="w-2 h-2 bg-emerald-500 rounded-full mr-3 animate-pulse"></div>
						India's Mahjong Experts
					</div>
				</div>
				
				<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
					<span class="block sm:inline">Meet Our</span> <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 block sm:inline">Team</span>
				</h1>
				
				<p class="text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-gray-700 mb-12 max-w-3xl mx-auto px-4 sm:px-0">
					The passionate experts, community builders, and specialists who make India Mahjong 
					the premier platform for learning and playing this ancient art.
				</p>
				
				<!-- Team stats -->
				<div class="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 px-4 sm:px-0">
					<div class="text-center">
						<div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
							<span class="text-lg sm:text-2xl font-bold text-white">11</span>
						</div>
						<div class="text-xl sm:text-2xl font-bold text-gray-900">Team Members</div>
						<div class="text-xs sm:text-sm text-gray-600">Across all departments</div>
					</div>
					
					<div class="text-center">
						<div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
							<span class="text-lg sm:text-2xl font-bold text-white">25+</span>
						</div>
						<div class="text-xl sm:text-2xl font-bold text-gray-900">Years Experience</div>
						<div class="text-xs sm:text-sm text-gray-600">Combined Mahjong expertise</div>
					</div>
					
					<div class="text-center">
						<div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
							<span class="text-lg sm:text-2xl font-bold text-white">6</span>
						</div>
						<div class="text-xl sm:text-2xl font-bold text-gray-900">Specialties</div>
						<div class="text-xs sm:text-sm text-gray-600">From teaching to operations</div>
					</div>
				</div>
				
			</div>
		</div>
		
		<!-- Bottom wave decoration -->
		<div class="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-r from-transparent via-emerald-100/50 to-transparent transform -skew-y-1"></div>
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

		<div class="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 px-4 sm:px-0">
			{#each experts as expert}
				<div class="bg-white rounded-lg shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow p-6">
					<div class="aspect-square rounded-lg mb-4">
						{@html getMemberIllustration(expert.role, 'emerald')}
					</div>
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
						<div class="aspect-square rounded-lg mb-4">
							{@html getMemberIllustration(member.role, 'blue')}
						</div>
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
					<div class="aspect-square rounded-lg mb-4">
						{@html getMemberIllustration(partner.role, 'purple')}
					</div>
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
						<div class="aspect-square rounded-lg mb-4">
							{@html getMemberIllustration(member.role, 'indigo')}
						</div>
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
					<div class="aspect-square rounded-lg mb-4">
						{@html getMemberIllustration(member.role, 'red')}
					</div>
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
						<div class="aspect-square rounded-lg mb-4">
							{@html getMemberIllustration(member.role, 'green')}
						</div>
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