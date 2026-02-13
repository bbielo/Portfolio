<template>
  <section id="about" class="scroll-mt-28 m-16 bg-white">
    <div class="mx-auto max-w-6xl px-6">
      <div class="rounded-3xl border border-[#EAD7FB] bg-[#E5D9F1] p-8">
        <h2 class="mt-2 text-2xl font-semibold">About Me</h2>

        <div class="mt-6 rounded-3xl border border-purple-100 bg-white p-6 shadow-sm">
          <div class="space-y-8">
            <!-- 1) about1 -->
            <div class="relative h-[420px]">
              <img
                ref="topImgEl"
                src="@/assets/aboutImg1.png"
                alt="about1"
                class="absolute right-10 top-6 h-[380px] w-[420px] object-cover shadow-md fly-base"
                :class="topImgClass"
              />

              <div
                ref="topCardEl"
                class="absolute left-10 top-20 z-10 w-[520px] bg-white p-6 shadow-lg border border-pink-200 fly-base"
                :class="topCardClass"
              >
                <p class="leading-7 text-zinc-700">
                  &nbsp;안녕하세요, 조을비입니다!<br />
                  &nbsp;저는 야구 보는 걸 정말 좋아합니다. 시즌이 시작되면 자연스럽게 하루의 마무리가 야구가 되곤 합니다.<br />
                  야구는 혼자 잘해서 이길 수 있는 스포츠가 아니라 각자의 자리에서 묵묵히 자기 역할을 해낼 때 경기가 완성된다고 생각합니다.
                  그 모습이 팀 개발과 참 닮았다고 느꼈습니다.<br />
                  &nbsp;홈런도 멋지지만 저는 보이지 않는 수비나 연결 플레이가 더 인상 깊습니다.
                  저도 화려하지 않아도 팀 안에서 꼭 필요한 개발자가 되고 싶습니다.
                </p>
              </div>
            </div>

            <!-- 2) about2 -->
            <div class="relative h-[420px]">
              <img
                ref="bottomImgEl"
                src="@/assets/aboutImg2.png"
                alt="about2"
                class="absolute left-10 top-6 h-[380px] w-[520px] object-cover shadow-md fly-base"
                :class="bottomImgClass"
              />

              <div
                ref="bottomCardEl"
                class="absolute right-10 bottom-10 z-10 w-[520px] bg-white p-6 shadow-lg border border-zinc-200 fly-base"
                :class="bottomCardClass"
              >
                <p class="leading-7 text-zinc-700">
                  &nbsp;저는 새로운 환경에 들어가면 먼저 흐름을 파악하는 편입니다.<br />
                  처음엔 낯설어도 팀이 어떤 방식으로 일하는지 관찰하고 빠르게 맞춰가요.
                  같이 일할 때는 소통이 제일 중요하다고 생각합니다.<br />
                  막히는 부분은 혼자 끙끙대기보다 공유하고 제가 아는 건 팀이 더 빨리 가도록 먼저 도와주려고 해요.<br />
                  &nbsp;결국 개발은 혼자 잘하는 것보다 같이 잘 굴러가게 만드는 힘이 더 크게 작동한다고 믿습니다.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";

const topCardEl = ref<HTMLElement | null>(null);
const bottomCardEl = ref<HTMLElement | null>(null);

const showTopCard = ref(false);
const showBottomCard = ref(false);
const showTopImg = ref(false);
const showBottomImg = ref(false);

const topCardClass = computed(() => (showTopCard.value ? "fly-show" : "fly-left"));
const bottomCardClass = computed(() => (showBottomCard.value ? "fly-show" : "fly-right"));


const topImgClass = computed(() => (showTopImg.value ? "fly-show" : "fly-right"));
const bottomImgClass = computed(() => (showBottomImg.value ? "fly-show" : "fly-left"));

let io: IntersectionObserver | null = null;
let timers: number[] = [];

function clearTimers() {
  timers.forEach((t) => window.clearTimeout(t));
  timers = [];
}

onMounted(async () => {
  await nextTick();

  const topTarget = topCardEl.value;
  const bottomTarget = bottomCardEl.value;
  if (!topTarget || !bottomTarget) return;

  let topPlayed = false;
  let bottomPlayed = false;

  io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        if (entry.target === topTarget && !topPlayed) {
          topPlayed = true;
          timers.push(window.setTimeout(() => (showTopCard.value = true), 200));
          timers.push(window.setTimeout(() => (showTopImg.value = true), 520));
        }

        if (entry.target === bottomTarget && !bottomPlayed) {
          bottomPlayed = true;
          timers.push(window.setTimeout(() => (showBottomCard.value = true), 260));
          timers.push(window.setTimeout(() => (showBottomImg.value = true), 620));
        }

        // 실행됐으면 옵저버 종료
        if (topPlayed && bottomPlayed) {
          io?.disconnect();
          io = null;
        }
      }
    },
    {
      threshold: 0.35,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  io.observe(topTarget);
  io.observe(bottomTarget);
});

onUnmounted(() => {
  clearTimers();
  io?.disconnect();
  io = null;
});
</script>

<style scoped>
.fly-base {
  will-change: transform, opacity;
  transition:
    transform 2s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 2s cubic-bezier(0.22, 1, 0.36, 1);
}

/* 시작 위치 */
.fly-left {
  opacity: 0;
  transform: translateX(-180px);
}
.fly-right {
  opacity: 0;
  transform: translateX(180px);
}

/* 등장 */
.fly-show {
  opacity: 1;
  transform: translateX(0);
}

@media (prefers-reduced-motion: reduce) {
  .fly-base { transition: none !important; }
  .fly-left, .fly-right, .fly-show {
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>
