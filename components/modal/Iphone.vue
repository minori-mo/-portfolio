<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 bg-black/50 overflow-y-auto">
    <!-- モーダル本体：高さ制限なし・中央寄せ -->
    <div class="min-h-screen flex items-start justify-center py-10">
      <div
        class="relative bg-white w-[95%] md:w-[80%] max-w-[800px] p-4 md:p-6 rounded-lg shadow-xl"
      >
        <!-- 閉じるボタン（右上固定） -->
        <div class="sticky top-5 right-0 z-10 flex justify-end">
          <button
            @click="emit('close')"
            class="rounded-full bg-gray-200 w-[36px] h-[36px]"
          >
            <p
              class="material-icons-outlined text-gray-600 cursor-pointer transition align-bottom"
            >
              close
            </p>
          </button>
        </div>
        <!-- モーダル内容：縦に長くても本体にスクロールバーは出ない -->
        <p class="text-sm mb-4">プライバシー</p>
        <h2 class="text-3xl font-bold mb-10">
          あなたのデータは、あなたの場所に。
        </h2>
        <div class="bg-gray-100 rounded-lg mb-10">
          <div class="flex-1 p-5 md:p-10">
            <p class="text-xl font-medium mb-2">
              画期的なプライバシー保護機能。
            </p>
            <p class="text-xl font-medium text-gray-600">
              Intelligenceは、オンデバイス処理によってPhoneに組み込まれます。プライベートクラウドコンピューティングにより、
              Intelligenceはシリコンが動かす一段と大規模な自社設計のサーバベースモデルを利用して、一段と複雑な要求に応えることができます。もちろん、プライバシーは強固です
            </p>
          </div>
          <div class="flex-1">
            <img
              :src="p('/images/modal/zou.webp')"
              alt="背景画像"
              class="rounded-lg rounded-t-none w-full"
            />
          </div>
        </div>
        <div class="bg-gray-100 rounded-lg">
          <div class="flex-1 p-5 md:p-10">
            <p class="text-xl font-medium mb-2">
              画期的なプライバシー保護機能。
            </p>
            <p class="text-xl font-medium text-gray-600">
              Intelligenceは、オンデバイス処理によってPhoneに組み込まれます。プライベートクラウドコンピューティングにより、
              Intelligenceはシリコンが動かす一段と大規模な自社設計のサーバベースモデルを利用して、一段と複雑な要求に応えることができます。もちろん、プライバシーは強固です
            </p>
          </div>
          <div class="flex-1">
            <img
              :src="p('/images/modal/sika.webp')"
              alt="背景画像"
              class="rounded-lg rounded-t-none w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: true,
});
const emit = defineEmits(["close"]);
const p = usePublicPath();
</script>
