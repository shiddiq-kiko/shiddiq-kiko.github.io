<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { Profile } from '../modules/identity/types';

defineProps<{
  profile: Profile
}>();

const scrollY = ref(0);

const updateScroll = () => {
  scrollY.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener('scroll', updateScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll);
});

// Parallax Effects
const opacity = computed(() => {
  // Fade out as we scroll down the first 500px
  const val = 1 - scrollY.value / 500;
  return val < 0 ? 0 : val;
});

const transform = computed(() => {
  // Move down at half speed
  return `translateY(${scrollY.value * 0.5}px)`;
});

const scrollToContent = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
};
</script>

<template>
  <div class="h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-slate-900 relative overflow-hidden fixed-bg transition-colors duration-300">
    <!-- Background Decoration (Optional) -->
    <div class="absolute inset-0 bg-indigo-50/30 dark:bg-indigo-900/10 z-0"></div>

    <div 
      class="z-10 text-center px-4 max-w-2xl mx-auto will-change-transform"
      :style="{ opacity: opacity, transform: transform }"
    >
        <!-- Large Avatar -->
        <div class="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-8 animate-fade-in-down">
            <img 
            v-if="profile.avatarUrl" 
            :src="profile.avatarUrl" 
            alt="Profile Photo" 
            class="w-full h-full object-cover rounded-full border-8 border-white dark:border-slate-800 shadow-2xl"
            />
             <div v-else class="w-full h-full bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center text-6xl text-indigo-600 dark:text-indigo-400 font-bold border-8 border-white dark:border-slate-800 shadow-2xl">
                {{ profile.nickname[0] }}
            </div>
        </div>

        <!-- Old About Me / Intro -->
        <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            Hi, I'm <span class="text-indigo-600 dark:text-indigo-400">{{ profile.nickname }}</span>.
        </h1>
        <p class="text-xl sm:text-2xl text-gray-600 dark:text-slate-300 font-light leading-relaxed">
            "{{ profile.introduction }}"
        </p>
    </div>

    <!-- Scroll Indicator -->
    <div 
      class="absolute bottom-10 z-10 animate-bounce cursor-pointer transition-opacity duration-300" 
      @click="scrollToContent"
      :style="{ opacity: opacity }"
    >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-indigo-400 dark:text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in-down {
    animation: fadeInDown 1s ease-out;
}
@keyframes fadeInDown {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>