<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
    <div class="p-4">
      <div style="height: calc(100% - 32px)">
        <NuxtLink
          to="/iphone/iphone"
          @mouseenter="playVideo"
          @mouseleave="pauseVideo"
        >
          <video
            ref="videoRef"
            src="/videos/thumbnail/iphone.mp4"
            class="w-full rounded-lg cursor-pointer object-fill h-full"
            muted
            loop
            preload="metadata"
          ></video>
        </NuxtLink>
      </div>
      <p class="mt-2 text-center text-md">スマホ販売サイト</p>
    </div>
    <div v-for="(item, i) in thumbnail" class="p-4 group">
      <div class="relative bg-gray-100" style="height: calc(100% - 32px)">
        <img :src="item.src" alt="背景画像" class="rounded-lg h-full" />
        <div
          class="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-lg hidden group-hover:block"
        ></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-2xl font-bold flex gap-1 hidden group-hover:block">
            <span
              v-for="(char, j) in ['準', '備', '中', '.', '.', '.']"
              :key="j"
              class="inline-block"
              :ref="(el) => setCharRef(i, j, el)"
            >
              {{ char }}
            </span>
          </div>
        </div>
      </div>
      <p class="mt-2 text-center text-md">{{ item.text }}</p>
    </div>
  </div>
  <FormEmail />
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

const playVideo = () => {
  videoRef.value?.play();
};

const pauseVideo = () => {
  videoRef.value?.pause();
  videoRef.value.currentTime = 0; // 元に戻すなら
};

const setCharRef = (i, j, el) => {
  if (!charRefsList.value[i]) {
    charRefsList.value[i] = [];
  }
  charRefsList.value[i][j] = el;
};
import gsap from "gsap";
const thumbnail = [
  { src: "/images/thumbnail/momizi.webp", text: "観光案内HP" },
  { src: "/images/thumbnail/dance.webp", text: "クリエイター向けHP" },
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
