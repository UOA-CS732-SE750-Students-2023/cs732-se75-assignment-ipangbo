<!--
 * The article page, matchs route like '/article/256'
 * @author: Bo Pang
 * @since: 2023-04-08
 * [id].vue
-->
<template>
    <Head>
        <Title>
            {{ currentArticle?.title.rendered }}
        </Title>
    </Head>
    <div class="main-column">
        <div class="article-container post-metas">
            <span class="categories">
                <el-icon>
                <Folder />
            </el-icon>
            <a href="#" v-for="item in getCategories">{{ item }} · </a>
        </span>
        <span class="tags">
            <!-- <el-icon>
                    <CollectionTag />
                </el-icon>
                <a href="https://www.ipangbo.cn/tag/apt" rel="tag">apt</a> · <a href="https://www.ipangbo.cn/tag/linux"
                    rel="tag">linux</a> · <a href="https://www.ipangbo.cn/tag/qemu" rel="tag">qemu</a> · <a
                                                                                                                                                                                                                                href="https://www.ipangbo.cn/tag/ubuntu" rel="tag">ubuntu</a> · <a
                                                                                                                                                                                                                                href="https://www.ipangbo.cn/tag/vmdk" rel="tag">vmdk</a> · <a
                                                                                                                                                                                                                                href="https://www.ipangbo.cn/tag/%e4%ba%91%e6%9c%8d%e5%8a%a1%e5%99%a8" rel="tag">云服务器</a> · <a
                                                                                                                                                                                                                                href="https://www.ipangbo.cn/tag/%e6%8a%a2%e6%95%91" rel="tag">抢救</a> · <a
                                                                                                                                                                                                                                href="https://www.ipangbo.cn/tag/%e6%95%b0%e6%8d%ae%e6%81%a2%e5%a4%8d" rel="tag">数据恢复</a></span><span
                                                                                                                                                                                                                            class="time"> -->
                <el-icon>
                    <Calendar />
                </el-icon>
                <span class="date">{{ currentArticle?.date.split('T')[0] }}</span>
            </span>
        </div>
        <article class="article-container post-content" v-html="currentArticle?.content.rendered">

        </article>
        <div class="article-container post-shares">
            <div class="pf-modal-title">
                <div class="title-text"><el-icon color="#ff7800">
                        <Share />
                    </el-icon>Wants to share?</div>
            </div>
            <div class="share-wrapper-section">
                <div class="pf_button_group">
                    <div title="" data-toggle="tooltip" data-placement="bottom" class="likes cursor-hand done"
                        data-original-title="点赞">
                        <div class="button__inner pd-ripple pd-ripple-trigger">
                            <!-- <i class="pandastudio-icons-heart"></i> -->
                            😍
                        </div>
                        <!-- <span class="post_meta_number" data-number-type="likes">2</span> -->
                    </div>
                    <div title="" data-toggle="tooltip" class="share-icon-weibo cursor-hand pd-ripple pd-ripple-trigger"
                        data-original-title="分享到微博">
                        <!-- <i class="pandastudio-icons-weibo"></i> -->
                        🥰
                    </div>
                    <div title="" data-toggle="tooltip" class="share-icon-weixin cursor-hand pd-ripple pd-ripple-trigger"
                        data-original-title="分享到微信">
                        <!-- <i class="pandastudio-icons-wx"></i> -->
                        🧐
                    </div>
                    <div title="" data-toggle="tooltip" class="share-icon-qzone cursor-hand pd-ripple pd-ripple-trigger"
                        data-original-title="分享到QQ空间">
                        <!-- <i class="pandastudio-icons-qzone"></i> -->
                        🤔
                    </div>
                    <div title="" data-toggle="tooltip" class="share-icon-qq cursor-hand pd-ripple pd-ripple-trigger"
                        data-original-title="分享到QQ">
                        <!-- <i class="pandastudio-icons-qq"></i> -->
                        🤖
                    </div>
                    <div title="" data-toggle="tooltip" class="share-icon-img cursor-hand pd-ripple pd-ripple-trigger"
                        data-original-title="生成海报">
                        <!-- <i class="pandastudio-icons-img-post"></i> -->
                        👀
                    </div>
                </div>
            </div>
        </div>
        <div id="comments" class="article-container post-comments">
            <div class="pf-modal-title">
                <div class="title-text"><el-icon color="#ff7800">
                        <Opportunity />
                    </el-icon>Leave a comment</div>
            </div>

            <div id="respond" class="comment-respond">
                <form action="https://www.ipangbo.cn/wp-comments-post.php" method="post" id="commentform"
                    class="comment-form">
                    <p class="comment-form-comment"><textarea id="comment" name="comment" cols="45" rows="5"
                            placeholder="You don't need to Login!"></textarea></p>
                    <p class="comment-form-author comment-action" data-toggle="tooltip" title=""
                        style="display: inline-block;"><label for="author"><el-icon>
                                <User />
                            </el-icon></label><input id="author" name="author" type="text" value="" size="30"
                            placeholder="Nickname *" required autocomplete="off" disableautocomplete="">
                    </p>
                    <p class="comment-form-email comment-action" data-toggle="tooltip" title=""
                        style="display: inline-block;"><label for="email"><el-icon>
                                <Message />
                            </el-icon></label><input id="email" name="email" type="text" value="" size="30"
                            placeholder="E-mail *" required autocomplete="off" disableautocomplete="">
                    </p>
                    <p class="comment-form-url comment-action" data-toggle="tooltip" title=""
                        style="display: inline-block;"><label for="url"><el-icon>
                                <Compass />
                            </el-icon></label><input id="url" name="url" type="text" value="" size="30"
                            placeholder="Your Website" autocomplete="off" disableautocomplete=""></p>

                    <p class="form-submit">
                        <button name="submit" id="submit" class="submit" @click.prevent>
                            <el-icon>
                                <CircleCheckFilled />
                            </el-icon>
                            &nbsp;&nbsp;Send&nbsp;&nbsp;
                        </button>
                    </p>
            </form>
        </div>
        <ol class="comment-list">
        </ol>
    </div>
    <!-- <div id="comments" class="article-container post-comments">
            <div class="pf-modal-title">
                <div class="title-text"><el-icon color="#ff7800">
                        <Opportunity />
                    </el-icon>Leave a comment</div>
            </div>
            <div class="hidden">
                <div id="comment-user-log-out-popover">
                    <div class="popover-p">退出登录？</div>
                    <div class="popover-action"><a>取消</a><a class="primary"
                            href="https://www.ipangbo.cn/wp-login.php?action=logout&amp;redirect_to=https%3A%2F%2Fwww.ipangbo.cn%2Flinux%2F564.html&amp;_wpnonce=126d1a85d5"
                            ccclick="">确定</a></div>
                </div>
                <div id="comment-face-popover">
                </div>
            </div>
            <div id="respond" class="comment-respond">
                <form action="https://www.ipangbo.cn/wp-comments-post.php" method="post" id="commentform"
                    class="comment-form">
                    <p class="comment-form-comment"><textarea id="comment" name="comment" cols="45" rows="5"
                            placeholder="You don't need to login!"></textarea></p><a
                        class="comment-form-user-logged-in comment-action" id="comment-user-log-out" data-toggle="tooltip"
                        data-title="切换用户" role="button" tabindex="0" data-original-title="" title="">
                        <label>
                            <i class="pandastudio-icons-user"></i>
                        </label><span>磅礴</span>
                    </a><a class="comment-form-face comment-action" id="comment-face" data-toggle="tooltip"
                        data-title="插入表情" role="button" tabindex="1" data-original-title="" title="">
                        <label>
                            <i class="pandastudio-icons-face"></i>
                        </label>
                    </a>
                    <p class="form-submit">
                    <h3 id="reply-title" class="comment-reply-title"> <small><a rel="nofollow"
                                id="cancel-comment-reply-link" href="/linux/564.html#respond"
                                style="display:none;">取消回复</a></small></h3><button name="submit" type="submit" id="submit"
                        class="submit"><i class="pandastudio-icons-send"></i> 发表评论</button> <input type="hidden"
                        name="comment_post_ID" value="564" id="comment_post_ID">
                        <input type="hidden" name="comment_parent" id="comment_parent" value="0">
                        </p><input type="hidden" id="_wp_unfiltered_html_comment_disabled" name="_wp_unfiltered_html_comment"
                            value="7ffa9dcd93">

                                                                                                                                    </form>
                                                                                                                                </div>
                                                                                                                        <ol class="comment-list">
                                                                                                                        </ol>
                                                                                                                    </div> -->
    </div>
</template>

<script setup lang="ts">
import { usePostsStore } from '~/stores/posts';

const route = useRoute();

const postStore = usePostsStore();
if (!Array.isArray(route.params.id))
    await postStore.getPostDetailsById(route.params.id);
const currentArticle = postStore.currentArticle;

const getCategories = computed(() => {
    return currentArticle?._embedded['wp:term'][0].map((item: any) => item.name);
})
</script>

<style scoped>
.article-container.post-metas>span {
    margin-left: 6px;
}
</style>
