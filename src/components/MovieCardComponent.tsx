import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../utils/interfaces/MovieInterface';


const MovieCard: React.FC<Movie> = (Movie) => {

    return (
        <div className="my-4 duration-300 hover:-translate-y-1">
            <Link to="/movie-detail" className="cursor-pointer">
                <img
                    alt=""
                    src={Movie.Poster}
                    className="h-64 w-full object-cover rounded-lg"
                />

                <div className="py-2">
                    <p className="text-base font-semibold leading-relaxed text-gray-800 ">
                        {Movie.Title}
                    </p>

                    <div className='flex justify-between'>
                        <small className="leading-5 text-gray-500 ">
                            {Movie.Year}
                        </small>

                        <small className="leading-5 border border-gray-500 px-1 rounded text-gray-400 ">
                            {Movie.Type}
                        </small>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default MovieCard;