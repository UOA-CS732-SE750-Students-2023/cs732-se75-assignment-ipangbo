export interface Slide {
    id: number;
    link: string;
    title: string;
    featuredmedia: string;
    category: string[];
    badge: "new" | "pinned";
}

