<script setup lang="ts">
import { Education } from './types';

defineProps<{
  educations: Education[]
}>();
</script>

<template>
  <div class="space-y-8 transition-colors duration-300 print:space-y-2">
    <h2 class="text-xl font-bold text-gray-900 dark:text-white flex items-center print:mb-2 print:pb-1 print:border-b-2 print:border-gray-200">
      <span class="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mr-3 print:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
      </span>
      Education
    </h2>
    
    <div class="grid grid-cols-1 gap-6 print:block print:space-y-3 print:gap-0">
      <div v-for="(edu, index) in educations" :key="index" class="bg-gray-50 dark:bg-slate-700/30 rounded-xl p-6 border border-gray-100 dark:border-slate-700 hover:border-indigo-100 dark:hover:border-indigo-500 transition-colors print:bg-transparent print:p-0 print:border-none print:rounded-none">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 print:mb-0 print:flex-row print:justify-between print:items-center">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white print:text-base print:text-gray-900">
                <a v-if="edu.link" :href="edu.link" target="_blank" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors print:no-underline print:text-gray-900">{{ edu.institution }}</a>
                <span v-else>{{ edu.institution }}</span>
            </h3>
            <span class="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 px-2 py-1 rounded print:bg-transparent print:border-none print:p-0 print:text-gray-600 print:text-xs print:font-normal">{{ edu.period }}</span>
        </div>
        <p class="text-indigo-600 dark:text-indigo-400 font-medium print:text-sm print:text-gray-700 print:font-bold">{{ edu.degree }}</p>
      </div>
    </div>
  </div>
</template>