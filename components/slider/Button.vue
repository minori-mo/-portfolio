<template>
  <!-- 左スクロールボタン -->
  <button @click="emit('leftClick')" class="pr-6">
    <span
      class="material-icons-outlined icon-arrow text-gray-600 rounded-full bg-gray-200 cursor-pointer transition"
    >
      arrow_left
    </span>
  </button>
  <!-- 右スクロールボタン -->
  <button @click="emit('rightClick')">
    <span
      class="material-icons-outlined icon-arrow text-gray-600 rounded-full bg-gray-200 cursor-pointer transition"
    >
      arrow_right
    </span>
  </button>
</template>

<script setup>
const emit = defineEmits(["leftClick", "rightClick"]);
</script>

<style scoped>
.icon-arrow {
  font-size: 36px !important;
}
</style>
