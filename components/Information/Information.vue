<script setup>
const news = [
  {
    date: "2025年8月30日",
    link: "",
    text: "令和7年度「第10回江戸川花火大会」（10月1日）開催のお知らせ",
  },
  {
    date: "2025年9月30日",
    link: "",
    text: "令和7年度「第10回江戸川花火大会」（10月1日）開催のお知らせ",
  },
  {
    date: "2025年10月30日",
    link: "",
    text: "令和7年度「第10回江戸川花火大会」（10月1日）開催のお知らせ",
  },
  {
    date: "2025年11月30日",
    link: "",
    text: "令和7年度「第10回江戸川花火大会」（10月1日）開催のお知らせ",
  },
  {
    date: "2025年10月30日",
    link: "",
    text: "令和7年度「第10回江戸川花火大会」（10月1日）開催のお知らせ",
  },
  {
    date: "2025年11月30日",
    link: "",
    text: "令和7年度「第10回江戸川花火大会」（10月1日）開催のお知らせ",
  },
];
const slideIn = ref([]);
onMounted(() => {
  useSlideInAnimation(slideIn.value);
});
</script>
<template>
  <div :ref="(el) => (slideIn[0] = el)" class="p-latest">
    <section>
      <h2 class="title">今後のイベント</h2>
      <dl class="info-list">
        <div class="inner">
          <template v-for="(item, index) in news">
            <dt>{{ item.date }}</dt>
            <dd>
              <a :href="item.link">{{ item.text }}</a>
            </dd>
          </template>
        </div>
      </dl>
    </section>
  </div>
</template>

<style scoped lang="scss">
.p-latest {
  font-family: "游明朝 Medium", "Yu Mincho Medium", "YuMincho Medium",
    "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif;
  margin: 120px auto 0;
  max-width: 824px;
  .title {
    position: relative;
    padding-bottom: 1em;
    color: #2c3232;
    font-size: 1.4375rem;
    line-height: 1.2;
    letter-spacing: 0.16em;
    text-align: center;
    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      border-bottom: 1px solid transparent;
      border-image: linear-gradient(
          to left,
          rgba(220, 221, 221, 0),
          #dcdddd 25%,
          #dcdddd 75%,
          rgba(220, 221, 221, 0)
        )
        fill 1 / 1 / 0;
    }
  }
  .info-list {
    line-height: 1.8;
    width: fit-content;
    margin: 0 auto;
    padding: 24px 0;
    .inner {
      padding: 0 24px;
      max-height: 200px;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      will-change: scroll-position;
      overscroll-behavior: none auto;
      scrollbar-width: auto;
      scrollbar-color: #ededed #fafafa;
    }
    dt {
      color: #3b5d43;
      font-size: 0.75rem;
      margin-top: 0.5em;
    }
    dd {
      color: #323232;
      font-size: 0.875rem;
      letter-spacing: 0.1em;
      a {
        padding-bottom: 0.1em;
        background: linear-gradient(#e1e1e1, #e1e1e1) right bottom / 0 1px
          no-repeat;
        &:hover {
          background-position: left bottom;
          background-size: 100% 1px;
          transition-duration: 0.2s;
        }
      }
    }
  }
}
</style>
