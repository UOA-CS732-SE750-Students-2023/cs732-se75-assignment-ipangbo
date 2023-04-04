<!--
 * Default Layout
 * @author: Bo Pang
 * @since: 2023-04-04
 * default.vue
-->
<template>
    <!-- todo: top nav -->
    <header>
        <HeadImage></HeadImage>
    </header>
    <slot></slot>
    <footer>
        footer
        <ElButton @click="ElMessage('Succeed')"></ElButton>
    </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
header {
    height: 230px;
    background: linear-gradient(#505460, #707480);
    border-bottom: 1px solid #fff;
    border-bottom: 1px solid var(--white_default);
}
</style>
