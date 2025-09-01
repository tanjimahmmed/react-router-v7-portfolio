export type Project = {
    id: string;
    documentId: string;
    title: string;
    description: string;
    image: string;
    url: string;
    date: string;
    category: string;
    featured: boolean;
}

export type Post = {
    id: string;
    slug: string;
    title: string;
    body: string;
    excerpt: string;
    date: string;
    image: string;
}

export type StrapiResponse<T> = {
    data: T[]
};


export type StrapiProject = {
    [x: string]: any;
    id: string;
    title: string;
    description: string;
    image?: {
        url: string;
        formats?: {
            thumbnail?: {url: string};
            small?: {url:string};
            medium?: {url: string};
            large?: {url:string};
        }
    };
    url: string;
    date: string;
    category: string;
    featured: boolean;
}

export type StrapiPost = {
    id: string;
    documentId: string;
    title: string;
    slug: string;
    date: string;
    body: string;
    image?: {
        url: string;
        formats?: {
            thumbnail?: {url: string};
            small?: {url:string};
            medium?: {url: string};
            large?: {url:string};
        }
    };
}