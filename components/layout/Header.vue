<template>
  <header class="bg-black sticky top-0 z-50">
    <nav class="max-w-screen-xl mx-auto px-4 py-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-8">
          <!-- Logo -->
          <div class="text-xl font-semibold">
            <img src="/images/logo.webp" alt="logo" width="20px" />
          </div>
          <!-- Navigation Menu -->
          <div class="hidden md:flex space-x-6 text-sm text-white">
            <a href="#" class="hover:text-gray-300">PC</a>
            <a href="#" class="hover:text-gray-300">Pad</a>
            <a href="#" class="hover:text-gray-300 font-semibold">Phone</a>
            <a href="#" class="hover:text-gray-300">Watch</a>
            <a href="#" class="hover:text-gray-300">Earphone</a>
            <a href="#" class="hover:text-gray-300">TV & Home</a>
            <a href="#" class="hover:text-gray-300">サポート</a>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <a href="#">
            <img src="/images/question.webp" alt="logo" width="20px" />
          </a>
          <a href="#">
            <img src="/images/bag.webp" alt="logo" width="20px" />
          </a>
          <img
            @click="isOpen = !isOpen"
            src="/images/icon/hamburger.svg"
            alt="ハンバーガーメニュー"
            class="w-6 h-6 text-blue-400 md:hidden text-white cursor-pointer items-center"
          />
        </div>

        <div
          class="pl-8 fixed top-0 left-0 w-full h-full bg-white flex flex-col text-xl transition-transform duration-300 md:hidden"
          :class="{ '-translate-y-full': !isOpen, 'translate-y-0': isOpen }"
        >
          <div class="w-hull text-right mr-2 mt-3">
            <button
              @click="closeMenu"
              class="w-[36px] h-[36px] material-icons-outlined"
            >
              close
            </button>
          </div>
          <a href="#" class="my-2 font-bold" @click="closeMenu">PC</a>
          <a href="#" class="my-2 font-bold" @click="closeMenu">Pad</a>
          <a href="#" class="my-2 font-bold" @click="closeMenu">Phone</a>
          <a href="#" class="my-2 font-bold" @click="closeMenu">Watch</a>
          <a href="#" class="my-2 font-bold" @click="closeMenu">Earphone</a>
          <a href="#" class="my-2 font-bold" @click="closeMenu">TV & Home</a>
          <a href="#" class="my-2 font-bold" @click="closeMenu">サポート</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const isOpen = ref(false);

const closeMenu = () => {
  isOpen.value = false;
};
</script>
