import { createClient, type ClientConfig } from "@sanity/client";
import { type Movie, TVshows, QueryFunc } from "./types";
import query from "./queries";

const clientConfig: ClientConfig = {
    projectId: import.meta.env.VITE_STUDIO_PROJECT_ID,
    dataset: import.meta.env.VITE_STUDIO_DATASET,
    useCdn: false,
    apiVersion: '2023-08-20',
};

const client = createClient(clientConfig);

async function getData<T>({
    content,
    type,
}: QueryFunc): Promise<T[] | []> {
    try {
        const data = await client.fetch(query({ content, type }).trim());
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export function getMovies() {
    return getData<Movie>({ content: 'movie', type: 'partial' });
}

export function getTvShows() {
    return getData<TVshows>({ content: 'tvshow', type: 'partial' });
}
