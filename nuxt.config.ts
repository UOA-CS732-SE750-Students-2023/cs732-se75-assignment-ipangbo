// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
        '@element-plus/nuxt',
    ],
    app: {
        head: {
            meta: [
                { name: 'keywords', content: 'blog,linux,web,development' },
                { name: 'description', content: "Bo Pang's blog. Sharing thinkings about development. Concentrating on linux and web development. Tring to finish CS 752 assignment." }
            ],
        },
    },
    elementPlus: {},
    runtimeConfig: {
        public: {
            blogTitle: 'R theme by Nuxt',
            baseURL: 'http://localhost:38099/wp-json/wp/v2',
            // baseURL: 'https://www.ipangbo.cn/wp-json/wp/v2',
        },
    },

})