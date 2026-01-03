<script setup>
import Footer from '../Footer.vue';
import Header from '../Header.vue';


</script>

<template>
    <div class="min-h-screen bg-white darK:bg-gray-900 text-gray-800 transition-colors duration-300">
        <Header/>
        <main>
            <slot/>
        </main>
        <Footer/>
    </div>
</template>