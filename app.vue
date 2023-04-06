<template>
  <div class="wrapper">
    <NuxtLayout :name="layout">
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import "~/assets/css/base.css";
import "~/assets/css/main.css";

const nuxtApp = useNuxtApp()
// console.log(nuxtApp)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  nuxtApp.vueApp.component(key, component)
}


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