<!--
 * new page
 * @author: Bo Pang
 * @since: 2023-04-07
 * TheSidebar.vue
-->
<template>
    <div class="sidebar-sticky">
        <div class="sidebar-selector">
            <a data-sidebar-key="custom1" :class="(currentTab === 1) ? 'active' : ''" @click="toCurrentTab(1)">
                <el-icon>
                    <HomeFilled />
                </el-icon>
            </a>
            <a data-sidebar-key="custom2" :class="(currentTab === 2) ? 'active' : ''" @click="toCurrentTab(2)">
                <el-icon>
                    <Promotion />
                </el-icon></a>
        </div>
        <div class="sidebar-content pf_scroller pf_scroller_is_mac">
            <div class="sidebar-panel" :class="(currentTab === 1) ? 'active' : ''"
                :style="(currentTab === 1) ? 'display: block;' : 'display: none;'">
                <MainSidebar></MainSidebar>
            </div>
            <div class="sidebar-panel" :class="(currentTab === 2) ? 'active' : ''"
                :style="(currentTab === 2) ? 'display: block;' : 'display: none;'">
                <LiteBlogSidebar></LiteBlogSidebar>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const currentTab = ref(1);

const toCurrentTab = (tab: number) => {
    currentTab.value = tab;
}

// todo: The transition effect must delay 0.25s then make label active and set display none
</script>

<style scoped></style>
