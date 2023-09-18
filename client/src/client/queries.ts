import { type QueryFunc } from "./types";

const partial_movie_tvshowQuery = `
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

const full_tvshowQuery = `
    rating,
    episodes,
    seasons,
    ${full_movieQuery}
`;

export default ({ type, content }: QueryFunc) => {
    const fullQuery = content === 'movie' ? full_movieQuery : full_tvshowQuery;
    const projection = type === 'partial' ? partial_movie_tvshowQuery : fullQuery;

    return `
        *[_type == "${content}"]{
            ${projection}
        }
    `;
};
