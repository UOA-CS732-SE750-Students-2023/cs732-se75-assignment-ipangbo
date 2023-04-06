<!--
 * The Carousel displayed in home page and category page
 * @author: Bo Pang
 * @since: 2023-04-05
 * PostsCarousel.vue
-->
<template>
    <div id="card-flip-slider" interval-time="4000">
        <div class="showBox ">
            <div v-for="(item, index) in props.slides" :class="getClassForIndex(index)" :key="index">
                <a class="page" :href="item.link">
                    <div class="badge" :class="colorClassForSlideBadge(item.badge)">{{ textForSlideBadge(item.badge) }}
                    </div>
                    <h2 class="title">{{ item.title }}</h2>
                    <div class="category">
                        <el-icon :size="15">
                            <Folder />
                        </el-icon>
                        {{ item.category }}
                    </div>
                    <img class="background blur" :src="item.featuredmedia">
                </a>
            </div>

        </div>
        <div class="navigator ">
            <div class="prev" @click="handlePrevNavi">
                <el-icon>
                    <Back />
                </el-icon>
            </div>
            <div class="next" @click="handleNextNavi">
                <el-icon>
                    <Right />
                </el-icon>
            </div>
        </div>
        <div class="anchor ">
            <div v-for="index in props.slides.length" :class="(index - 1) === currentIndex ? 'active' : ''">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

interface SlideComp {
    id: number;
    link: string;
    title: string;
    featuredmedia: string;
    category: string[];
    badge: "new" | "pinned";
}

const props = defineProps<{
    slides: SlideComp[]
}>()

const colorClassForSlideBadge = (badge: string) => {
    if (badge === "new") {
        return "blue";
    } else if (badge === "pinned") {
        return "";
    } else {
        return "";
    }
}

const textForSlideBadge = (badge: string) => {
    switch (badge) {
        case "new":
            return "Newest";
        case "pinned":
            return "Pinned";
    }
}





const currentIndex = ref(0);

const getClassForIndex = (index: number): string => {
    const itemCount = props.slides.length;
    switch (index) {
        case (currentIndex.value - 2 + itemCount) % itemCount:
            return "past1";
        case (currentIndex.value - 1 + itemCount) % itemCount:
            return "past0";
        case currentIndex.value:
            return "current";
        case (currentIndex.value + 1) % itemCount:
            return "future0";
        case (currentIndex.value + 2) % itemCount:
            return "future1";
        default:
            return "hidden";
    }
}

const handlePrevNavi = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--;
    } else {
        currentIndex.value = props.slides.length - 1;
    }
}

const handleNextNavi = () => {
    if (currentIndex.value < props.slides.length - 1) {
        currentIndex.value++;
    } else {
        currentIndex.value = 0;
    }
}
</script>

<style scoped>
#card-flip-slider {
    height: 350px;
    position: relative;
    display: block;
}

@media (min-width: 768px) and (max-width:991px),
(min-width:992px) and (max-width:1199px) {
    #card-flip-slider {
        height: 280px
    }
}

@media (max-width: 479px),
(min-width:480px) and (max-width:767px) {
    #card-flip-slider {
        height: 220px
    }
}

#card-flip-slider .showBox {
    position: relative
}

#card-flip-slider .showBox>* {
    position: absolute;
    top: 0;
    left: 25%;
    width: 50%;
    top: 76px;
    will-change: transform, transform-origin, opacity, visibility, z-index;
    transition: .6s, z-index 0s 75ms
}

#card-flip-slider .showBox>.past1 {
    z-index: 1;
    transform: translateX(-48%) perspective(1000px) rotateY(50deg) scale(.8);
    transform-origin: 1px;
    opacity: 0;
    visibility: hidden
}

#card-flip-slider .showBox>.past0 {
    z-index: 2;
    transform: translateX(-34%) perspective(1000px) rotateY(50deg) scale(.9);
    transform-origin: 1px;
    opacity: .4
}

#card-flip-slider .showBox>.current {
    z-index: 3;
    transform: perspective(1000px) rotateY(0deg);
    transform-origin: center;
    transition: .525s ease 75ms, z-index 0s 75ms
}

#card-flip-slider .showBox>.current .page {
    border-color: rgba(0, 0, 0, .2);
    box-shadow: 0 10px 15px rgba(48, 52, 63, .3), inset 0 0 0 1px hsla(0, 0%, 100%, .2)
}

#card-flip-slider .showBox>.current .page:hover .background {
    transform: scale(1.2)
}

#card-flip-slider .showBox>.future0 {
    z-index: 2;
    transform: translateX(34%) perspective(1000px) rotateY(-50deg) scale(.9);
    transform-origin: calc(100% - 1px);
    opacity: .4
}

#card-flip-slider .showBox>.future1 {
    z-index: 1;
    transform: translateX(48%) perspective(1000px) rotateY(-50deg) scale(.8);
    transform-origin: calc(100% - 1px);
    opacity: 0;
    visibility: hidden
}

.is-touchable #card-flip-slider .showBox .current .page:hover .background {
    transform: none
}

#card-flip-slider .page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 230px;
    border-radius: 8px;
    background-size: cover;
    border: 1px solid rgba(0, 0, 0, .6);
    box-shadow: 0 10px 15px rgba(48, 52, 63, .3), inset 0 0 0 1px hsla(0, 0%, 100%, .2);
    overflow: hidden;
    position: relative;
    padding: 0 220px 0 8%;
    transition: .6s
}

#card-flip-slider .page>.background {
    -o-object-fit: cover;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    transition: .35s
}

#card-flip-slider .page>.background.blur {
    top: -3px;
    left: -3px;
    width: calc(100% + 6px);
    height: calc(100% + 6px);
    filter: blur(3px) brightness(.8)
}

#card-flip-slider .page>.badge {
    position: absolute;
    top: 0;
    right: 15px;
    padding: 5px 9px;
    color: #fff;
    background: linear-gradient(#ffab00, #ff7800 30%, #ff9333);
    background: linear-gradient(var(--analogous_default), var(--primary_default) 30%, var(--primary_light_2));
    border-radius: 0 0 4px 4px;
    border: 1px solid #e66c00;
    border: 1px solid var(--primary_dark_1);
    border-top: 0;
    box-shadow: 0 3px 5px rgba(255, 120, 0, .3), 0 3px 5px rgba(0, 0, 0, .2), inset 0 0 0 1px hsla(0, 0%, 100%, .3);
    box-shadow: 0 3px 5px var(--primary_opacity_3), 0 3px 5px rgba(0, 0, 0, .2), 0 0 0 1px hsla(0, 0%, 100%, .3) inset;
    font-size: 12px;
    text-shadow: 0 -1px #e66c00;
    text-shadow: 0 -1px var(--primary_dark_1)
}

#card-flip-slider .page>.badge.blue {
    background: linear-gradient(#20baff, #20a0ff 30%, #59b8ff);
    border: 1px solid #0394ff;
    box-shadow: 0 3px 5px rgba(32, 160, 255, .3), 0 3px 5px rgba(0, 0, 0, .2), inset 0 0 0 1px hsla(0, 0%, 100%, .3);
    text-shadow: 0 -1px #0394ff
}

#card-flip-slider .page>.title {
    color: #fff;
    font-size: 22px;
    text-shadow: 0 3px 5px rgba(0, 0, 0, .75);
    margin: 0;
    font-weight: 400;
    word-wrap: break-word;
    line-height: 1.3
}

#card-flip-slider .page>.category {
    font-size: 14px;
    color: #fff;
    margin-top: 15px;
    text-shadow: 0 2px 3px #000;
    opacity: .6;
    position: relative
}

#card-flip-slider .page>.category:before {
    content: "";
    display: block;
    width: 15px;
    height: 1px;
    border-top: 1px solid hsla(0, 0%, 100%, .5);
    position: absolute;
    top: -8px;
    left: 0
}

#card-flip-slider .page>.category i {
    margin-right: 5px
}

#card-flip-slider .page>.post-thumbnail {
    display: none;
    width: 168px;
    height: 142px;
    position: absolute;
    right: 40px;
    z-index: -1;
    border-radius: 12px;
    border-color: rgba(0, 4, 10, .6);
    border-style: solid;
    border-width: 4px 9px;
    box-shadow: 0 10px 15px rgba(0, 4, 10, .4)
}

@media (min-width: 768px) and (max-width:991px),
(min-width:992px) and (max-width:1199px) {
    #card-flip-slider .page {
        height: 172px;
        padding-right: 96px
    }

    #card-flip-slider .page>.title {
        font-size: 17px
    }

    #card-flip-slider .page>.post-thumbnail {
        width: 192px;
        height: 172px
    }
}

@media (max-width: 479px),
(min-width:480px) and (max-width:767px) {
    #card-flip-slider .page {
        height: 110px;
        padding: 0 15px;
        justify-content: center
    }

    #card-flip-slider .page>.title {
        font-size: 14px;
        text-align: center
    }

    #card-flip-slider .page>.category,
    #card-flip-slider .page>.post-thumbnail {
        display: none
    }
}

#card-flip-slider>.anchor {
    padding: 5px;
    white-space: nowrap;
    overflow: hidden;
    z-index: 4;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center
}

#card-flip-slider>.anchor div {
    cursor: pointer;
    display: inline-block;
    margin-top: 2px;
    width: 7px;
    height: 7px;
    margin-left: 5px;
    border-radius: 50%;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, .5), 0 1px hsla(0, 0%, 100%, .1);
    transition: .35s
}

#card-flip-slider>.anchor div.active {
    background: #fff;
    box-shadow: inset 0 0 0 1px #fff, 0 0 0 1px #4d5361, 0 2px 4px rgba(0, 0, 0, .2), inset 0 -3px 3px #b5b9c2
}

#card-flip-slider>.navigator .next,
#card-flip-slider>.navigator .prev {
    position: absolute;
    top: 76px;
    height: 230px;
    width: 25%;
    z-index: 4;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: hsla(0, 0%, 100%, .35);
    font-size: 24px
}

#card-flip-slider>.navigator .next i,
#card-flip-slider>.navigator .prev i {
    opacity: 0;
    /* transition: opacity .5s, transform 0s .5s */
    transition: all .5s;
}

@media (min-width: 768px) and (max-width:991px),
(min-width:992px) and (max-width:1199px) {

    #card-flip-slider>.navigator .next,
    #card-flip-slider>.navigator .prev {
        height: 172px
    }
}

@media (max-width: 479px),
(min-width:480px) and (max-width:767px) {

    #card-flip-slider>.navigator .next,
    #card-flip-slider>.navigator .prev {
        height: 110px
    }

    #card-flip-slider>.navigator .next i,
    #card-flip-slider>.navigator .prev i {
        display: none
    }
}

#card-flip-slider>.navigator .prev {
    left: 0;
    padding-left: calc(4% - 20px)
}

#card-flip-slider>.navigator .prev i {
    transform: translateX(30px) scale(.8)
}

#card-flip-slider>.navigator .next {
    right: 0;
    justify-content: flex-end;
    padding-right: calc(4% - 20px)
}

#card-flip-slider>.navigator .next i {
    transform: translateX(-30px) scale(.8)
}

.landscape-slider {
    height: 350px;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column
}

@media (min-width: 768px) and (max-width:991px),
(min-width:992px) and (max-width:1199px) {
    .landscape-slider {
        height: 280px
    }
}

@media (max-width: 479px),
(min-width:480px) and (max-width:767px) {
    .landscape-slider {
        height: 220px
    }
}

.landscape-slider .background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 5px 5px 0 0
}

@keyframes landscape-slider-bg-blink {
    0% {
        opacity: 1
    }

    50% {
        opacity: .5
    }

    to {
        opacity: 1
    }
}

.landscape-slider .background.is-thumbnail:before {
    content: "";
    position: absolute;
    top: 0;
    right: .7px;
    bottom: .7px;
    left: .7px;
    -webkit-backdrop-filter: blur(7px);
    backdrop-filter: blur(7px);
    border-radius: 5px 5px 0 0
}

.landscape-slider .background.is-thumbnail+.infos {
    align-self: center;
    text-align: center
}

.landscape-slider .infos {
    position: relative;
    z-index: 1;
    padding: 0 10%;
    color: #fff;
    text-shadow: 0 3px 5px rgba(0, 4, 10, .3)
}

.landscape-slider .infos h1 {
    font-size: 28px;
    margin: 30px 0 15px
}

@media (max-width: 479px),
(min-width:480px) and (max-width:767px) {
    .landscape-slider .infos h1 {
        font-size: 22px
    }
}

@media (min-width: 1200px) and (max-width:1509px),
(min-width:1510px) {
    .landscape-slider .infos h1 {
        font-size: 34px
    }
}

.landscape-slider .infos .metas {
    opacity: .5
}

@media (max-width: 479px),
(min-width:480px) and (max-width:767px) {
    .landscape-slider .infos .metas {
        font-size: 12px
    }
}

.landscape-slider .infos .metas i {
    margin-right: 5px
}

.landscape-slider .infos .metas span+span {
    margin-left: 10px
}

.hidden {
    display: none !important
}

#card-flip-slider>.navigator .next:hover i,
#card-flip-slider>.navigator .prev:hover i {
    opacity: 1;
    transform: translateX(0);
    transition: .5s;
    box-shadow: inset 0 5px 5px rgba(0, 0, 0, .2), 0 1px 1px hsla(0, 0%, 100%, .1);
    border-radius: 50%;
    height: 40px;
    width: 40px;
    line-height: 40px;
    text-align: center;
}
</style>
