<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { Mail, Eye, EyeOff } from 'lucide-svelte';

	let { data, form } = $props();
	let showPassword = $state(false);
	let isLoading = $state(false);

	const togglePasswordVisibility = () => {
		showPassword = !showPassword;
	};
</script>

<svelte:head>
	<title>Sign In - India Mahjong</title>
</svelte:head>

<div class="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<div class="flex justify-center">
			<div class="w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-700 rounded-lg flex items-center justify-center">
				<span class="text-white font-bold text-xl">麻</span>
			</div>
		</div>
		<h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
			Sign in to your account
		</h2>
		<p class="mt-2 text-center text-sm text-gray-600">
			Or
			<a href="/auth/signup" class="font-semibold text-emerald-600 hover:text-emerald-500">
				create a new account
			</a>
		</p>
	</div>

	<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
		<div class="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
			<form class="space-y-6" method="POST" action="?/signin" use:enhance={() => {
				isLoading = true;
				return async ({ update }) => {
					await update();
					isLoading = false;
				};
			}}>
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

				{#if form?.error}
					<div class="rounded-md bg-red-50 p-4">
						<div class="text-sm text-red-800">{form.error}</div>
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
							Sign in
						{/if}
					</button>
				</div>
			</form>
		</div>

		<div class="mt-6">
			<div class="relative">
				<div class="absolute inset-0 flex items-center">
					<div class="w-full border-t border-gray-200" />
				</div>
				<div class="relative flex justify-center text-sm font-medium leading-6">
					<span class="bg-gray-50 px-6 text-gray-900">New to India Mahjong?</span>
				</div>
			</div>

			<div class="mt-6">
				<a
					href="/auth/signup"
					class="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
				>
					Create your account
				</a>
			</div>
		</div>
	</div>
</div>