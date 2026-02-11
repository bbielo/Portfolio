<template>
    <section id="about" class="scroll-mt-28 mt-16 bg-white">
        <div class="mx-auto max-w-7xl px-6">
        <div class="rounded-3xl border border-[#EAD7FB] bg-[#E5D9F1] p-8">
            <h2 class="mt-2 text-2xl font-semibold">Skills</h2>

            <div class="mt-6 grid gap-6 md:grid-cols-2">
                <!-- LEFT: Tech -->
            <div class="rounded-3xl border border-purple-100 bg-white p-6 shadow-sm">
                <p class="text-sm text-zinc-400">Tech</p>

                <div class="mt-3 flex flex-wrap gap-2">
                <span
                    v-for="s in tech"
                    :key="s"
                    class="rounded-2xl border border-zinc-800 px-3 py-1 text-xs text-zinc-600"
                >
                    {{ s }}
                </span>
                </div>

                <p class="mt-5 leading-7 text-zinc-600">
                화면 단 개발뿐 아니라 권한 처리와 API 연동을 고려한 구조로 UI를 설계합니다.
                </p>
            </div>

            <!-- RIGHT: Tools -->
            <div class="rounded-3xl border border-purple-100 bg-white p-6 shadow-sm">
                <p class="text-sm text-zinc-400">Tools</p>

                <div class="mt-3 flex flex-wrap gap-2">
                <span
                    v-for="s in tools"
                    :key="s"
                    class="rounded-2xl border border-zinc-800 px-3 py-1 text-xs text-zinc-600"
                >
                    {{ s }}
                </span>
                </div>

                <p class="mt-5 leading-7 text-zinc-600">
                협업 문서화와 이슈 트래킹을 기반으로 일정과 품질을 같이 챙깁니다.
                </p>
            </div>
            </div>
        </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const tech = ["JavaScript", "Vue", "TypeScript", "Oracle"];
const tools = ["Jira", "Confluence"];
</script>