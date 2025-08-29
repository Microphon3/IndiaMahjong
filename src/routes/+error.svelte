<script lang="ts">
	import { page } from '$app/stores';
	import { Home, RefreshCw, ArrowLeft } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Something went wrong - India Mahjong</title>
</svelte:head>

<!-- Premium Error Background -->
<div class="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 relative overflow-hidden">
	<div class="absolute inset-0 bg-grid-gray-900/[0.04] bg-[size:20px_20px]" aria-hidden="true"></div>
	<!-- Decorative blur -->
	<div class="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full opacity-10 blur-3xl" aria-hidden="true"></div>
	
	<div class="relative flex min-h-screen flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
		<div class="sm:mx-auto sm:w-full sm:max-w-md">
			<!-- Premium Logo -->
			<div class="flex justify-center mb-8">
				<div class="w-16 h-16 bg-gradient-to-br from-emerald-600 to-green-700 rounded-2xl flex items-center justify-center shadow-2xl">
					<span class="text-white font-bold text-2xl">麻</span>
				</div>
			</div>

			<div class="text-center">
				<div class="flex justify-center mb-6">
					<div class="w-20 h-20 bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl flex items-center justify-center border border-red-200/50">
						<RefreshCw class="w-8 h-8 text-red-500" />
					</div>
				</div>

				<h1 class="text-4xl font-bold text-gray-900 mb-4">
					{#if $page.status === 404}
						Page Not Found
					{:else if $page.status >= 500}
						Something Went Wrong
					{:else}
						Oops!
					{/if}
				</h1>

				<p class="text-lg text-gray-600 mb-8 max-w-md mx-auto">
					{#if $page.status === 404}
						The page you're looking for doesn't exist or may have been moved.
					{:else if $page.status >= 500}
						We're experiencing technical difficulties. Please try again in a moment.
					{:else}
						Something unexpected happened. Let's get you back on track.
					{/if}
				</p>

				{#if $page.error?.message}
					<div class="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 max-w-md mx-auto">
						<p class="text-sm text-red-700 font-medium">Error: {$page.error.message}</p>
					</div>
				{/if}

				<div class="space-y-4">
					<div class="flex flex-col sm:flex-row gap-4 justify-center">
						<button
							onclick={() => history.back()}
							class="flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm border-2 border-emerald-200 hover:border-emerald-300 px-6 py-3 rounded-2xl font-semibold text-emerald-700 hover:bg-emerald-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
						>
							<ArrowLeft class="w-5 h-5" />
							Go Back
						</button>

						<a
							href="/"
							class="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 px-6 py-3 rounded-2xl font-semibold text-white shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
						>
							<Home class="w-5 h-5" />
							Back to Home
						</a>
					</div>

					<div class="text-center">
						<button
							onclick={() => location.reload()}
							class="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
						>
							Try refreshing this page
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>