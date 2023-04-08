export const listLiteBlogs = async (): Promise<any[]> => {
    const { data: postData } = await useAPIFetch('/lite-blog?per_page=20&orderby=date&order=desc&_fields=id,content,date', {
        method: 'GET',
    })

    if (Array.isArray(postData.value)) return postData.value;
    return [];
}