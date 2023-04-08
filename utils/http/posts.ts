import { PostWithCategories, Slide } from "~/types/PostTypes";

export const listNewestPosts = async (): Promise<any[]> => {
    // Since the carousel (custom) and the Newest part (6) will display the newest posts simutaneously,
    // We retrive the max value of posts displayed in carousel and Newest part.
    const { data: postData } = await useAPIFetch(`/posts?per_page=${Math.max(6, useRuntimeConfig().public.newestAmountInCarousel)}&orderby=date&order=desc&_fields=id,link,date,title,_links.wp:featuredmedia,_links.wp:term&_embed`, {
        method: 'GET',
    });


    if (Array.isArray(postData.value)) return postData.value;
    return [];
}

export const listPinnedPosts = async (): Promise<any[]> => {
    const { data: postData } = await useAPIFetch('/posts?per_page=10&orderby=date&order=desc&_fields=id,link,date,title,_links.wp:featuredmedia,_links.wp:term&sticky=true&_embed', {
        method: 'GET',
    });

    if (Array.isArray(postData.value)) return postData.value;
    return [];
}

export const listPostsInCategories = async (categories: string): Promise<any[]> => {
    const { data: postData } = await useAPIFetch(`/posts?categories=${categories}&per_page=6&orderby=date&order=desc&_fields=id,link,date,title,_links.wp:featuredmedia,_links.wp:term&_embed`, {
        method: 'GET',
    });

    if (Array.isArray(postData.value)) return postData.value;
    return [];
}

export const listAllPostsWithCategories = async (): Promise<any[]> => {
    const { data: postData } = await useAPIFetch(`/posts?&per_page=100&orderby=date&order=desc&_fields=id,link,date,title,categories,_links.wp:featuredmedia&_embed`, {
        method: 'GET',
    });

    if (Array.isArray(postData.value)) return postData.value;
    return [];
}