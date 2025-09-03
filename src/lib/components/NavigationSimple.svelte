<script lang="ts">
	import { page } from '$app/stores';
	import { Menu, X, User, LogIn, LogOut } from 'lucide-svelte';
	import { cn } from '$lib/utils';

	let isMenuOpen = $state(false);
	let isProfileOpen = $state(false);
	let isLoggedIn = $state(false); // Simple state without external store

	const navigation = [
		{ name: 'Home', href: '/' },
		{ name: 'Learn', href: '/learn' },
		{ name: 'Play', href: '/play' },
		{ name: 'Events', href: '/events' },
		{ name: 'Marketplace', href: '/marketplace' },
		{ name: 'Championship', href: '/championship' },
		{ name: 'Leaderboard', href: '/leaderboard' },
		{ name: 'Team', href: '/team' }
	];

	const handleSignOut = () => {
		isLoggedIn = false;
		isProfileOpen = false;
	};

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};

	const toggleProfile = () => {
		isProfileOpen = !isProfileOpen;
	};
</script>

<header class="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
	<nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
		<div class="flex lg:flex-1">
			<a href="/" class="-m-1.5 p-1.5 flex items-center space-x-2">
				<div class="w-10 h-10 bg-gradient-to-br from-emerald-600 to-green-700 rounded-lg flex items-center justify-center">
					<svg width="20" height="20" viewBox="0 0 48 48" class="drop-shadow-sm">
						<defs>
							<linearGradient id="logoGradientSimple" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" style="stop-color:#ffffff"/>
								<stop offset="50%" style="stop-color:#f0fdf4"/>
								<stop offset="100%" style="stop-color:#ffffff"/>
							</linearGradient>
						</defs>
						
						<!-- I - Left tile structure -->
						<rect x="6" y="8" width="12" height="32" rx="2" fill="url(#logoGradientSimple)"/>
						<rect x="8" y="10" width="8" height="28" rx="1" fill="rgba(255,255,255,0.1)"/>
						<rect x="6" y="16" width="12" height="2" fill="rgba(255,255,255,0.2)"/>
						<rect x="6" y="24" width="12" height="2" fill="rgba(255,255,255,0.2)"/>
						<rect x="6" y="32" width="12" height="2" fill="rgba(255,255,255,0.2)"/>
						
						<!-- M - Right side made of overlapping tiles -->
						<rect x="24" y="8" width="8" height="32" rx="2" fill="url(#logoGradientSimple)"/>
						<rect x="38" y="8" width="8" height="32" rx="2" fill="url(#logoGradientSimple)"/>
						<rect x="31" y="12" width="8" height="20" rx="2" fill="url(#logoGradientSimple)" opacity="0.9"/>
						
						<!-- Tile details for M -->
						<rect x="26" y="10" width="4" height="28" rx="1" fill="rgba(255,255,255,0.1)"/>
						<rect x="40" y="10" width="4" height="28" rx="1" fill="rgba(255,255,255,0.1)"/>
						<rect x="33" y="14" width="4" height="16" rx="1" fill="rgba(255,255,255,0.1)"/>
						
						<!-- Subtle tile lines -->
						<rect x="24" y="18" width="8" height="1" fill="rgba(255,255,255,0.3)"/>
						<rect x="38" y="18" width="8" height="1" fill="rgba(255,255,255,0.3)"/>
						<rect x="31" y="20" width="8" height="1" fill="rgba(255,255,255,0.3)"/>
						<rect x="24" y="28" width="8" height="1" fill="rgba(255,255,255,0.3)"/>
						<rect x="38" y="28" width="8" height="1" fill="rgba(255,255,255,0.3)"/>
						<rect x="31" y="26" width="8" height="1" fill="rgba(255,255,255,0.3)"/>
					</svg>
				</div>
				<span class="text-xl font-bold text-gray-900">India Mahjong</span>
			</a>
		</div>
		
		<div class="flex lg:hidden">
			<button
				type="button"
				class="-m-1 inline-flex items-center justify-center rounded-lg p-3 text-gray-700 hover:bg-gray-100 transition-colors min-w-[48px] min-h-[48px]"
				onclick={toggleMenu}
				aria-expanded={isMenuOpen}
			>
				<span class="sr-only">{isMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
				{#if isMenuOpen}
					<X class="h-7 w-7" aria-hidden="true" />
				{:else}
					<Menu class="h-7 w-7" aria-hidden="true" />
				{/if}
			</button>
		</div>
		
		<div class="hidden lg:flex lg:gap-x-8">
			{#each navigation as item}
				<a
					href={item.href}
					class={cn(
						'px-3 py-2 text-sm font-semibold leading-6 transition-colors hover:text-emerald-600 rounded-lg hover:bg-emerald-50 min-h-[40px] flex items-center',
						$page.url.pathname === item.href ? 'text-emerald-600 bg-emerald-50' : 'text-gray-900'
					)}
				>
					{item.name}
				</a>
			{/each}
		</div>
		
		<div class="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:space-x-4">
			{#if isLoggedIn}
				<div class="relative">
					<button
						type="button"
						class="flex items-center space-x-2 rounded-full bg-gray-50 p-2 text-gray-700 hover:bg-gray-100"
						onclick={toggleProfile}
					>
						<User class="h-5 w-5" />
						<span class="text-sm font-medium">Demo User</span>
					</button>
					
					{#if isProfileOpen}
						<div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
							<a
								href="/profile"
								class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
								onclick={() => (isProfileOpen = false)}
							>
								Your Profile
							</a>
							<a
								href="/dashboard"
								class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
								onclick={() => (isProfileOpen = false)}
							>
								Dashboard
							</a>
							<button
								class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
								onclick={handleSignOut}
							>
								<LogOut class="inline h-4 w-4 mr-2" />
								Sign out
							</button>
						</div>
					{/if}
				</div>
			{:else}
				<a
					href="/auth/login"
					class="flex items-center space-x-2 px-4 py-2 text-sm font-semibold leading-6 text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors min-h-[40px]"
				>
					<LogIn class="h-4 w-4" />
					<span>Log in</span>
				</a>
			{/if}
		</div>
	</nav>

	<!-- Mobile menu -->
	{#if isMenuOpen}
		<div class="lg:hidden">
			<div class="fixed inset-0 z-10"></div>
			<div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
				<div class="flex items-center justify-between">
					<a href="/" class="-m-1.5 p-1.5 flex items-center space-x-2">
						<div class="w-8 h-8 bg-gradient-to-br from-emerald-600 to-green-700 rounded-lg flex items-center justify-center">
							<span class="text-white font-bold">麻</span>
						</div>
						<span class="text-lg font-bold text-gray-900">India Mahjong</span>
					</a>
					<button
						type="button"
						class="-m-1 rounded-lg p-3 text-gray-700 hover:bg-gray-100 transition-colors min-w-[48px] min-h-[48px]"
						onclick={toggleMenu}
					>
						<span class="sr-only">Close menu</span>
						<X class="h-7 w-7" aria-hidden="true" />
					</button>
				</div>
				<div class="mt-6 flow-root">
					<div class="-my-4 divide-y divide-gray-500/10">
						<div class="space-y-1 py-6">
							{#each navigation as item}
								<a
									href={item.href}
									class={cn(
										'-mx-2 block rounded-xl px-4 py-3 text-base font-semibold leading-7 hover:bg-gray-50 transition-colors min-h-[52px] flex items-center',
										$page.url.pathname === item.href ? 'text-emerald-600 bg-emerald-50' : 'text-gray-900'
									)}
									onclick={toggleMenu}
								>
									{item.name}
								</a>
							{/each}
						</div>
						<div class="py-6">
							{#if isLoggedIn}
								<div class="space-y-1">
									<a
										href="/profile"
										class="-mx-2 block rounded-xl px-4 py-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors min-h-[52px] flex items-center"
										onclick={toggleMenu}
									>
										Profile
									</a>
									<a
										href="/dashboard"
										class="-mx-2 block rounded-xl px-4 py-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors min-h-[52px] flex items-center"
										onclick={toggleMenu}
									>
										Dashboard
									</a>
									<button
										class="-mx-2 block rounded-xl px-4 py-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 w-full text-left transition-colors min-h-[52px] flex items-center"
										onclick={handleSignOut}
									>
										Sign out
									</button>
								</div>
							{:else}
								<a
									href="/auth/login"
									class="-mx-2 block rounded-xl px-4 py-3 text-base font-semibold leading-7 text-white bg-emerald-600 hover:bg-emerald-700 transition-colors min-h-[52px] flex items-center justify-center"
									onclick={toggleMenu}
								>
									Log in
								</a>
							{/if}
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</header>