<script setup lang="ts">
const p = usePublicPath();
const slideIn = ref([]);
const parallax = ref();
onMounted(() => {
  useSlideInAnimation(slideIn.value);
  useScrollAnimation(slideIn.value[0], parallax.value);
});
</script>
<template>
  <section :ref="(el) => slideIn.push(el)" class="parallax-wrapper">
    <!-- 表示領域を制限 -->
    <div class="w-full h-full overflow-hidden relative">
      <img
        ref="parallax"
        :src="p('/images/slideShow/scroll.jpg')"
        class="absolute top-0 left-0 w-full parallax-img"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.parallax-wrapper {
  height: 500px; /* 表示させる範囲 */
  margin-top: 160px;
  margin-bottom: 200px;
}
</style>
