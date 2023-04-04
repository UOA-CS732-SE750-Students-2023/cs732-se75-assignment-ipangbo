<!--
 * Default Layout
 * @author: Bo Pang
 * @since: 2023-04-04
 * default.vue
-->
<template>
    <header>
        header
    </header>
    <slot></slot>
    <footer>
        footer
        <ElButton @click="ElMessage('Succeed')"></ElButton>
    </footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
