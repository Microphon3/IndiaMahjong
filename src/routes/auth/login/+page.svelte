<script lang="ts">
	import { goto } from '$app/navigation';
	import { Mail, Eye, EyeOff } from 'lucide-svelte';

	let showPassword = $state(false);
	let isLoading = $state(false);
	let error = $state('');
	let email = $state('');

	const togglePasswordVisibility = () => {
		showPassword = !showPassword;
	};

	const handleSubmit = async (event: Event) => {
		event.preventDefault();
		isLoading = true;
		error = '';

		const formData = new FormData(event.target as HTMLFormElement);
		const emailValue = formData.get('email') as string;
		const password = formData.get('password') as string;

		if (!emailValue || !password) {
			error = 'Please fill in all fields';
			isLoading = false;
			return;
		}

		if (password.length < 6) {
			error = 'Invalid email or password';
			isLoading = false;
			return;
		}

		// Simulate API call
		setTimeout(() => {
			goto('/dashboard');
		}, 1000);
	};
</script>

<svelte:head>
	<title>Sign In - India Mahjong</title>
</svelte:head>

<!-- Premium Auth Background -->
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
			
			<!-- Premium Badge -->
			<div class="flex justify-center mb-6">
				<div class="inline-flex items-center rounded-full bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-200 px-4 py-2 text-sm font-medium text-amber-900 shadow-sm">
					<div class="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse"></div>
					🏠 Welcome Home
				</div>
			</div>
			
			<h1 class="text-center text-3xl font-bold leading-9 tracking-tight text-gray-900 mb-3">
				Welcome Back!
			</h1>
			<p class="text-center text-lg text-gray-700 mb-2">
				Ready to reconnect with your Mahjong family?
			</p>
			<p class="text-center text-sm text-gray-600">
				New to our community?
				<a href="/auth/signup" class="font-semibold text-emerald-600 hover:text-emerald-500">
					🌟 Join us here
				</a>
			</p>
		</div>

		<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
			<div class="bg-white/90 backdrop-blur-sm px-8 py-12 shadow-2xl sm:rounded-3xl sm:px-12 border border-white/50">
			<form class="space-y-6" onsubmit={handleSubmit}>
				<div>
					<label for="email" class="block text-sm font-medium leading-6 text-gray-900">
						Email address
					</label>
					<div class="mt-2 relative">
						<input
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							required
							bind:value={email}
							class="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
							placeholder="Enter your email"
						/>
						<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<Mail class="h-5 w-5 text-gray-400" aria-hidden="true" />
						</div>
					</div>
				</div>

				<div>
					<label for="password" class="block text-sm font-medium leading-6 text-gray-900">
						Password
					</label>
					<div class="mt-2 relative">
						<input
							id="password"
							name="password"
							type={showPassword ? 'text' : 'password'}
							autocomplete="current-password"
							required
							class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
							placeholder="Enter your password"
						/>
						<button
							type="button"
							class="absolute inset-y-0 right-0 pr-3 flex items-center"
							onclick={togglePasswordVisibility}
						>
							{#if showPassword}
								<EyeOff class="h-5 w-5 text-gray-400 hover:text-gray-500" aria-hidden="true" />
							{:else}
								<Eye class="h-5 w-5 text-gray-400 hover:text-gray-500" aria-hidden="true" />
							{/if}
						</button>
					</div>
				</div>

				<div class="flex items-center justify-between">
					<div class="flex items-center">
						<input
							id="remember-me"
							name="remember-me"
							type="checkbox"
							class="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-600"
						/>
						<label for="remember-me" class="ml-3 block text-sm leading-6 text-gray-900">
							Remember me
						</label>
					</div>

					<div class="text-sm leading-6">
						<a href="/auth/reset-password" class="font-semibold text-emerald-600 hover:text-emerald-500">
							Forgot password?
						</a>
					</div>
				</div>

				{#if error}
					<div class="rounded-md bg-red-50 p-4">
						<div class="text-sm text-red-800">{error}</div>
					</div>
				{/if}

				<div>
					<button
						type="submit"
						disabled={isLoading}
						class="flex w-full justify-center bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 px-6 py-4 rounded-2xl text-base font-bold text-white shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
					>
						{#if isLoading}
							<div class="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
							Welcoming you...
						{:else}
							🏠 Welcome Home
						{/if}
					</button>
				</div>
			</form>
		</div>

			<div class="mt-8">
				<div class="relative">
					<div class="absolute inset-0 flex items-center">
						<div class="w-full border-t border-emerald-200"></div>
					</div>
					<div class="relative flex justify-center text-sm font-bold leading-6">
						<span class="bg-white px-6 text-emerald-700">🌱 New to our family?</span>
					</div>
				</div>

				<div class="mt-6">
					<a
						href="/auth/signup"
						class="flex w-full items-center justify-center bg-white/90 backdrop-blur-sm border-2 border-emerald-200 hover:border-emerald-300 px-6 py-4 rounded-2xl text-base font-bold text-emerald-700 hover:bg-emerald-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
					>
						🎆 Join Our Community
					</a>
				</div>
			</div>
		</div>
	</div>
</div>