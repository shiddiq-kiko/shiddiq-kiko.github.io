<script setup lang="ts">
import { Project } from './types';

defineProps<{
  projects: Project[]
}>();
</script>

<template>
  <div class="space-y-8 transition-colors duration-300 print:space-y-2">
    <h2 class="text-xl font-bold text-gray-900 dark:text-white flex items-center print:mb-2 print:pb-1 print:border-b-2 print:border-gray-200">
      <span class="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mr-3 print:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </span>
      Personal Projects
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-2 print:gap-4 print:gap-y-6">
      <template v-for="(project, index) in projects" :key="index">
        <div v-if="project.show" class="bg-gray-50 dark:bg-slate-700/30 rounded-xl p-6 border border-gray-100 dark:border-slate-700 flex flex-col hover:shadow-md transition-all print:bg-transparent print:p-0 print:border-none print:shadow-none print:block print:mb-0">
          <div class="mb-4 print:mb-1">
               <div class="flex justify-between items-start print:justify-between print:items-baseline">
                   <h3 class="text-lg font-bold text-gray-900 dark:text-white print:text-base print:text-gray-900">{{ project.name }}</h3>
                   <span class="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-slate-500 border border-gray-200 dark:border-slate-600 px-2 py-1 rounded-full whitespace-nowrap print:border-none print:p-0 print:text-gray-600 print:text-xs print:font-normal">{{ project.period }}</span>
               </div>
               
               <!-- Tech Stack -->
               <div class="flex flex-wrap gap-2 mt-2 print:mt-1 print:gap-1">
                   <span v-for="tech in project.techStack" :key="tech" class="text-xs text-indigo-600 dark:text-indigo-400 font-medium bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded print:bg-transparent print:text-gray-600 print:p-0 print:text-[10px] print:italic after:content-[','] last:after:content-none print:mr-1">
                       {{ tech }}
                   </span>
               </div>
          </div>

          <p class="text-gray-600 dark:text-slate-300 text-sm mb-6 flex-grow print:text-xs print:mb-1 print:text-gray-800 print:leading-tight">{{ project.description }}</p>

          <div class="flex flex-col space-y-2 mt-auto print:hidden">
              <!-- Download Links -->
              <template v-if="project.isDownloadable && project.paths">
                  <a 
                      v-for="(path, pIndex) in project.paths" 
                      :key="'path-' + pIndex" 
                      :href="path.path" 
                      download
                      class="flex items-center text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                  >
                      <img v-if="path.icon" :src="path.icon" class="h-4 w-4 mr-2" alt="" />
                      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      {{ path.label }}
                  </a>
              </template>

              <!-- External Links -->
              <a 
                  v-for="(link, lIndex) in project.links" 
                  :key="lIndex" 
                  :href="link.url" 
                  target="_blank"
                  class="flex items-center text-sm font-semibold text-gray-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                  <svg v-if="link.label.toLowerCase().includes('github')" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {{ link.label }}
              </a>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>