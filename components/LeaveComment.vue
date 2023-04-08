<!--
 * The form component allows user leave comments
 * @author: Bo Pang
 * @since: 2023-04-09
 * LeaveComment.vue
-->
<template>
    <div id="respond" class="comment-respond">
        <form id="commentform" class="comment-form">
            <p class="comment-form-comment">
                <textarea id="comment" name="comment" cols="45" rows="5" placeholder="You don't need to Login!"
                    v-model="content">
                                            </textarea>
            </p>
            <p class="comment-form-author comment-action" data-toggle="tooltip" title="" style="display: inline-block;">
                <label for="author">
                    <el-icon>
                        <User />
                    </el-icon>
                </label>
                <input id="author" name="author" type="text" size="30" placeholder="Nickname *" required autocomplete="off"
                    disableautocomplete="" v-model="name">
            </p>
            <p class="comment-form-email comment-action" data-toggle="tooltip" title="" style="display: inline-block;">
                <label for="email">
                    <el-icon>
                        <Message />
                    </el-icon>
                </label>
                <input id="email" name="email" type="text" size="30" placeholder="E-mail *" required autocomplete="off"
                    disableautocomplete="" v-model="email">
            </p>
            <p class="comment-form-url comment-action" data-toggle="tooltip" title="" style="display: inline-block;"><label
                    for="url">
                    <el-icon>
                        <Compass />
                    </el-icon>
                </label>
                <input id="url" name="url" type="text" size="30" placeholder="Your Website" autocomplete="off"
                    disableautocomplete="" v-model="url">
            </p>

            <p class="form-submit">
                <button name="submit" id="submit" class="submit" @click.prevent="send">
                    <el-icon>
                        <CircleCheckFilled />
                    </el-icon>
                    &nbsp;&nbsp;Send&nbsp;&nbsp;
                </button>
            </p>
        </form>
    </div>
</template>

<script setup lang="ts">
import { sendComment } from '~/utils/http/comments';

const props = defineProps<{
    id: number;
}>();

const email = ref('');
const name = ref('');
const url = ref('');
const content = ref('');

const send = () => {
    sendComment({
        "author_email": email.value,
        "author_name": name.value,
        "author_url": url.value,
        "content": content.value,
        "post": props.id,
    }).then(() => {
        ElMessage('Comment Sent')
        content.value = '';
    });
}


</script>

<style scoped></style>
