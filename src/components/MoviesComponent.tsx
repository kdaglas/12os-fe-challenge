import React, { useContext } from 'react';
import MovieCard from './MovieCardComponent';
import Paginate from './shared/PaginateBtns';
import NoContent from './shared/NoContent';

import poster from '../assets/images/placeholder.png';
import SkeletonLoader from './shared/MoviesLoader';
import { MovieContext } from '../context/MovieContext';


const MoviesComponent: React.FC = () => {

    const {
        page,
        totalPages,
        loading,
        movieObject,
        setPage,
        // setLoading
    } = useContext(MovieContext)

    // const onClickNext = () => {
    //     if (page < totalPages) {
    //         setLoading(true)
    //         setPage(page + 1)
    //     }
    // }

    // const onClickPrevious = () => {
    //     if (page > 1) {
    //         setLoading(true)
    //         setPage!(page! - 1)
    //     }
    // }

    const onClickNext = () => {
        if (page! < totalPages!) {
            setPage!(page! + 1)
        }
    }

    const onClickPrevious = () => {
        if (page! > 1) {
            setPage!(page! - 1)
        }
    }

    return (
        <section className="mx-auto py-10 w-10.5/12 sm:w-10.5/12 md:w-9.5/12 lg:w-9.5/12 xl:w-9.5/12">

            {!loading && movieObject &&
                <>
                    <div className='mb-1 flex justify-between'>
                        <h4 className="text-base text-black dark:text-white font-normal">
                            <span data-testid="page">Page:</span> <span className='text-primary'>{page} of {totalPages}</span>
                        </h4>

                        <Paginate
                            page={page!}
                            totalPages={totalPages!}
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
