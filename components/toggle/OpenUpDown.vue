<template>
  <section class="py-16">
    <HeadingSubtitle
      class="fade-up-title"
      main-text="Phoneのパートナーたち。"
      sub-text=""
    />
    <div class="bg-gray-100 rounded-xl p-8 fade-item">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="border-b border-gray-300"
      >
        <button
          @click="toggle(index)"
          class="w-full flex justify-between items-center py-4 bg-gray-100 font-semibold text-lg"
        >
          <span>{{ item.title }}</span>
          <span
            class="material-icons-outlined icon-arrow text-gray-400 transition-transform duration-300"
            :class="{ 'rotate-180': activeIndex === index }"
            style="font-size: 35px"
          >
            expand_more
          </span>
        </button>

        <Transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
          <div v-show="activeIndex === index" class="overflow-hidden">
            <div>
              <div class="py-2">
                {{ item.content }}
              </div>
              <img :src="item.src" alt="背景画像" class="h-hull mx-auto" />
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap"; // GSAPをインポート

const items = [
  {
    title: "PhoneとPC",
    content:
      "Phoneミラーリングを使うと、MacでPhoneの画面を見たり操作することができます。Phoneを取り出す必要はありません。連係機能により、Macから電話に出るのもメッセージに返信するのも自由自在。iPhone上でコピーした画像、ビデオ、テキストを、Mac上の別のアプリにペーストするのも簡単です。iCloudに保存したファイルには、どちらのデバイスからでもアクセスできます。",
    src: "/images/toggle/pc.webp",
  },
  {
    title: "PhoneとWatch",
    content:
      "Phoneでグループ写真を撮る時は、Watchをファインダーにして撮影すれば、あなたもみんなと一緒に写れます。Watchで電話に出たあと、iPhoneをタップしてiPhoneで会話を続けることもできます。",
    src: "/images/toggle/watch.webp",
  },
  {
    title: "Phoneとイヤホン",
    content:
      "Earphoneの設定はPhone上でタップするだけ。適応型オーディオは、一日を通じて変化する環境や周りの人とのやり取りに合わせて、あなたの代わりにノイズコントロールを自動的に調整。最高のリスニング体験をお届けします。",
    src: "/images/toggle/earphone.webp",
  },
];

// 初期表示時に一番上の要素（インデックス0）を開く
const activeIndex = ref(0);

const toggle = (index) => {
  // クリックされた要素が既に開いている場合は何もしない
  if (activeIndex.value === index) {
    return;
  }
  // 他の要素がクリックされた場合は、その要素を開く
  activeIndex.value = index;
};

// Transition フック
const beforeEnter = (el) => {
  // Enterトランジション開始前の初期状態（非表示）
  el.style.height = "0";
};

const enter = (el, done) => {
  // Enterトランジション中のアニメーション
  // gsap.to()で高さをscrollHeightまでアニメーション
  gsap.to(el, {
    height: el.scrollHeight, // 目標の高さ
    duration: 0.3, // アニメーション時間（秒）
    ease: "power2.inOut", // イージング関数
    onComplete: () => {
      el.style.height = "auto"; // アニメーション完了後に高さを'auto'に戻す
      done(); // Vueにアニメーション完了を通知
    },
  });
};

const leave = (el, done) => {
  // Leaveトランジション中のアニメーション
  // 現在の高さから0までアニメーション
  gsap.to(el, {
    height: 0, // 目標の高さ
    duration: 0.3, // アニメーション時間（秒）
    ease: "power2.inOut", // イージング関数
    onComplete: done, // Vueにアニメーション完了を通知
  });
};
</script>

<style scoped></style>
