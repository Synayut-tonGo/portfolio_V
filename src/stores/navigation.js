import { defineStore } from "pinia";
import { ref } from "vue";

export const useNavigateStore = defineStore('navigate' , () => {
    const isMenuOpen = ref(false);
    const activeSection = ref('portfolio')

    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value
    }

    const closeMenu = () =>{
        isMenuOpen.value = false
    }

    const setActiveSection = (section) => {
        activeSection.value = section
    }
     return { isMenuOpen, activeSection, toggleMenu, closeMenu, setActiveSection }
})