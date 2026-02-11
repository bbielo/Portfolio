<template>
  <header
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white shadow-md' : 'bg-transparent'"
  >
    <div class="mx-auto max-w-7xl px-10 h-20 flex items-center justify-between">
      <!-- 로고 -->
      <button @click="scrollTo('top')" class="flex items-center">
        <img
          src="@/assets/home.png"
          alt="home"
          class="h-16 w-auto object-contain"
        />
      </button>

      <!-- 메뉴 -->
      <nav class="flex items-center gap-12">
        <button
          v-for="menu in menus"
          :key="menu.id"
          @click="scrollTo(menu.id)"
          class="text-2xl font-semibold tracking-wide transition"
          :class="scrolled ? 'text-black' : 'text-white'"
        >
          {{ menu.name }}
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

const scrolled = ref(false);

const menus = [
  { id: "about", name: "About" },
  { id: "skills", name: "Skills" },
  { id: "projects", name: "Projects" },
  { id: "contact", name: "Contact" },
];

const headerHeight = 80; // h-20 = 80px

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  const y = el.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
  window.scrollTo({ top: y, behavior: "smooth" });
};

const onScroll = () => {
  scrolled.value = window.scrollY > 10;
};

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>
