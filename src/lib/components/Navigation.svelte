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
		{ name: 'Championship', href: '/championship' },
		{ name: 'Leaderboard', href: '/leaderboard' }
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

<header class="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
	<nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
		<div class="flex lg:flex-1">
			<a href="/" class="-m-1.5 p-1.5 flex items-center space-x-2">
				<div class="w-10 h-10 bg-gradient-to-br from-emerald-600 to-green-700 rounded-lg flex items-center justify-center">
					<span class="text-white font-bold text-lg">麻</span>
				</div>
				<span class="text-xl font-bold text-gray-900">India Mahjong</span>
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
		
		<div class="hidden lg:flex lg:gap-x-12">
			{#each navigation as item}
				<a
					href={item.href}
					class={cn(
						'text-sm font-semibold leading-6 transition-colors hover:text-emerald-600',
						$page.url.pathname === item.href ? 'text-emerald-600' : 'text-gray-900'
					)}
				>
					{item.name}
				</a>
			{/each}
		</div>
		
		<div class="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:space-x-4">
			{#if data.session}
				<div class="relative">
					<button
						type="button"
						class="flex items-center space-x-2 rounded-full bg-gray-50 p-2 text-gray-700 hover:bg-gray-100"
						onclick={toggleProfile}
					>
						<User class="h-5 w-5" />
						<span class="text-sm font-medium">
							{data.user?.email?.split('@')[0] || 'User'}
						</span>
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
					class="flex items-center space-x-2 text-sm font-semibold leading-6 text-gray-900 hover:text-emerald-600"
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