<script setup lang="ts">
import { onMounted } from 'vue';
import HeroSection from './ui/HeroSection.vue';
import ProfileCard from './modules/identity/ProfileCard.vue';
import ExperienceList from './modules/career/ExperienceList.vue';
import EducationList from './modules/career/EducationList.vue';
import ExpertiseList from './modules/career/ExpertiseList.vue';
import ProjectList from './modules/career/ProjectList.vue';

import { ProfileRepository } from './modules/identity/ProfileRepository';
import { CareerRepository } from './modules/career/CareerRepository';

const profileRepo = new ProfileRepository();
const careerRepo = new CareerRepository();

const profile = profileRepo.getProfile();
const experiences = careerRepo.getExperience();
const educations = careerRepo.getEducation();
const projects = careerRepo.getProjects();

// Scroll Animation Logic
const observeElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-enter');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '50px'
  });

  document.querySelectorAll('.scroll-hidden').forEach((el) => {
    observer.observe(el);
  });
};

onMounted(() => {
  observeElements();
});
</script>

<template>
  <div class="font-sans text-gray-900 bg-slate-50">
    
    <!-- Hero Section (Screen 1) -->
    <HeroSection :profile="profile" />

    <!-- Resume Content (Screen 2+) -->
    <main class="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Left Sidebar: Profile (Sticky on Desktop) -->
        <aside class="lg:col-span-4 lg:sticky lg:top-10 space-y-6 scroll-hidden opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <ProfileCard :profile="profile" />
        </aside>

        <!-- Right Column: Main Content -->
        <div class="lg:col-span-8 space-y-8">
            
            <!-- Professional Summary -->
            <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 scroll-hidden opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100">
                 <h2 class="text-xl font-bold text-gray-900 flex items-center mb-4">
                  <span class="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  About Me
                </h2>
                <p class="text-gray-600 leading-relaxed text-justify">
                    {{ profile.overview }}
                </p>
            </section>

             <!-- Expertise -->
            <section class="scroll-hidden opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200">
               <ExpertiseList :skills="profile.expertise" />
            </section>

            <!-- Experience -->
            <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 scroll-hidden opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300">
               <ExperienceList :experiences="experiences" />
            </section>

            <!-- Personal Projects -->
            <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 scroll-hidden opacity-0 translate-y-8 transition-all duration-700 ease-out delay-400">
               <ProjectList :projects="projects" />
            </section>

             <!-- Education -->
            <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 scroll-hidden opacity-0 translate-y-8 transition-all duration-700 ease-out delay-500">
               <EducationList :educations="educations" />
            </section>
            
             <footer class="text-center pt-8 text-gray-400 text-sm scroll-hidden opacity-0 transition-opacity duration-700">
                <p>Copyright &copy; {{ profile.name }} - {{ new Date().getFullYear() }}</p>
            </footer>

        </div>

      </div>
    </main>
  </div>
</template>

<style scoped>
/* Utility class triggered by IntersectionObserver */
.animate-enter {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
</style>