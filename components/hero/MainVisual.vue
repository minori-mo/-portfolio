<template>
  <section class="text-center pt-20">
    <HeadingIphoneMain
      class="feedIn"
      main-text="Phone"
      sub-text="手放せないもの"
    />
    <div class="w-full h-[600px] relative feedIn">
      <video
        controls
        autoplay
        muted
        loop
        :poster="p('/images/image1.webp')"
        class="rounded-2xl w-full h-full object-cover"
      >
        <source :src="p('/videos/video.mp4')" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </section>
</template>

<script setup>
const p = usePublicPath();
</script>
