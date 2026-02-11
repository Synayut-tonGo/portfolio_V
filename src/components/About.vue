<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted, ref } from 'vue';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const aboutMe = ref(null);
const boxOne = ref(null);
const boxTwo = ref(null);
const arrow = ref(null);


onMounted(() => {
    // Animate heading when it comes into view
    gsap.from(aboutMe.value, {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: aboutMe.value,
            start: "top 80%",
            scrub:true,
            toggleActions: "play reverse play reverse"
        }
    });

    // Animate box one
    gsap.from(boxOne.value, {
        x: -20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: boxOne.value,
            start: "top 85%",
            scrub:true,
            toggleActions: "play reverse play reverse"
        }
    });

    // Animate box two
    gsap.from(boxTwo.value, {
        x: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: boxTwo.value,
            start: "top 85%",
            scrub:true,
            toggleActions: "play reverse play reverse"
        }
    });

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
    <div id="about" class="relative w-full h-auto bg-white dark:bg-gray-900 py-20 px-6 md:px-10 lg:px-15 flex justify-center items-center flex-wrap flex-col ">
        <h1 
        ref="aboutMe"
        class="dark:text-white text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-12 md:mb-16">
            About Me
        </h1>
        
        <div class="w-full max-w-[1200px] flex flex-col lg:flex-row justify-center gap-8 lg:gap-20 mb-20">
            <div 
            ref="boxOne"
            class="hover:shadow-lg transition duration-500 w-full lg:w-[40%] bg-gray-900 dark:bg-gray-800 rounded-lg p-6 md:p-8 lg:p-10 min-h-[300px]">
                <div class="text-white text-4xl md:text-5xl font-bold w-[100px] h-[100px] md:w-[125px] md:h-[125px] bg-gray-800 dark:bg-gray-700 flex justify-center items-center rounded-full mx-auto lg:mx-0">
                    TS
                </div>
                <div class="mt-6 text-center lg:text-left">
                    <h1 class="text-xl md:text-2xl mb-2 font-semibold text-white">Thach Synayut</h1>
                    <h2 class="text-lg md:text-xl mb-4 text-white">Jr. Web Developer</h2> 
                    <p class="text-sm md:text-base text-white max-w-[280px] mx-auto lg:mx-0">
                        Passionate about building modern web applications with clean code and exceptional user experiences.
                    </p>                       
                </div>
            </div>

            <!-- Box Two - Description -->
            <div 
            ref="boxTwo"
            class="w-full lg:w-[60%] text-gray-900 dark:text-white">
                <h1 class="text-xl md:text-2xl font-semibold">My Approach</h1>
                <p class="mt-3 text-sm md:text-[15.3px] leading-relaxed">
                    I'm a Jr. Web Developer with expertise in modern web technologies. I focus on creating applications that are not only functional but also provide exceptional user experiences.
                </p>
                <p class="mt-3 text-sm md:text-base leading-relaxed">
                    With experience across the entire development stack, I enjoy tackling complex problems and turning ideas into reality through clean, maintainable code.
                </p>
                
                <div class="flex flex-col mt-8 md:mt-10">
                    <h1 class="text-xl md:text-2xl font-semibold">Skills & Technologies</h1>
                    <ul class="ml-5 flex flex-col sm:flex-row gap-4 sm:gap-10 lg:gap-20 mt-4 text-sm md:text-[15.3px] list-disc">
                        <li>Frontend Development</li>
                        <li>Backend Development</li>
                    </ul>
                </div>                
            </div>
        </div>

        <div class="flex justify-center">
            <i 
            ref="arrow"
            class="pi pi-arrow-down dark:text-white"></i>
        </div>

    </div>
</template>

<style scoped>
</style>