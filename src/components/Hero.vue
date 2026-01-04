<script setup>
import { useNavigateStore } from '@/stores/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted, ref } from 'vue';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const name = ref(null);
const fsd = ref(null);
const des = ref(null);
const btnGiT = ref(null);
const btnVmW = ref(null);
const arrow = ref(null);

const navigationAction = useNavigateStore();

const scrollToContact = () => {
    navigationAction.setActiveSection('contact');
    const element = document.getElementById('contact');
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
};

const scrollToProject = () => {
    navigationAction.setActiveSection('project');
    const element = document.getElementById('project');
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
};

onMounted(() => {
    gsap.from(name.value, {
        y: -80,
        opacity: 0,
        duration: 1.8,
        ease: "power3.out"
    });
    
    gsap.from(fsd.value, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    });
    
    gsap.from(des.value, {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
    });
    
    gsap.from(btnGiT.value, {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out"
    });
    
    gsap.from(btnVmW.value, {
        y: 50,
        opacity: 0,
        duration: 2,
        ease: "power3.out"
    });

    // Arrow animation (continuous loop)
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
});
</script>

<template>
    <div id="home" class="relative z-48 top-0 pt-40 pb-50 bottom-0 dark:bg-gray-900 bg-white w-full h-auto">
        <p
        ref="name"
        class="relative text-xl pt-10 dark:text-white text-center mt-19 mb-2">Thach Synayut</p>
        <h1 
        ref="fsd"
        class="text-center text-3xl lg:text-7xl md:text-5xl sm:text-4xl font-semibold dark:text-white">Full Stack Developer</h1>
        <p 
        ref="des"
        class="m-auto md:w-[500px] sm:w-[400px] mt-6 w-[300px] text-center text-xl dark:text-white max-[640px]:w-[280px]">Creating beautiful, responsive web applications with modern technologies and clean code practices.</p>

        <div class="m-auto flex justify-center gap-5 mt-9 mb-20">
            <!-- Get In Touch Button - Now using direct click handler -->
            <button 
                ref="btnGiT"
                @click="scrollToContact"
                class="px-10 py-2 rounded-md max-[660px]:px-5 dark:bg-white bg-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300">
                <span class="text-xl max-[660px]:text-[15px] dark:text-gray-900 text-white font-semibold">
                    Get In Touch
                </span>
            </button>
            
            <!-- View My Work Button - Now using direct click handler -->
            <button 
                @click="scrollToProject"
                ref="btnVmW"
                class="px-10 py-2 max-[660px]:px-5 rounded-md outline outline-gray-900 dark:outline-white dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
                <span class="text-xl font-semibold max-[660px]:text-[15px]">
                    View My Work
                </span>
            </button>
        </div>

        <div class="flex justify-center">
            <i 
            ref="arrow"
            class="pi pi-arrow-down dark:text-white text-2xl"></i>
        </div>
    </div>
</template>