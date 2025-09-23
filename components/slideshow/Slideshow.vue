<script setup lang="ts">
import { gsap } from "gsap";

const images = [
  "/images/slideShow/0.webp",
  "/images/slideShow/1.webp",
  "/images/slideShow/2.webp",
  "/images/slideShow/3.webp",
];

const slides = ref([]);
const index = ref(0);
const showFirstSlide = () => {
  // 最初の画像選択
  const current = slides.value[index.value];
  const tl = gsap.timeline();
  tl.set(current, { opacity: 0, scale: 1.1 });
  sliderAnime(tl, current);
  runIndicator(index.value, false);
};
const showSlide = (nextSlide: boolean) => {
  const current = slides.value[index.value];
  let next;
  let nextSlideIndex = 0;
  if (nextSlide) {
    next = slides.value[(index.value + 1) % slides.value.length];
    nextSlideIndex = (index.value + 1) % slides.value.length;
    runIndicator(index.value, true);
  } else {
    nextSlideIndex = (index.value - 1 + images.length) % images.length;
    next = slides.value[nextSlideIndex];
    runIndicator(index.value, true);
  }
  const tl = gsap.timeline();
  tl.set(next, { opacity: 0, scale: 1.1 });
  // フェードアウト
  tl.to(current, { opacity: 0, duration: 1, ease: "power1.out" });
  sliderAnime(tl, next);
  // インジケータースタート
  index.value = nextSlideIndex;
  runIndicator(index.value, false);
};
const sliderAnime = (tl, dom) => {
  tl.to(
    dom,
    {
      opacity: 1,
      duration: 1,
      ease: "power1.out",
    },
    "<"
  ).to(
    dom,
    {
      scale: 1,
      duration: 8,
      ease: "power1.out",
    },
    "-=1"
  );
};
let timer = null;
onMounted(() => {
  setTimeout(() => {
    showFirstSlide();
    timer = setInterval(() => {
      showSlide(true);
    }, 6000);
  }, 4000);
});
/*------------------ スライドイベント感知 ------------------ */
const startX = ref(0);
const endX = ref(0);
const handleStart = (e) => {
  startX.value = e.type.includes("mouse")
    ? e.clientX
    : e.changedTouches[0].clientX;
};
const handleEnd = (e) => {
  endX.value = e.type.includes("mouse")
    ? e.clientX
    : e.changedTouches[0].clientX;
  checkSwipe(e);
};
const checkSwipe = (e) => {
  const distance = endX.value - startX.value;
  if (distance > 50) {
    prevSlide();
  } else if (distance < -50) {
    nextSlide();
  }
};
const nextSlide = () => {
  showSlide(true);
  clearInterval(timer);
  timer = setInterval(() => {
    showSlide(true);
  }, 6000);
};
const prevSlide = () => {
  showSlide(false);
  clearInterval(timer);
  timer = setInterval(() => {
    showSlide(true);
  }, 6000);
};
/*------------------ プログレスバー ------------------ */
const bars = ref([]);
const barsGray = ref([]);
let tlCurrentBar = ref();
const runIndicator = (index: number, isStop: boolean) => {
  const tlBar = gsap.timeline();
  if (isStop) {
    // 前のインジケーターを削除
    tlCurrentBar.value.kill();
    tlBar.to(barsGray.value[index], {
      width: "100%",
      duration: 0.5,
      ease: "linear",
    });
  } else {
    tlCurrentBar.value = tlBar
      .fromTo(
        bars.value[index],
        { width: "0%" },
        { width: "100%", duration: 6, ease: "linear" },
        "<"
      )
      .fromTo(
        barsGray.value[index],
        { width: "0%" },
        { width: "100%", duration: 0.5, ease: "linear" }
      );
  }
};
</script>

<template>
  <div
    class="relative overflow-hidden w-full h-[695px]"
    @mousedown="handleStart"
    @mouseup="handleEnd"
  >
    <img
      v-for="(img, index) in images"
      :key="index"
      :src="img"
      ref="slides"
      :class="`slide${index}`"
      class="absolute inset-0 w-full h-full object-cover opacity-0 pointer-events-none select-none"
    />
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <p class="font-bold vertical-text text-white">葛葉稲荷神社</p>
    </div>
    <div
      class="absolute flex gap-2 w-full max-w-md left-1/2 -translate-x-1/2 bottom-5"
    >
      <div
        v-for="(bar, i) in images"
        :key="i"
        class="relative flex-1 h-1 bg-gray-400 overflow-hidden rounded-sm"
      >
        <div
          :ref="(el) => (bars[i] = el)"
          class="absolute top-0 left-0 h-1 bg-white w-0 rounded-sm"
        ></div>
        <div
          :ref="(el) => (barsGray[i] = el)"
          class="absolute top-0 left-0 h-1 bg-gray-400 w-0 rounded-sm"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.vertical-text {
  font-family: "游明朝 Medium", "Yu Mincho Medium", "YuMincho Medium",
    "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif;
  display: flex;
  align-items: center;
  writing-mode: vertical-rl;
  font-size: 2.5rem;
  letter-spacing: 1rem;
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.8), 0 0 12px rgba(0, 0, 0, 0.6);
}
</style>
