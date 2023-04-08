<!--
 * The search widget
 * @author: Bo Pang
 * @since: 2023-04-09
 * SidebarSearch.vue
-->
<template>
    <div id="pf_search-3" class="widget widget_pf_search">
        <div class="pf_search r-container r-sm">
            <form action="" class="r-content pd-ripple">
                <input type="search" placeholder="Search..." autocomplete="off" v-model="keyword">
                <button class="pd-ripple-trigger" @click.prevent="router.push(`/search/${keyword}`)">

                </button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
const router = useRouter();
const keyword = ref();
</script>

<style scoped></style>
