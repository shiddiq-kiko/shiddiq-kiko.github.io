<script setup lang="ts">
import { Profile } from './types';

defineProps<{
  profile: Profile
}>();
</script>

<template>
  <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 overflow-hidden text-center p-8 transition-colors duration-300">
      <!-- Avatar -->
      <div class="relative w-40 h-40 mx-auto mb-6">
        <img 
          v-if="profile.avatarUrl" 
          :src="profile.avatarUrl" 
          alt="Profile Photo" 
          class="w-full h-full object-cover rounded-full border-4 border-indigo-50 dark:border-slate-700 shadow-md"
        />
        <div v-else class="w-full h-full bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center text-4xl text-indigo-600 dark:text-indigo-400 font-bold">
            {{ profile.nickname[0] }}
        </div>
      </div>
      
      <!-- Identity -->
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">{{ profile.name }}</h1>
      <p class="text-lg text-indigo-600 dark:text-indigo-400 font-medium mb-6">{{ profile.role }}</p>

      <!-- Contact Info -->
      <div class="space-y-3 text-left mb-2">
        <div class="flex items-center space-x-3 text-gray-600 dark:text-slate-300">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 dark:text-slate-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
           <span class="text-sm truncate">{{ profile.email }}</span>
        </div>
        <div class="flex items-center space-x-3 text-gray-600 dark:text-slate-300">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 dark:text-slate-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
           <span class="text-sm">{{ profile.phone }}</span>
        </div>
        <div class="flex items-center space-x-3 text-gray-600 dark:text-slate-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 dark:text-slate-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            </svg>
           <span class="text-sm">{{ profile.address }}</span>
        </div>
        <div class="flex items-center space-x-3 text-gray-600 dark:text-slate-300">
           <a 
             :href="profile.linkedin" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
           >
             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 dark:text-slate-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.25 12.268h-3v-5.604c0-1.337-.026-3.059-1.865-3.059-1.865 0-2.151 1.459-2.151 2.965v5.698h-3v-11h2.881v1.507h.041c.401-.761 1.381-1.562 2.841-1.562 3.039 0 3.6 2.001 3.6 4.601v6.454z"/>
            </svg>
           </a>
           <a 
             :href="profile.github" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
           >
             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 dark:text-slate-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
             </svg>
           </a> 
        </div>
      </div>
  </div>
</template>