<script lang="ts">
	import { Users, Mail, MessageCircle, MapPin, Calendar, Trophy, CheckCircle } from 'lucide-svelte';
	
	let formData = $state({
		name: '',
		email: '',
		phone: '',
		city: '',
		experience: '',
		interests: [],
		preferredStyle: '',
		hearAbout: ''
	});
	
	let isSubmitted = $state(false);
	let isSubmitting = $state(false);
	
	const experienceLevels = [
		'Complete Beginner',
		'Some Experience (< 6 months)',
		'Casual Player (6 months - 2 years)', 
		'Regular Player (2+ years)',
		'Advanced Player (5+ years)',
		'Expert/Tournament Player'
	];
	
	const mahjongStyles = [
		'No Preference',
		'Chinese Classical',
		'Hong Kong Style',
		'Taiwanese',
		'Japanese Riichi',
		'American Mahjong',
		'Indian Rules'
	];
	
	const interestOptions = [
		'Learning Classes',
		'Casual Social Games',
		'Tournament Competition',
		'Online Play',
		'Buying Equipment',
		'Hosting Events',
		'Teaching Others'
	];
	
	const handleInterestChange = (interest: string, checked: boolean) => {
		if (checked) {
			formData.interests = [...formData.interests, interest];
		} else {
			formData.interests = formData.interests.filter(i => i !== interest);
		}
	};
	
	const handleSubmit = async () => {
		isSubmitting = true;
		
		// Simulate form submission - in real app, this would go to your backend
		await new Promise(resolve => setTimeout(resolve, 1500));
		
		// Store in localStorage for demo purposes
		localStorage.setItem('communityMember', JSON.stringify({
			...formData,
			joinedAt: new Date().toISOString()
		}));
		
		isSubmitted = true;
		isSubmitting = false;
	};
	
	const joinWhatsApp = () => {
		// In production, this would be a real WhatsApp group link
		window.open('https://chat.whatsapp.com/invite/demo-mahjong-community', '_blank');
	};
	
	const isFormValid = formData.name && formData.email && formData.city && formData.experience;
</script>

<svelte:head>
	<title>Join Our Community - India Mahjong</title>
	<meta name="description" content="Connect with wonderful Mahjong players across India. Simple onboarding to join our warm community." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 relative">
	<div class="absolute inset-0 bg-grid-gray-900/[0.04] bg-[size:20px_20px]" aria-hidden="true"></div>
	{#if !isSubmitted}
		<!-- Hero Section -->
		<div class="relative isolate overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-green-50">
			<div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
				<div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-400 to-green-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
			</div>

			<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
				<div class="mx-auto max-w-4xl text-center">
					<!-- Premium Badge -->
					<div class="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-100 to-green-100 border border-emerald-200 px-6 py-3 text-sm font-medium text-emerald-900 mb-8 shadow-sm">
						<div class="w-2 h-2 bg-emerald-500 rounded-full mr-3 animate-pulse"></div>
						Join India's Most Welcoming Mahjong Community
					</div>
					
					<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6 leading-tight">
						Welcome to Our<br/>
						<span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700">麻將 Community</span>
					</h1>
					
					<p class="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
						Connect with passionate players, learn from patient teachers, and become part of India's most vibrant Mahjong community.
					</p>
				</div>
			</div>

			<div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
				<div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-emerald-400 to-green-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
			</div>
		</div>

		<!-- Premium Stats -->
		<div class="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
			<div class="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8 sm:p-12 mb-16">
				<div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-400/10 via-emerald-400/10 to-purple-400/10"></div>
				
				<dl class="relative grid grid-cols-2 gap-6 sm:gap-8 text-center lg:grid-cols-4">
					<div class="flex flex-col">
						<dd class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-1 sm:mb-2">2,500+</dd>
						<dt class="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1">Active Members</dt>
					</div>
					<div class="flex flex-col">
						<dd class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-1 sm:mb-2">15</dd>
						<dt class="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1">Expert Teachers</dt>
					</div>
					<div class="flex flex-col">
						<dd class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-1 sm:mb-2">75+</dd>
						<dt class="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1">Premium Venues</dt>
					</div>
					<div class="flex flex-col">
						<dd class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-1 sm:mb-2">5</dd>
						<dt class="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1">Years Strong</dt>
					</div>
				</dl>
			</div>

			<div class="mx-auto max-w-2xl text-center mb-12">
				<h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
					What's Included
				</h2>
			</div>
			
			<div class="grid gap-8 sm:grid-cols-3">
				<div class="text-center bg-white/80 backdrop-blur-sm border border-white/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
					<div class="flex justify-center mb-4">
						<div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center">
							<MessageCircle class="w-6 h-6 text-white" />
						</div>
					</div>
					<h3 class="text-lg font-semibold text-gray-900 mb-2">Daily Chat</h3>
					<p class="text-gray-600 text-sm">WhatsApp group with passionate players</p>
				</div>
				
				<div class="text-center bg-white/80 backdrop-blur-sm border border-white/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
					<div class="flex justify-center mb-4">
						<div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center">
							<Calendar class="w-6 h-6 text-white" />
						</div>
					</div>
					<h3 class="text-lg font-semibold text-gray-900 mb-2">Events</h3>
					<p class="text-gray-600 text-sm">First access to meetups and tournaments</p>
				</div>
				
				<div class="text-center bg-white/80 backdrop-blur-sm border border-white/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
					<div class="flex justify-center mb-4">
						<div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center">
							<Mail class="w-6 h-6 text-white" />
						</div>
					</div>
					<h3 class="text-lg font-semibold text-gray-900 mb-2">Updates</h3>
					<p class="text-gray-600 text-sm">Weekly highlights in your inbox</p>
				</div>
			</div>
		</div>

		<!-- Form Section -->
		<div class="relative">
			<div class="mx-auto max-w-3xl px-6 py-16 sm:py-24 lg:px-8">
				<form on:submit|preventDefault={handleSubmit} class="bg-white/90 backdrop-blur-sm border border-white/50 shadow-2xl rounded-3xl p-8">
					<div class="space-y-6">
						<!-- Basic Info -->
						<div>
							<h3 class="text-lg font-semibold text-gray-900 mb-4">About You</h3>
							
							<div class="grid gap-6 sm:grid-cols-2">
								<div>
									<label for="name" class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
									<input
										id="name"
										type="text"
										required
										bind:value={formData.name}
										placeholder="Your full name"
										class="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
									/>
								</div>
								
								<div>
									<label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
									<input
										id="email"
										type="email"
										required
										bind:value={formData.email}
										placeholder="your.email@example.com"
										class="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
							
							<div>
								<label for="city" class="block text-sm font-medium text-gray-700 mb-2">City *</label>
								<input
									id="city"
									type="text"
									required
									bind:value={formData.city}
									placeholder="Mumbai, Delhi, Bangalore, etc."
									class="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<!-- Mahjong Experience -->
						<div>
							<h3 class="text-lg font-semibold text-gray-900 mb-4">Experience Level</h3>
							
							<div class="space-y-4">
								<div>
									<label for="experience" class="block text-sm font-medium text-gray-700 mb-2">Experience Level *</label>
									<select
										id="experience"
										required
										bind:value={formData.experience}
										class="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
									>
										<option value="">Select your experience level</option>
										{#each experienceLevels as level}
											<option value={level}>{level}</option>
										{/each}
									</select>
								</div>
								
								<div>
									<label for="preferredStyle" class="block text-sm font-medium text-gray-700 mb-2">Preferred Mahjong Style</label>
									<select
										id="preferredStyle"
										bind:value={formData.preferredStyle}
										class="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
									>
										<option value="">Select preferred style</option>
										{#each mahjongStyles as style}
											<option value={style}>{style}</option>
										{/each}
									</select>
								</div>
							</div>
						</div>


						<!-- Submit Button -->
						<div class="pt-4">
							<button
								type="submit"
								disabled={!isFormValid || isSubmitting}
								class="w-full flex justify-center items-center bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 px-6 py-4 rounded-2xl text-base font-bold text-white shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
							>
								{#if isSubmitting}
									<div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
									Joining...
								{:else}
									<Users class="w-5 h-5 mr-2" />
									Join Our Community
								{/if}
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	{:else}
		<!-- Success State -->
		<div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-green-50">
			<div class="max-w-md w-full mx-auto bg-white shadow-lg rounded-lg p-8 text-center">
				<div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
					<CheckCircle class="w-8 h-8 text-green-600" />
				</div>
				
				<h2 class="text-2xl font-bold text-gray-900 mb-4">Welcome to Our Community!</h2>
				
				<p class="text-gray-600 mb-6">
					Thank you for joining, <strong>{formData.name}</strong>! We're delighted to have you.
				</p>
				
				<div class="space-y-4">
					<button
						on:click={joinWhatsApp}
						class="w-full flex items-center justify-center rounded-md bg-green-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500"
					>
						<MessageCircle class="w-5 h-5 mr-2" />
						Join WhatsApp Group
					</button>
					
					<a
						href="/"
						class="block w-full text-center rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
					>
						Return to Home
					</a>
				</div>
				
				<div class="mt-6 p-4 bg-emerald-50 rounded-lg">
					<p class="text-sm text-emerald-800">
						<strong>What's Next?</strong><br>
						Check your email for a welcome message with next steps. You'll receive our weekly newsletter and event notifications.
					</p>
				</div>
			</div>
		</div>
	{/if}
</div>