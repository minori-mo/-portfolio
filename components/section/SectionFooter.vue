<script setup lang="ts">
const p = usePublicPath();
const scrollTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};
</script>
<template>
  <ul class="sns">
    <li>
      <a href="" title="X" rel="noopener" target="_blank">
        <img :src="p('/images/slideShow/logoX.png')" alt="X" class="w-8 h-8" />
      </a>
    </li>
    <li>
      <a href="" title="Instagram" rel="noopener" target="_blank">
        <img
          :src="p('/images/slideShow/logoInstagram.svg')"
          alt="Instagram"
          class="w-8 h-8"
        />
      </a>
    </li>
    <li>
      <a href="" title="Facebook" rel="noopener" target="_blank">
        <img
          :src="p('/images/slideShow/logoFacebook.svg')"
          alt="Facebook"
          class="w-8 h-8"
        />
      </a>
    </li>
    <li>
      <a href="" title="Youtube" rel="noopener" target="_blank">
        <img
          :src="p('/images/slideShow/logoYoutube.svg')"
          alt="Youtube"
          class="w-10 h-9"
        />
      </a>
    </li>
  </ul>
  <footer>
    <ul class="w-full">
      <button @click="scrollTop" class="page-top" :style="{ background: `url(${p('/images/slideShow/upArrow.svg')}) center / contain no-repeat` }"></button>
      <li><a href="#top">TOP</a></li>
      <li><a href="">葛葉稲荷神社神社を知る</a></li>
      <li><a href="">葛葉稲荷神社の歴史</a></li>
      <li><a href="">境内のご案内</a></li>
      <li><a href="">御参拝・御祈祷・授与品</a></li>
      <li><a href="">行事</a></li>
      <li><a href="">茶寮・石尊</a></li>
      <li><a href="">自然</a></li>
      <li><a href="">アクセス</a></li>
    </ul>
    <p>© Kuzuha Inari Shrine.</p>
  </footer>
</template>

<style scoped lang="scss">
.sns {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin: 120px 0;
}
footer {
  font-family: "游明朝 Medium", "Yu Mincho Medium", "YuMincho Medium",
    "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif;
  color: #505050;
  margin: 0 auto 0;
  border-image: linear-gradient(#dfddd6, #dfddd6) fill 0 / 0 / 0 50vw;
  padding: 80px 24px 48px;
  max-width: 900px;
  margin: auto;
  ul {
    position: relative;
    line-height: 2;
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    text-orientation: upright;
    padding-right: 10%;
  }
  .page-top {
    cursor: pointer;
    overflow: hidden;
    position: absolute;
    top: -50px;
    right: 0;
    width: 42px;
    height: 42px;
    /* background はインラインスタイルで設定 */
  }
}
</style>
