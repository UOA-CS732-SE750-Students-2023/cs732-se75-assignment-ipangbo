<!--
 * Display the head image, as the content of <header></header> in default layout
 * @author: Bo Pang
 * @since: 2023-04-04
 * HeadImage.vue
-->
<template>
    <div class="header-img">
        <img src="~/assets/img/site_head_default.png" alt="R Logo">
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.header-img {
    height: 229px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header-img img {
    max-height: 100%;
}
</style>
