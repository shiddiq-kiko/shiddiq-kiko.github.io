<script setup lang="ts">
defineProps<{
  expertise: string[];
  techStack: string[];
  languages: string[];
}>();
</script>

<template>
  <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-8 transition-colors duration-300 print:p-0 print:border-none print:shadow-none">
    <h2 class="text-xl font-bold text-gray-900 dark:text-white flex items-center mb-6 print:mb-2 print:pb-1 print:border-b-2 print:border-gray-200">
      <span class="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mr-3 print:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
        </svg>
      </span>
      Tech Stack & Expertise
    </h2>
    
    <div class="space-y-6 print:space-y-4">
      <!-- Tech Stack -->
      <div>
        <h3 class="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3 print:mb-1 print:text-xs">Tech Stack</h3>
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="skill in techStack" 
            :key="skill" 
            class="px-3 py-1 bg-slate-50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 font-medium text-xs rounded-lg border border-slate-200 dark:border-slate-600 hover:border-indigo-300 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300 cursor-default print:bg-transparent print:border-gray-300 print:text-gray-800 print:px-2 print:py-0.5"
          >
            {{ skill }}
          </span>
        </div>
      </div>

      <!-- Professional Expertise -->
      <div>
        <h3 class="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3 print:mb-1 print:text-xs">Professional Expertise</h3>
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="item in expertise" 
            :key="item" 
            class="px-3 py-1 bg-indigo-50/50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 font-medium text-xs rounded-lg border border-indigo-100 dark:border-indigo-800 hover:border-indigo-400 transition-all duration-300 cursor-default print:bg-transparent print:border-gray-300 print:text-gray-800 print:px-2 print:py-0.5"
          >
            {{ item }}
          </span>
        </div>
      </div>

      <!-- Languages -->
      <div>
        <h3 class="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3 print:mb-1 print:text-xs">Languages</h3>
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="lang in languages" 
            :key="lang" 
            class="px-3 py-1 bg-slate-50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 font-medium text-xs rounded-lg border border-slate-200 dark:border-slate-600 print:bg-transparent print:border-none print:text-gray-800 print:px-0 print:py-0 print:mr-4"
          >
            {{ lang }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>