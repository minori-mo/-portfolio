<template>
  <section class="py-16">
    <HeadingSubtitle
      class="fade-up-title"
      main-text="ランナップはこちら。"
      sub-text=""
    />
    <div
      ref="scrollContainer"
      class="flex space-x-4 px-4 scrollbar-hide fade-group-goods"
    >
      <div
        v-for="(item, index) in sliderItems"
        :key="index"
        class="flex items-center justify-center fade-up"
        @click="openModal"
      >
        <div class="pt-10 px-10 text-center">
          <div class="mb-6">
            <img
              :src="item.src"
              :alt="item.text1"
              class="min-w-[185px] md:min-w-[200px] rounded-lg"
            />
          </div>
          <h2 class="text-3xl font-bold mb-4">{{ item.text1 }}</h2>
          <p class="mb-6">
            {{ item.subText }}
          </p>
          <div class="font-bold mb-6">
            <p>{{ item.price.toLocaleString() }}（税込）</p>
          </div>
          <div class="text-sm">
            <button
              class="bg-blue-500 text-white px-4 font-bold py-2 rounded-full hover:bg-blue-700 mr-2 md:mr-4 cursor-pointer"
            >
              さらに詳しく
            </button>
            <button
              class="border border-blue-600 font-bold text-blue-600 px-6 py-2 rounded-full hover:bg-blue-500 hover:text-white cursor-pointer"
            >
              購入
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end pt-8 md:px-12">
      <SliderButton @leftClick="scrollLeft" @rightClick="scrollRight" />
    </div>
  </section>
</template>

<script setup>
const p = usePublicPath();
const sliderItems = [
  {
    src: p("/images/slider/goods.webp"),
    text1: "Phone100",
    subText: "究極のPhone",
    price: 160000,
  },
  {
    src: p("/images/slider/goods.webp"),
    text1: "Phone99",
    subText: "チップとバッテリー",
    price: 160000,
  },
  {
    src: p("/images/slider/goods.webp"),
    text1: "Phone98",
    subText: "プライバシー",
    price: 160000,
  },
  {
    src: p("/images/slider/goods.webp"),
    text1: "Phone97",
    subText: "先進的なカメラ",
    price: 160000,
  },
  {
    src: p("/images/slider/goods.webp"),
    text1: "Phone96",
    subText: "安全機能",
    price: 160000,
  },
  {
    src: p("/images/slider/goods.webp"),
    text1: "Phone95",
    subText: "カスタマイズ",
    price: 160000,
  },
  {
    src: p("/images/slider/goods.webp"),
    text1: "Phone94",
    subText: "チップとバッテリー",
    price: 160000,
  },
  {
    src: p("/images/slider/goods.webp"),
    text1: "Phone93",
    subText: "プライバシー",
    price: 160000,
  },
];
const scrollContainer = ref(null);
const scrollLeft = () => {
  scrollContainer.value?.scrollBy({ left: -286, behavior: "smooth" });
};

const scrollRight = () => {
  scrollContainer.value?.scrollBy({ left: 286, behavior: "smooth" });
};
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
onMounted(() => {
  const items = gsap.utils.toArray(".fade-group-goods");
  let completedCount = 0;
  const total = items.length;
  gsap.registerPlugin(ScrollTrigger);
  items.forEach((group) => {
    const items = group.querySelectorAll(".fade-up");
    gsap.from(items, {
      opacity: 0,
      y: 100,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: group,
        start: "top 80%", // 要素がビューポートの80%に入ったら発火
        toggleActions: "play none none none",
      },
      onComplete: () => {
        completedCount++;
        if (completedCount === total) {
          scrollContainer.value.classList.add("overflow-x-auto");
        }
      },
    });
  });
});
</script>

<style scoped>
.scrollbar-hide {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}
.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}
</style>
