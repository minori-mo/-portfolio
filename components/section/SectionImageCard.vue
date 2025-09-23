<script setup lang="ts">
const slideIn = ref([]);
onMounted(() => {
  useSlideInAnimation(slideIn.value);
});
</script>
<template>
  <section class="flex">
    <div class="relative w-1/2 text" style="overflow: hidden">
      <img class="w-full object-cover" src="/images/slideShow/yukata.webp" />
      <div class="absolute inset-0 flex items-center justify-center">
        <h2 class="title">御参拝・御祈祷・授与品</h2>
      </div>
      <div class="lead">
        <p class="absolute bottom-7 left-18">
          御祈祷や御朱印、 <br />各授与品についてご紹介します。
        </p>
        <a href="" class="absolute bottom-4 left-7 group">
          もっと読む
          <span
            class="absolute top-0 right-0 w-[1.5px] h-[75%] bg-white transition-[height] duration-500 ease-out group-hover:h-0"
          ></span>
          <span
            class="material-icons"
            style="text-orientation: upright; font-size: 20px"
            >open_in_new</span
          >
        </a>
      </div>
    </div>
    <div class="relative w-1/2 text">
      <img class="h-full object-cover" src="/images/slideShow/maturi.webp" />
      <div class="absolute inset-0 flex items-center justify-center">
        <h2 class="title">行事</h2>
      </div>
      <div class="lead">
        <p class="absolute bottom-7 left-18">
          歴史を重ね、現代に続く <br />行事の数々をご紹介します。
        </p>
        <a href="" class="absolute bottom-4 left-7 group">
          もっと読む
          <span
            class="absolute top-0 right-0 w-[1.5px] h-[75%] bg-white transition-[height] duration-500 ease-out group-hover:h-0"
          ></span>
          <span
            class="material-icons"
            style="text-orientation: upright; font-size: 20px"
            >open_in_new</span
          >
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.text {
  font-family: "游明朝 Medium", "Yu Mincho Medium", "YuMincho Medium",
    "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif;
  color: white;
  writing-mode: vertical-rl;
  height: 600px;
  text-shadow: 0 0 4px rgb(0, 0, 0), 0 0 16px rgba(0, 0, 0);
  .title {
    letter-spacing: 0.15em;
    font-size: 1.5rem;
    font-weight: 400;
  }
  .lead {
    margin-block-start: 1em;
    padding-inline-start: 1.6666em;
    letter-spacing: 0.12em;
    font-size: 1rem;
    line-height: 1.75rem;
    a {
      font-size: 0.8rem;
    }
  }
}
</style>
