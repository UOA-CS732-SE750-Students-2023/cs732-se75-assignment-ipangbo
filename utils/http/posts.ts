export const getHomePageSlides = async () => {
    const { data: postData } = await useAPIFetch('/posts?per_page=5&orderby=date&order=desc&_fields=id,link,featured_media,categories,title,_links.wp:featuredmedia,_links.wp:term&_embed', {
        method: 'GET',
    })
    return postData
}