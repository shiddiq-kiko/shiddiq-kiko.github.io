<script setup lang="ts">
import { Experience } from './types';

defineProps<{
  experiences: Experience[]
}>();
</script>

<template>
  <div class="space-y-8 transition-colors duration-300 print:space-y-2">
    <h2 class="text-xl font-bold text-gray-900 dark:text-white flex items-center print:mb-2 print:pb-1 print:border-b-2 print:border-gray-200">
      <span class="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mr-3 print:hidden">
         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
      </span>
      Experience
    </h2>
    
    <div class="relative border-l-2 border-indigo-100 dark:border-slate-700 ml-4 space-y-10 pl-8 pb-4 print:border-none print:ml-0 print:pl-0 print:space-y-4 print:pb-0">
      <div v-for="(exp, index) in experiences" :key="index" class="relative group">
        <!-- Dot -->
        <span class="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white dark:border-slate-800 bg-indigo-500 shadow-sm print:hidden"></span>

        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 print:mb-1 print:flex-row print:justify-between print:items-baseline">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors print:text-base print:text-gray-900">
                 <a v-if="exp.link" :href="exp.link" target="_blank" class="hover:underline print:no-underline print:text-gray-900">{{ exp.company }}</a>
                 <span v-else>{{ exp.company }}</span>
            </h3>
            <span class="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded print:bg-transparent print:p-0 print:text-gray-600 print:text-xs print:font-normal print:border-none">{{ exp.period }}</span>
        </div>
        
        <p class="text-indigo-600 dark:text-indigo-400 font-medium mb-2 print:text-sm print:text-gray-700 print:mb-1 print:font-bold">{{ exp.role }} <span v-if="exp.type" class="text-gray-400 dark:text-slate-500 font-normal text-sm print:text-gray-500"> — {{ exp.type }}</span></p>
        
        <p v-if="exp.description" class="text-gray-600 dark:text-slate-300 leading-relaxed text-sm print:text-justify print:text-gray-800">
            {{ exp.description }}
        </p>
      </div>
    </div>
  </div>
</template>