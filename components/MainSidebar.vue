<!--
 * The main sidebar component
 * @author: Bo Pang
 * @since: 2023-04-07
 * MainSidebar.vue
-->
<template>
    <SidebarSearch></SidebarSearch>
    <div id="pf_toc_widget-3" class="widget widget_pf_toc_widget" style="display: none;">
        <div class="toc">
            <ul data-toc-min-number=""></ul>
        </div>
    </div>
    <SidebarNavi></SidebarNavi>
    <MusicBox></MusicBox>
</template>

<script setup lang="ts"></script>

<style scoped></style>
