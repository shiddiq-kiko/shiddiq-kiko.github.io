<script setup lang="ts">
import { Experience } from './types';

defineProps<{
  experiences: Experience[]
}>();
</script>

<template>
  <div class="space-y-8">
    <h2 class="text-xl font-bold text-gray-900 flex items-center">
      <span class="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3">
         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
      </span>
      Experience
    </h2>
    
    <div class="relative border-l-2 border-indigo-100 ml-4 space-y-10 pl-8 pb-4">
      <div v-for="(exp, index) in experiences" :key="index" class="relative group">
        <!-- Dot -->
        <span class="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-indigo-500 shadow-sm"></span>

        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
            <h3 class="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                 <a v-if="exp.link" :href="exp.link" target="_blank" class="hover:underline">{{ exp.company }}</a>
                 <span v-else>{{ exp.company }}</span>
            </h3>
            <span class="text-xs font-semibold uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-1 rounded">{{ exp.period }}</span>
        </div>
        
        <p class="text-indigo-600 font-medium mb-2">{{ exp.role }} <span v-if="exp.type" class="text-gray-400 font-normal text-sm"> — {{ exp.type }}</span></p>
        
        <p v-if="exp.description" class="text-gray-600 leading-relaxed text-sm">
            {{ exp.description }}
        </p>
      </div>
    </div>
  </div>
</template>