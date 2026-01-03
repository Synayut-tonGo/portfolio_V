<script setup>
import About from './components/About.vue';
import ContactUs from './components/ContactUs.vue';
import Hero from './components/Hero.vue';
import Layout from './components/layouts/Layout.vue';
import Projects from './components/Projects.vue';
import Resume from './components/Resume.vue';
import Skills from './components/Skills.vue';

</script>

<template>
  <Layout>
    <Hero/>
    <About/>
    <Projects/>
    <Skills/>
    <Resume/>
    <ContactUs/>
  </Layout>
</template>

