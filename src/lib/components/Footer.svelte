<script lang="ts">
	import { Mail, Phone, MapPin } from 'lucide-svelte';
</script>

<footer class="bg-gray-900">
	<div class="mx-auto max-w-7xl px-6 py-12 lg:px-8">
		<div class="xl:grid xl:grid-cols-3 xl:gap-8">
			<div class="space-y-8">
				<div class="flex items-center space-x-2">
					<div class="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
						<span class="text-white font-bold text-lg">麻</span>
					</div>
					<span class="text-xl font-bold text-white">India Mahjong</span>
				</div>
				<p class="text-sm leading-6 text-gray-300">
					India's premier platform for learning, playing, and mastering the ancient art of Mahjong. 
					Join our community and discover the strategic depth of this timeless game.
				</p>
				<div class="flex space-x-6">
					<a href="#" class="text-gray-400 hover:text-gray-300">
						<span class="sr-only">Facebook</span>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
						</svg>
					</a>
					<a href="#" class="text-gray-400 hover:text-gray-300">
						<span class="sr-only">Instagram</span>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path fill-rule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988c6.62 0 11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.281C3.856 14.437 3.004 12.25 3.004 9.793c0-2.563.938-4.766 2.81-6.61C7.119 1.339 9.292.4 11.812.4c2.520 0 4.692.939 6.026 2.783c1.872 1.844 2.81 4.047 2.81 6.61c0 2.457-.852 4.644-2.122 5.914c-.875.791-2.026 1.281-3.323 1.281H8.449z" clip-rule="evenodd" />
						</svg>
					</a>
					<a href="#" class="text-gray-400 hover:text-gray-300">
						<span class="sr-only">YouTube</span>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
						</svg>
					</a>
				</div>
			</div>
			
			<div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-sm font-semibold leading-6 text-white">Platform</h3>
						<ul class="mt-6 space-y-4">
							<li>
								<a href="/learn" class="text-sm leading-6 text-gray-300 hover:text-white">Learn Mahjong</a>
							</li>
							<li>
								<a href="/play" class="text-sm leading-6 text-gray-300 hover:text-white">Find Tables</a>
							</li>
							<li>
								<a href="/marketplace" class="text-sm leading-6 text-gray-300 hover:text-white">Marketplace</a>
							</li>
							<li>
								<a href="/championship" class="text-sm leading-6 text-gray-300 hover:text-white">Championships</a>
							</li>
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<h3 class="text-sm font-semibold leading-6 text-white">Community</h3>
						<ul class="mt-6 space-y-4">
							<li>
								<a href="/leaderboard" class="text-sm leading-6 text-gray-300 hover:text-white">Leaderboard</a>
							</li>
							<li>
								<a href="/tournaments" class="text-sm leading-6 text-gray-300 hover:text-white">Tournaments</a>
							</li>
							<li>
								<a href="/rules" class="text-sm leading-6 text-gray-300 hover:text-white">Rules & Guides</a>
							</li>
							<li>
								<a href="/blog" class="text-sm leading-6 text-gray-300 hover:text-white">Blog</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-sm font-semibold leading-6 text-white">Support</h3>
						<ul class="mt-6 space-y-4">
							<li>
								<a href="/help" class="text-sm leading-6 text-gray-300 hover:text-white">Help Center</a>
							</li>
							<li>
								<a href="/contact" class="text-sm leading-6 text-gray-300 hover:text-white">Contact Us</a>
							</li>
							<li>
								<a href="/faq" class="text-sm leading-6 text-gray-300 hover:text-white">FAQ</a>
							</li>
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<h3 class="text-sm font-semibold leading-6 text-white">Contact Info</h3>
						<ul class="mt-6 space-y-4">
							<li class="flex items-center space-x-2">
								<Mail class="h-4 w-4 text-gray-400" />
								<span class="text-sm text-gray-300">contact@indiamahjong.com</span>
							</li>
							<li class="flex items-center space-x-2">
								<Phone class="h-4 w-4 text-gray-400" />
								<span class="text-sm text-gray-300">+91-XXXX-XXXXXX</span>
							</li>
							<li class="flex items-start space-x-2">
								<MapPin class="h-4 w-4 text-gray-400 mt-1" />
								<span class="text-sm text-gray-300">Mumbai, India</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		
		<div class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
			<p class="text-xs leading-5 text-gray-400">
				&copy; 2024 India Mahjong. All rights reserved. | 
				<a href="/privacy" class="hover:text-gray-300">Privacy Policy</a> | 
				<a href="/terms" class="hover:text-gray-300">Terms of Service</a>
			</p>
		</div>
	</div>
</footer>