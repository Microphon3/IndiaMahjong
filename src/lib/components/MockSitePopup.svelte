<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	
	let { onClosed } = $props<{ onClosed?: () => void }>();
	let showPopup = $state(false);
	
	onMount(() => {
		if (browser) {
			// Check if user has already seen the popup
			const hasSeenPopup = localStorage.getItem('indiamahjong-mock-popup-seen');
			if (!hasSeenPopup) {
				// Show popup after a short delay
				setTimeout(() => {
					showPopup = true;
				}, 1500);
			}
		}
	});
	
	function closePopup() {
		showPopup = false;
		if (browser) {
			localStorage.setItem('indiamahjong-mock-popup-seen', 'true');
		}
		// Call the callback to show Ms. Flower
		onClosed?.();
	}
	
	function handleBackdropClick(event: MouseEvent) {
		if (event.target === event.currentTarget) {
			closePopup();
		}
	}
</script>

{#if showPopup}
	<div 
		class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
		onclick={handleBackdropClick}
		role="dialog"
		aria-modal="true"
		aria-labelledby="popup-title"
	>
		<div class="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-6 relative">
			<!-- Close button -->
			<button 
				onclick={closePopup}
				class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
				aria-label="Close popup"
			>
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
				</svg>
			</button>
			
			<!-- Mahjong tiles decoration -->
			<div class="flex justify-center mb-4">
				<div class="flex space-x-2">
					<div class="w-8 h-10 bg-white border-2 border-emerald-500 rounded flex items-center justify-center">
						<span class="text-emerald-600 font-bold text-sm">🀄</span>
					</div>
					<div class="w-8 h-10 bg-white border-2 border-emerald-500 rounded flex items-center justify-center">
						<span class="text-emerald-600 font-bold text-sm">🀅</span>
					</div>
					<div class="w-8 h-10 bg-white border-2 border-emerald-500 rounded flex items-center justify-center">
						<span class="text-emerald-600 font-bold text-sm">🀆</span>
					</div>
				</div>
			</div>
			
			<!-- Content -->
			<div class="text-center">
				<h2 id="popup-title" class="text-xl font-bold text-gray-900 mb-6">
					This is a Mock Website, like a False Mahjong! 🀄
				</h2>
				
				<p class="text-gray-600 mb-6">
					Feedback welcome!
				</p>
				
				<!-- Action button -->
				<button 
					onclick={closePopup}
					class="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
				>
					Continue Exploring
				</button>
				
				<p class="text-xs text-gray-400 mt-4">
					This popup will only show once per visit
				</p>
			</div>
		</div>
	</div>
{/if}