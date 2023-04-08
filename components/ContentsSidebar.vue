<!--
 * Shows the content of the current article
 * @author: Bo Pang
 * @since: 2023-04-09
 * ContentsSidebar.vue
-->
<template>
    <SidebarSearch></SidebarSearch>
    <div id="pf_tts-3" class="widget widget_pf_tts">
        <div class="album">
            <div class="img_wrapper">
                <div class="img" :style="`background-image:url(${imgAddr})`">
                </div>
            </div>
        </div>
    </div>
    <div id="pf_toc_widget-5" class="widget widget_pf_toc_widget">
        <div class="toc">
            <ul data-toc-min-number="">
                <li :data-toc-type="node.nodeName" v-for="node in docTree" :key="node.id" :id="node.id">
                    <div class="toc_wrapper"><span><a :href="`#${node.id}`">{{ node.title }}</a></span></div>
                </li>

            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCurrentArticleStore } from '~/stores/currentArticle';

const currentArticleStore = useCurrentArticleStore();
const { imgAddr, docTree } = storeToRefs(currentArticleStore);




</script>

<style scoped>
.toc ul li:hover a {
    color: #ff7800 !important;
}
</style>
