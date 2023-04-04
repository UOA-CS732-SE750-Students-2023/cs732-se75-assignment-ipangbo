<template>
  <NuxtLayout :name="layout">
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup lang="ts">
const layout = "default"
const blogTitle = useRuntimeConfig().public.blogTitle;

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${blogTitle}` : `${blogTitle}`;
  },
})
</script>