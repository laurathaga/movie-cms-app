export interface Movie {
    title?: string;
    description?: string;
    poster?: string;
    rating?: number;
}

export interface TVshows extends Movie {
    seasons?: number;
    episodes?: number;
}

export interface QueryFunc {
    type: 'full' | 'partial';
    content: 'movie' | 'tvshow';
}
