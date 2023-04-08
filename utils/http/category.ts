export const getCategoryNameById = async (category: number): Promise<{ name: string; slug: string }> => {
    const { data: postData } = await useAPIFetch(`/categories/${category}/?_fields=name,slug`, {
        method: 'GET',
    });

    return postData.value as { name: string; slug: string };
}