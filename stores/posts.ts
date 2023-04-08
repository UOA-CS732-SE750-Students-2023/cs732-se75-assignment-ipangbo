import { defineStore } from "pinia";
import { PostsByCategories, Slide, PostWithCategories } from "~/types/PostTypes";
import { listAllPostsWithCategories, listNewestPosts, listPinnedPosts, listPostsInCategories } from "@/utils/http/posts";
import { Category } from "~/types/CategoryTypes";

export const usePostsStore = defineStore("posts", () => {
    const newestPages = ref<Slide[]>([]);
    const pinnedPages = ref<Slide[]>([]);
    const postsByCategories = ref<PostsByCategories>({});

    const getHomePageNewestSlides = async () => {
        const respNew: any[] = await listNewestPosts();

        let res: Slide[] = [];

        respNew.forEach((orig) => {
            res.push({
                id: orig.id,
                link: orig.link,
                title: orig.title.rendered,
                featuredmedia: orig["_embedded"]["wp:featuredmedia"][0]["source_url"],
                category: orig["_embedded"]["wp:term"][0].map((item: any) => item.name).join('/'),
                badge: "new",
                date: orig["date"].split("T")[0],
            });

        })

        newestPages.value = res;
    }

    const getHomePagePinnedSlides = async () => {
        const respPinned: any[] = await listPinnedPosts();
        let res: Slide[] = [];

        respPinned.forEach((orig) => {
            res.push({
                id: orig.id,
                link: orig.link,
                title: orig.title.rendered,
                featuredmedia: orig["_embedded"]["wp:featuredmedia"][0]["source_url"],
                category: orig["_embedded"]["wp:term"][0].map((item: any) => item.name).join('/'),
                badge: "pinned",
                date: orig.date.split("T")[0],
            });

        })

        pinnedPages.value = res;
    }

    const getPostsByCategories = async () => {
        const categories: Category[] = useRuntimeConfig().public.categoriesOnIndexPage as Category[];

        let res: PostsByCategories = {};

        const all = await listAllPostsWithCategories();

        const tmp = all.map((orig): PostWithCategories => {
            return {
                id: orig.id,
                link: orig.link,
                title: orig.title.rendered,
                featuredmedia: orig["_embedded"]["wp:featuredmedia"][0]["source_url"],
                categories: orig.categories,
                date: orig.date.split("T")[0],
            }
        })

        categories.forEach((category) => {
            res[category.name] = tmp.filter((item) => item.categories.includes(category.id))
        })

        postsByCategories.value = res;
    }

    return {
        newestPages,
        pinnedPages,
        postsByCategories,
        getHomePageNewestSlides,
        getHomePagePinnedSlides,
        getPostsByCategories,
    }

})