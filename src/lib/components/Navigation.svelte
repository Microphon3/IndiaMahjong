<script lang="ts">
	import { page } from '$app/stores';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { Menu, X, User, LogIn, LogOut } from 'lucide-svelte';
	import { cn } from '$lib/utils';

	let { data } = $props();
	let isMenuOpen = $state(false);
	let isProfileOpen = $state(false);

	const navigation = [
		{ name: 'Home', href: '/' },
		{ name: 'Learn', href: '/learn' },
		{ name: 'Play', href: '/play' },
		{ name: 'Marketplace', href: '/marketplace' },
		{ name: 'Events', href: '/championship' },
		{ name: 'Community', href: '/leaderboard' }
	];

	onMount(() => {
		const { data: authListener } = data.supabase.auth.onAuthStateChange((event: any) => {
			if (event !== 'INITIAL_SESSION') invalidate('supabase:auth');
		});

		return () => {
			authListener.subscription.unsubscribe();
		};
	});

	const handleSignOut = async () => {
		await data.supabase.auth.signOut();
		isProfileOpen = false;
	};

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};

	const toggleProfile = () => {
		isProfileOpen = !isProfileOpen;
	};
</script>

<header class="sticky top-0 z-50 w-full border-b border-gray-200/20 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
	<nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
		<div class="flex lg:flex-1">
			<a href="/" class="-m-1.5 p-1.5 flex items-center space-x-3 group transition-all duration-300">
				<div class="w-11 h-11 bg-gradient-to-br from-emerald-600 to-green-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/25 group-hover:scale-105 transition-all duration-300">
					<svg width="24" height="24" viewBox="0 0 48 48" class="drop-shadow-sm transition-all duration-300">
						<defs>
							<linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" style="stop-color:#ffffff"/>
								<stop offset="50%" style="stop-color:#f0fdf4"/>
								<stop offset="100%" style="stop-color:#ffffff"/>
							</linearGradient>
						</defs>
						
						<!-- I - Left tile structure -->
						<rect x="6" y="8" width="12" height="32" rx="2" fill="url(#logoGradient)"/>
						<rect x="8" y="10" width="8" height="28" rx="1" fill="rgba(255,255,255,0.1)"/>
						<rect x="6" y="16" width="12" height="2" fill="rgba(255,255,255,0.2)"/>
						<rect x="6" y="24" width="12" height="2" fill="rgba(255,255,255,0.2)"/>
						<rect x="6" y="32" width="12" height="2" fill="rgba(255,255,255,0.2)"/>
						
						<!-- M - Right side made of overlapping tiles -->
						<rect x="24" y="8" width="8" height="32" rx="2" fill="url(#logoGradient)"/>
						<rect x="38" y="8" width="8" height="32" rx="2" fill="url(#logoGradient)"/>
						<rect x="31" y="12" width="8" height="20" rx="2" fill="url(#logoGradient)" opacity="0.9"/>
						
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
				<div class="flex flex-col">
					<span class="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">India Mahjong</span>
					<span class="text-xs text-gray-500 font-medium">Members Only</span>
				</div>
			</a>
		</div>
		
		<div class="flex lg:hidden">
			<button
				type="button"
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
				onclick={toggleMenu}
			>
				<span class="sr-only">Open main menu</span>
				{#if isMenuOpen}
					<X class="h-6 w-6" aria-hidden="true" />
				{:else}
					<Menu class="h-6 w-6" aria-hidden="true" />
				{/if}
			</button>
		</div>
		
		<div class="hidden lg:flex lg:gap-x-8">
			{#each navigation as item}
				<a
					href={item.href}
					class={cn(
						'relative px-4 py-2 text-sm font-bold leading-6 rounded-xl transition-all duration-300 hover:bg-emerald-50',
						$page.url.pathname === item.href 
							? 'text-emerald-600 bg-emerald-50 shadow-sm' 
							: 'text-gray-700 hover:text-emerald-600'
					)}
				>
					{item.name}
					{#if $page.url.pathname === item.href}
						<div class="absolute bottom-0 left-1/2 w-1 h-1 bg-emerald-500 rounded-full transform -translate-x-1/2 translate-y-2"></div>
					{/if}
				</a>
			{/each}
		</div>
		
		<div class="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:space-x-4">
			{#if data.session}
				<div class="relative">
					<button
						type="button"
						class="flex items-center space-x-3 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 px-4 py-2.5 text-emerald-700 hover:from-emerald-100 hover:to-green-100 hover:shadow-lg transition-all duration-300"
						onclick={toggleProfile}
					>
						<div class="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
							<User class="h-4 w-4 text-white" />
						</div>
						<div class="flex flex-col items-start">
							<span class="text-sm font-bold leading-none">
								{data.user?.email?.split('@')[0] || 'Member'}
							</span>
							<span class="text-xs text-emerald-600/70 leading-none mt-0.5">Premium</span>
						</div>
					</button>
					
					{#if isProfileOpen}
						<div class="absolute right-0 z-10 mt-3 w-56 origin-top-right rounded-2xl bg-white/95 backdrop-blur-sm py-2 shadow-2xl border border-gray-200/50">
							<div class="px-4 py-3 border-b border-gray-100/80">
								<div class="text-sm font-bold text-gray-900">
									{data.user?.email?.split('@')[0] || 'Member'}
								</div>
								<div class="text-xs text-emerald-600">Premium Member</div>
							</div>
							<a
								href="/profile"
								class="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
								onclick={() => (isProfileOpen = false)}
							>
								<User class="h-4 w-4 mr-3" />
								Your Profile
							</a>
							<a
								href="/dashboard"
								class="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
								onclick={() => (isProfileOpen = false)}
							>
								<svg class="h-4 w-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
								</svg>
								Dashboard
							</a>
							<div class="border-t border-gray-100/80 mt-1">
								<button
									class="flex items-center w-full px-4 py-3 text-left text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
									onclick={handleSignOut}
								>
									<LogOut class="h-4 w-4 mr-3" />
									Sign out
								</button>
							</div>
						</div>
					{/if}
				</div>
			{:else}
				<a
					href="/auth/login"
					class="flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
				>
					<LogIn class="h-4 w-4" />
					<span>Request Access</span>
				</a>
			{/if}
		</div>
	</nav>

	<!-- Mobile menu -->
	{#if isMenuOpen}
		<div class="lg:hidden">
			<div class="fixed inset-0 z-10"></div>
			<div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
				<div class="flex items-center justify-between">
					<a href="/" class="-m-1.5 p-1.5 flex items-center space-x-2">
						<div class="w-8 h-8 bg-gradient-to-br from-emerald-600 to-green-700 rounded-lg flex items-center justify-center">
							<span class="text-white font-bold">麻</span>
						</div>
						<span class="text-lg font-bold text-gray-900">India Mahjong</span>
					</a>
					<button
						type="button"
						class="-m-2.5 rounded-md p-2.5 text-gray-700"
						onclick={toggleMenu}
					>
						<span class="sr-only">Close menu</span>
						<X class="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div class="mt-6 flow-root">
					<div class="-my-6 divide-y divide-gray-500/10">
						<div class="space-y-2 py-6">
							{#each navigation as item}
								<a
									href={item.href}
									class={cn(
										'-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50',
										$page.url.pathname === item.href ? 'text-emerald-600 bg-emerald-50' : 'text-gray-900'
									)}
									onclick={toggleMenu}
								>
									{item.name}
								</a>
							{/each}
						</div>
						<div class="py-6">
							{#if data.session}
								<div class="space-y-2">
									<a
										href="/profile"
										class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										onclick={toggleMenu}
									>
										Profile
									</a>
									<a
										href="/dashboard"
										class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										onclick={toggleMenu}
									>
										Dashboard
									</a>
									<button
										class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 w-full text-left"
										onclick={handleSignOut}
									>
										Sign out
									</button>
								</div>
							{:else}
								<a
									href="/auth/login"
									class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
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