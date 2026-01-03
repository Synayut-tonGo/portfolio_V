<script setup>
import gsap from 'gsap';
import { onMounted, ref } from 'vue';


    const projectS = [
        {
            project: "Web/Personal",
            title:"Portfolio",
            description:"My personal portfolio website built with Vue js 3, showcasing my skills,",
            linkGitHub:'',
            linkOut:'',
            icon:'pi pi-desktop',
            technology: ['Vue js' , 'GSAP' , 'Pinia'],
            gitIcon:"pi pi-github" ,
            goIcon:"pi pi-external-link" 
        },
        {
            project: "Web/Nuk Cafe",
            title:"Admin Portal",
            icon:'pi pi-desktop',
            linkGitHub:'',
            linkOut:'',            
            description:"Nuk Cafe Admin Portal, a cafe shop management system in Hong",
            technology: ['Vue js 2' , 'Tailwind CSS' , 'Pinia'],
            gitIcon:"pi pi-github " ,
            goIcon:"pi pi-external-link" 
        },
        {
            project: "Web/Yumbite Cambodia",
            title:"Website",
            icon:'pi pi-desktop',
            linkGitHub:'https://gitlab.com/innoblockyumbites/yumbites-landing',
            linkOut:'https://www.yumbitescambodia.com/',            
            description:"Contributing to Yumbite Cambodia food delivery platform.",
            technology: ['Nuxt js'],
            gitIcon:"pi pi-github " ,
            goIcon:"pi pi-external-link" 
        }
    ]

    const tittle = ref(null)
    const box = ref(null)
    const arrow = ref(null)

    onMounted(() => {
        gsap.from(tittle.value , {
            y:-20,
            opacity:0,
            duration:0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: tittle.value,
                start:'top 85%',
                scrub:true,
                toggleActions: "play reverse play reverse"
            }
        })
        gsap.from(box.value , {
            y: 50,
            opacity:0,
            duration:0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: box.value,
                start:'top 85%',
                scrub:true,
                toggleActions: "play reverse play reverse"
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
    );
    })
    
</script>

<template>
    <div id="project" class="relative dark:text-white z-48 text-gray-900 bg-white w-full h-auto dark:bg-gray-900  flex flex-col justify-center items-center">
        <div class="mb-10" ref="tittle">
            <h1 class="text-6xl text-center font-bold mb-7">My Projects</h1>
            <h3 class="text-xl text-center max-[6700px]:text-[15px]">A showcase of my recent work and contributions to various projects</h3>
        </div>
    <div 
    class="w-full max-w-[1400px] text-white px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
        ref="box"
        v-for="project in projectS"
        :key="project.id"
        class="w-full h-[280px] border-gray-700 border-[0.5px] rounded-lg bg-gray-900 dark:bg-gray-800 ">
            <div class="w-full p-4 flex gap-2">
                <div class="w-10 h-10 bg-gray-700 rounded-lg flex justify-center items-center">
                    <i :class="project.icon"></i>
                </div>
                <div class="">
                    <p class="text-[13px]">{{ project.project }}</p>
                    <h4>{{ project.title }}</h4>
                </div>
            </div>
             <div class="w-full p-4 ">
                    <p class="mb-5">
                        {{ project.description }}
                    </p>
             <div class="flex flex-wrap gap-2">
                <span 
                v-for="(tech, index) in project.technology"
                :key="index"
                class="px-3 py-1 bg-gray-700 rounded-md text-sm">
                    {{ tech }}
             </span>
            </div>
            </div>
            <div class="p-4 flex  gap-5">
                <a :href="project.linkGitHub" ><button><i :class="project.gitIcon"></i></button></a>
                <a :href="project.linkOut"><button><i :class="project.goIcon"></i></button></a>
            </div>
        </div>
    </div>
        <div class="flex justify-center mt-20">
            <i 
            ref="arrow"
            class="pi pi-arrow-down dark:text-white"></i>
        </div>
    </div>
</template>