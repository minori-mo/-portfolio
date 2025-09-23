<template>
  <div class="parent" @mousedown="handleTouchStart" @mouseup="handleTouchEnd">
    <div v-for="(box, i) in boxes" :key="i" :class="`box${i}`">box</div>
    <!-- <canvas ref="canvas" id="canvas" width="300" height="300"></canvas> -->
    <!-- <div class="pointer-events-none select-none">
      <img src="/images/slideShow/0.webp" />
    </div> -->
    <div class="flex gap-2 w-full max-w-md">
      <div
        v-for="(bar, i) in 3"
        :key="i"
        class="relative flex-1 h-1 bg-gray-400 overflow-hidden rounded-sm"
      >
        <div
          :ref="(el) => (bars[i] = el)"
          class="absolute top-0 left-0 h-1 bg-white w-0 rounded-sm"
        ></div>
        <div
          :ref="(el) => (barsGray[i] = el)"
          class="absolute top-0 left-0 h-1 bg-gray-400 w-0 rounded-sm"
        ></div>
      </div>
    </div>
  </div>
  <!-- <div class="relative w-full h-screen">
    <img
      src="/images/slideShow/0.webp"
      alt="背景"
      class="absolute inset-0 w-full h-full object-cover"
    />

    <div
      class="absolute inset-0 flex items-center justify-center text-white text-4xl"
      style="writing-mode: vertical-rl; text-orientation: upright"
    >
      縦書きのテキストaaaaaaaaa
    </div>
  </div> -->

  <section class="flex">
    <div class="relative w-1/2">
      <img src="/images/slideShow/0.webp" />
      <div class="absolute top-1/2 left-1/2">
        <h2 class="title">葛葉稲荷神社を知る</h2>
        <p class="lead">
          関東の守護としてそびえる霊峰に、<br />
          遥か神代の昔より鎮まり、<br />人々の祈りと共に歩んできた<br />葛葉稲荷神社。<br />
          その深き御由緒と御祭神、<br />そして今日まで受け継がれる詣の<br />
          信仰と文化を紐解きます。
        </p>
      </div>
    </div>
    <div class="relative w-1/2">
      <img class="" src="/images/slideShow/0.webp" />
      <div class="absolute top-1/2 left-1/2">
        <h2 class="title">葛葉稲荷神社を知る</h2>
        <p class="lead">
          関東の守護としてそびえる霊峰に、<br />
          遥か神代の昔より鎮まり、<br />人々の祈りと共に歩んできた<br />葛葉稲荷神社。<br />
          その深き御由緒と御祭神、<br />そして今日まで受け継がれる詣の<br />
          信仰と文化を紐解きます。
        </p>
      </div>
    </div>
  </section>
  <a href="#" class="relative pr-4 writing-vertical group">
    サンプルリンク
    <!-- 線 -->
    <span
      class="absolute top-0 right-0 w-[2px] h-full bg-black transition-[height] duration-500 ease-out group-hover:h-0"
    ></span>
  </a>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
const boxes = ["A", "B", "C"]; // ダミーのデータ
const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });

onMounted(() => {
  // tl.to(".box0", { x: 60, duration: 1 })
  //   .to(".box1", { x: 60, duration: 1 })
  //   .to(".box2", { x: 60, duration: 1 });
  runIndicator();
});
// const currentIndex = ref(0);

// const touchStartX = ref(0);
// const touchEndX = ref(0);
// const startX = ref(0);
// const endX = ref(0);
// function handleTouchStart(e) {
//   startX.value = e.type.includes("mouse")
//     ? e.clientX
//     : e.changedTouches[0].clientX;
// }

// function handleTouchEnd(e) {
//   endX.value = e.type.includes("mouse")
//     ? e.clientX
//     : e.changedTouches[0].clientX;
//   console.log(startX.value);
//   // checkSwipe();
// }

// function checkSwipe() {
//   const distance = touchEndX.value - touchStartX.value;

//   if (distance > 50) {
//     prevSlide();
//   } else if (distance < -50) {
//     nextSlide();
//   }
// }

// function nextSlide() {
//   currentIndex.value = (currentIndex.value + 1) % images.length;
// }

// function prevSlide() {
//   currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
// }
/* -------------------------------------プログレスバー-------------------------------------- */
const bars = ref([]);
const barsGray = ref([]);
const runIndicator = () => {
  const tlBar = gsap.timeline({ repeat: -1 });
  bars.value.forEach((bar, i) => {
    tlBar.fromTo(
      bar,
      { width: "0%" },
      { width: "100%", duration: 6, ease: "linear" },
      "<"
    );
    tlBar.fromTo(
      barsGray.value[i],
      { width: "0%" },
      { width: "100%", duration: 0.5, ease: "linear" }
    );
  });
};
</script>

<style scoped>
/* .parent {
  background: lightblue;
  padding: 50px;
  display: inline-block;
}

.box {
  background: pink;
  padding: 20px;
  display: inline-block;
} */
.parent {
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 100vh;
  margin: 0;
  overflow: hidden;
}

#canvas {
  height: 80vh;
  max-height: 300px;
  overflow: visible;
  border: solid 2px white;
}
.writing-vertical {
  writing-mode: vertical-rl; /* 縦書き */
  text-orientation: upright; /* 文字を立てる */
}
</style>
