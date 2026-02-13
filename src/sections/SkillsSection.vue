<template>
    <section id="skills" class="scroll-mt-28 mt-16 bg-white">
        <div class="mx-auto max-w-6xl px-6">
        <div class="rounded-3xl border border-[#EAD7FB] bg-[#E5D9F1] p-8">
            <h2 class="mt-2 text-2xl font-semibold">Skills</h2>

            <div
            ref="wrapRef"
            class="mt-8 rounded-3xl bg-white p-8 shadow-sm"
            >
                <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
                    <article v-for="item in items" :key="item.name" class="group relative">
                        <img
                            :src="item.icon"
                            :alt="item.name"
                            class="pointer-events-none absolute -left-2 -top-6 h-16 w-16 select-none opacity-15 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]"
                        />

                        <h3 class="relative text-xl font-extrabold text-gray-900">
                            {{ item.name }}
                        </h3>

                        <div class="relative mt-3 h-2 w-full overflow-hidden rounded-full bg-black/10">
                            <div
                                class="h-full rounded-full transition-[width] duration-1000 ease-out"
                                :class="barClass(item.type)"
                                :style="{ width: inView ? '100%' : '0%' }"
                            />
                            </div>

                        <p class="mt-4 text-gray-700 leading-relaxed">
                            {{ item.desc }}
                        </p>
                    </article>
                </div>
            </div>
        </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import jsImg from "@/assets/logoJs.png";
import tsImg from "@/assets/logoTs.png"; 
import vueImg from "@/assets/logoVue.png";
import javaImg from "@/assets/logoJava.png";
import oracleImg from "@/assets/logoSql.png";
import jiraImg from "@/assets/logoSharp.png";   // jira이모티콘
import cSharpImg from "@/assets/logoSharp.png"; 
import confluenceImg from "@/assets/logoConfluence.png";   // 컨플루언스 이모티콘
import gitHubImg from "@/assets/logoGithub.png"
import { onMounted, onUnmounted, ref } from "vue";

const wrapRef = ref<HTMLElement | null>(null);
const inView = ref(false);

type ItemType = "skill" | "tool";
type Item = {
  name: string;
  icon: string;
  type: ItemType;
  desc: string;
};

const items: Item[] = [
    {
        name: "JavaScript",
        icon: jsImg,
        type: "skill",
        desc: "프로토타입과 클로저를 이해하고 비동기 흐름과 이벤트 루프 기반의 동작을 고려해 구현할 수 있습니다."
    },
    {
        name: "Vue",
        icon: vueImg,
        type: "skill",
        desc: "Vue2와 Vue3 기반 화면 개발 경험이 있으며 Router 상태 관리 API 연동과 컴포넌트 모듈화에 익숙합니다."
    },
    {
        name: "Java",
        icon: javaImg,
        type: "skill",
        desc: "Java로 기본적인 알고리즘 구현이 가능합니다. 객체 지향 프로그래밍을 이해하며 JPA, JDBC를 사용해 DB에 접근할 수 있습니다."
    },
    {
        name: "TypeScript",
        icon: tsImg,
        type: "skill",
        desc: "기본 타입 시스템과 인터페이스를 이해하고 타입 안정성을 고려한 코드 작성과 리팩토링이 가능합니다."
    },
    {
        name: "Oracle",
        icon: oracleImg,
        type: "skill",
        desc: "관계형 데이터 모델링과 SQL 기본을 바탕으로 조회 및 데이터 처리 업무에 필요한 쿼리를 작성할 수 있습니다."
    },
    {
        name: "Jira",
        icon: jiraImg,
        type: "tool",
        desc: "Git, Confluence와 연동해 이슈를 관리합니다. Agile Process를 이해하며, Scrum 개발 경험이 있습니다."
    },
    {
        name: "Confluence",
        icon: confluenceImg,
        type: "tool",
        desc: "페이지 템플릿 기반 문서화와 회의록 정리 및 지식 공유 문서 운영 경험이 있습니다."
    },
    {
        name: "C#",
        icon: cSharpImg,
        type: "skill",
        desc: "Windows Forms로 GUI 기반 클라이언트를 개발했습니다. 크로스 스레드를 학습하여 서버와 소켓 통신 구현이 가능합니다."
    },
    {
        name: "Github",
        icon: gitHubImg,
        type: "tool",
        desc: "형상 관리의 중요성에 대해 인지하고 있으며 GitHub, GitLab을 이용해 협업을 진행한 경험이 있습니다. GitHub 서버로 웹페이지를 제작할 수 있습니다."
    }
];

// tool은 초록, skill은 보라
const barClass = (type: ItemType) => {
  return type === "tool"
    ? "bg-accent-green"
    : "bg-primary-dark";
};

let io: IntersectionObserver | null = null;

onMounted(() => {
    const el = wrapRef.value;
    if (!el) return;

    io = new IntersectionObserver(
        (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
            inView.value = true;
            if (wrapRef.value && io) io.unobserve(wrapRef.value);
        }
        },
        { threshold: 0.2 }
    );

    io.observe(el);
});

onUnmounted(() => {
    const el = wrapRef.value;
    if (el && io) io.unobserve(el);
    io = null;
});
</script>
