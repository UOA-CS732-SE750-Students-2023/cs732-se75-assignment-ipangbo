// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
        '@element-plus/nuxt',
    ],
    elementPlus: {},
    runtimeConfig: {
        public: {
            baseURL: 'http://localhost:38099/wp-json/wp/v2',
            // baseURL: 'https://www.ipangbo.cn/wp-json/wp/v2',
        },
    },

})