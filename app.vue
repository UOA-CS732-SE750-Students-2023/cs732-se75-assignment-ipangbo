<template>
  <div id="wrapper">
    <NuxtLayout :name="layout">
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import "~/assets/css/base.css";
import "~/assets/css/main.css";
import "~/assets/css/app.css"

const nuxtApp = useNuxtApp()
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

<style scoped></style>