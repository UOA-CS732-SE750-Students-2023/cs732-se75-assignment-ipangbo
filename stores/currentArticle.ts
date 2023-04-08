import { defineStore } from "pinia";

export const useCurrentArticleStore = defineStore('currentArticle', () => {
    // todo: Since there is an order of loading components, the head image HTML
    // have generated before the imgAddr is set. So when no default imgAddr was
    // set, the address will be empty.
    // const imgAddr = ref<string>('https://cdn.auckland.ac.nz/aem/content/auckland/en/about-us/about-the-university/jcr:content/firstGrid/par1/visualpagelistcompon/image.img.1024.medium.jpg/1674081878708.jpg');
    const imgAddr = ref<string>('');
    const title = ref<string>('');
    const docTree = ref<any[]>([]);
    return {
        imgAddr,
        title,
        docTree,
    }
})