<script setup lang="ts">
import { Profile } from './types';

defineProps<{
  profile: Profile
}>();
</script>

<template>
  <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden text-center p-8">
      <!-- Avatar -->
      <div class="relative w-40 h-40 mx-auto mb-6">
        <img 
          v-if="profile.avatarUrl" 
          :src="profile.avatarUrl" 
          alt="Profile Photo" 
          class="w-full h-full object-cover rounded-full border-4 border-indigo-50 shadow-md"
        />
        <div v-else class="w-full h-full bg-indigo-100 rounded-full flex items-center justify-center text-4xl text-indigo-600 font-bold">
            {{ profile.nickname[0] }}
        </div>
      </div>
      
      <!-- Identity -->
      <h1 class="text-3xl font-bold text-gray-900 mb-2">{{ profile.name }}</h1>
      <p class="text-lg text-indigo-600 font-medium mb-6">{{ profile.role }}</p>

      <!-- Contact Info -->
      <div class="space-y-3 text-left mb-2">
        <div class="flex items-center space-x-3 text-gray-600">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
           <span class="text-sm truncate">{{ profile.email }}</span>
        </div>
        <div class="flex items-center space-x-3 text-gray-600">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
           <span class="text-sm">{{ profile.phone }}</span>
        </div>
        <div class="flex items-center space-x-3 text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            </svg>
           <span class="text-sm">{{ profile.address }}</span>
        </div>
      </div>
  </div>
</template>