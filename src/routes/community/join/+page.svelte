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
	<title>Join the India Mahjong Community</title>
	<meta name="description" content="Connect with passionate Mahjong players across India. Join our community for games, events, and learning opportunities." />
</svelte:head>

<div class="bg-white min-h-screen">
	{#if !isSubmitted}
		<!-- Header -->
		<div class="bg-gradient-to-br from-emerald-50 to-green-50">
			<div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
				<div class="mx-auto max-w-2xl text-center">
					<div class="flex justify-center mb-6">
						<div class="w-16 h-16 bg-gradient-to-br from-emerald-600 to-green-700 rounded-full flex items-center justify-center">
							<Users class="w-8 h-8 text-white" />
						</div>
					</div>
					<h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
						Join the India Mahjong Community
					</h1>
					<p class="mt-6 text-lg leading-8 text-gray-600">
						Connect with passionate Mahjong players across India. Get access to exclusive events, 
						learning resources, tournaments, and a vibrant community of fellow enthusiasts.
					</p>
				</div>
			</div>
		</div>

		<!-- Benefits Section -->
		<div class="mx-auto max-w-7xl px-6 py-16 lg:px-8">
			<div class="mx-auto max-w-2xl text-center mb-12">
				<h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
					What You'll Get
				</h2>
			</div>
			
			<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
				<div class="text-center">
					<div class="flex justify-center mb-4">
						<div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
							<MessageCircle class="w-6 h-6 text-blue-600" />
						</div>
					</div>
					<h3 class="text-lg font-semibold text-gray-900 mb-2">WhatsApp Community</h3>
					<p class="text-gray-600 text-sm">Join our active WhatsApp group with 500+ members for daily discussions, game arrangements, and tips.</p>
				</div>
				
				<div class="text-center">
					<div class="flex justify-center mb-4">
						<div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
							<Calendar class="w-6 h-6 text-purple-600" />
						</div>
					</div>
					<h3 class="text-lg font-semibold text-gray-900 mb-2">Exclusive Events</h3>
					<p class="text-gray-600 text-sm">First access to tournaments, workshops, social meetups, and special events across India.</p>
				</div>
				
				<div class="text-center">
					<div class="flex justify-center mb-4">
						<div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
							<Mail class="w-6 h-6 text-green-600" />
						</div>
					</div>
					<h3 class="text-lg font-semibold text-gray-900 mb-2">Weekly Newsletter</h3>
					<p class="text-gray-600 text-sm">Tips, strategies, event announcements, and community highlights delivered to your inbox.</p>
				</div>
			</div>
		</div>

		<!-- Form Section -->
		<div class="bg-gray-50">
			<div class="mx-auto max-w-3xl px-6 py-16 sm:py-24 lg:px-8">
				<form on:submit|preventDefault={handleSubmit} class="bg-white shadow-sm ring-1 ring-gray-200 rounded-lg p-8">
					<div class="space-y-6">
						<!-- Basic Info -->
						<div>
							<h3 class="text-lg font-semibold text-gray-900 mb-4">Tell us about yourself</h3>
							
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
								
								<div>
									<label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
									<input
										id="phone"
										type="tel"
										bind:value={formData.phone}
										placeholder="+91 98765 43210"
										class="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
									/>
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
						</div>

						<!-- Mahjong Experience -->
						<div>
							<h3 class="text-lg font-semibold text-gray-900 mb-4">Your Mahjong Experience</h3>
							
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

						<!-- Interests -->
						<div>
							<h3 class="text-lg font-semibold text-gray-900 mb-2">What interests you most?</h3>
							<p class="text-sm text-gray-600 mb-4">Select all that apply</p>
							
							<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
								{#each interestOptions as interest}
									<label class="flex items-center space-x-2 cursor-pointer">
										<input
											type="checkbox"
											on:change={(e) => handleInterestChange(interest, e.target.checked)}
											class="w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500 focus:ring-2"
										/>
										<span class="text-sm text-gray-700">{interest}</span>
									</label>
								{/each}
							</div>
						</div>

						<!-- How did you hear -->
						<div>
							<label for="hearAbout" class="block text-sm font-medium text-gray-700 mb-2">How did you hear about us?</label>
							<input
								id="hearAbout"
								type="text"
								bind:value={formData.hearAbout}
								placeholder="Google, Friend, Social Media, Event, etc."
								class="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
							/>
						</div>

						<!-- Submit Button -->
						<div class="pt-4">
							<button
								type="submit"
								disabled={!isFormValid || isSubmitting}
								class="w-full flex justify-center items-center rounded-md bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{#if isSubmitting}
									<div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
									Joining Community...
								{:else}
									<Users class="w-5 h-5 mr-2" />
									Join the Community
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
				
				<h2 class="text-2xl font-bold text-gray-900 mb-4">Welcome to the Community!</h2>
				
				<p class="text-gray-600 mb-6">
					Thank you for joining, <strong>{formData.name}</strong>! We're excited to have you as part of the India Mahjong community.
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