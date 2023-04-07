export interface Slide {
    id: number;
    link: string;
    title: string;
    featuredmedia: string;
    category: string[];
    badge: "new" | "pinned";
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