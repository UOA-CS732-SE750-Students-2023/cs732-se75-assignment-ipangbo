<!--
 * The article featured image shown when route matches an article
 * @author: Bo Pang
 * @since: 2023-04-08
 * ArticleFeaturedImage.vue
-->
<template>
    <div v-if="imgAddr && title">
        <div class="landscape-slider">
            <div class="background is-thumbnail"
            :style="`background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(&quot;${imgAddr}&quot;);`">

        </div>
        <div class="infos">
            <h1>{{ title }}</h1>
            <!-- <div class="metas">
                <span class="reads" data-toggle="tooltip" title="" data-original-title="已读">
                    <i class="pandastudio-icons-eye">
                    </i>
                    <span class="post_meta_number" data-number-type="reads">
                        34
                    </span>
                </span>
                <span class="likes" data-toggle="tooltip" title="" data-original-title="点赞"><i
                        class="pandastudio-icons-heart-o">

                    </i>
                    <span class="post_meta_number" data-number-type="likes">
                        2
                    </span>
                </span>
                <span class="comments cursor-hand" data-toggle="tooltip" title="" sclick="this.scroll2comment()"
                    data-original-title="评论">
                    <i class="pandastudio-icons-comments-o">
                                                                                </i>
                                                                                <span class="post_meta_number" data-number-type="comments">
                                                                                    0
                                                                                </span>
                                                                            </span>
                                                                        </div> -->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCurrentArticleStore } from '~/stores/currentArticle'

const currentArticleStore = useCurrentArticleStore();
const { imgAddr, title } = storeToRefs(currentArticleStore);
</script>

<style scoped></style>
