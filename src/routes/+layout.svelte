<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import NavigationSimple from '$lib/components/NavigationSimple.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import MockSitePopup from '$lib/components/MockSitePopup.svelte';
	import MockSiteBadge from '$lib/components/MockSiteBadge.svelte';
	import MsFlower from '$lib/components/MsFlower.svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let { children } = $props();
	let showMsFlower = $state(false);
	
	onMount(() => {
		if (browser) {
			// Check if user has already seen the popup
			const hasSeenPopup = localStorage.getItem('indiamahjong-mock-popup-seen');
			if (hasSeenPopup) {
				showMsFlower = true;
			}
		}
	});
	
	// Listen for custom event when popup is closed
	function handlePopupClosed() {
		showMsFlower = true;
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>India Mahjong - Learn, Play, and Master the Game</title>
	<meta name="description" content="India's premier platform for learning, playing, and mastering Mahjong. Find classes, tables, tournaments, and join the growing community." />
	<meta name="keywords" content="mahjong, india, learn mahjong, mahjong classes, mahjong tournament, mahjong tiles" />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<NavigationSimple />
	
	<main class="flex-1">
		{@render children?.()}
	</main>
	
	<Footer />
	
	<!-- Mock site popup -->
	<MockSitePopup onClosed={handlePopupClosed} />
	
	<!-- Mock site badge -->
	<MockSiteBadge />
	
	<!-- Ms. Flower chatbot -->
	{#if showMsFlower}
		<MsFlower />
	{/if}
</div>