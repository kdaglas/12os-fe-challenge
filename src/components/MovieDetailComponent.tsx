import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Movie } from '../utils/interfaces/MovieInterface';

export interface Props {
    // history: RouteComponentProps["history"];
    // location: RouteComponentProps['location'];

}

// interface stateType{
//     from:{pathname:string}
// }



const MovieDetailComponent = (props: Props) => {


    // let navigate = useNavigate();

    // const { state } = useLocation<stateType>()
    const [selectedMovieID, setselectedMovieID] = useState<string>();
    const [movieDetails, setMovieDetails] = useState<Movie>();
    const { movieID } = useParams();




    useEffect(() => {
        setselectedMovieID(movieID)
    }, [movieID]);


    useEffect(() => {
        axios.get<Movie>(`https://www.omdbapi.com/?i=${selectedMovieID}&apikey=1a4e0ee6`)
            .then(response => {
                setMovieDetails(response.data);
            });
    }, [selectedMovieID]);

    // console.log(movieDetails)
    console.log(movieID);


    return (
        <div>
            <div className="w-9.5/12 mt-24 mx-auto flex  items-center">
                <div className='lg:w-1/2'>
                    <img
                        alt="movie-poster"
                        className="w-8/12 mx-auto  object-cover object-center border border-gray-200 h-full rounded-lg"
                        src={movieDetails?.Poster}
                    />
                </div>

                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 my-6 lg:mt-0">
                    <small className="text-sm title-font border border-gray-500 px-2 py-1 tracking-widest rounded text-gray-500">
                        {movieDetails?.Type}
                    </small>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 mt-3 dark:text-white">{movieDetails?.Title}</h1>

                    <div className="flex mb-5">
                        <span className="flex items-center">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-primary" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-primary" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-primary" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-primary" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-primary" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <span className="text-gray-600 ml-3">imdbRating: {movieDetails?.imdbRating}</span>
                        </span>

                        <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                            <span className="mr-3"><span className="font-bold">Released:</span> {movieDetails?.Released}</span>
                        </span>
                    </div>

                    <p className="leading-relaxed mb-6">{movieDetails?.Plot}</p>

                    <p className="mt-6">
                        <span className="font-bold text-primary">Genre: </span> {movieDetails?.Genre}
                    </p>

                    <div className="flex mt-6 items-center py-5 border-b-2 border-t-2 border-gray-200 mb-5">
                        <div className="flex">
                            <span className="mr-3"><span className="font-bold">Cast:<br /></span> {movieDetails?.Actors}</span>

                            <span className="mr-3"><span className="font-bold">Writer:<br /></span> {movieDetails?.Writer}</span>
                        </div>

                    </div>

                    <div className="flex items-center">
                        <span className="mr-3">Duration</span>
                        <div className="relative">
                            <div className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base px-5">
                                <p>{movieDetails?.Runtime}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetailComponent;
