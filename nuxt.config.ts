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
            authorName: 'Bo Pang',
            authorSlogan: 'Science, Sky, Clock Tower',
            sideNavigation: [
                {
                    name: 'TimeLine',
                    link: '/timeline',
                },
                {
                    name: 'WebSite',
                    link: '/category/website-technique',
                }, {
                    name: 'Dev',
                    link: '/category/development',
                }, {
                    name: 'Life',
                    link: '/category/life',
                }, {
                    name: 'Linux',
                    link: '/category/linux',
                }, {
                    name: 'Uncated',
                    link: '/category/uncategorized',
                },
            ],
            musicBoxPlayList: [
                {
                    id: 1,
                    name: "Tmr'llBeBetterMusic",
                    url: 'https://tc.qn.ipangbo.cn/media/tomorror_will_be_better_music.mp3',
                },
                {
                    id: 2,
                    name: "Tmr'llBeBetter",
                    url: 'https://tc.qn.ipangbo.cn/media/tomorror_will_be_better.mp3',
                },
                {
                    id: 3,
                    name: 'We Are the World',
                    url: 'https://tc.qn.ipangbo.cn/media/we_are_the_world.mp3',
                },
            ],
            newestAmountInCarousel: 5,
            categoriesOnIndexPage: [
                {
                    "id": 9,
                    "name": "Development",
                    "slug": "development"
                },
                {
                    "id": 29,
                    "name": "Life",
                    "slug": "life"
                },
                {
                    "id": 3,
                    "name": "Linux",
                    "slug": "linux"
                },
                // {
                //     "id": 1,
                //     "name": "Uncategorized",
                //     "slug": "uncategorized"
                // },
                {
                    "id": 23,
                    "name": "Website Technique",
                    "slug": "website-technique"
                }
            ],
        },
    },

})