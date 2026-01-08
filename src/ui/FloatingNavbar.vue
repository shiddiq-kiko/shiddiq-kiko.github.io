<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useTheme } from '../composables/useTheme';

const { isDark, toggleTheme } = useTheme();
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-[100] pointer-events-none">
    <!-- Fluid background transition - Only visible on small screens when scrolled -->
    <div 
      class="absolute inset-0 transition-all duration-700 ease-in-out -z-10 md:hidden"
      :class="[
        isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full',
        'bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-b border-gray-100 dark:border-slate-800 shadow-sm'
      ]"
    ></div>
    
    <div class="max-w-7xl mx-auto px-6 py-4 md:py-8 flex justify-between items-center pointer-events-auto">
      <!-- Title: Only shows on mobile when scrolled -->
      <span 
        class="font-bold text-xl tracking-tight transition-all duration-700 md:hidden"
        :class="[
          isScrolled ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4',
          isDark ? 'text-white' : 'text-gray-900'
        ]"
      >
      </span>

      <!-- Spacer for desktop -->
      <div class="hidden md:block flex-grow"></div>

      <!-- Theme Toggle Button -->
      <button 
        @click="toggleTheme" 
        class="p-3 rounded-full transition-all duration-500 focus:outline-none flex items-center justify-center shadow-lg"
        :class="[
          isScrolled 
            ? 'bg-white-600 text-white shadow-indigo-200 dark:shadow-none' 
            : 'bg-white/80 dark:bg-slate-800/80 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700 backdrop-blur-sm'
        ]"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
      >
        <div class="relative w-6 h-6 flex items-center justify-center">
          <svg 
            v-if="!isDark"
            xmlns="http://www.w3.org/2000/svg" 
            class="h-6 w-6 text-amber-500"
            fill="currentColor" viewBox="0 0 20 20"
          >
            <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
          </svg>
          <svg 
            v-else
            xmlns="http://www.w3.org/2000/svg" 
            class="h-5 w-5 text-indigo-400"
            fill="currentColor" viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </div>
      </button>
    </div>
  </nav>
</template>
