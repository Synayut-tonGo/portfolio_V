
<script setup>
import { computed } from 'vue';
import { useThemeStore } from '@/stores/theme';

const themeStore = useThemeStore();
const isDarkMode = computed(() => themeStore.isDark);

const toggleTheme = () => {
  themeStore.toggleTheme();
};

// Scroll functions (same as in your header)
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>



<template>
  <footer class="relative bg-gray-900 text-white w-full border-t border-gray-800">
    <div class="container mx-auto px-4 py-8 sm:py-12">
      <!-- Top Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <!-- Left: Brand & Description -->
        <div class="space-y-4">
          <div class="flex items-center gap-3 mb-4">
            <div class="size-10 sm:size-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-lg sm:text-xl">TS</span>
            </div>
            <div>
              <h2 class="text-2xl sm:text-3xl font-bold">Thach Synayut</h2>
              <p class="text-gray-400 text-sm sm:text-base">Frontend Developer & Designer</p>
            </div>
          </div>
          
          <p class="text-gray-300 text-sm sm:text-base max-w-lg">
            A clean, modern portfolio built with Vue.js, Tailwind CSS, and GSAP. 
            Focused on creating beautiful, performant web experiences.
          </p>
          
          <!-- Social Links -->
          <div class="flex gap-4 pt-4">
            <a href="https://github.com/Synayut-tonGo" target="_blank" 
               class="text-gray-400 hover:text-white transition-colors duration-300">
              <i class="pi pi-github text-xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/thach-synayut-826085278/" target="_blank" 
               class="text-gray-400 hover:text-blue-500 transition-colors duration-300">
              <i class="pi pi-linkedin text-xl"></i>
            </a>
            <a href="https://www.facebook.com/goo.joe.75" target="_blank" 
               class="text-gray-400 hover:text-blue-600 transition-colors duration-300">
              <i class="pi pi-facebook text-xl"></i>
            </a>
            <a href="mailto:tsynayut2004@gmail.com" 
               class="text-gray-400 hover:text-red-400 transition-colors duration-300">
              <i class="pi pi-envelope text-xl"></i>
            </a>
          </div>
        </div>

        <!-- Right: Navigation & Contact -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <!-- Navigation Links -->
          <div>
            <h3 class="text-lg font-semibold mb-4 text-gray-200">Navigation</h3>
            <ul class="space-y-3">
              <li>
                <a href="#home" @click.prevent="scrollToSection('home')" 
                   class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <span class="w-1 h-1 bg-gray-500 rounded-full"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" @click.prevent="scrollToSection('about')" 
                   class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <span class="w-1 h-1 bg-gray-500 rounded-full"></span>
                  About
                </a>
              </li>
              <li>
                <a href="#project" @click.prevent="scrollToSection('project')" 
                   class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <span class="w-1 h-1 bg-gray-500 rounded-full"></span>
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" @click.prevent="scrollToSection('skills')" 
                   class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <span class="w-1 h-1 bg-gray-500 rounded-full"></span>
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" @click.prevent="scrollToSection('contact')" 
                   class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <span class="w-1 h-1 bg-gray-500 rounded-full"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="text-lg font-semibold mb-4 text-gray-200">Contact</h3>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <i class="pi pi-envelope text-gray-400 mt-1"></i>
                <div>
                  <p class="text-gray-300 font-medium">Email</p>
                  <a href="mailto:tsynayut2004@gmail.com" 
                     class="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                    tsynayut2004@gmail.com
                  </a>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <i class="pi pi-phone text-gray-400 mt-1"></i>
                <div>
                  <p class="text-gray-300 font-medium">Phone</p>
                  <p class="text-gray-400 text-sm">+855 (0) 81 362 673</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <i class="pi pi-map-marker text-gray-400 mt-1"></i>
                <div>
                  <p class="text-gray-300 font-medium">Location</p>
                  <p class="text-gray-400 text-sm">Phnom Penh, Cambodia</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-800 my-8"></div>

      <!-- Bottom Section -->
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div class="text-center sm:text-left">
          <p class="text-gray-400 text-sm">
            © 2026 <span class="text-white font-medium">Thach Synayut</span>. All rights reserved.
          </p>
          <p class="text-gray-500 text-xs mt-1">
            Made with <span class="text-red-400">❤</span> using Vue.js & Tailwind CSS
          </p>
        </div>
        
        <div class="flex items-center gap-6">
          <!-- Theme Toggle -->
          <button @click="toggleTheme" 
                  class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
            <i :class="isDarkMode ? 'pi pi-sun' : 'pi pi-moon'" class="text-lg"></i>
            <span class="text-sm">{{ isDarkMode ? 'Light' : 'Dark' }} Mode</span>
          </button>
          
          <!-- Back to Top -->
          <button @click="scrollToTop" 
                  class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
            <i class="pi pi-arrow-up text-lg"></i>
            <span class="text-sm">Back to Top</span>
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>


<style scoped>
footer a:hover {
  transform: translateX(4px);
  transition: transform 0.3s ease;
}

footer li {
  transition: all 0.3s ease;
}
</style>