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
    <div id="main" class="content-container r-container">
        <div class="r-content">
            <div class="top-slider-nav">
                <div class="pf-slider">
                    <PostsCarousel :slides="slides as any"></PostsCarousel>
                </div>
                <nav>
                    <li class="current-menu-item">
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Website Map</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Private Policy</a>
                    </li>
                </nav>

            </div>
            <div class="main-row-reverse">
                <NuxtPage></NuxtPage>
                <div class="sidebar-shadow" click="this.hide_mobile_sidebar()"></div>
                <aside class="sidebar-column">
                    <div class="pf_blogger">
                        <div class="r-container r-sm blogger_head">
                            <div class="r-content">
                                <div class="head-img"><img src="~/assets/img/avartar.jpg">
                                </div>
                            </div>
                        </div>
                        <div class="blogger-name">{{ useRuntimeConfig().public.authorName }}</div>
                        <div class="blogger-description">{{ useRuntimeConfig().public.authorSlogan }}</div>
                    </div>
                    <TheSidebar></TheSidebar>
                </aside>
            </div>
        </div>
        <div class="float-tools-container">
            <div class="float-tools">
                <div class="float-tools-button">
                    <button class="scroll2top" @click="ElMessage({ message: '回顶部', duration: 3000 })">
                        <el-icon color="#fff" :size="20">
                            <Upload />
                        </el-icon>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <TheFooter></TheFooter>
    </footer>
</template>

<script setup lang="ts">
import PostsCarousel from '~/components/PostsCarousel.vue';
import { usePostsStore } from '~/stores/posts';
import { Slide } from '~/types/PostTypes';

const route = useRoute();
const postsStore = usePostsStore();

const slides = ref<Slide[]>([]);
if (route.path === "/") {
    await postsStore.getHomePagePinnedSlides();
    const homePagePinnedSlides = postsStore.pinnedPages;

    await postsStore.getHomePageNewestSlides();
    const newestPosts = postsStore.newestPages;
    const newestAmountInCarousel = useRuntimeConfig().public.newestAmountInCarousel;
    let homePageNewestSlides;
    if (newestAmountInCarousel < 6) {
        homePageNewestSlides = newestPosts.slice(0, newestAmountInCarousel);
    } else {
        homePageNewestSlides = newestPosts;
    }


    slides.value = homePagePinnedSlides.concat(homePageNewestSlides);
}


</script>
