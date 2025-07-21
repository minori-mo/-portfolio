<template>
  <button
    @click="goToHome"
    class="fixed top-20 right-10 rounded-full cursor-pointer shadow-md z-100 bg-gray-100"
  >
    <span class="material-icons-outlined text-gray-500 p-3"> home </span>
  </button>
</template>
<script setup>
const router = useRouter();
const goToHome = () => {
  router.push("/");
};
</script>
