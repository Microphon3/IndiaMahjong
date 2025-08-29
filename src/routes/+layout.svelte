<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import NavigationSimple from '$lib/components/NavigationSimple.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
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
</div>