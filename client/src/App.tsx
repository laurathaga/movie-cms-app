import { MoviesContext } from './context/MovieContext';
import './App.css'
import { useContext } from 'react';

function App() {
    const movies = useContext(MoviesContext);

    if(!movies.length) return '';

    return (
        <div>
            {movies.map(movie => {
                return (
                    <>
                        <h1>{movie.title}</h1>
                        <p>{movie.description}</p>
                    </>
                )
            })}
        </div>
    );
}

export default App
