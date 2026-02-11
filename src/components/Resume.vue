<script setup>
import gsap from 'gsap';
import { onMounted, ref } from 'vue';
import cv from '../assets/cv/Thach_Synayut_CV.pdf'

const experiences = [
    {
        role: "Intern Web developer",
        companyName: "Content First",
        workDate: "Aug 2025 - Jan 2026",
        location: "Phnom Penh",
        iconLocation: 'pi pi-map-marker',
        iconCalendar: 'pi pi-calendar',
        description: 'Contributing to Nuk Cafe Admin Portal, a cafe shop management system in Hong Kong.',
        responsibilities: ['Developing Frontend Feature Menu Session', 'Building responsive admin dashboard components', 'Implementing state management with Pinia'],
        technology: ['Vue.js 2', 'Tailwind CSS', 'Pinia'],
    },
    {
        role: "QA Tester",
        companyName: "Content First",
        location: "Phnom Penh",
        workDate: "Aug 2025 - Jan 2026",
        iconLocation: 'pi pi-map-marker',
        iconCalendar: 'pi pi-calendar',
        description: 'Quality assurance testing for Syncra project.',
        responsibilities: ['Testing Whole Project functionality', 'Writing and executing test cases', 'Identifying and reporting bugs'],
    },
    {
        role: "Intern Web developer",
        location: "Phnom Penh",
        companyName: "Content First",
        workDate: "Aug 2025 - Jan 2026",
        iconLocation: 'pi pi-map-marker',
        iconCalendar: 'pi pi-calendar',
        description: 'Contributing to Yumbite Cambodia food delivery platform.',
        linkOut:'https://www.yumbitescambodia.com/',            
        goIcon: "pi pi-external-link",
        responsibilities: ['Updating Yumbite UI and responsive website', 'Implementing new user interface components', 'Enhancing mobile responsiveness'],
        technology: ['Nuxt', 'Tailwind CSS', 'Vue.js'],
    },
    {
        role: "Video Editor",
        location: "Phnom Penh, Cambodia",
        companyName: "Content First",
        workDate: "Jul 2025 - Aug 2025",
        iconLocation: 'pi pi-map-marker',
        iconCalendar: 'pi pi-calendar',
        description: 'Design Poster , 2D animation , Camera Man',
        linkOut:'https://drive.google.com/drive/folders/1-LwY0FLI6pWiwZZfGWmSCRAyu2kQZ2Jq?dmr=1&ec=wgc-drive-hero-goto',            
        goIcon: "pi pi-external-link",
        responsibilities: ['Design Poster for Nuk Cafe and Job Connect Cambodia', 'Make 2D motion for Syncra logo ', 'Shooting Outdoor for Nuk Cafe and Video Editor'],
        technology: ['Photoshop', 'Illustrator', 'Premiere' , 'After Effect' , 'Basic Camera'],
    },
    {
        role: "Junior Graphic Design & Video Editor",
        location: "Phnom Penh, Cambodia",
        companyName: "CMED GROUP",
        workDate: "May 2024 - Jan 2025",
        iconLocation: 'pi pi-map-marker',
        iconCalendar: 'pi pi-calendar',
        linkOut:'https://drive.google.com/drive/folders/1-LwY0FLI6pWiwZZfGWmSCRAyu2kQZ2Jq?dmr=1&ec=wgc-drive-hero-goto',        
        description: 'Design Poster , 2D animation , Camera Man',
        goIcon: "pi pi-external-link",
        responsibilities: ['Design Poster for events and materails for print', 'Make 2D motion for events', 'Site Shooting'],
        technology: ['Photoshop', 'Illustrator', 'Premiere' , 'After Effect' , 'Basic Camera']
    },
]

const titleMain = ref(null)
const titleExperience = ref([])
const titleEducation = ref(null)
const titleResume = ref(null)
const boxExperience = ref([])
const boxEducation = ref(null)
const boxResume = ref(null)
const arrow = ref(null)
const experienceContainer = ref(null)
const bottomContainer = ref(null)

onMounted(() => {
    // GSAP animations for titles
    if (titleMain.value) {
        gsap.from(titleMain.value, {
            y: -20,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: titleMain.value,
                start: 'top 85%',
            }
        })
    }

    // Experience titles animation together
    if (titleExperience.value.length > 0) {
        gsap.from(titleExperience.value, {
            y: -20,
            opacity: 0,
            duration: 0.8,
            stagger: 0, // Set to 0 for simultaneous animation
            ease: 'power3.out',
            scrollTrigger: {
                trigger: titleExperience.value[0],
                start: 'top 85%',
            }
        })
    }

    if (titleEducation.value) {
        gsap.from(titleEducation.value, {
            y: -20,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: titleEducation.value,
                start: 'top 85%',
            }
        })
    }
    
    if (titleResume.value) {
        gsap.from(titleResume.value, {
            y: -20,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: titleResume.value,
                start: 'top 85%',
            }
        })
    }

    // Experience boxes animation together
    if (boxExperience.value.length > 0) {
        gsap.from(boxExperience.value, {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0, // Set to 0 for simultaneous animation
            ease: 'power3.out',
            scrollTrigger: {
                trigger: boxExperience.value[0],
                start: 'top 85%',
            }
        })
    }

    // Bottom section boxes animation together
    if (boxEducation.value && boxResume.value) {
        // Create a timeline for coordinated animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: boxEducation.value,
                start: 'top 85%',
            }
        });
        
        tl.from([boxEducation.value, boxResume.value], {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
        }, 0); // Start both at the same time
    }

    // Arrow animation
    if (arrow.value) {
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
        );
    }
})
</script>

<template>
    <div class="relative dark:text-white text-gray-900 bg-white dark:bg-gray-900 w-full min-h-screen flex flex-col justify-center items-center px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-12 lg:py-20 xl:px-20">
        <div class="mb-8 sm:mb-10 md:mb-12 lg:mb-16 w-full max-w-6xl" ref="titleMain">
            <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                Professional Experience
            </h1>
            <h3 class="text-sm sm:text-base md:text-lg lg:text-xl text-center text-gray-600 dark:text-gray-300 max-w-2xl lg:max-w-3xl mx-auto px-2">
                My journey through the tech industry, building innovative solutions
            </h3>
        </div>

        <div class="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12 lg:mb-16" ref="experienceContainer">
            <div 
                v-for="(ex, index) in experiences" 
                :key="index" 
                :ref="el => { if (el) boxExperience[index] = el }"
                class="w-full bg-gray-900 dark:bg-gray-800 rounded-xl sm:rounded-2xl border border-gray-700 p-3 sm:p-4 md:p-5 lg:p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
            >
                <div class="flex justify-between items-start mb-3 sm:mb-4">
                    <div class="flex-1 min-w-0">
                        <div :ref="el => { if (el && !titleExperience.includes(el)) titleExperience.push(el) }">
                            <h1 class="text-base sm:text-lg md:text-xl font-semibold text-white truncate">
                                {{ ex.role }}
                            </h1>
                            <h3 class="text-sm sm:text-base text-yellow-400 truncate">
                                {{ ex.companyName }}
                            </h3>
                        </div>
                    </div>
                    <a :href="ex.linkOut" class="text-gray-400 hover:text-white ml-2">
                        <i :class="ex.goIcon" class="text-sm sm:text-base"></i>
                    </a>
                </div>

                <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-300 mb-3 sm:mb-4">
                    <div class="flex items-center text-xs sm:text-sm">
                        <i :class="ex.iconCalendar" class="mr-1 sm:mr-2 text-xs"></i>
                        <span class="truncate">{{ ex.workDate }}</span>
                    </div>
                    <div class="flex items-center text-xs sm:text-sm">
                        <i :class="ex.iconLocation" class="mr-1 sm:mr-2 text-xs"></i>
                        <span class="truncate">{{ ex.location }}</span>
                    </div>
                </div>

                <div class="mb-3 sm:mb-4">
                    <p class="text-xs sm:text-sm md:text-base text-gray-300 line-clamp-2">
                        {{ ex.description }}
                    </p>
                </div>

                <div class="mb-3 sm:mb-4">
                    <strong class="text-xs sm:text-sm md:text-base text-white mb-1 block">Key Responsibilities:</strong>
                    <ul class="space-y-1">
                        <li 
                            v-for="(resp, respIndex) in ex.responsibilities" 
                            :key="respIndex"
                            class="text-xs sm:text-sm text-gray-300 flex items-start"
                        >
                            <span class="text-yellow-400 mr-2 mt-1">•</span>
                            <span class="flex-1">{{ resp }}</span>
                        </li>
                    </ul>
                </div>

                <div v-if="ex.technology" class="flex flex-wrap gap-1 sm:gap-2">
                    <span 
                        v-for="tech in ex.technology"
                        class="px-2 py-1 bg-gray-700 text-gray-200 text-xs rounded-md"
                    >
                        {{ tech }}
                    </span>
                </div>
            </div>
        </div>

        <div class="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12 lg:mb-16" ref="bottomContainer">
            <div class="w-full">
                <div class="mb-3 sm:mb-4 md:mb-5 text-center" ref="titleEducation">
                    <div class="flex items-center justify-center mb-1 sm:mb-2">
                        <i class="pi pi-graduation-cap text-xl sm:text-2xl md:text-3xl text-blue-500 mr-2"></i>
                        <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                            Education
                        </h2>
                    </div>
                    <h3 class="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300">
                        Academic background and qualifications
                    </h3>
                </div>
                
                <div class="bg-gray-800 dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-all duration-300" ref="boxEducation">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-5">
                        <div class="mb-3 sm:mb-0">
                            <h3 class="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-1">
                                Bachelor of Science in MIS
                            </h3>
                            <h4 class="text-sm sm:text-base md:text-lg text-gray-300">
                                Setec Institute
                            </h4>
                        </div>
                        <div class="flex items-center text-gray-300">
                            <i class="pi pi-calendar mr-2 text-sm"></i>
                            <span class="text-xs sm:text-sm md:text-base">2023 - Present</span>
                        </div>
                    </div>
                    
                    <p class="text-sm sm:text-base text-gray-300 mb-4 sm:mb-5">
                        Currently pursuing a Bachelor of Science in Management Information Systems (MIS) at SETEC Institute, Year 3, Semester 2.
                    </p>
                    
                    <div class="flex items-center justify-between">
                        <div class="text-gray-300">
                            <span class="text-xs sm:text-sm md:text-base">Year 3 Semester 2</span>
                        </div>
                        <div class="text-xs sm:text-sm text-blue-400">
                            <i class="pi pi-clock mr-1"></i>
                            <span>In Progress</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full">
                <div id="experience" class="mb-3 sm:mb-4 md:mb-5 text-center" ref="titleResume">
                    <div class="flex items-center justify-center mb-1 sm:mb-2">
                        <i class="pi pi-download text-2xl sm:text-2xl md:text-3xl text-green-500 mr-2"></i>
                        <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                            Get My Resume
                        </h2>
                    </div>
                    <h3 class="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300">
                        Download my professional resume
                    </h3>
                </div>
                
                <div class="bg-gray-800 dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-all duration-300" ref="boxResume">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-5">
                        <div class="mb-3 sm:mb-0">
                            <h3 class="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-1">
                                Professional Resume
                            </h3>
                            <h4 class="text-sm sm:text-base md:text-lg text-gray-300">
                                Complete career overview
                            </h4>
                        </div>
                        <div class="flex items-center text-gray-300">
                            <i class="pi pi-file-pdf mr-2 text-sm text-red-400"></i>
                            <span class="text-xs sm:text-sm md:text-base">PDF Format</span>
                        </div>
                    </div>
                    
                    <p class="text-sm sm:text-base text-gray-300 mb-4 sm:mb-5">
                        Comprehensive document detailing my professional experience, technical skills, educational background, and notable projects. Perfect for recruitment and partnership opportunities.
                    </p>
                    
                    <div class="flex flex-col sm:flex-row items-center justify-between gap-3">
                        <div class="text-gray-300">
                            <i class="pi pi-download mr-1"></i>
                            <span class="text-xs sm:text-sm">~ 2569KB</span>
                        </div>
                        <a 
                            :href="cv" 
                            download="Thach_Synayut_CV.pdf"
                            class="w-full sm:w-auto px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <i class="pi pi-download"></i>
                            <span class="text-sm sm:text-base">Download Resume</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col items-center justify-center mt-8 sm:mt-10 md:mt-12 lg:mt-16">
            <i 
                ref="arrow" 
                class="pi pi-arrow-down text-xl sm:text-2xl text-gray-600 dark:text-gray-300 animate-bounce"
            ></i>
        </div>
    </div>
</template>