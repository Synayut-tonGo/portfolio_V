<script setup>
import { useNavigateStore } from '@/stores/navigation';
import { useThemeStore } from '@/stores/theme';
import gsap from 'gsap';
import { computed, nextTick, onMounted, ref, watch, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()
const headerRef = ref(null)
const menuHeaderRef = ref(null)
const themeStore = useThemeStore()
const navigationStore = useNavigateStore()

const isDarkMode = computed(() => themeStore.isDark)
const isMenuOpen = computed(() => navigationStore.isMenuOpen)
const activeSection = computed(() => navigationStore.activeSection)
const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'project', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Get in Touch' },
]

const toggleTheme = () => {
  themeStore.toggleTheme()
}

const toggleMenu = () => {
  navigationStore.toggleMenu()
}

// Simple scroll function using native smooth scroll
const scrollToSection = (sectionId) => {
  navigationStore.setActiveSection(sectionId)
  navigationStore.closeMenu()
  isMenuOpen.value = false

  // Find the element
  const element = document.getElementById(sectionId)
  if (!element) {
    console.log(`Element #${sectionId} not found`)
    return
  }

  // Calculate position with offset for header
  const headerHeight = headerRef.value?.offsetHeight || 80
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
  const offsetPosition = elementPosition - headerHeight

  // Use native smooth scroll
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  })
}

const scrollToTop = () => {
  navigationStore.setActiveSection('home')
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Handle scroll to update active section
const handleScroll = () => {
  const scrollPosition = window.scrollY + 100
  
  // Check each section
  for (const item of navItems) {
    const element = document.getElementById(item.id)
    if (element) {
      const { offsetTop, offsetHeight } = element
      
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        if (activeSection.value !== item.id) {
          navigationStore.setActiveSection(item.id)
        }
        break
      }
    }
  }
}

onMounted(() => {
  themeStore.initializeTheme()
  
  // Animate header with GSAP (this still works)
  gsap.from(headerRef.value, {
    y: -100,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  })

  // Add scroll listener
  window.addEventListener('scroll', handleScroll)
  
  // Check initial scroll position
  setTimeout(() => {
    handleScroll()
  }, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Watch for menu open state
watch(isMenuOpen, async (newVal) => {
  if (newVal) {
    await nextTick()
    gsap.from(menuHeaderRef.value, {
      y: -20,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    })
  }
})
</script>

<template>
  <header ref="headerRef"
    class="fixed left-0 right-0 top-0 z-50 bg-white/80 dark:bg-gray-900 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 dark:text-white border-b border-gray-200/50 dark:border-gray-700/50">
    <nav class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div class="flex items-center justify-around">
        <!-- Logo -->
        <RouterLink to="/" @click="scrollToTop" class="flex items-center gap-2 sm:gap-3">
          <div
            class="size-8 sm:size-9 md:size-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-sm sm:text-base md:text-lg">TS</span>
          </div>
          <span class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">Thach Synayut</span>
        </RouterLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex z-49 items-center gap-6 xl:gap-8">
          <a 
            v-for="item in navItems" 
            :key="item.id" 
            href="#" 
            @click.prevent="scrollToSection(item.id)"
            class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium relative py-2"
            :class="{ 'text-blue-600 dark:text-blue-400 font-semibold': activeSection === item.id }">
            {{ item.label }}
            <!-- Active indicator -->
            <span v-if="activeSection === item.id" 
                  class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
          </a>

          <!-- Theme Toggle -->
          <button @click="toggleTheme"
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme">
            <svg v-if="isDarkMode" class="size-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clip-rule="evenodd"></path>
            </svg>
            <svg v-else class="size-5 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex items-center gap-3 lg:hidden">
          <!-- Theme Toggle - Mobile -->
          <button @click="toggleTheme"
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme">
            <svg v-if="isDarkMode" class="size-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clip-rule="evenodd"></path>
            </svg>
            <svg v-else class="size-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
          </button>

          <!-- Hamburger Menu Button -->
          <button @click="toggleMenu"
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle menu">
            <svg v-if="!isMenuOpen" class="size-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg v-else class="size-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  </header>

  <!-- Mobile Menu Dropdown -->
  <div v-if="isMenuOpen" ref="menuHeaderRef"
    class="lg:hidden fixed top-16 left-0 right-0 z-49 bg-white dark:bg-gray-800 shadow-lg border-t border-gray-200 dark:border-gray-700">
    <div class="container mx-auto px-4 py-3">
      <div class="space-y-1">
        <a 
          v-for="item in navItems" 
          :key="item.id" 
          href="#"
          @click.prevent="scrollToSection(item.id)"
          class="block py-3 px-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-all duration-200"
          :class="{ 'text-blue-600 dark:text-blue-400 bg-gray-50 dark:bg-gray-700/50': activeSection === item.id }">
          {{ item.label }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Optional: Add some transition for the active underline */
span[class*="h-0.5"] {
  transition: all 0.3s ease;
}
</style>