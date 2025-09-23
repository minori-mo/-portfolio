<script setup lang="ts">
const isMainShow = useState("isMainShow", () => false);
onMounted(() => {
  useDelayAnimation(displayAnimation.value);
});
const displayAnimation = ref();
</script>
<template>
  <div>
    <div class="relative">
      <HeroOpening />
      <Slideshow
        class="absolute z-10 opacity-0 transition-opacity duration-3000"
        :class="{ 'opacity-100': isMainShow }"
      />
    </div>
    <div ref="displayAnimation" class="relative" v-if="isMainShow">
      <Information />
      <SectionContent />
      <SectionImageBar />
      <SectionImageCard />
      <SectionFooter />
    </div>
  </div>
</template>

<style>
html {
  overflow-y: scroll; /* 常に縦スクロールバーを表示する */
}
</style>
