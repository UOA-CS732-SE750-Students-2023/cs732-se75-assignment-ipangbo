<!--
 * The Posts by category on Index page component
 * @author: Bo Pang
 * @since: 2023-04-08
 * PostsByCategoryOnIndex.vue
-->
<template>
    <div class="main-container category">
        <div class="pf-modal-title">
            <div class="title-text"><el-icon color="#ff7800">
                    <Folder />
                </el-icon>{{ props.title }}</div><a class="read-more pd-ripple pd-ripple-trigger"
                href="https://www.ipangbo.cn/category/linux">More<el-icon>
                    <Right />
                </el-icon></a>
        </div>

        <ListStyleList :posts="props.posts"></ListStyleList>
    </div>
</template>

<script setup lang="ts">
import { PostsListItem } from '~/types/PostTypes';

const props = defineProps<{
    title: string | number;
    posts: PostsListItem[];
}>()


</script>

<style scoped></style>
