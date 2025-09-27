<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const isMainShow = useState("isMainShow");
gsap.registerPlugin(ScrollTrigger);
const text = "祈りの聖地、人類の歴史";
const characters = ref([...text]);
const textContainer = ref(null);
const canvasRef = ref(null);

const isOpening = ref(true);

onMounted(() => {
  setTimeout(() => {
    isMainShow.value = true;
    const tl = gsap.timeline({
      onComplete: () => {
        // アニメーション完了後に要素削除
        isOpening.value = false;
      },
    });
    // 親要素のフェードアウト
    tl.to(
      ".canvas",
      {
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
      },
      0
    ); // ← "0" は開始タイミングを0秒に指定（同時開始）
    // 子要素の拡大
    tl.to(
      ".canvas-text",
      {
        scale: 1.2,
        duration: 1,
        ease: "power2.out",
      },
      0
    ); // 同じく0秒から同時に開始
  }, 4000);

  const spans = textContainer.value.querySelectorAll("p");
  gsap.to(spans, {
    color: "#ffffff", // Tailwindのpink-400に近い色
    stagger: 0.05,
    duration: 0.5,
    ease: "power1.out",
    delay: 0.1,
  });

  const canvas = canvasRef.value;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // しずくの定義
  class Drop {
    constructor() {
      this.reset();
    }
    reset() {
      // 雨のしずくの横の位置（X座標）**をランダムに決めます。
      this.x = Math.random() * canvas.width * 2;
      // 雨のしずくの縦の初期位置（Y座標）**を上方向に（マイナス）配置します。
      this.y = Math.random() * -canvas.height;
      const angleDeg = 50 + Math.random() * 15; // 角度（度数法）
      const speed = 30; // 全体スピード
      const angle = (angleDeg * Math.PI) / 180;
      // 落下速度（vy = velocity y）を4〜8の間でランダムに設定。
      this.vy = Math.sin(angle) * speed; // 下方向
      // 左方向のスピード（マイナス）
      this.vx = -Math.cos(angle) * speed; // 左方向
      // 雨粒の長さを 10〜30px の間でランダムに設定。
      this.len = 300 + Math.random() * 300;
      // 傾き（固定角度）：右上→左下に落ちる角度
      this.dx = Math.cos(angle) * this.len;
      this.dy = Math.sin(angle) * this.len;
    }
    draw() {
      // 雨粒を (x, y) から y + len までの縦の線として描画。
      ctx.beginPath();
      // 傾きを使って終点を計算（右上 → 左下への線）
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x - this.dx, this.y + this.dy);
      // 線の色を 半透明の白色に設定。
      ctx.strokeStyle = "rgba(255,255,255,0.2)";
      // 線の太さは
      ctx.lineWidth = 1.5;
      ctx.stroke();
      // YX座標を速度分だけ左下に移動して、落ちる動きを再現。
      this.x += this.vx;
      this.y += this.vy;
      // しずくが画面の下まで落ちたら、再び画面上からランダムな位置で再出現。
      if (this.y > canvas.height || this.x < -this.len) {
        this.reset();
        this.x = Math.random() * canvas.width * 2; // 右から再登場
      }
    }
  }
  // draw関数を200個生成
  const drops = Array.from({ length: 5 }, () => new Drop());
  const addRainDrops = (count: number) => {
    for (let i = 0; i < count; i++) {
      drops.push(new Drop());
    }
  };
  const render = () => {
    // Canvas 全体を消去します（前のフレームの雨粒の跡を消す）。
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // 雨粒の配列 drops の全要素（インスタンス）に対して .draw() を呼び出しています。
    // 各Dropオブジェクトの描画処理（ctx.beginPath() など）が実行されます。
    // draw() の中で位置も更新されているため、アニメーションが進行します。
    drops.forEach((d) => d.draw());
    // 次のフレームで render 関数をもう一度呼び出すようにスケジュールします
    requestAnimationFrame(render);
  };

  setTimeout(() => {
    render();
    const interval = setInterval(() => {
      if (drops.length < 50) {
        addRainDrops(10);
      } else {
        clearInterval(interval);
      }
    }, 500); // 1秒ごとに10個追加
  }, 1500);
});
</script>

<template>
  <div class="absolute w-full h-screen">
    <div v-if="isOpening" class="canvas relative h-full bg-black">
      <canvas
        ref="canvasRef"
        class="w-full h-full absolute top-0 left-0 z-0"
      ></canvas>
      <div class="relative z-10 text-white text-center pt-40">
        <div class="flex items-center justify-center">
          <div ref="textContainer" class="canvas-text vertical-text">
            <p
              v-for="(char, index) in characters"
              :key="index"
              class="block text-black text-3xl transition-colors duration-500"
            >
              {{ char }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
canvas {
  display: block;
  pointer-events: none;
}
.vertical-text {
  font-family: "游明朝 Medium", "Yu Mincho Medium", "YuMincho Medium",
    "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif;
  display: flex;
  align-items: center;
  writing-mode: vertical-rl;
}
</style>
