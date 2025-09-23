<script setup>
const slideIn = ref([]);
const hoverAnimation = ref([]);
onMounted(() => {
  useSlideInAnimation(slideIn.value);
  useHoverAnimation(hoverAnimation.value);
});
</script>
<template>
  <div>
    <section :ref="(el) => slideIn.push(el)">
      <div :ref="(el) => hoverAnimation.push(el)" class="cloud">
        <img src="/images/slideShow/cloud.png" />
      </div>
      <div class="text">
        <h2 class="title">葛葉稲荷神社を知る</h2>
        <p class="lead">
          関東の守護としてそびえる霊峰に、<br />
          遥か神代の昔より鎮まり、<br />人々の祈りと共に歩んできた<br />葛葉稲荷神社。<br />
          その深き御由緒と御祭神、<br />そして今日まで受け継がれる詣の<br />
          信仰と文化を紐解きます。
        </p>
      </div>
      <figure class="order"><img src="/images/slideShow/0.webp" /></figure>
    </section>
    <section :ref="(el) => slideIn.push(el)">
      <div :ref="(el) => hoverAnimation.push(el)" class="cloud right">
        <img src="/images/slideShow/cloud.png" />
      </div>
      <div class="text">
        <h2 class="title">葛葉稲荷神社に残る</h2>
        <h2 class="title">願いの歴史</h2>
        <p class="lead">
          葛葉稲荷神社には、<br />
          あらゆる人々の願いに<br />寄り添い続けてきた悠久の歴史があります。<br />その「願いの歴史」を、紐解いていきます。<br />
        </p>
      </div>
      <figure><img src="/images/slideShow/1.webp" /></figure>
    </section>
    <section :ref="(el) => slideIn.push(el)">
      <div :ref="(el) => hoverAnimation.push(el)" class="cloud">
        <img src="/images/slideShow/cloud.png" />
      </div>
      <div class="text">
        <h2 class="title">境内のご案内</h2>
        <p class="lead">
          霊山に広がる神域を、<br />
          境内各所と共にご案内します。
        </p>
      </div>
      <figure class="order"><img src="/images/slideShow/2.webp" /></figure>
    </section>
  </div>
</template>

<style scoped lang="scss">
section {
  display: flex;
  align-items: center;
  margin-top: 160px;
  padding-bottom: 40px;
  max-width: 1400px;
  position: relative;
  .cloud {
    position: absolute;
    opacity: 0.6;
    width: 70vw;
    bottom: 50px;
    &.right {
      right: 0;
      transform: scale(-1, 1);
    }
  }
  .text {
    font-family: "游明朝 Medium", "Yu Mincho Medium", "YuMincho Medium",
      "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif;
    color: #323232;
    writing-mode: vertical-rl;
    margin: auto;
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
    }
  }
  figure {
    justify-self: flex-end;
    &.order {
      order: -1;
    }
    img {
      vertical-align: middle;
      height: 500px;
    }
  }
}
</style>
