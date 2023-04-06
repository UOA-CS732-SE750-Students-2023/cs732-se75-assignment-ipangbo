import { defineStore } from "pinia";
import { Slide } from "~/types/PostTypes";
import { listNewestPosts, listPinnedPosts } from "@/utils/http/posts";

export const usePostsStore = defineStore("posts", () => {

    const getHomePageNewestSlides = async () => {
        const respNew: any[] = await listNewestPosts();

        let res: Slide[] = [];
        let added: any = {};

        respNew.forEach((orig) => {
            res.push({
                id: orig.id,
                link: orig.link,
                title: orig.title.rendered,
                featuredmedia: orig["_embedded"]["wp:featuredmedia"][0]["source_url"],
                category: orig["_embedded"]["wp:term"][0].map((item: any) => item.name).join('/'),
                badge: "new",
            });

            added[orig.id] = true;
        })

        return res;
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
            });

        })

        return res;
    }

    return {
        getHomePageNewestSlides,
        getHomePagePinnedSlides,
    }

})