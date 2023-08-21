import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import * as API_Client from '../client';
import { type Movie } from '../client/types';

const MoviesContext = createContext<Array<Movie> | []>([]);

export default function MoviesData({ children }: PropsWithChildren) {
    const [data, setData] = useState<Array<Movie> | []>([]);

    useEffect(() => {
        API_Client
            .getMovies()
            .then(response => response.length && setData(response))
    }, []);

    return (
        <MoviesContext.Provider value={data}>
            {children}
        </MoviesContext.Provider>
    )
}
