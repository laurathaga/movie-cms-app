import { createClient, type ClientConfig } from "@sanity/client";
import { type Movie, TVshows } from "./types";
import query from "./queries";

const clientConfig: ClientConfig = {
    projectId: import.meta.env.VITE_STUDIO_PROJECT_ID,
    dataset: import.meta.env.VITE_STUDIO_DATASET,
    useCdn: false,
    apiVersion: '2023-08-20',
};

const client = createClient(clientConfig);

export async function getMovies(): Promise<Movie[] | []> {
    try {
        const movies = await client.fetch(query({ content: 'movie', type: 'partial' }));
        return await movies;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getTvShows(): Promise<TVshows[] | []> {
    try {
        const tvShows = await client.fetch(query({ content: 'tvshow', type: 'partial' }));
        return await tvShows;
    } catch (error) {
        console.error(error);
        return [];
    }
}
