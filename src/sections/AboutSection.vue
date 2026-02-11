<template>
  <section id="about" class="scroll-mt-28 mt-16 bg-white">
    <div class="mx-auto max-w-7xl px-6">
      <div class="rounded-3xl border border-[#EAD7FB] bg-[#E5D9F1] p-8">
        <h2 class="mt-2 text-2xl font-semibold">About</h2>

        <div class="mt-6 grid gap-6 md:grid-cols-2">
          <div class="rounded-3xl border border-purple-100 bg-white p-6 shadow-sm">
            <p class="leading-7 text-zinc-600">
              R&amp;D 센터에서 스마트팩토리 운영 시스템(MES·EAS·WMS) 프론트엔드를 담당했습니다.
              사용자 흐름을 기준으로 화면을 재구성하고 권한 처리와 API 연동 표준화로 운영 안정성을 높였습니다.
            </p>
          </div>

          <div class="rounded-3xl border border-purple-100 bg-white p-6 shadow-sm">
            <p class="text-sm text-zinc-400">Skills</p>
            <div class="mt-3 flex flex-wrap gap-2">
              <span
                v-for="s in skills"
                :key="s"
                class="rounded-2xl border border-zinc-800 px-3 py-1 text-xs text-zinc-600"
              >
                {{ s }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skills = ["Vue 3", "TypeScript", "REST API", "Auth/Role", "Refactoring", "Test", "Linux Client"];
</script>
