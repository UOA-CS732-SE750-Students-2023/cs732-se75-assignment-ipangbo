export const generateCatelog = (htmlEle: any) => {
    const articleContent = htmlEle;
    const titleTags = ['H2', 'H3'];
    let titles: any[] = [];
    articleContent.childNodes.forEach((e: any, index: number) => {
        if (titleTags.includes(e.nodeName)) {
            const id = "header-" + index;
            e.setAttribute("id", id);
            titles.push({
                id: id,
                title: e.innerHTML,
                level: Number(e.nodeName.substring(1, 2)),
                nodeName: e.nodeName,
            });
        }
    });
    return titles;
};