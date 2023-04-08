<!--
 * Footer Component
 * @author: Bo Pang
 * @since: 2023-04-05
 * TheFooter.vue
-->
<template>
    <footer>
        <div class="mirror">
            <div class="background">
                <div class="content-container"></div>
            </div>
            <div class="reflection content-container">
                <div class="reflection-content">
                    <div class="reflection-row-reverse">
                        <div class="reflection-main-column"></div>
                        <div class="reflection-sidebar-column"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="toes">
            <div class="content-container">
                <div class="copyright">Bo Pang © 2023 Copyright Reserved</div>
                <div class="links">
                    <a href="https://auckland.ac.nz" target="_blank">
                        <span>The University of Auckland</span>
                    </a>
                    <a href="https://www.ipangbo.cn/" target="_blank">
                        <span>
                            Personal Blog

                        </span>
                    </a>
                </div>

            </div>
        </div>
    </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
footer .mirror .background {
    background: radial-gradient(150% 300% at 93% 95%, transparent 30%, hsla(0, 0%, 100%, 0) 50%, hsla(0, 0%, 100%, .06) 50.3%, hsla(0, 0%, 100%, 0) 70%), linear-gradient(hsla(0, 0%, 100%, .4), hsla(0, 0%, 100%, .4)) no-repeat 0 78px/100% 1px, linear-gradient(#71747e 25%, #525662 90%) no-repeat 0 79px/100% 5px, linear-gradient(0, #60636c, #525662) no-repeat 0 0/100% 80px;
    border-bottom-color: #70747f;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    margin-top: -35px;
    padding-top: 35px;
    height: 84px;
    position: relative;
    z-index: -1;
    text-align: right;
}

.content-container {
    width: 90%;
    max-width: 1648px;
    margin-left: auto;
    margin-right: auto;
}

footer .mirror .reflection {
    margin-top: -47px;
    border-radius: 10px 10px 0 0;
    background: rgba(0, 4, 10, .7);
    padding: 4px 9px 0;
    opacity: .1;
}

footer .mirror .reflection .reflection-content {
    background: #fff;
    background: var(--white_default);
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    height: 37px;
    display: flex;
}

footer .mirror .reflection .reflection-content .reflection-row-reverse {
    display: flex;
    flex-direction: row-reverse;
    flex-grow: 1;
}

footer .mirror .reflection .reflection-content .reflection-row-reverse .reflection-main-column {
    width: calc(100% - 230px);
    flex-grow: 0;
    flex-shrink: 0;
}

footer .mirror .reflection .reflection-content .reflection-row-reverse .reflection-sidebar-column {
    background: #f0f2f7;
    background: var(--gray_9);
    width: 230px;
    flex-grow: 0;
    flex-shrink: 0;
    border-right: 1px solid #cbd0da;
    border-right: 1px solid var(--gray_7);
    box-shadow: inset 0 0 0 1px #fff;
    box-shadow: 0 0 0 1px var(--white_default) inset;
}

footer .toes {
    padding-top: 0.1px;
    padding-bottom: 20px;
    margin-top: 5px;
    background: linear-gradient(rgba(0, 0, 0, .15), transparent) no-repeat 0 0/100% 20px, linear-gradient(rgba(66, 69, 74, .8), rgba(66, 69, 74, 0)) no-repeat 0 0/100% 40px, repeating-linear-gradient(-45deg, #5a5d68, #5a5d68 2px, #5d606d 0, #5d606d 6px);
}

footer .toes .copyright {
    text-align: center;
    color: hsla(0, 0%, 100%, .5);
    margin-top: 20px;
    font-size: 11px;
    text-shadow: 0 -1px rgba(0, 0, 0, .6);
}

footer .toes .links {
    margin-top: 6px;
    text-align: center;
    font-size: 11px;
}

footer .toes .links a {
    color: hsla(0, 0%, 100%, .3);
    text-shadow: 0 -1px rgba(0, 0, 0, .3);
    text-decoration: none;
    margin: 0 3px;
    cursor: pointer;
    transition: all 0.3s;
}

footer .toes .links a:hover {
    color: var(--analogous_default)
}

footer .toes .links a img {
    max-width: 16px;
    max-height: 16px;
    vertical-align: middle;
}
</style>
