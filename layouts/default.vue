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
                <div class="pf-slider"></div>
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
            <div class="main-row-reverse"></div>
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
    <slot></slot>
    <footer>
        footer

    </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
header {
    height: 230px;
    background: linear-gradient(#505460, #707480);
    border-bottom: 1px solid #fff;
    border-bottom: 1px solid var(--white_default);
}

.r-container {
    border-radius: 10px;
    background: rgba(0, 4, 10, .7);
    padding: 4px 9px;
    box-shadow: 0 10px 15px rgba(0, 4, 10, .2);
    display: flex;
    flex-direction: column;
}

.content-container {
    width: 90%;
    max-width: 1648px;
    margin-left: auto;
    margin-right: auto;
}

#main {
    margin-top: -55px;
    flex-grow: 1;
}

.r-container>.r-content {
    background: #fff;
    background: var(--white_default);
    border-radius: 8px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.float-tools-container {
    position: sticky;
    z-index: 4;
    bottom: 0;
    height: 0;
}

.top-slider-nav {
    box-shadow: inset 0 -1px rgba(48, 52, 63, .1);
    box-shadow: 0 -1px var(--gray_opacity_1) inset;
    position: relative;
    margin: 0 -0.2px;
}

.pf-slider {
    height: 350px;
    background: linear-gradient(#636673, #3f414b 75%, #636673);
    border-radius: 5px 5px 0 0;
}

.top-slider-nav nav {
    background-image: linear-gradient(rgba(0, 0, 0, .3), transparent);
    height: 50px;
    box-shadow: inset 0 1px hsla(0, 0%, 100%, .1), inset 0 -1px rgba(0, 0, 0, .15), 0 1px hsla(0, 0%, 100%, .07);
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    border-radius: 5px 5px 0 0;
    text-align: center;
    white-space: nowrap;
    font-size: 0;
}

.top-slider-nav nav li {
    display: inline-block;
    align-items: center;
    height: 50px;
}

.top-slider-nav li.current-menu-item {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSIzMCI+PHJhZGlhbEdyYWRpZW50IGlkPSJhIiBjeD0iNDAiIGN5PSIyOSIgcj0iMjciIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAzMikiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmMwMDAiIHN0b3Atb3BhY2l0eT0iLjUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmMwMDAiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+PHBhdGggZD0iTTM0IDBoMTNsMzMgMzBIMEwzNCAweiIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9InVybCgjYSkiIGZpbHRlcj0idXJsKCNiKSIvPjxyYWRpYWxHcmFkaWVudCBpZD0iYyIgY3g9IjQwIiBjeT0iMjciIHI9IjIwIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMzIpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmNmZjAwIiBzdG9wLW9wYWNpdHk9Ii41Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmNmZjAwIiBzdG9wLW9wYWNpdHk9IjAiLz48L3JhZGlhbEdyYWRpZW50PjxmaWx0ZXIgaWQ9ImIiPjxmZUdhdXNzaWFuQmx1ciBpbj0iU291cmNlR3JhcGhpYyIgc3RkRGV2aWF0aW9uPSIxIi8+PC9maWx0ZXI+PHBhdGggZD0iTTM2IDBoOC44TDU3IDMwSDIzTDM2IDB6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0idXJsKCNjKSIgZmlsdGVyPSJ1cmwoI2IpIi8+PHBhdGggZD0iTTMzIDBoMTVjMCAxLjctMS4zIDMtMyAzaC05Yy0xLjcgMC0zLTEuMy0zLTN6IiBmaWxsPSIjZmY5MDAwIi8+PC9zdmc+);
}

.top-slider-nav nav li.current-menu-item {
    background-repeat: no-repeat;
    background-position: top;
}

.top-slider-nav nav li a {
    height: 46px;
    line-height: 46px;
    padding: 0 10px;
    margin: 2px 0;
    display: block;
    color: #fff;
    font-size: 14px;
    text-shadow: 0 2px 3px rgba(0, 0, 0, .2);
    border-radius: 4px;
    transition: .25s;
}

.top-slider-nav nav li.current-menu-item a {
    color: #ffab00;
    color: var(--analogous_default);
    text-shadow: 0 3px 3px rgba(0, 0, 0, .5);
}

.float-tools-container .float-tools {
    float: right;
    transform: translateY(calc(-100% - 50px)) translateX(calc(100% + 9px));
    background: rgba(0, 4, 10, .7);
    box-shadow: 0 10px 15px rgba(48, 52, 63, .2);
    box-shadow: 0 10px 15px var(--gray_opacity_2);
    border-radius: 0 8px 8px 0;
}

.float-tools-container .float-tools-button button {
    width: 32px;
    height: 32px;
    border: none;
    background: transparent;
    padding: 0 5px 0 0;
    cursor: pointer;
}

.float-tools-container .float-tools-button button>i {
    color: #adb2bc;
    color: var(--gray_6);
    transition: .25s;
}

.top-slider-nav nav li a:hover {
    color: #ffab00;
    color: var(--analogous_default);
}

.float-tools-container .float-tools-button button:hover>i {
    color: #ffab00;
    color: var(--analogous_default);
}
</style>
