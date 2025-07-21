<template>
  <div
    class="flex flex-col sm:flex-row sm:justify-between sm:items-end items-start pb-20"
  >
    <h1 class="text-4xl md:text-6xl font-bold text-black">{{ mainText }}</h1>
    <p class="text-xl md:text-2xl text-gray-600">{{ subText }}</p>
  </div>
</template>

<script setup>
defineProps({
  mainText: String,
  subText: String,
});
</script>
