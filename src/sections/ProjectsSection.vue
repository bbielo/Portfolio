<template>
  <section id="projects" class="scroll-mt-28 mt-16 bg-white">
    <div class="mx-auto max-w-6xl px-6">
      <div class="rounded-3xl border border-[#EAD7FB] bg-[#E5D9F1] p-8 md:p-10">
        <div class="flex items-center justify-between gap-4">
          <div>
            <h2 class="text-3xl font-extrabold text-zinc-900 md:text-4xl">
              Toy Projects
            </h2>
            <p class="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5CF6]">
              Portfolio
            </p>
          </div>
        </div>

        <div class="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="project in projects"
            :key="project.title"
            class="group rounded-[28px] border bg-white p-4 shadow-[8px_8px_0_0_rgba(236,72,153,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[12px_12px_0_0_rgba(45,212,191,0.18)]"
            :class="project.cardClass"
          >
            <div class="overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50">
              <img
                :src="project.image"
                :alt="project.title"
                class="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </div>

            <div class="mt-4">
              <h3 class="mt-2 text-2xl font-black tracking-tight text-zinc-900">
                {{ project.title }}
              </h3>
              
              <p class="text-sm text-zinc-500">
                {{ project.summary }}
              </p>

              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="rounded-full border border-[#CFFAFE] bg-[#F0FDFA] px-3 py-1 text-xs font-semibold text-[#0F766E]"
                >
                  {{ tag }}
                </span>
              </div>

              <div class="mt-5 flex items-center gap-3">
                <a
                  :href="project.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center rounded-full border-2 border-[#5EEAD4] bg-white px-5 py-2 text-sm font-bold text-[#0F766E] transition hover:bg-[#ECFEFF]"
                >
                  View
                  <span class="ml-2 text-base">↗</span>
                </a>

                <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm font-semibold text-zinc-500 transition hover:text-zinc-900"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: "MIRUJIMA",
    summary: "Node.js로 개발한 일정 관리 사이트",
    image: "/images/projects/MIRUJIMA.png",
    link: "https://mirujima.netlify.app",
    github: "https://github.com/bbielo/Mirujima",
    tags: ["Node.js", "Express", "MongoDB"],
    cardClass: "border-[#F9A8D4]"
  },
  {
  title: "Suika-Game",
  summary: "물리 엔진으로 구현한 웹 기반 수박게임",
  image: "/images/projects/SUIKA.png",
  link: "https://suika-game-mauve.vercel.app",
  github: "https://github.com/bbielo/Suika-game",
  tags: ["Next.js", "TypeScript", "Matter.js"],
  cardClass: "border-[#5EEAD4]"
  },
  {
    title: "Clone Coding",
    summary: "HTML, CSS, JavaScript로 UI와 인터랙션을 구현한 웹페이지",
    image: "/images/projects/CloneCoding.png",
    link: "https://bbielo.github.io/work.html",
    github: "https://github.com/bbielo/bbielo.github.io?tab=readme-ov-file",
    tags: ["HTML", "CSS", "JavaScript"],
    cardClass: "border-[#F9A8D4]"
  }
]
</script>