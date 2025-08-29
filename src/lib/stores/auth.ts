import { writable } from 'svelte/store';

export interface User {
  id: string;
  email: string;
  name: string;
}

// Simple in-memory auth store (no database needed)
export const user = writable<User | null>(null);
export const isLoggedIn = writable(false);

// Mock authentication functions
export const authActions = {
  signup: async (email: string, password: string, name: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser: User = {
      id: Math.random().toString(36),
      email,
      name
    };
    
    user.set(mockUser);
    isLoggedIn.set(true);
    
    return { success: true, user: mockUser };
  },

  signin: async (email: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser: User = {
      id: Math.random().toString(36),
      email,
      name: email.split('@')[0]
    };
    
    user.set(mockUser);
    isLoggedIn.set(true);
    
    return { success: true, user: mockUser };
  },

  signout: () => {
    user.set(null);
    isLoggedIn.set(false);
  }
};