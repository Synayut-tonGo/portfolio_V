<script setup>
import react from '../assets/image/React.png'
import gsap_ from '../assets/image/gsap_.png'
import laravel from '../assets/image/Laravel.png'
import tailwind from '../assets/image/Tailwind_CSS.png'
import ts from '../assets/image/typescript.png'
import vue from '../assets/image/Vue_js.png'
import mysql from '../assets/image/MySQL.png'
import sqlserver from '../assets/image/Microsoft_SQL_Server.png'
import github from '../assets/image/GitHub.png'
import gitlab from '../assets/image/GitLab.png'
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const textUp = ref([])
const boxUp = ref([])

const setTextUp = (el) => {
  if (el) textUp.value.push(el)
}
const setBoxUp = (el) => {
  if (el) boxUp.value.push(el)
}

const frontend = [
  {
    imageSrc: react,
    name: 'React JS',
    rate: 'Medium'
  },
  {
    imageSrc: vue,
    name: 'Vue JS',
    rate: 'Medium'
  },
  {
    imageSrc: tailwind,
    name: 'Tailwind CSS',
    rate: 'Good'
  },
  {
    imageSrc: ts,
    name: 'Type Script',
    rate: 'Medium'
  },
  {
    imageSrc: gsap_,
    name: 'GSAP',
    rate: 'Medium'
  },
]

const backend = [
  {
    imageSrc: laravel,
    name: 'Laravel',
    rate: 'Medium'
  },
]

const database = [
  {
    imageSrc: mysql,
    name: 'MySQL',
    rate: 'Medium'
  },
  {
    imageSrc: sqlserver,
    name: 'Microsoft SQL Server',
    rate: 'Medium'
  },
]

const tools = [
  {
    imageSrc: github,
    name: 'GitHub',
    rate: 'Medium'
  },
  {
    imageSrc: gitlab,
    name: 'GitLab',
    rate: 'Medium'
  },
]
const arrow = ref(null)

onMounted(() => {
  gsap.from(textUp.value, {
    y: 20,
    duration: 0.8,
    ease: 'power3.out',
    opacity: 0,
    scrollTrigger: {
      trigger: textUp.value,
      start: 'top 85%',
      end: 'bottom 20%',
      scrub: true,
      toggleActions: 'play reverse play reverse'
    }
  })

  gsap.from(boxUp.value, {
    y: -20,
    duration: 0.8,
    ease: 'power3.out',
    opacity: 0,
    scrollTrigger: {
      trigger: boxUp.value,
      start: 'top 85%',
      scrub: true,
      end: 'bottom 0%',
      toggleActions: 'play reverse play reverse'
    }
  })

  gsap.fromTo(arrow.value, 
        {
            y: 20,
            opacity: 1,
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power3.out"
        }
  )

})
</script>

<template>
  <div id="skills" class="w-full h-auto dark:bg-gray-900 relative bg-white dark:text-white text-gray-900 px-4 py-10 md:px-8 md:py-16 lg:px-20 lg:py-20 flex flex-col justify-center items-center overflow-x-hidden">

    <div :ref="setTextUp" class="w-full max-w-6xl mx-auto px-4">
      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-4 md:mb-6 lg:mb-7 font-bold">
        Tech Stack
      </h1>
      <p class="text-base sm:text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Technologies I love working with, each mastered through real-world and personal projects
      </p>
    </div>

    <h1 :ref="setTextUp" class="text-center mb-6 md:mb-8 lg:mb-10 mt-10 md:mt-12 lg:mt-14 text-2xl md:text-3xl lg:text-4xl font-semibold max-w-6xl w-full px-4">
      Front - End
    </h1>
    <div class="w-full max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      <div v-for="frontTech in frontend" :key="frontTech.name"
        :ref="setBoxUp"
        class="flex justify-center items-center gap-3 md:gap-4 rounded-xl border border-gray-300 dark:border-gray-700 w-full h-[140px] sm:h-[160px] md:h-[200px] lg:h-[240px] dark:text-white text-white dark:bg-gray-800 bg-gray-900 flex-col p-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <img :src="frontTech.imageSrc"
          class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
        >
        <h3 class="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-center">
          {{ frontTech.name }}
        </h3>
        <p class="text-yellow-300 text-xs sm:text-sm md:text-base">
          {{ frontTech.rate }}
        </p>
      </div>
    </div>

    <h1 :ref="setTextUp" class="text-center mb-6 md:mb-8 lg:mb-10 mt-10 md:mt-12 lg:mt-14 text-2xl md:text-3xl lg:text-4xl font-semibold max-w-6xl w-full px-4">
      Back - End
    </h1>
    <div class="w-full max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      <div v-for="backTech in backend" :key="backTech.name"
        :ref="setBoxUp"
        class="flex justify-center items-center gap-3 md:gap-4 rounded-xl border border-gray-300 dark:border-gray-700 w-full h-[140px] sm:h-[160px] md:h-[200px] lg:h-[240px] dark:text-white text-white dark:bg-gray-800 bg-gray-900 flex-col p-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <img :src="backTech.imageSrc"
          class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
          :alt="backTech.name"
        >
        <h3 class="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-center">
          {{ backTech.name }}
        </h3>
        <p class="text-yellow-300 text-xs sm:text-sm md:text-base">
          {{ backTech.rate }}
        </p>
      </div>
    </div>

    <h1 :ref="setTextUp" class="text-center mb-6 md:mb-8 lg:mb-10 mt-10 md:mt-12 lg:mt-14 text-2xl md:text-3xl lg:text-4xl font-semibold max-w-6xl w-full px-4">
      Database
    </h1>
    <div class="w-full max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
      <div v-for="db in database" :key="db.name"
        :ref="setBoxUp"
        class="flex justify-center items-center gap-3 md:gap-4 rounded-xl border border-gray-300 dark:border-gray-700 w-full h-[140px] sm:h-[160px] md:h-[200px] lg:h-[240px] dark:text-white text-white dark:bg-gray-800 bg-gray-900 flex-col p-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <img :src="db.imageSrc"
          class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
          :alt="db.name"
        >
        <h3 class="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-center">
          {{ db.name }}
        </h3>
        <p class="text-yellow-300 text-xs sm:text-sm md:text-base">
          {{ db.rate }}
        </p>
      </div>
    </div>

    <h1 :ref="setTextUp" class="text-center mb-6 md:mb-8 lg:mb-10 mt-10 md:mt-12 lg:mt-14 text-2xl md:text-3xl lg:text-4xl font-semibold max-w-6xl w-full px-4">
      Tools
    </h1>
    <div class="w-full max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
      <div v-for="tool in tools" :key="tool.name"
        :ref="setBoxUp"
        class="flex justify-center items-center gap-3 md:gap-4 rounded-xl border border-gray-300 dark:border-gray-700 w-full h-[140px] sm:h-[160px] md:h-[200px] lg:h-[240px] dark:text-white text-white dark:bg-gray-800 bg-gray-900 flex-col p-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <img :src="tool.imageSrc"
          class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
          :alt="tool.name"
        >
        <h3 class="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-center">
          {{ tool.name }}
        </h3>
        <p class="text-yellow-300 text-xs sm:text-sm md:text-base">
          {{ tool.rate }}
        </p>
      </div>
    </div>
    <div class="flex justify-center mt-20">
      <i 
       ref="arrow"
       class="pi pi-arrow-down dark:text-white"></i>
     </div>
  </div>
</template>