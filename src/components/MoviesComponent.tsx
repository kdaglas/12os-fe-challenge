import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCardComponent';
import { MovieList } from '../utils/interfaces/MovieInterface';
import Paginate from './shared/PaginateBtns';
import NoContent from './shared/NoContent';

import poster from '../assets/images/placeholder.png';
import SkeletonLoader from './shared/MoviesLoader';

export interface Props {
    title?: string | any
}

const MoviesComponent: React.FC<Props> = (props) => {

    const [movieObject, setMovieObject] = useState<MovieList>();

    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1)
    const [loading, setLoading] = useState<boolean>(false);
    const [title] = useState<string>("man");


    useEffect(() => {
        setPage(1)
        fetchLatestMovies()
    }, [props.title])

    useEffect(() => {
        fetchLatestMovies()
    }, [page]);


    const fetchLatestMovies = async () => {
        try {
            setLoading(true);
            setTotalPages(1);
            await axios.get<MovieList>(`https://www.omdbapi.com/?s=${props.title ? props.title : title}&page=${page}&apikey=1a4e0ee6`)
                .then(response => {
                    setLoading(false);
                    if (response.data.Response === "True") {
                        setMovieObject(response.data);
                        setTotalPages(Math.ceil((Number(response?.data?.totalResults)) / 10))
                    } else {
                        setMovieObject(undefined);
                        setTotalPages(1)
                    }
                });
        } catch (error) {
            console.log(error)
        }
    }

    const onClickNext = () => {
        if (page < totalPages) {
            setLoading(true)
            setPage(page + 1)
        }
    }

    const onClickPrevious = () => {
        if (page > 1) {
            setLoading(true)
            setPage(page - 1)
        }
    }


    return (

        <section className="mx-auto py-10 w-10.5/12 sm:w-10.5/12 md:w-9.5/12 lg:w-9.5/12 xl:w-9.5/12">

            {!loading && movieObject &&
                <>
                    <div className='mb-1 flex justify-between'>
                        <h4 className="text-base text-black dark:text-white font-normal">
                            Page: <span className='text-primary'>{page} of {totalPages}</span>
                        </h4>

                        <Paginate
                            page={page}
                            totalPages={totalPages}
                            onClickPrevious={onClickPrevious}
                            onClickNext={onClickNext}
                        />
                    </div>

                    <div className="grid grid-flow-row gap-x-5 text-neutral-600 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

                        {movieObject && movieObject?.Search.map(movie => (
                            <MovieCard
                                key={movie.imdbID}
                                Title={movie.Title.substring(0, 20)}
                                Year={movie.Year}
                                Poster={movie.Poster === "N/A" ? poster : movie.Poster}
                                Type={movie.Type}
                                imdbID={movie.imdbID}
                            />
                        ))}

                    </div>

                    <div className='mt-5 flex justify-between'>
                        <h4 className="text-base text-black dark:text-white font-normal">
                            Results: <span className='text-primary'>{movieObject?.totalResults}</span>
                        </h4>

                        <Paginate
                            page={page}
                            totalPages={totalPages}
                            onClickPrevious={onClickPrevious}
                            onClickNext={onClickNext}
                        />
                    </div>
                </>
            }

            {!loading && !movieObject &&
                <NoContent />
            }

            {loading &&
                <SkeletonLoader />
            }

        </section>
    );
}

export default MoviesComponent;
