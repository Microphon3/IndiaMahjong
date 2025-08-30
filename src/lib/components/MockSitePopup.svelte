<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	
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
				<h2 id="popup-title" class="text-xl font-bold text-gray-900 mb-3">
					Welcome to India Mahjong! 🎯
				</h2>
				
				<div class="text-gray-600 space-y-3 mb-6">
					<p class="text-sm leading-relaxed">
						<span class="font-semibold text-emerald-600">This is a mock website</span> created to showcase our vision for India's premier Mahjong community platform.
					</p>
					
					<div class="bg-emerald-50 rounded-lg p-3 text-left">
						<p class="text-sm font-medium text-gray-800 mb-2">We're seeking:</p>
						<ul class="text-sm text-gray-600 space-y-1">
							<li>• <span class="font-medium">Business Partners</span> to own & run this venture</li>
							<li>• <span class="font-medium">Co-founders</span> passionate about Mahjong</li>
							<li>• <span class="font-medium">Investors</span> who see the vision</li>
							<li>• <span class="font-medium">Feedback</span> on the concept & execution</li>
						</ul>
					</div>
					
					<p class="text-sm text-gray-500">
						Want to own and build India's Mahjong community platform?
					</p>
				</div>
				
				<!-- Action buttons -->
				<div class="flex flex-col sm:flex-row gap-3">
					<a 
						href="mailto:hello@indiamahjong.com?subject=Business Partnership Interest&body=Hi! I'm interested in owning and running the India Mahjong platform. I'd like to discuss business partnership opportunities."
						class="flex-1 bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors text-center text-sm"
						onclick={closePopup}
					>
						Partner With Us 🤝
					</a>
					
					<button 
						onclick={closePopup}
						class="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm"
					>
						Continue Exploring
					</button>
				</div>
				
				<p class="text-xs text-gray-400 mt-4">
					This popup will only show once per visit
				</p>
			</div>
		</div>
	</div>
{/if}