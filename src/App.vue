<template>
  <div>
    <AppHeader />

    <main>
      <section id="top">
        <HeroSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </main>

    
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/layout/AppHeader.vue'
import HeroSection from './sections/HeroSection.vue'
import AboutSection from './sections/AboutSection.vue'
import SkillsSection from './sections/SkillsSection.vue'
import ProjectsSection from './sections/ProjectsSection.vue'
import ContactSection from './sections/ContactSection.vue'
import AppFooter from './components/layout/AppFooter.vue'
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
