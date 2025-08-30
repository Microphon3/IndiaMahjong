<script lang="ts">
	import { MessageCircle, Send, X, Bot } from 'lucide-svelte';

	let isOpen = $state(false);
	let message = $state('');
	let messages = $state([
		{
			id: 1,
			text: "Namaste! I'm Ms. Flower, your virtual mahjong guide. This is a mock website showcasing our vision for India's premier mahjong community. Ask me anything about mahjong - rules, venues, strategy, or our planned experiences!",
			sender: 'bot',
			timestamp: new Date()
		}
	]);
	let isTyping = $state(false);
	let isSearching = $state(false);

	const sampleResponses = [
		"I'd be happy to help you with that! Mahjong rules can seem complex at first, but once you understand the basics, it becomes quite intuitive.",
		"For premium venues in your area, I recommend checking our curated list. Our sessions typically range from ₹900-1200 for the complete experience.",
		"That's a great strategic question! In Indian Mahjong, patience and observation are key. Watch your opponents' discards carefully.",
		"Our community values respect and warmth. When visiting home venues, always bring a small gift and follow the host's lead.",
		"The upcoming tournaments are exciting! Would you like me to help you register or share preparation tips?"
	];

	const toggleChat = () => {
		isOpen = !isOpen;
	};

	const sendMessage = async () => {
		if (!message.trim()) return;

		const userMessage = {
			id: messages.length + 1,
			text: message,
			sender: 'user',
			timestamp: new Date()
		};

		messages = [...messages, userMessage];
		const currentMessage = message;
		message = '';
		
		// Show typing indicator
		isTyping = true;
		
		// Use static knowledge only (SPA deployment doesn't support API routes)
		const staticResponse = getStaticMahjongResponse(currentMessage);
		const botResponse = {
			id: messages.length + 1,
			text: staticResponse,
			sender: 'bot',
			timestamp: new Date(),
			isOfflineKnowledge: true
		};
		
		messages = [...messages, botResponse];
		isTyping = false;
	};

	const handleKeyPress = (event: KeyboardEvent) => {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault();
			sendMessage();
		}
	};

	// Comprehensive static mahjong knowledge function
	const getStaticMahjongResponse = (message: string): string => {
		const lowerMessage = message.toLowerCase();

		// Greeting responses
		if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('namaste') || lowerMessage.includes('hey')) {
			return "Namaste! 🌸 I'm Ms. Flower - India's mahjong genius! Ask me anything about rules, venues, or strategy. What's on your mind?";
		}

		// Basic rules - Chinese variant
		if (lowerMessage.includes('chinese') && (lowerMessage.includes('rule') || lowerMessage.includes('variant'))) {
			return "Chinese Classic - the OG mahjong! 🀄\n\n**The Basics:**\n• 144 tiles: Dots, Bamboo, Characters (1-9) + Winds & Dragons\n• Win with: 4 sets + 1 pair\n• Sets: Pung (3 same), Chow (3 sequence), Kong (4 same)\n\n**Flow:** Draw → Discard → Repeat\n**Calls:** Pung/Kong from anyone, Chow from left player only\n\n**Pro tip:** Read opponents through their discards!";
		}

		// Japanese/Riichi rules
		if (lowerMessage.includes('japanese') || lowerMessage.includes('riichi')) {
			return "Riichi Mahjong - the tournament beast! 🎌\n\n**Key differences:**\n• Declare 'Riichi' when 1 tile from win (costs 1000 points)\n• Closed hands = more points\n• Need 'yaku' (special patterns) to win\n• Dora tiles = bonus points\n\n**Popular yaku:**\n• Tanyao: No 1s, 9s, honors\n• Riichi: The declaration itself\n• Pinfu: All sequences + weak pair\n\n**Strategy:** Speed vs points balance. Defense is key!";
		}

		// Hong Kong rules
		if (lowerMessage.includes('hong kong') && lowerMessage.includes('rule')) {
			return "Hong Kong style - pure strategy gold! 🏙️\n\n**What's special:**\n• 144 tiles only (no flowers)\n• 3 points to win, doubles for clean hands\n• Rob the kong = instant win\n• Tournament standard worldwide\n\n**Master these:**\n• Hand concealment\n• Defensive discarding\n• Perfect timing\n\n**Our ₹900-1200 venues love Hong Kong style!**";
		}

		// Taiwanese Mahjong rules
		if (lowerMessage.includes('taiwanese') || lowerMessage.includes('taiwan')) {
			return "Taiwanese Mahjong - the flower power version! 🌸\n\n**Setup:**\n• 16 tiles per player (not 13!)\n• East starts with 17 tiles\n• Win with 17th tile = 5 sets + 1 pair\n\n**Flowers are GOLD:**\n• Auto-replace when drawn\n• Each flower = +1 point\n• Seat flower = +1 extra\n• 7 flowers = instant win (20 pts)\n• 8 flowers = instant win (40 pts)\n\n**Special Wins:**\n• Human Hand (win in 4 discards) = 80 pts\n• Heavenly Hand (East dealt winner) = 100 pts\n• 13 Orphans = 90 pts\n• Pure Honor = 140 pts\n\n**Scoring:** Fan-based + Base 5 points\n\nFast, bonus-heavy, very social!";
		}

		// Specific terminology - Pung
		if (lowerMessage.includes('pung') || (lowerMessage.includes('what') && lowerMessage.includes('pung'))) {
			return "Pung = 3 identical tiles! 🀙🀙🀙\n\n**Examples:**\n• Three 5-dots\n• Three Red Dragons\n• Three East winds\n\n**How to get:** Call 'Pung!' when any player discards a tile you need (must have 2 already). Your hand becomes exposed.\n\n**Strategy:** Pungs are solid but inflexible. Good for beginners!";
		}

		// Specific terminology - Chow
		if (lowerMessage.includes('chow') || (lowerMessage.includes('what') && lowerMessage.includes('chow'))) {
			return "Chow = 3 consecutive tiles, same suit! 🀐🀑🀒\n\n**Examples:**\n• 4-5-6 Bamboo\n• 7-8-9 Characters\n• 1-2-3 Dots\n\n**How to get:** Call 'Chow!' only from the player to your left. Hand becomes exposed.\n\n**Strategy:** Super flexible! Can complete with multiple tiles. Pro favorite!";
		}

		// Specific terminology - Kong
		if (lowerMessage.includes('kong') || (lowerMessage.includes('what') && lowerMessage.includes('kong'))) {
			return "Kong = 4 identical tiles! 🀀🀀🀀🀀\n\n**Two types:**\n• **Exposed:** Call from any discard\n• **Concealed:** Draw all 4 yourself\n\n**Bonus:** Draw extra tile + potential points boost\n\n**Risk:** 'Robbing the kong' - someone can steal your winning tile!\n\n**When to kong:** Secure hands only!";
		}

		// Specific terminology - Riichi
		if (lowerMessage.includes('what') && lowerMessage.includes('riichi')) {
			return "Riichi = 'I'm 1 tile from winning!' 🎯\n\n**Rules:**\n• Japanese mahjong only\n• Costs 1000 points to declare\n• Hand must stay concealed\n• Can't change your wait\n\n**Reward:** Extra yaku + potential big points\n\n**Risk:** Opponents know you're close!\n\n**When to riichi:** Good waits + decent hand!";
		}

		// Specific terminology - Yaku
		if (lowerMessage.includes('yaku') || (lowerMessage.includes('what') && lowerMessage.includes('yaku'))) {
			return "Yaku = special patterns needed to win in Japanese mahjong! ⭐\n\n**Common yaku:**\n• Riichi (declaration)\n• Tanyao (no 1s/9s/honors)\n• Yakuhai (honor triplets)\n• Pinfu (all sequences)\n\n**Why important:** No yaku = no win, even with complete hand!\n\n**Strategy:** Always build toward at least 1 yaku!";
		}

		// Basic rules general
		if (lowerMessage.includes('rule') || lowerMessage.includes('how to play') || lowerMessage.includes('basic') || lowerMessage.includes('learn') || lowerMessage.includes('start') || lowerMessage.includes('beginner')) {
			return "Mahjong basics - super easy! 🀄\n\n**Setup:** 144 tiles, 4 players, 13 tiles each\n**Goal:** First to 14 tiles in winning pattern\n\n**Winning pattern:** 4 sets + 1 pair\n• **Sets:** Pung (3 same), Chow (3 sequence), Kong (4 same)\n• **Pair:** 2 identical tiles\n\n**Flow:** Draw → Discard → Call sets → Win!\n\nWant specifics? Ask about 'pung', 'chow', or 'strategy'!";
		}

		// Hand combinations and scoring
		if (lowerMessage.includes('hand') || lowerMessage.includes('combination') || lowerMessage.includes('scoring') || lowerMessage.includes('point')) {
			return "Winning Hand = 14 tiles = 4 sets + 1 pair! 🀄\n\n**Common Hands:**\nRegular win: 4 melds + 1 pair\nSeven pairs: 7 different pairs\nThirteen terminals: All 1s/9s/honors + pair\n\n**Premium Hands:**\nAll one suit: Higher points\nAll honors: Wind/Dragon tiles only\nAll terminals: 1s and 9s only\n\n**Scoring:**\nSelf-draw beats discard win\nConcealed beats exposed\nRare patterns = bonus points\n\nFocus on quick, simple wins over fancy patterns!";
		}

		// Strategy tips
		if (lowerMessage.includes('strategy') || lowerMessage.includes('tip') || lowerMessage.includes('win') || lowerMessage.includes('better') || lowerMessage.includes('improve')) {
			return "Winning Strategy = Read + React + Win! 🧠\n\n**Core Skills:**\nCount discards (track what's gone)\nStay flexible (multiple win paths)\nRead danger tiles (don't feed opponents)\nTime your moves (attack vs defend)\n\n**Attack Mode:**\nSpeed over beauty\nFocus 1-2 suits\nSecure your pair early\nMiddle tiles (4-6) are gold\n\n**Defense Mode:**\nDiscard safe tiles only\nWatch opponent patterns\nSwitch when others near win\n\nRemember: Consistent small wins beat rare big losses!";
		}

		// Venue information
		if (lowerMessage.includes('venue') || lowerMessage.includes('play') || lowerMessage.includes('where') || lowerMessage.includes('location') || lowerMessage.includes('table') || lowerMessage.includes('join')) {
			return "Premium Venues Across India! 🏡\n\n**Cities We Serve:**\nMumbai (Bandra, Juhu)\nDelhi (CP, GK)\nBangalore (Koramangala)\nChennai (T.Nagar)\nPune (Koregaon Park)\nKolkata (Park Street)\n\n**What You Get (₹900-1200):**\nProfessional lacquered tables\nAuthentic bone/bamboo tiles\nTea & refreshments\nPatient, expert guides\n3-4 hour sessions\n\n**Book:** 2-3 days ahead\n**Group:** 4-8 players max\n\nWhich city interests you?";
		}

		// Tournament basics
		if (lowerMessage.includes('tournament') || lowerMessage.includes('competition') || lowerMessage.includes('championship') || lowerMessage.includes('contest')) {
			return "Competitive Scene = Skills + Stakes + Glory! 🏆\n\n**Tournament Levels:**\nLocal: ₹500-800 entry, ₹5K-15K prizes\nRegional: ₹1K-1.5K entry, ₹25K-50K+ prizes\nNational: Qualification only, ₹100K+ prizes\n\n**Prep Requirements:**\nMaster Hong Kong rules\n90-second move limit\nRiichi strategy knowledge\nTournament etiquette\n\n**What You Get:**\nProfessional environment\nSkill advancement\nNetwork with masters\nRankings & recognition\n\nReady to compete with India's finest?";
		}

		// Community etiquette
		if (lowerMessage.includes('etiquette') || lowerMessage.includes('community') || lowerMessage.includes('home') || lowerMessage.includes('respect') || lowerMessage.includes('culture') || lowerMessage.includes('manner')) {
			return "Mahjong Etiquette = Respect + Grace! 🙏\n\n**Home Venue Manners:**\nBring small gifts (sweets, flowers)\nRemove shoes if asked\nSilent phones during play\nArrive on time\nWin/lose graciously\n\n**Table Manners:**\nHandle tiles gently\nClear announcements\nWait your turn\nNo coaching others\n\n**Our Philosophy:**\n'Played with hands, won with heart'\n\nEvery table becomes family!";
		}

		// Pricing/cost questions
		if (lowerMessage.includes('cost') || lowerMessage.includes('price') || lowerMessage.includes('fee') || lowerMessage.includes('expensive') || lowerMessage.includes('cheap')) {
			return "Investment in Mahjong Culture - incredible value for timeless joy! 💰\n\n**Premium Venue Sessions:**\n• **₹900-1200**: 3-4 hours of complete experience\n• **Includes**: Professional table, premium tiles, refreshments, guidance\n• **Value comparison**: Less than a nice dinner, but memories last forever!\n\n**Equipment Investment:**\n• **Quality sets**: ₹3,000-15,000 (lifetime purchase)\n• **Professional grade**: ₹8,000+ (authentic bone/bamboo)\n• **Starter sets**: ₹1,500-3,000 (perfect for learning)\n\n**Tournament Entry:**\n• **Local**: ₹500-800\n• **Regional**: ₹1,000-1,500\n• **Championship**: ₹1,500+ (but prizes often 50x entry!)\n\n**Why Premium Pricing:**\n• Maintains quality standards\n• Ensures serious, respectful players\n• Covers beautiful venues and authentic equipment\n• Supports patient, experienced teachers\n\n**True Value**: Mental stimulation, cultural connection, wonderful friendships, and skills that last a lifetime. Many players say it's the best investment they've ever made in personal enrichment!";
		}

		// Thank you responses
		if (lowerMessage.includes('thank') || lowerMessage.includes('thanks') || lowerMessage.includes('appreciate')) {
			return "You're absolutely welcome! 🌸 It brings me such joy to share the beauty of Mahjong with fellow enthusiasts. Remember, in our community, we say 'Every master was once a beginner, and every expert was once a student.' \n\nFeel free to ask me anything else - I'm always here to help you on your Mahjong journey!";
		}

		// Default comprehensive response
		return "That's such an interesting question! 🤔 As India's Mahjong expert, I love exploring every aspect of this ancient art.\n\n**I can help you with:**\n🀄 **Rules & Variants** (Chinese, Japanese, Hong Kong)\n🏡 **Premium Venues** (₹900-1200/session across major cities)\n🧠 **Winning Strategies** (beginner to tournament level)\n🙏 **Cultural Etiquette** (home venues and tournament play)\n🛍️ **Quality Equipment** (sets, accessories, where to buy)\n🏆 **Tournament Preparation** (rules, timing, competitive play)\n\n**Popular Topics:**\n• 'Basic mahjong rules' - Complete beginner guide\n• 'Hong Kong tournament rules' - Competition standard\n• 'Strategy tips' - Improve your game\n• 'Premium venues Mumbai' - Find quality tables\n• 'Mahjong etiquette' - Cultural traditions\n\nWhat aspect of Mahjong speaks to your heart? I'm here to guide you with warmth and comprehensive knowledge!";
	};
</script>

<!-- Chat Widget Button -->
{#if !isOpen}
	<button
		onclick={toggleChat}
		class="fixed bottom-6 right-6 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white p-2 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 z-50 group"
	>
		<span class="text-4xl">🌸</span>
		<div class="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
		
		<!-- Tooltip -->
		<div class="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
			Chat with Ms. Flower
			<div class="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
		</div>
	</button>
{/if}

<!-- Chat Interface -->
{#if isOpen}
	<div class="fixed bottom-6 right-6 w-96 h-[600px] bg-white border border-gray-200 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden">
		<!-- Header -->
		<div class="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-4 flex items-center justify-between">
			<div class="flex items-center">
				<div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
					<span class="text-lg">🌸</span>
				</div>
				<div>
					<h3 class="font-semibold">Ms. Flower</h3>
					<p class="text-sm text-emerald-100">India's Mahjong Expert</p>
				</div>
			</div>
			<button onclick={toggleChat} class="hover:bg-white/20 p-2 rounded-lg transition-colors">
				<X class="w-5 h-5" />
			</button>
		</div>

		<!-- Messages -->
		<div class="flex-1 overflow-y-auto p-4 space-y-4">
			{#each messages as msg}
				<div class="flex {msg.sender === 'user' ? 'justify-end' : 'justify-start'}">
					<div class="max-w-[80%] {msg.sender === 'user' 
						? 'bg-emerald-600 text-white' 
						: msg.isSearching 
							? 'bg-blue-50 text-blue-800 border border-blue-200' 
							: 'bg-gray-100 text-gray-800'
					} rounded-2xl px-4 py-2 {msg.isSearching ? 'animate-pulse' : ''}">
						{#if msg.isSearching}
							<div class="flex items-center">
								<div class="flex space-x-1 mr-2">
									<div class="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
									<div class="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
									<div class="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
								</div>
								<p class="text-sm">{msg.text}</p>
							</div>
						{:else}
							<p class="text-sm">{msg.text}</p>
							<div class="flex items-center justify-between mt-1">
								<p class="text-xs opacity-70">
									{msg.timestamp.toLocaleTimeString('en-IN', { 
										hour: '2-digit', 
										minute: '2-digit' 
									})}
								</p>
								{#if msg.searchPerformed && msg.sender === 'bot'}
									<span class="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">🔍 Live search</span>
								{/if}
							</div>
						{/if}
					</div>
				</div>
			{/each}

			{#if isTyping}
				<div class="flex justify-start">
					<div class="bg-gray-100 text-gray-800 rounded-2xl px-4 py-2">
						<div class="flex space-x-1">
							<div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
							<div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
							<div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
						</div>
					</div>
				</div>
			{/if}
		</div>

		<!-- Input -->
		<div class="p-4 border-t border-gray-200">
			<div class="flex space-x-2">
				<input
					bind:value={message}
					onkeypress={handleKeyPress}
					placeholder="Ask me about mahjong..."
					class="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
				/>
				<button
					onclick={sendMessage}
					disabled={!message.trim()}
					class="bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
				>
					<Send class="w-4 h-4" />
				</button>
			</div>
		</div>

		<!-- Quick Actions -->
		<div class="p-4 pt-0">
			<div class="flex flex-wrap gap-2">
				<button 
					onclick={() => { message = "What are the basic rules of mahjong?"; sendMessage(); }}
					class="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 px-3 py-1 rounded-lg text-xs transition-colors border border-emerald-200"
				>
					Basic Rules
				</button>
				<button 
					onclick={() => { message = "Tell me about tournament rules"; sendMessage(); }}
					class="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 px-3 py-1 rounded-lg text-xs transition-colors border border-emerald-200"
				>
					Tournament Rules
				</button>
				<button 
					onclick={() => { message = "Show me premium venues"; sendMessage(); }}
					class="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 px-3 py-1 rounded-lg text-xs transition-colors border border-emerald-200"
				>
					Premium Venues
				</button>
				<button 
					onclick={() => { message = "What is Taiwanese mahjong?"; sendMessage(); }}
					class="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 px-3 py-1 rounded-lg text-xs transition-colors border border-emerald-200"
				>
					Taiwanese Rules
				</button>
				<button 
					onclick={() => { message = "Give me strategy tips"; sendMessage(); }}
					class="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 px-3 py-1 rounded-lg text-xs transition-colors border border-emerald-200"
				>
					Strategy Tips
				</button>
			</div>
		</div>
	</div>
{/if}