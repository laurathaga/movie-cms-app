import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: import.meta.env.VITE_STUDIO_PROJECT_ID,
    dataset: import.meta.env.VITE_STUDIO_DATASET,
    apiVersion: '2023-08-20',
});
