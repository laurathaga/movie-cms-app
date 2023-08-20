import { defineType, defineField } from "sanity";

export default defineType({
    name: 'movie',
    type: 'document',
    title: 'Movies',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Movie title',
        }),
        defineField({
            name: 'description',
            type: 'string',
            title: 'Movie Description',
        }),
        defineField({
            name: 'poster',
            type: 'image',
            title: 'Movie Poster',
        }),
    ],
});
