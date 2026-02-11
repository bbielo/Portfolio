<template>
  <section id="top" class="w-full bg-[#D7AEFB]">
    <div class="mx-auto max-w-7xl px-6 pt-[110px]">
      <div class="grid min-h-[calc(100vh-80px)] items-center gap-8 md:grid-cols-2 md:gap-6">
        <!-- LEFT -->
        <div class="max-w-xl">
          <p class="pl-2 text-sm font-semibold tracking-[0.35em] text-white/90">
            {{ typed }}<span class="blink">|</span>
          </p>

          <h1 class="mt-6 text-5xl font-extrabold leading-[1.05] text-white md:text-6xl">
            안녕하세요,
            <br />
            <span class="text-[#8c43cd]">조을비</span>입니다!
          </h1>
        </div>

        <!-- RIGHT -->
        <div class="flex justify-center md:justify-end">
          <img
            src="@/assets/main.png"
            alt="main"
            class="w-[80vw] max-w-[800px]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";

const full = "DEVELOPER";
const typed = ref("");

let typingTimer: number | null = null;
let cycleTimer: number | null = null;

// 타이핑 애니메이션 기능
function startCycle() {
  typed.value = "";
  let i = 0;

  typingTimer = window.setInterval(() => {
    typed.value = full.slice(0, i + 1);
    i += 1;

    if (i >= full.length) {
      if (typingTimer) window.clearInterval(typingTimer);
      typingTimer = null;

      cycleTimer = window.setTimeout(() => {
        startCycle();
      }, 2000); // 2초 뒤 애니메이션 재시작하도록 설정
    }
  }, 120);
}

onMounted(() => startCycle());

onBeforeUnmount(() => {
  if (typingTimer) window.clearInterval(typingTimer);
  if (cycleTimer) window.clearTimeout(cycleTimer);
});
</script>

<style scoped>
.blink {
  display: inline-block;
  margin-left: 2px;
  animation: blink 1s step-end infinite;
}
@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
