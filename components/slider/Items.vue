<template>
  <section class="pt-30">
    <HeadingSubtitle
      class="fade-up-title"
      main-text="Phoneの魅力を紹介します"
      sub-text=""
    />
    <!-- <div class="relative w-full overflow-hidden"> -->
    <!-- 商品リスト -->
    <!-- <div
      ref="scrollContainer"
      class="flex overflow-x-auto scroll-smooth space-x-4 px-4 scrollbar-hide fade-group"
      > -->
    <div class="relative w-full">
      <div
        ref="scrollContainer"
        class="flex space-x-4 px-4 scrollbar-hide fade-group"
      >
        <div
          v-for="(item, index) in sliderItems"
          :key="index"
          class="flex items-center justify-center cursor-pointer fade-up"
          @click="openModal"
        >
          <div class="relative w-[250px] h-[450px] md:w-[300px] md:h-[500px]">
            <!-- 背景画像 -->
            <img
              :src="item.src"
              alt="背景画像"
              class="w-full h-full rounded-xl object-fill"
            />
            <!-- 重ねるテキスト -->
            <div class="absolute top-6 left-6">
              <p class="text-md" :class="`text-${item.color}`">
                {{ item.subText }}
              </p>
              <p
                class="text-2xl font-bold leading-tight"
                :class="`text-${item.color}`"
              >
                {{ item.text1 }}
              </p>
              <p
                class="text-2xl font-bold leading-tight"
                :class="`text-${item.color}`"
              >
                {{ item.text2 }}
              </p>
            </div>
            <div class="absolute bottom-6 right-6">
              <button @click="openModal">
                <span
                  class="material-icons-outlined icon-arrow text-white rounded-full bg-gray-600"
                >
                  add
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end pt-8 pt-8 md:px-12">
      <SliderButton @leftClick="scrollLeft" @rightClick="scrollRight" />
    </div>
  </section>

  <transition name="fade">
    <ModalIphone :isOpen="isOpen" @close="closeModal" />
  </transition>
</template>

<script setup>
const sliderItems = [
  {
    src: "/images/slider/hanabi.webp",
    text1: "すみずみまで、",
    text2: "あなたらしく。",
    subText: "カスタマイズ",
    color: "white",
  },
  {
    src: "/images/slider/battery.webp",
    text1: "スピードのスタミナも。",
    text2: "",
    subText: "チップとバッテリー",
    color: "white",
  },
  {
    src: "/images/slider/dog.webp",
    text1: "あなたのデータは、",
    text2: "あなたの場所に。",
    subText: "プライバシー",
    color: "black",
  },
  {
    src: "/images/slider/dog2.webp",
    text1: "想像以上の写真と",
    text2: "ビデオを撮ろう。",
    subText: "先進的なカメラ",
    color: "white",
  },
  {
    src: "/images/slider/mori.webp",
    text1: "もしもの圏外にも、",
    text2: "備えています。",
    subText: "安全機能",
    color: "white",
  },
  {
    src: "/images/slider/hanabi.webp",
    text1: "すみずみまで、",
    text2: "あなたらしく。",
    subText: "カスタマイズ",
    color: "white",
  },
  {
    src: "/images/slider/battery.webp",
    text1: "スピードのスタミナも。",
    text2: "",
    subText: "チップとバッテリー",
    color: "white",
  },
  {
    src: "/images/slider/dog.webp",
    text1: "あなたのデータは、",
    text2: "あなたの場所に。",
    subText: "プライバシー",
    color: "black",
  },
];

const scrollContainer = ref(null);
const scrollAmount = ref(316); // 初期値
const updateScrollAmount = () => {
  const width = window.innerWidth;
  if (width < 768) {
    scrollAmount.value = 266; // sm〜md未満
  } else {
    scrollAmount.value = 316; // md以上
  }
};

const scrollLeft = () => {
  scrollContainer.value?.scrollBy({
    left: -scrollAmount.value,
    behavior: "smooth",
  });
};

const scrollRight = () => {
  scrollContainer.value?.scrollBy({
    left: scrollAmount.value,
    behavior: "smooth",
  });
};
const isOpen = ref(false);
const openModal = () => {
  document.body.style.overflow = "hidden"; // 背景スクロール防止
  isOpen.value = true;
};
const closeModal = () => {
  document.body.style.overflow = ""; // 背景スクロール防止
  isOpen.value = false;
  scrollRight();
};
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
onMounted(() => {
  updateScrollAmount();
  window.addEventListener("resize", updateScrollAmount);
});
// イベントリスナーの解除
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateScrollAmount);
});
onMounted(() => {
  const items = gsap.utils.toArray(".fade-group");
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.icon-arrow {
  font-size: 36px !important;
}
</style>
