import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCardComponent';
import { MovieList } from '../utils/interfaces/MovieInterface';


const MoviesComponent: React.FC = (props) => {

    const [movieObject, setMovieObject] = useState<MovieList>();

    useEffect(() => {
        axios.get<MovieList>('https://www.omdbapi.com/?s=man&y=2022&type=movie&page=1&apikey=1a4e0ee6')
            .then(response => {
                setMovieObject(response.data);
            });
    }, []);

    console.log(movieObject);

    return (

        <section className="mx-auto w-9.5/12 mb-5">

            <div className='mt-10 mb-1 flex justify-between'>
                <h4 className="text-lg font-normal">
                    Results: <span className='text-primary'>{movieObject?.totalResults}</span>
                </h4>

                <ul className='list-none m-0 p-0 flex justify-between'>
                    <li className={`page-item`}>
                        <span
                            className="bg-primary text-white border border-primary rounded-md my-auto mx-1.5 text-sm inline-block px-2 py-1 cursor-pointer"
                            // href="#"
                            // tabIndex="-1"
                            // aria-disabled={currentPage === 1 ? false : true}
                            // onClick={onClickPrevious}
                        >
                            Previous
                        </span>
                    </li>

                    <li className={`page-item`}>
                        <span
                            className="text-primary border border-primary rounded-md my-auto mx-1.5 text-sm inline-block px-2 py-1 cursor-pointer"
                            // href="#"
                            // onClick={onClickNext}
                        >
                            Next
                        </span>
                    </li>
                </ul>
            </div>

            <div className="grid grid-flow-row gap-x-5 text-neutral-600 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

                {movieObject?.Search.map(movie => (
                    <MovieCard
                        Title={movie.Title.substring(0, 20)}
                        Year={movie.Year}
                        Poster={movie.Poster}
                        Type={movie.Type}
                    />
                ))}

            </div>
        </section>
    );
}

export default MoviesComponent;
