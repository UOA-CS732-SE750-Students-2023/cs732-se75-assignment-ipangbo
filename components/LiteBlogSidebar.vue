<!--
 * The Lite Blog sidebar
 * @author: Bo Pang
 * @since: 2023-04-07
 * LiteBlogSidebar.vue
-->
<template>
    <div id="pf_microblog-3" class="widget widget_pf_microblog">
        <div class="list-box">
            <div class="list-title"><span class="title-image"><img src="~/assets/img/avartar.jpg"></span><span
                    class="title-text"><span></span></span></div>
            <ul class="list">

                <li class="clearfix" v-for="item in liteBlogs">
                    <div class="content" v-html="item.content">
                    </div>
                    <div class="date">
                        <el-icon>
                            <Calendar />
                        </el-icon>
                        {{ item.date.split("T")[0] + ' ' + item.date.split("T")[1].split(':').slice(0, 2).join(':') }}
                    </div>
                </li>

            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useLiteBlogsStore } from '~/stores/liteBlogs'

const liteBlogsStore = useLiteBlogsStore();
await liteBlogsStore.getAllLiteBlogs();
const liteBlogs = liteBlogsStore.liteBlogs;
</script>

<style scoped></style>
