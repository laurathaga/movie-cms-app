import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'actor',
    type: 'document',
    title: 'Actors',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Name'
        }),
        defineField({
            name: 'career',
            type: 'string',
            title: 'Career',
        }),
        defineField({
            name: 'bio',
            type: 'string',
            title: 'Bio',
        }),
    ],
});
