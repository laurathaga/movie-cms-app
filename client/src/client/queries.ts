export const movieQL = `
    *[_type == 'movie']{
        title,
        description,
        poster{
            asset->{url}
        }
    }
`
