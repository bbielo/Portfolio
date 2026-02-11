<template>
  <header
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white shadow-md' : 'bg-transparent'"
  >
    <div class="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
      <button
        @click="scrollTo('top')"
        class="text-lg font-bold"
        :class="scrolled ? 'text-black' : 'text-white'"
      >
        eulbi
      </button>

      <nav class="flex gap-10 text-lg font-semibold">
        <button
          @click="scrollTo('about')"
          :class="scrolled ? 'text-black' : 'text-white'"
        >
          About
        </button>

        <button
          @click="scrollTo('skills')"
          :class="scrolled ? 'text-black' : 'text-white'"
        >
          Skills
        </button>

        <button
          @click="scrollTo('projects')"
          :class="scrolled ? 'text-black' : 'text-white'"
        >
          Projects
        </button>

        <button
          @click="scrollTo('contact')"
          :class="scrolled ? 'text-black' : 'text-white'"
        >
          Contact
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 720
}

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (!el) return

  window.scrollTo({
    top: el.offsetTop - 80,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
