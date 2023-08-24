const homepage_movieQuery = `
    title,
    poster{
        asset->{url}
    }
`;

const full_movieQuery = `
    title,
    description,
    poster{
        asset->{url}
    }
`;

export default {
    homepage_movieQuery,
    full_movieQuery,
};
