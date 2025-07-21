<template>
  <div
    class="max-w-xl mx-auto mt-20 p-8 bg-white rounded-2xl shadow-xl space-y-6"
  >
    <h2 class="text-2xl font-bold text-gray-800">お問い合わせ</h2>

    <form @submit.prevent="submitForm" class="space-y-5">
      <!-- 名前 -->
      <div>
        <label class="block text-md font-medium text-gray-600 mb-1"
          >お名前（必須）</label
        >
        <div class="flex">
          <span
            class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
              />
            </svg>
          </span>
          <input
            v-model="form.name"
            type="text"
            class="text-xl w-full px-4 py-4 border border-gray-300 rounded-lg rounded-l-none"
            placeholder="山田 太郎"
            required
          />
        </div>
      </div>

      <!-- メール -->
      <div>
        <label class="block text-md font-medium text-gray-600 mb-1"
          >メールアドレス（必須）</label
        >
        <div class="flex">
          <span
            class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path
                d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
              />
              <path
                d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
              />
            </svg>
          </span>
          <input
            v-model="form.email"
            type="email"
            class="text-xl w-full px-4 py-4 border border-gray-300 rounded-lg rounded-l-none"
            placeholder="example@example.com"
            required
          />
        </div>
      </div>
      <!-- 希望日時（複数追加可能） -->
      <div>
        <label class="block text-md font-medium text-gray-600 mb-2"
          >ヒヤリング希望日時（複数選択可）</label
        >

        <div class="space-y-2">
          <div
            v-for="(dt, index) in form.dateTimes"
            :key="index"
            class="flex items-center space-x-2"
          >
            <input
              v-model="form.dateTimes[index]"
              type="datetime-local"
              class="text-xl flex-1 px-3 py-4 border border-gray-300 rounded-lg"
            />
            <button
              type="button"
              @click="removeDatetime(index)"
              class="text-red-500 hover:text-red-700 cursor-pointer"
            >
              ×
            </button>
          </div>
          <button
            type="button"
            @click="addDatetime"
            class="text-md underline cursor-pointer"
          >
            + 日時を追加
          </button>
        </div>
      </div>

      <!-- 本文 -->
      <div>
        <label class="block text-md font-medium text-gray-600 mb-1"
          >あなたの事業を教えてください</label
        >
        <textarea
          v-model="form.message1"
          rows="5"
          class="text-lg w-full px-4 py-2 border border-gray-300 rounded-lg"
          placeholder="あなたの事業と、どのような仕事かをご記入ください"
        ></textarea>
      </div>
      <div>
        <label class="block text-md font-medium text-gray-600 mb-1"
          >どのようなホームページにしたいか具体例があれば教えてください</label
        >
        <textarea
          v-model="form.message2"
          rows="5"
          class="text-lg w-full px-4 py-2 border border-gray-300 rounded-lg"
          placeholder="商品名、企業名、urlを教えてください"
        ></textarea>
      </div>

      <!-- 送信ボタン -->
      <div class="text-center relative">
        <button
          type="submit"
          class="px-6 py-2 bg-white border font-semibold rounded-lg shadow hover:bg-gray-100 cursor-pointer"
          :disabled="sending"
        >
          <span v-if="sending">送信中...</span>
          <span v-else-if="!sending">送信する</span>
        </button>
        <div
          ref="messageRef"
          class="absolute transform left-1/2 -translate-x-1/2 bottom-10 mb-2 px-4 py-2 bg-green-500 text-white text-sm rounded shadow pointer-events-none opacity-0 text-center"
        >
          <div class="material-icons-outlined text-white mail-icon">
            mark_email_read
          </div>
          <p>メッセージが送信されました</p>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
const messageRef = ref(null);
const form = reactive({
  name: "",
  email: "",
  dateTimes: [""], // 最初は1つだけ表示
  message1: "",
  message2: "",
});
const addDatetime = () => {
  form.dateTimes.push("");
};

const removeDatetime = (index) => {
  if (form.dateTimes.length !== 1) {
    form.dateTimes.splice(index, 1);
  } else {
    form.dateTimes = [""];
  }
};

import { gsap } from "gsap";
const sending = ref(false);
const submitForm = async () => {
  const dateTimes = form.dateTimes.join(", ");
  sending.value = true;
  try {
    const response = await fetch(
      "https://5tagaln0ad.execute-api.ap-northeast-1.amazonaws.com/send-mail",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: dateTimes + "," + form.message1 + "," + form.message2,
        }),
      }
    );
    console.log(response);
    const msg = messageRef.value;
    // 初期状態に戻す
    gsap.set(msg, { opacity: 0, y: 0 });
    // アニメーション表示
    gsap.to(msg, {
      opacity: 1,
      y: -10,
      duration: 0.6,
      ease: "power2.out",
    });
    // フェードアウトして非表示に
    gsap.to(msg, {
      opacity: 0,
      y: -40,
      delay: 1.5, // 表示から1秒後
      duration: 0.5,
      ease: "power1.in",
    });
  } catch (error) {
    console.log(response);
    alert("お問い合わせの送信に失敗しました");
  } finally {
    sending.value = false;
  }
};
</script>
<style scoped>
.fly-message-enter-active {
  animation: flyUp 0.6s none;
}
.fly-message-leave-active {
  opacity: 0;
  transition: opacity 1s ease-in;
}

@keyframes flyUp {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  50% {
    transform: translateY(-20px);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
.mail-icon {
  font-size: 40px !important;
}
</style>
