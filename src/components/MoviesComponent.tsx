import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCardComponent';
import { MovieList } from '../utils/interfaces/MovieInterface';
import Paginate from './shared/PaginateBtns';
import NoContent from './shared/NoContent';

export interface Props {
    title?: string | any
}

const MoviesComponent: React.FC<Props> = (props) => {

    const [movieObject, setMovieObject] = useState<MovieList>();

    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1)
    const [loading, setLoading] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("man");
    const [year, setYear] = useState<string>("2022");
    const [movieType, setMovieType] = useState<string>("movie");


    useEffect(() => {
        // setMovieObject(undefined);
        // if (props.title.length > 2) {

        console.log(props.title)
        setTitle(props.title)
        fetchMovies()
        // }
    }, [props.title])

    useEffect(() => {
        fetchMovies()
    }, [page]);


    const fetchMovies = () => {

        console.log(props.title.length)
        try {
            setLoading(true);
            axios.get<MovieList>(`https://www.omdbapi.com/?s=${props.title ? props.title : title}&y=${year}&type=${movieType}&page=${page}&apikey=1a4e0ee6`)
                .then(response => {
                    console.log(response)
                    setLoading(false);
                    if (response.data.Response === "True") {
                        setMovieObject(response.data);
                        setTotalPages(Math.ceil((response?.data?.totalResults) / 10))
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
            setPage(page + 1)
        }

    }

    const onClickPrevious = () => {
        if (page > 1) {
            setPage(page - 1)
        }

    }


    return (

        <section className="mx-auto w-10.5/12 sm:w-10.5/12 md:w-9.5/12 lg:w-9.5/12 xl:w-9.5/12  mb-5">

            <div className='mt-10 mb-1 flex justify-between'>
                {!loading && movieObject &&
                    <h4 className="text-lg font-normal">
                        Page: <span className='text-primary'>{page} of {totalPages}</span>
                    </h4>
                }

                {loading &&
                    <span className='text-primary'>Loading ...</span>
                }

                {movieObject &&
                    <Paginate
                        page={page}
                        totalPages={totalPages}
                        onClickPrevious={onClickPrevious}
                        onClickNext={onClickNext}
                    />
                }

            </div>

            <div className="grid grid-flow-row gap-x-5 text-neutral-600 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

                {movieObject?.Search.map(movie => (
                    <MovieCard
                        Title={movie.Title.substring(0, 20)}
                        Year={movie.Year}
                        Poster={movie.Poster}
                        Type={movie.Type}
                        imdbID={movie.imdbID}
                    />
                ))}

            </div>

            <div className='mt-5 mb-1 flex justify-between'>
                {!loading && movieObject &&
                    <h4 className="text-lg font-normal">
                        Results: <span className='text-primary'>{movieObject?.totalResults}</span>
                    </h4>
                }

                {movieObject && <Paginate page={page} totalPages={totalPages} onClickPrevious={onClickPrevious} onClickNext={onClickNext} />}
            </div>

            {!movieObject && !loading && <NoContent />}


        </section>
    );
}

export default MoviesComponent;
