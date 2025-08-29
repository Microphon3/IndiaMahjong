<script lang="ts">
	import { goto } from '$app/navigation';
	import { Mail, Eye, EyeOff, User } from 'lucide-svelte';

	let showPassword = $state(false);
	let showConfirmPassword = $state(false);
	let isLoading = $state(false);
	let error = $state('');
	let success = $state('');
	let fullName = $state('');
	let email = $state('');

	const togglePasswordVisibility = () => {
		showPassword = !showPassword;
	};

	const toggleConfirmPasswordVisibility = () => {
		showConfirmPassword = !showConfirmPassword;
	};

	const handleSubmit = async (event: Event) => {
		event.preventDefault();
		isLoading = true;
		error = '';
		success = '';

		const formData = new FormData(event.target as HTMLFormElement);
		const fullNameValue = formData.get('full_name') as string;
		const emailValue = formData.get('email') as string;
		const password = formData.get('password') as string;
		const confirmPassword = formData.get('confirm_password') as string;
		const terms = formData.get('terms');

		if (!fullNameValue || !emailValue || !password || !confirmPassword) {
			error = 'Please fill in all fields';
			isLoading = false;
			return;
		}

		if (!terms) {
			error = 'Please accept the terms and conditions';
			isLoading = false;
			return;
		}

		if (password !== confirmPassword) {
			error = 'Passwords do not match';
			isLoading = false;
			return;
		}

		if (password.length < 6) {
			error = 'Password must be at least 6 characters long';
			isLoading = false;
			return;
		}

		// Simulate API call
		setTimeout(() => {
			success = 'Account created successfully! Redirecting...';
			setTimeout(() => {
				goto('/dashboard');
			}, 1500);
		}, 1000);
	};
</script>

<svelte:head>
	<title>Sign Up - India Mahjong</title>
</svelte:head>

<!-- Premium Auth Background -->
<div class="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 relative overflow-hidden">
	<div class="absolute inset-0 bg-grid-gray-900/[0.04] bg-[size:20px_20px]" aria-hidden="true"></div>
	<!-- Decorative blur -->
	<div class="absolute top-0 left-0 -translate-y-12 -translate-x-12 w-96 h-96 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full opacity-10 blur-3xl" aria-hidden="true"></div>
	
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
					🎆 Join Our Family
				</div>
			</div>
			
			<h1 class="text-center text-3xl font-bold leading-9 tracking-tight text-gray-900 mb-3">
				Become Part of Something Beautiful
			</h1>
			<p class="text-center text-lg text-gray-700 mb-2">
				Join thousands of players who've found their Mahjong home
			</p>
			<p class="text-center text-sm text-gray-600">
				Already part of our family?
				<a href="/auth/login" class="font-semibold text-emerald-600 hover:text-emerald-500">
					🏠 Welcome back
				</a>
			</p>
		</div>

		<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
			<div class="bg-white/90 backdrop-blur-sm px-8 py-12 shadow-2xl sm:rounded-3xl sm:px-12 border border-white/50">
			<form class="space-y-6" onsubmit={handleSubmit}>
				<div>
					<label for="full_name" class="block text-sm font-medium leading-6 text-gray-900">
						Full Name
					</label>
					<div class="mt-2 relative">
						<input
							id="full_name"
							name="full_name"
							type="text"
							autocomplete="name"
							required
							bind:value={fullName}
							class="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
							placeholder="Enter your full name"
						/>
						<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<User class="h-5 w-5 text-gray-400" aria-hidden="true" />
						</div>
					</div>
				</div>

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
							autocomplete="new-password"
							required
							class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
							placeholder="Create a password"
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

				<div>
					<label for="confirm_password" class="block text-sm font-medium leading-6 text-gray-900">
						Confirm Password
					</label>
					<div class="mt-2 relative">
						<input
							id="confirm_password"
							name="confirm_password"
							type={showConfirmPassword ? 'text' : 'password'}
							autocomplete="new-password"
							required
							class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
							placeholder="Confirm your password"
						/>
						<button
							type="button"
							class="absolute inset-y-0 right-0 pr-3 flex items-center"
							onclick={toggleConfirmPasswordVisibility}
						>
							{#if showConfirmPassword}
								<EyeOff class="h-5 w-5 text-gray-400 hover:text-gray-500" aria-hidden="true" />
							{:else}
								<Eye class="h-5 w-5 text-gray-400 hover:text-gray-500" aria-hidden="true" />
							{/if}
						</button>
					</div>
				</div>

				<div class="flex items-center">
					<input
						id="terms"
						name="terms"
						type="checkbox"
						required
						class="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-600"
					/>
					<label for="terms" class="ml-3 block text-sm leading-6 text-gray-900">
						I agree to the
						<a href="/terms" class="font-semibold text-emerald-600 hover:text-emerald-500">
							Terms of Service
						</a>
						and
						<a href="/privacy" class="font-semibold text-emerald-600 hover:text-emerald-500">
							Privacy Policy
						</a>
					</label>
				</div>

				{#if error}
					<div class="rounded-md bg-red-50 p-4">
						<div class="text-sm text-red-800">{error}</div>
					</div>
				{/if}

				{#if success}
					<div class="rounded-md bg-green-50 p-4">
						<div class="text-sm text-green-800">{success}</div>
					</div>
				{/if}

				<div>
					<button
						type="submit"
						disabled={isLoading}
						class="flex w-full justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{#if isLoading}
							<div class="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
						{:else}
							🌟 Join Our Community
						{/if}
					</button>
				</div>
			</form>
				<!-- Welcome message -->
				<div class="mt-8 text-center">
					<p class="text-sm text-gray-600">
						🌈 Ready to discover the joy of Mahjong with wonderful people?
					</p>
				</div>
			</div>
		</div>
	</div>
</div>