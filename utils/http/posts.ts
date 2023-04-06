export const listNewestPosts = async (): Promise<any[]> => {
    const { data: postData } = await useAPIFetch('/posts?per_page=5&orderby=date&order=desc&_fields=id,link,featured_media,categories,title,_links.wp:featuredmedia,_links.wp:term&_embed', {
        method: 'GET',
    })

    if (Array.isArray(postData.value)) return postData.value;
    return [];
}

export const listPinnedPosts = async (): Promise<any[]> => {
    const { data: postData } = await useAPIFetch('/posts?per_page=10&orderby=date&order=desc&_fields=id,link,title,_links.wp:featuredmedia,_links.wp:term&sticky=true&_embed', {
        method: 'GET',
    })

    if (Array.isArray(postData.value)) return postData.value;
    return [];
}