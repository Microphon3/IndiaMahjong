<script lang="ts">
	import { enhance } from '$app/forms';
	import { Mail, Eye, EyeOff, User } from 'lucide-svelte';

	let { data, form } = $props();
	let showPassword = $state(false);
	let showConfirmPassword = $state(false);
	let isLoading = $state(false);

	const togglePasswordVisibility = () => {
		showPassword = !showPassword;
	};

	const toggleConfirmPasswordVisibility = () => {
		showConfirmPassword = !showConfirmPassword;
	};
</script>

<svelte:head>
	<title>Sign Up - India Mahjong</title>
</svelte:head>

<div class="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<div class="flex justify-center">
			<div class="w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-700 rounded-lg flex items-center justify-center">
				<span class="text-white font-bold text-xl">麻</span>
			</div>
		</div>
		<h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
			Create your account
		</h2>
		<p class="mt-2 text-center text-sm text-gray-600">
			Already have an account?
			<a href="/auth/login" class="font-semibold text-emerald-600 hover:text-emerald-500">
				Sign in
			</a>
		</p>
	</div>

	<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
		<div class="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
			<form class="space-y-6" method="POST" action="?/signup" use:enhance={() => {
				isLoading = true;
				return async ({ update }) => {
					await update();
					isLoading = false;
				};
			}}>
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
							value={form?.full_name ?? ''}
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
							value={form?.email ?? ''}
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

				{#if form?.error}
					<div class="rounded-md bg-red-50 p-4">
						<div class="text-sm text-red-800">{form.error}</div>
					</div>
				{/if}

				{#if form?.success}
					<div class="rounded-md bg-green-50 p-4">
						<div class="text-sm text-green-800">{form.success}</div>
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
							Create Account
						{/if}
					</button>
				</div>
			</form>
		</div>
	</div>
</div>