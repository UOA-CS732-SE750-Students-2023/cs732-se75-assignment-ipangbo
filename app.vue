<template>
  <div class="wrapper">
    <NuxtLayout :name="layout">
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import "~/assets/css/base.css";
import "~/assets/css/main.css";

const layout = "default"
const blogTitle = useRuntimeConfig().public.blogTitle;

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${blogTitle}` : `${blogTitle}`;
  },
})
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>