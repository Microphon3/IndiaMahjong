# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is the India Mahjong Platform - a comprehensive SvelteKit application for the Indian Mahjong community. The platform connects players, instructors, venues, and provides learning resources, tournaments, and marketplace functionality. Built as a self-contained demo that works immediately without external database setup.

## Development Commands

### Core Development
- `npm run dev` - Start development server (default port 5175)
- `npm run dev -- --open` - Start dev server and open in browser
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Code Quality
- `npm run check` - TypeScript and Svelte type checking
- `npm run check:watch` - Type checking in watch mode  
- `npm run format` - Format code with Prettier
- `npm run lint` - Check code formatting with Prettier

### Testing
- `npm run test` - Run all tests (Playwright E2E)
- `npm run test:e2e` - Run Playwright tests specifically

## Architecture

### Tech Stack
- **SvelteKit** - Full-stack framework with SSR capabilities
- **Svelte 5** - Component framework with modern runes syntax (`$props()`)
- **TypeScript** - Type safety throughout the application
- **Tailwind CSS v4** - Utility-first CSS framework with emerald theme
- **Supabase** - Database and authentication (configured with fallbacks)
- **Lucide Icons** - Vector icon library
- **Vite** - Build tool and dev server
- **Playwright** - End-to-end testing framework

### Application Features
- **Authentication System** - Login/signup with mock implementation for demo
- **Team Management** - 10 team members across 4 departments (Experts, Community, Partnerships, Marketplace)
- **Learning Platform** - Mahjong classes and tutorials
- **Venue Finder** - Find tables and venues across India (Mumbai-focused)
- **Tournament System** - Championship and regional tournaments
- **Marketplace** - Mahjong tiles, tables, and accessories
- **Leaderboard** - Player rankings and achievements
- **User Dashboard** - Progress tracking and user management

### Project Structure
- `src/routes/` - Main application pages with file-based routing
  - `auth/` - Authentication pages (login, signup)
  - `dashboard/` - User dashboard functionality  
  - `team/` - Team member profiles and departments
  - `learn/` - Classes and educational content
  - `play/` - Venue finder and game tables
  - `events/`, `championship/`, `leaderboard/` - Tournament features
  - `marketplace/`, `community/` - Commerce and social features
- `src/lib/` - Shared components and utilities
  - `components/` - Navigation, Footer, and reusable UI components
  - `stores/` - Svelte stores for state management (auth.ts with mock functions)
  - `supabase.ts` - Database client with fallback configuration
  - `database.types.ts` - TypeScript types for database schema
- `schema.sql` - Complete PostgreSQL database schema for production deployment
- `proxy-server.js` - Express proxy for ngrok tunneling during development

### Database Architecture
The application includes a comprehensive PostgreSQL schema with:
- **User Profiles** - Extended user data with skill levels and locations
- **Classes** - Mahjong instruction with instructors and skill levels
- **Venues** - Physical locations with ratings, amenities, and geolocation
- **Products** - Marketplace items with categories and inventory
- **Tournaments** - Championship system with registration and prizes
- **Leaderboard** - Player rankings with tournament statistics

### Authentication System
- **Mock Authentication** - In-memory auth for immediate demo functionality
- **Supabase Integration** - Ready for production with full RLS policies
- **Fallback Configuration** - Works without environment variables

### Key Patterns
- **Self-Contained Demo** - Works immediately without external setup
- **Production Ready Schema** - Complete database design included
- **Emerald Theme** - Professional green branding throughout
- **Mumbai-Focused Content** - Local venues and cultural context
- **Mobile Responsive** - Clean design across all screen sizes
- **Svelte 5 Runes** - Modern reactive syntax (`$props()`, `$state()`)
- **Component Composition** - Reusable UI patterns with TypeScript

### Cultural Context
- **Multi-Style Mahjong** - Taiwanese, Hong Kong, Riichi, and Indian variants
- **Regional Focus** - Maharashtra and Mumbai-centric locations
- **Community Building** - Social features for player connections
- **Skill Development** - Structured learning from beginner to expert