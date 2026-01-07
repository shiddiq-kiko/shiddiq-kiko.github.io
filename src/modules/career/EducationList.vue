<script setup lang="ts">
import { Education } from './types';

defineProps<{
  educations: Education[]
}>();
</script>

<template>
  <div class="space-y-8">
    <h2 class="text-xl font-bold text-gray-900 flex items-center">
      <span class="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
      </span>
      Education
    </h2>
    
    <div class="grid grid-cols-1 gap-6">
      <div v-for="(edu, index) in educations" :key="index" class="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-indigo-100 transition-colors">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
            <h3 class="text-lg font-bold text-gray-900">
                <a v-if="edu.link" :href="edu.link" target="_blank" class="hover:text-indigo-600 transition-colors">{{ edu.institution }}</a>
                <span v-else>{{ edu.institution }}</span>
            </h3>
            <span class="text-xs font-semibold uppercase tracking-wider text-gray-500 bg-white border border-gray-200 px-2 py-1 rounded">{{ edu.period }}</span>
        </div>
        <p class="text-indigo-600 font-medium">{{ edu.degree }}</p>
      </div>
    </div>
  </div>
</template>