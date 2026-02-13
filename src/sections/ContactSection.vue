<template>
  <section id="contact" class="scroll-mt-28 mt-16">
    <div class="mx-auto max-w-6xl px-6">
      <div class="rounded-3xl border border-[#EAD7FB] bg-[#E5D9F1] p-8">
        <div class="flex items-end justify-between gap-4">
          <div>
            <h2 class="text-2xl font-semibold text-zinc-900">Contact</h2>
          </div>
        </div>

        <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <!-- Email -->
          <a
            href="mailto:eulbi90@gmail.com"
            class="group rounded-2xl bg-white p-5 shadow-sm hover:shadow transition"
          >
            <div class="flex items-center gap-3">
              <div class="grid h-10 w-10 place-items-center rounded-xl bg-[#F3ECFF]">
                <svg viewBox="0 0 24 24" class="h-5 w-5 text-[#7C3AED]" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 6h16v12H4z" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </div>
              <div class="min-w-0">
                <p class="text-xs text-zinc-500">Email</p>
                <p class="truncate font-semibold text-zinc-900 group-hover:underline">
                  eulbi90@gmail.com
                </p>
              </div>
            </div>
          </a>

          <!-- GitHub -->
          <a
            href="https://github.com/bbielo"
            target="_blank"
            rel="noreferrer"
            class="group rounded-2xl bg-white p-5 shadow-sm hover:shadow transition"
          >
            <div class="flex items-center gap-3">
              <div class="grid h-10 w-10 place-items-center rounded-xl bg-[#F3ECFF]">
                <svg viewBox="0 0 24 24" class="h-5 w-5 text-[#7C3AED]" fill="currentColor">
                  <path d="M12 .5C5.7.5.7 5.7.7 12.2c0 5.2 3.4 9.6 8.1 11.2.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.6-1.5-1.4-1.9-1.4-1.9-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.4-1.3-5.4-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.7-2.8 5.7-5.4 6 .4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6 4.7-1.6 8.1-6 8.1-11.2C23.3 5.7 18.3.5 12 .5z"/>
                </svg>
              </div>
              <div class="min-w-0">
                <p class="text-xs text-zinc-500">GitHub</p>
                <p class="truncate font-semibold text-zinc-900 group-hover:underline">
                  github.com/bbielo
                </p>
              </div>
            </div>
          </a>

          <!-- Notion -->
          <a
            href="https://www.notion.so/306bf6f141ec8087a41dc009b89d200b"
            target="_blank"
            rel="noreferrer"
            class="group rounded-2xl bg-white p-5 shadow-sm hover:shadow transition"
          >
            <div class="flex items-center gap-3">
              <div class="grid h-10 w-10 place-items-center rounded-xl bg-[#F3ECFF]">
                <svg viewBox="0 0 24 24" class="h-5 w-5 text-[#7C3AED]" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M7 3h10v18H7z" />
                  <path d="M9 7h6M9 11h6M9 15h6" />
                </svg>
              </div>
              <div class="min-w-0">
                <p class="text-xs text-zinc-500">Notion</p>
                <p class="truncate font-semibold text-zinc-900 group-hover:underline">
                  Notion
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
