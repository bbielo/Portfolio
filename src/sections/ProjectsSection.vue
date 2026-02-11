<template>
  <section id="projects" class="scroll-mt-28 mt-16 bg-white">
    <div class="mx-auto max-w-7xl px-6">
      <div class="rounded-3xl border border-[#EAD7FB] bg-[#E5D9F1] p-8">
        <div class="flex items-center justify-between gap-4">
          <h2 class="text-2xl font-semibold text-zinc-900">Projects</h2>

          <div class="flex items-center gap-2">
            <button
              type="button"
              class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#EAD7FB] bg-white text-zinc-700 shadow-sm transition hover:-translate-y-[1px] hover:shadow-md disabled:opacity-40"
              :disabled="!canPrev"
              @click="prev"
              aria-label="Previous projects"
            >
              ‹
            </button>

            <button
              type="button"
              class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#EAD7FB] bg-white text-zinc-700 shadow-sm transition hover:-translate-y-[1px] hover:shadow-md disabled:opacity-40"
              :disabled="!canNext"
              @click="next"
              aria-label="Next projects"
            >
              ›
            </button>
          </div>
        </div>

        <!-- viewport -->
        <div class="mt-8 overflow-hidden">
          <!-- track -->
          <div
            class="flex transition-transform duration-300 ease-out"
            :style="{ transform: `translateX(-${start * slideSizePercent}%)` }"
          >
            <div
              v-for="p in projects"
              :key="p.title"
              class="shrink-0 px-2"
              :style="{ width: `${100 / perView}%` }"
            >
              <article
                class="group h-full rounded-3xl border border-[#EAD7FB] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <h3 class="text-lg font-semibold text-zinc-900">{{ p.title }}</h3>
                    <p class="mt-2 text-sm leading-6 text-zinc-600">{{ p.desc }}</p>
                  </div>

                  <span class="shrink-0 rounded-2xl bg-[#F6ECFF] px-3 py-1 text-xs font-medium text-purple-700">
                    {{ p.period }}
                  </span>
                </div>

                <div class="mt-5 flex flex-wrap gap-2">
                  <span
                    v-for="t in p.tags"
                    :key="t"
                    class="rounded-2xl border border-[#EAD7FB] bg-white px-3 py-1 text-xs text-zinc-700 transition group-hover:border-purple-300"
                  >
                    {{ t }}
                  </span>
                </div>

                <div v-if="p.link || p.repo" class="mt-6 flex gap-3">
                  <a
                    v-if="p.link"
                    :href="p.link"
                    target="_blank"
                    rel="noreferrer"
                    class="text-sm font-semibold text-purple-700 underline-offset-4 hover:underline"
                  >
                    Live
                  </a>
                  <a
                    v-if="p.repo"
                    :href="p.repo"
                    target="_blank"
                    rel="noreferrer"
                    class="text-sm text-zinc-600 underline-offset-4 hover:text-purple-700 hover:underline"
                  >
                    Code
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>

        <!-- dots -->
        <div class="mt-6 flex justify-center gap-2">
          <button
            v-for="(_, i) in pageCount"
            :key="i"
            type="button"
            class="h-2.5 w-2.5 rounded-full transition"
            :class="i === pageIndex ? 'bg-[#B893DF]' : 'bg-white/70 hover:bg-[#E5D9F1]'"
            @click="goToPage(i)"
            aria-label="Go to page"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

type Project = {
  title: string;
  desc: string;
  period: string;
  tags: string[];
  link?: string;
  repo?: string;
};

const projects: Project[] = [
  {
    title: "aimEAP Control UI Enhance",
    desc: "설비 제어 관리자 콘솔의 사용 흐름 기반으로 UI 구조를 재정비하고 공통 UI와 반복 로직을 정리했습니다.",
    period: "2022.08~11",
    tags: ["Vue", "i18n", "Refactor", "UI Flow"],
  },
  {
    title: "차세대 aimEAS",
    desc: "권한 기반 메뉴/화면 제어와 API 연동 구조를 표준화해 운영 안정성과 유지보수성을 높였습니다.",
    period: "2024~2025",
    tags: ["Vue", "Auth", "API", "Module"],
  },
  {
    title: "aimWMS UI 고도화",
    desc: "출고/입고 흐름 기반 화면을 재구성하고 공통 컴포넌트를 정리해 유지보수성을 개선했습니다.",
    period: "2023~2024",
    tags: ["Vue", "SPA", "Component"],
  },
  {
    title: "차세대 UI 리팩토링",
    desc: "반복 로직을 모듈화하고 화면 구성 표준을 맞춰 신규 기능 추가 속도를 개선했습니다.",
    period: "2024",
    tags: ["Refactor", "Module", "DX"],
  },
];

const perView = ref(2);
const start = ref(0);

const maxStart = computed(() => Math.max(0, projects.length - perView.value));
const canPrev = computed(() => start.value > 0);
const canNext = computed(() => start.value < maxStart.value);
const slideSizePercent = computed(() => 100 / perView.value);

const updatePerView = () => {
  perView.value = window.innerWidth < 768 ? 1 : 2;
  if (start.value > maxStart.value) start.value = maxStart.value;
};

onMounted(() => {
  updatePerView();
  window.addEventListener("resize", updatePerView);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updatePerView);
});

const prev = () => {
  start.value = Math.max(0, start.value - perView.value);
};

const next = () => {
  start.value = Math.min(maxStart.value, start.value + perView.value);
};

const pageCount = computed(() => Math.max(1, Math.ceil(projects.length / perView.value)));
const pageIndex = computed(() => Math.floor(start.value / perView.value));

const goToPage = (i: number) => {
  start.value = Math.min(maxStart.value, i * perView.value);
};
</script>
