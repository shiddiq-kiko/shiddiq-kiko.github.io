<script setup lang="ts">
defineProps<{
  skills: string[]
}>();
</script>

<template>
  <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-8 transition-colors duration-300">
    <h2 class="text-xl font-bold text-gray-900 dark:text-white flex items-center mb-6">
      <span class="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
        </svg>
      </span>
      Field of Expertise
    </h2>
    
    <div class="flex flex-wrap gap-3">
      <span 
        v-for="skill in skills" 
        :key="skill" 
        class="px-4 py-2 bg-slate-50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 font-medium text-sm rounded-lg border border-slate-200 dark:border-slate-600 hover:border-indigo-300 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300 cursor-default"
      >
        {{ skill }}
      </span>
    </div>
  </div>
</template>