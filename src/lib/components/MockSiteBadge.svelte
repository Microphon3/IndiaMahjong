<script lang="ts">
	let showTooltip = $state(false);
	
	function toggleTooltip() {
		showTooltip = !showTooltip;
	}
	
	function hideTooltip() {
		showTooltip = false;
	}
</script>

<!-- Fixed corner badge -->
<div class="fixed bottom-4 left-4 z-40">
	<!-- Tooltip -->
	{#if showTooltip}
		<div class="absolute bottom-full left-0 mb-2 w-64 bg-gray-900 text-white text-xs rounded-lg p-3 shadow-lg">
			<div class="relative">
				<p class="font-medium">This is a Mock Website. Contact Admin for Queries.</p>
				<!-- Arrow pointing down -->
				<div class="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
			</div>
		</div>
	{/if}
	
	<!-- Badge -->
	<button
		onclick={toggleTooltip}
		onmouseleave={hideTooltip}
		class="group bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium px-3 py-2 rounded-full shadow-lg transition-all duration-200 hover:scale-105 flex items-center space-x-2"
		aria-label="This is a mock website - click for more info"
	>
		<!-- Mahjong tile icon -->
		<span class="text-sm">🀄</span>
		<span class="hidden sm:inline">MOCK</span>
		<span class="sm:hidden">M</span>
		
		<!-- Pulse animation dot -->
		<div class="relative">
			<div class="w-2 h-2 bg-white rounded-full"></div>
			<div class="absolute inset-0 w-2 h-2 bg-white rounded-full animate-ping opacity-50"></div>
		</div>
	</button>
</div>

<style>
	@keyframes ping {
		0% {
			transform: scale(1);
			opacity: 1;
		}
		75%, 100% {
			transform: scale(2);
			opacity: 0;
		}
	}
	
	.animate-ping {
		animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
	}
</style>