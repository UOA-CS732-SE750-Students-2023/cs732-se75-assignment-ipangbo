<!--
 * The search page
 * @author: Bo Pang
 * @since: 2023-04-09
 * [...slug].vue
-->
<template>
    <Head>
        <Title>Search: {{ keyword }}</Title>
    </Head>

<div class="main-column">
    <div class="catNav-wrapper clearfix">
        <div pandatab="" class="pf-catNav" active-class=".current-menu-item,.current-menu-ancestor,.current-cat"
            sub-class=".sub-menu,.children" prev-text="<i class=pandastudio-icons-left ></i>"
            next-text="<i class=pandastudio-icons-right ></i>" sub-trigger="" auto-scrolling="">
            <!-- <ul class="menu">
                    <li class="anchor"
                        style="position: absolute; width: 72px; transform: translateX(1.99219px); left: 0px; opacity: 1;">
                    </li>
                    <li id="menu-item-583"
                        class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-574 current_page_item menu-item-583"
                        style=""><a href="https://www.ipangbo.cn/timeline" aria-current="page">时间线</a></li>
                    <li id="menu-item-585" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-585"><a
                            href="https://note.ipangbo.cn">Note站</a></li>
                    <li id="menu-item-586"
                        class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-586"><a
                            href="https://www.ipangbo.cn/category/site">网站</a></li>
                    <li id="menu-item-588"
                        class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-588"><a
                            href="https://www.ipangbo.cn/category/linux">Linux</a></li>
                    <li id="menu-item-589"
                        class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-589"><a
                            href="https://www.ipangbo.cn/category/build">开发 Build</a></li>
                    <li id="menu-item-590"
                        class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-590"><a
                            href="https://www.ipangbo.cn/category/game">游戏</a></li>
                    <li id="menu-item-591"
                                                                                                                                                                                                                                        class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-591"><a
                                                                                                                                                                                                                                            href="https://www.ipangbo.cn/category/%e7%95%99%e5%ad%a6">留学</a></li>
                                                                                                                                                                                                                                    <li id="menu-item-587"
                                                                                                                                                                                                                                        class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-587"><a
                                                                                                                                                                                                                                            href="https://www.ipangbo.cn/category/uncategorized">未分类</a></li>
                                                                                                                                                                                                                                </ul> -->
            </div>
        </div>

        <div class="main-container archive-list">
            <div class="row post-card-row style-blog">
                <TimeLineArticleCard v-for="(card, index) in currentPageCards" :card="card" :key="index">
            </TimeLineArticleCard>
            <div>{{ status }}</div>

        </div>
    </div>
    <!-- <div class="pagination-wrapper clearfix">
            <ul class="pf-pagination">
                <li class="pagenumber" v-for="page in pageAmount" :key="page" :class="currentPage === page ? 'active' : ''">
                    <a @click="handleTogglePage(page)">
                                                                        <span class="active">{{ page }}</span>
                                                                    </a>
                                                                </li>

                                                            </ul>
                                                        </div> -->
    </div>
</template>

<script setup lang="ts">
import { useCurrentArticleStore } from '~/stores/currentArticle';
import { usePostsStore } from '~/stores/posts';
const route = useRoute();
const keyword = route.params.slug[0];
const status = ref('Searching...');

const currentArticleStore = useCurrentArticleStore();
currentArticleStore.title = `Search: ${keyword}`
currentArticleStore.imgAddr = '/search_bg.png';

const postsStore = usePostsStore();
await postsStore.getSearchResult(keyword);
const currentPageCards = postsStore.currentTimeLineCards;
if (currentPageCards.length === 0) {
    status.value = 'No such result';
} else {
    status.value = '';
}
</script>

<style scoped>
.pf-catNav[pandaTab] {
    visibility: hidden;
}
</style>
