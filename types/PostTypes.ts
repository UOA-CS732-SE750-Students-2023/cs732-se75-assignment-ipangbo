export interface Slide {
    id: number;
    link: string;
    title: string;
    featuredmedia: string;
    category: string[];
    badge: "new" | "pinned";
    date: string;
}

export interface PostsListItem {
    id: number;
    link: string;
    title: string;
    featuredmedia: string;
    category?: string[];
    date: string;
}

export interface NaviItem {
    name: string;
    link: string;
}

export interface MusicBoxItem {
    id: number;
    name: string;
    url: string;
    status?: "normal" | "is-loading" | "is-playing";
    currentTime?: number;
}

export interface PostsByCategories {
    [key: string]: PostWithCategories[];
}

export interface PostWithCategories {
    id: number;
    link: string;
    title: string;
    featuredmedia: string;
    categories: number[];
    date: string;
}