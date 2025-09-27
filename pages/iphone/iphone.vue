<template>
  <main>
    <LayoutToHomeButton />
    <LayoutHeader />
    <div class="min-h-screen bg-white px-4 max-w-[1400px] m-auto">
      <HeroMainVisual />
      <SliderItems />
      <SliderGoods />
      <ToggleOpenUpDown />
    </div>
    <FooterIphone />
  </main>
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
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".feedIn", {
    y: 100, // 100px 下から
    opacity: 0, // 完全に透明
    duration: 0.8, // 秒数
    ease: "power2.out",
    stagger: 0.3,
  });
  gsap.utils.toArray(".fade-up-title").forEach((group) => {
    gsap.from(group, {
      opacity: 0,
      y: 100,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: group,
        start: "top 80%", // 要素がビューポートの80%に入ったら発火
        toggleActions: "play none none none",
      },
    });
  });
  gsap.utils.toArray(".fade-item").forEach((items) => {
    gsap.from(".fade-item", {
      opacity: 0,
      y: 100,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: items,
        start: "top 80%", // 要素がビューポートの80%に入ったら発火
        toggleActions: "play none none none",
      },
    });
  });
});
</script>

<style scoped></style>
