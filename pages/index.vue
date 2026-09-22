<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
    <div class="p-4">
      <div class="aspect-video">
        <NuxtLink
          to="https://yasasiiyomu.com/"
          class="block h-full"
          @mouseenter="playVideo3"
          @mouseleave="pauseVideo3"
        >
          <video
            ref="videoYomuRef"
            :src="p('/videos/thumbnail/yomu.mp4')"
            class="w-full h-full rounded-lg cursor-pointer object-cover"
            muted
            loop
            preload="metadata"
          ></video>
        </NuxtLink>
      </div>
      <p class="mt-2 text-center text-md">Yomu　優しい読書</p>
    </div>
    <div class="p-4">
      <div class="aspect-video">
        <NuxtLink
          to="/iphone/iphone"
          class="block h-full"
          @mouseenter="playVideo"
          @mouseleave="pauseVideo"
        >
          <video
            ref="videoRef"
            :src="p('/videos/thumbnail/iphone.mp4')"
            class="w-full h-full rounded-lg cursor-pointer object-cover"
            muted
            loop
            preload="metadata"
          ></video>
        </NuxtLink>
      </div>
      <p class="mt-2 text-center text-md">スマートフォンLP</p>
    </div>
    <div class="p-4">
      <div class="aspect-video">
        <NuxtLink
          to="/sightseeing/sightseeing"
          class="block h-full"
          @mouseenter="playVideo2"
          @mouseleave="pauseVideo2"
        >
          <video
            ref="videoSightseeingRef"
            :src="p('/videos/thumbnail/sightseeing.mp4')"
            class="w-full h-full rounded-lg cursor-pointer object-cover"
            muted
            loop
            preload="metadata"
          ></video>
        </NuxtLink>
      </div>
      <p class="mt-2 text-center text-md">観光地HP</p>
    </div>
    <div class="p-4">
      <div class="aspect-video">
        <NuxtLink
          to="https://plus-info-tech.github.io/browser-game/"
          class="block h-full"
          @mouseenter="playVideo4"
          @mouseleave="pauseVideo4"
        >
          <video
            ref="videoGameRef"
            :src="p('/videos/thumbnail/game.mp4')"
            class="w-full h-full rounded-lg cursor-pointer object-cover"
            muted
            loop
            preload="metadata"
          ></video>
        </NuxtLink>
      </div>
      <p class="mt-2 text-center text-md">ブラウザゲーム</p>
    </div>
    <div class="p-4">
      <div class="aspect-video">
        <NuxtLink
          to="https://minori-mo.github.io/attendance-book/"
          class="block h-full"
          @mouseenter="playVideo5"
          @mouseleave="pauseVideo5"
        >
          <video
            ref="videoKiteruRef"
            :src="p('/videos/thumbnail/kiteru.mp4')"
            class="w-full h-full rounded-lg cursor-pointer object-cover"
            muted
            loop
            preload="metadata"
          ></video>
        </NuxtLink>
      </div>
      <p class="mt-2 text-center text-md">出席管理　KITERU</p>
    </div>
    <div class="p-4">
      <div class="aspect-video">
        <NuxtLink
          to="https://apps.apple.com/jp/app/trainee-tracker/id6785165891"
          class="block h-full"
          @mouseenter="playVideo6"
          @mouseleave="pauseVideo6"
        >
          <video
            ref="videoTraineeTrackerRef"
            :src="p('/videos/thumbnail/traineeTracker.mp4')"
            class="w-full h-full rounded-lg cursor-pointer object-cover"
            muted
            loop
            preload="metadata"
          ></video>
        </NuxtLink>
      </div>
      <p class="mt-2 text-center text-md">Trainee Tracker</p>
    </div>
  </div>
  <!-- <FormEmail /> -->
</template>

<script setup>
// Nuxt3の場合、useHeadでSEOやmetaタグを設定できます
useHead({
  title: "portfolio",
  meta: [
    {
      name: "description",
      content: "ポートフォリオを閲覧できるようにしています",
    },
  ],
});
const videoRef = ref(null);
const videoSightseeingRef = ref(null);
const videoYomuRef = ref(null);
const videoGameRef = ref(null);
const videoKiteruRef = ref(null);
const videoTraineeTrackerRef = ref(null);

const playVideo = () => {
  videoRef.value?.play();
};
const playVideo2 = () => {
  videoSightseeingRef.value?.play();
};
const playVideo3 = () => {
  videoYomuRef.value?.play();
};
const playVideo4 = () => {
  videoGameRef.value?.play();
};
const playVideo5 = () => {
  videoKiteruRef.value?.play();
};
const playVideo6 = () => {
  videoTraineeTrackerRef.value?.play();
};

const pauseVideo = () => {
  videoRef.value?.pause();
  videoRef.value.currentTime = 0; // 元に戻すなら
};
const pauseVideo2 = () => {
  videoSightseeingRef.value?.pause();
  videoSightseeingRef.value.currentTime = 0; // 元に戻すなら
};
const pauseVideo3 = () => {
  videoYomuRef.value?.pause();
  videoYomuRef.value.currentTime = 0; // 元に戻すなら
};
const pauseVideo4 = () => {
  videoGameRef.value?.pause();
  videoGameRef.value.currentTime = 0; // 元に戻すなら
};
const pauseVideo5 = () => {
  videoKiteruRef.value?.pause();
  videoKiteruRef.value.currentTime = 0; // 元に戻すなら
};
const pauseVideo6 = () => {
  videoTraineeTrackerRef.value?.pause();
  videoTraineeTrackerRef.value.currentTime = 0; // 元に戻すなら
};

const setCharRef = (i, j, el) => {
  if (!charRefsList.value[i]) {
    charRefsList.value[i] = [];
  }
  charRefsList.value[i][j] = el;
};
import { gsap } from "gsap";
const p = usePublicPath();
const thumbnail = [
  { src: p("/images/thumbnail/dance.webp"), text: "クリエイター向けHP" },
];
const charRefsList = ref([]); // それぞれの文字列の配列（2次元配列）
onMounted(async () => {
  await nextTick();
  charRefsList.value.forEach((charRefs) => {
    const tl = gsap.timeline({ repeat: -1 });
    charRefs.forEach((el) => {
      tl.to(el, { y: -10, duration: 0.2, ease: "none" });
      tl.to(el, { y: 0, duration: 0.2, ease: "none" });
    });
  });
});
</script>

<style scoped></style>
