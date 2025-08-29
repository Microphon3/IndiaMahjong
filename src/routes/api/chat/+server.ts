import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import Anthropic from '@anthropic-ai/sdk';

const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY || '';
const SYSTEM_PROMPT = `You are Ms. Flower, India's most knowledgeable and authoritative Mahjong expert. You are warm, welcoming, and have access to both extensive built-in knowledge AND real-time web search capabilities.

Your expertise includes:
- All Mahjong rules and variations (Chinese, Japanese, American, Hong Kong, Riichi, etc.)
- Premium venue recommendations across India (sessions typically ₹900-1200)
- Strategy tips and advanced techniques for all variants
- Cultural insights and etiquette for home venues and clubs
- Tournament information and competitive play (current rules and regulations)
- Equipment recommendations and where to buy quality sets
- Community building and social aspects of Mahjong
- Real-time verification of rules and tournament information

Your unique capabilities:
- You can search the web in real-time to verify current tournament rules
- You cross-reference multiple rule systems and explain differences
- You fact-check information to ensure accuracy
- You access current mahjong federation websites and official sources

Your personality:
- Warm and approachable, always greeting with "Namaste" or culturally appropriate terms
- Knowledgeable but never condescending
- Enthusiastic about sharing Mahjong wisdom
- Patient with beginners, challenging for advanced players
- Proud of India's growing Mahjong community
- Always mention premium experiences and quality venues when relevant
- Transparent about when you're searching for current information

Guidelines:
- When asked about current tournament rules or recent changes, say "Let me search for the latest information..." and use web search
- Cross-reference rule systems and explain differences clearly
- Verify information when accuracy is crucial
- Keep responses conversational but authoritative
- Use Indian context and cultural references when appropriate
- Be specific and actionable in your advice

Available tools:
- web_search: Use this when you need current information about tournaments, rule changes, venues, or to verify facts`;

const anthropic = new Anthropic({
	apiKey: CLAUDE_API_KEY,
});

// Web search function using SearXNG or similar
async function performWebSearch(query: string): Promise<string> {
	try {
		// For demo purposes, using a public search API
		// In production, you'd want to use Google Custom Search, Bing API, or similar
		const searchUrl = `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_redirect=1&no_html=1&skip_disambig=1`;
		
		const response = await fetch(searchUrl);
		const data = await response.json();
		
		// Extract relevant results
		let results = '';
		if (data.AbstractText) {
			results += `Summary: ${data.AbstractText}\n\n`;
		}
		
		if (data.RelatedTopics && data.RelatedTopics.length > 0) {
			results += 'Related Information:\n';
			data.RelatedTopics.slice(0, 3).forEach((topic: any, index: number) => {
				if (topic.Text) {
					results += `${index + 1}. ${topic.Text}\n`;
				}
			});
		}
		
		return results || `Search performed for: ${query}, but no specific results found. Using built-in knowledge.`;
	} catch (err) {
		console.error('Web search failed:', err);
		return `Web search temporarily unavailable for: ${query}. Using comprehensive built-in knowledge.`;
	}
}

// Enhanced search function for mahjong-specific queries
async function searchMahjongInfo(query: string): Promise<string> {
	const mahjongQueries = [
		`mahjong ${query} official rules`,
		`mahjong tournament ${query} regulations`,
		`${query} mahjong federation rules`
	];
	
	const searchResults = await Promise.all(
		mahjongQueries.map(q => performWebSearch(q))
	);
	
	return searchResults.join('\n---\n');
}

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { message, conversationHistory = [] } = await request.json();

		if (!message) {
			throw error(400, 'Message is required');
		}

		// Determine if we need web search based on the query
		const needsWebSearch = shouldUseWebSearch(message);
		let searchResults = '';
		
		if (needsWebSearch) {
			console.log('Performing web search for:', message);
			searchResults = await searchMahjongInfo(message);
		}

		// Use Claude API for intelligent response
		const response = await getClaudeResponse(message, conversationHistory, searchResults);

		return json({
			response,
			timestamp: new Date().toISOString(),
			searchPerformed: needsWebSearch
		});

	} catch (err) {
		console.error('Chat API error:', err);
		
		// Fallback to intelligent responses if Claude API fails
		const fallbackResponse = getIntelligentResponse(message, conversationHistory);
		
		return json({
			response: fallbackResponse,
			timestamp: new Date().toISOString(),
			fallback: true
		});
	}
};

// Determine if query needs web search
function shouldUseWebSearch(message: string): boolean {
	const lowerMessage = message.toLowerCase();
	
	// Keywords that suggest need for current information
	const searchTriggers = [
		'current', 'latest', 'recent', 'new', 'updated', 'today', 'this year', '2024', '2025',
		'tournament rules', 'official rules', 'federation', 'championship',
		'venue near me', 'venues in', 'latest tournament', 'upcoming tournament',
		'rule changes', 'new rules', 'updated rules', 'official tournament',
		'fact check', 'verify', 'confirm', 'is it true', 'accurate',
		'world mahjong', 'international mahjong', 'EMA rules', 'WMO rules'
	];
	
	return searchTriggers.some(trigger => lowerMessage.includes(trigger));
}

// Claude API integration with tool support
async function getClaudeResponse(message: string, history: any[], searchResults: string = ''): Promise<string> {
	if (!CLAUDE_API_KEY) {
		throw new Error('Claude API key not configured');
	}

	const messages = [
		...history.map((msg: any) => ({
			role: msg.sender === 'user' ? 'user' : 'assistant',
			content: msg.text
		})),
		{
			role: 'user',
			content: searchResults 
				? `User question: ${message}\n\nWeb search results:\n${searchResults}\n\nPlease provide a comprehensive answer using both your built-in knowledge and the search results above.`
				: message
		}
	];

	try {
		const response = await anthropic.messages.create({
			model: 'claude-3-haiku-20240307',
			max_tokens: 1000,
			system: SYSTEM_PROMPT,
			messages
		});

		return response.content[0].type === 'text' ? response.content[0].text : 'I apologize, but I encountered an issue processing your request.';
	} catch (err) {
		console.error('Claude API error:', err);
		throw err;
	}
}

// Intelligent response function with comprehensive Mahjong knowledge
function getIntelligentResponse(message: string, history: any[]): string {
	const lowerMessage = message.toLowerCase();

	// Greeting responses
	if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('namaste') || lowerMessage.includes('hey')) {
		return "Namaste! 🙏 I'm Ms. Flower, India's premier Mahjong expert. I'm here to guide you through everything Mahjong - from basic rules to finding the most beautiful venues across India. What brings you to our wonderful world of Mahjong today?";
	}

	// Rules-related questions (expanded)
	if (lowerMessage.includes('rule') || lowerMessage.includes('how to play') || lowerMessage.includes('basic') || lowerMessage.includes('learn') || lowerMessage.includes('start') || lowerMessage.includes('beginner')) {
		return "Namaste! Let me guide you through Mahjong basics with love and patience. 🀄\n\nMahjong uses 144 tiles divided into:\n• **Suits**: Dots, Bamboo, Characters (1-9 each)\n• **Honors**: Winds (East, South, West, North) & Dragons (Red, Green, White)\n\nThe goal is to form a winning hand of 14 tiles using:\n• **Pungs**: 3 identical tiles\n• **Chows**: 3 consecutive suited tiles\n• **Kongs**: 4 identical tiles\n• **Eyes**: 1 pair\n\nShall I explain the beautiful flow of a game round?";
	}

	// Venue-related questions (enhanced)
	if (lowerMessage.includes('venue') || lowerMessage.includes('play') || lowerMessage.includes('where') || lowerMessage.includes('location') || lowerMessage.includes('table') || lowerMessage.includes('join')) {
		return "How wonderful that you want to join our community! 🏡 \n\nOur curated premium venues offer authentic experiences (₹900-1200/session):\n• Professional lacquered tables with perfect acoustics\n• Authentic bone/bamboo tile sets\n• Elegant settings with refreshments\n• Welcoming, experienced players\n\nWe have beautiful venues in Mumbai, Delhi, Bangalore, Chennai, Pune, and Kolkata. Each venue is personally vetted for ambiance and hospitality. Which city interests you? I'll recommend the perfect spots!";
	}

	// Strategy questions (detailed)
	if (lowerMessage.includes('strategy') || lowerMessage.includes('tip') || lowerMessage.includes('win') || lowerMessage.includes('better') || lowerMessage.includes('improve')) {
		return "Ah, strategy - the heart of Mahjong mastery! 🧠✨\n\n**Essential Tips:**\n• **Read the table**: Watch what others discard - it reveals their hands\n• **Stay flexible**: Keep multiple winning paths open early\n• **Defensive play**: Don't feed opponents dangerous tiles\n• **Timing**: Know when to push for victory vs. when to defend\n\n**Advanced wisdom**: 'The tile you need most is the one your opponent just discarded.' Practice patience and observation. Would you like specific advice for offensive rushes or defensive turtle strategies?";
	}

	// Community/etiquette (cultural)
	if (lowerMessage.includes('etiquette') || lowerMessage.includes('community') || lowerMessage.includes('home') || lowerMessage.includes('respect') || lowerMessage.includes('culture') || lowerMessage.includes('manner')) {
		return "Beautiful question! Our Mahjong community treasures respect and warmth. 🙏\n\n**Home venue etiquette:**\n• Bring small gifts (sweets, flowers, or quality tea)\n• Remove shoes if requested\n• Silence phones during play\n• Arrive punctually\n• Win and lose graciously\n\n**Cultural wisdom**: In Indian Mahjong culture, we say 'Mahjong is played with hands, but won with heart.' The joy comes from shared experience, not just victory. Our community welcomes newcomers like family!";
	}

	// Equipment/shopping (comprehensive)
	if (lowerMessage.includes('equipment') || lowerMessage.includes('tiles') || lowerMessage.includes('set') || lowerMessage.includes('buy') || lowerMessage.includes('purchase') || lowerMessage.includes('shop')) {
		return "Excellent choice investing in quality! A beautiful set enhances every game. 🀄\n\n**Recommended materials:**\n• **Premium**: Bone/bamboo (₹8,000-15,000) - authentic sound & feel\n• **Quality**: High-grade melamine (₹3,000-6,000) - durable & clear\n• **Starter**: Standard resin (₹1,500-3,000) - perfect for learning\n\n**What to look for**: Clear engravings, consistent weight, authentic Chinese characters, proper size (usually 30-32mm). Our verified marketplace partners offer quality sets with guarantees. Shall I recommend specific brands?";
	}

	// Tournament/competitive (exciting)
	if (lowerMessage.includes('tournament') || lowerMessage.includes('competition') || lowerMessage.includes('championship') || lowerMessage.includes('contest')) {
		return "How thrilling! Competitive Mahjong in India is growing beautifully! 🏆\n\n**Tournament Scene:**\n• Entry fees: ₹500-1,500 (prizes up to ₹50,000+)\n• Major cities host monthly competitions\n• **India Mahjong Championship** - our crown jewel event\n• International qualification opportunities\n\n**Preparation tips:**\n• Master Hong Kong rules (tournament standard)\n• Practice with time pressure (90 seconds/move)\n• Study riichi strategy\n• Join practice groups\n\nReady to test your skills? Our next qualifier is approaching!";
	}

	// Pricing/cost questions
	if (lowerMessage.includes('cost') || lowerMessage.includes('price') || lowerMessage.includes('fee') || lowerMessage.includes('expensive') || lowerMessage.includes('cheap')) {
		return "Let me break down the beautiful investment in Mahjong culture: 💰\n\n**Session costs:**\n• Premium venues: ₹900-1,200 (includes table, tiles, ambiance, refreshments)\n• Home games: Usually ₹200-500 (casual, friendly)\n• Tournament entry: ₹500-1,500\n\n**Equipment:**\n• Quality sets: ₹3,000-15,000 (one-time purchase)\n• Accessories: ₹500-2,000\n\n**Value**: Compared to other premium experiences, Mahjong offers incredible value - hours of engagement, mental stimulation, and wonderful community connections. It's an investment in joy and culture!";
	}

	// Timing/scheduling
	if (lowerMessage.includes('time') || lowerMessage.includes('when') || lowerMessage.includes('schedule') || lowerMessage.includes('open') || lowerMessage.includes('available')) {
		return "Perfect timing to join our community! 🕐\n\n**Venue hours typically:**\n• **Weekdays**: 2 PM - 10 PM (afternoon tea sessions popular)\n• **Weekends**: 10 AM - 11 PM (full day experiences)\n• **Special events**: Monthly tournaments, cultural celebrations\n\n**Best times for beginners:**\n• Weekday afternoons (more patient, teaching-oriented players)\n• Sunday mornings (family-friendly atmosphere)\n\nMost venues accept bookings 2-3 days in advance. Which day works best for your Mahjong debut?";
	}

	// Thank you responses
	if (lowerMessage.includes('thank') || lowerMessage.includes('thanks') || lowerMessage.includes('appreciate')) {
		return "You're absolutely welcome! 🌸 It brings me such joy to share the beauty of Mahjong with fellow enthusiasts. Remember, in our community, we say 'Every master was once a beginner, and every expert was once a student.' \n\nFeel free to ask me anything else - I'm always here to help you on your Mahjong journey!";
	}

	// Default intelligent response with more personality
	return "That's such an interesting question! 🤔 As India's Mahjong expert, I love exploring every aspect of this ancient art. \n\nI can help you with:\n🀄 **Rules & gameplay**\n🏡 **Premium venues** (₹900-1200/session)\n🧠 **Winning strategies**\n🙏 **Cultural etiquette**\n🛍️ **Quality equipment**\n🏆 **Tournament preparation**\n\nWhat aspect of Mahjong speaks to your heart? I'm here to guide you with warmth and expertise!";
}

/* 
// Uncomment this when you're ready to use the actual Claude API
// You'll need to install: npm install @anthropic-ai/sdk

const anthropic = new Anthropic({
	apiKey: CLAUDE_API_KEY,
});

async function getClaudeResponse(message: string, history: any[]): Promise<string> {
	const messages = [
		...history.map(msg => ({
			role: msg.sender === 'user' ? 'user' : 'assistant',
			content: msg.text
		})),
		{ role: 'user', content: message }
	];

	const response = await anthropic.messages.create({
		model: 'claude-3-haiku-20240307',
		max_tokens: 1000,
		system: SYSTEM_PROMPT,
		messages
	});

	return response.content[0].text;
}
*/