import axios from 'axios';
import { MovieDetailInterface, MovieListInterface } from './interfaces/MovieInterface';


/** 
 * AXIOS REQUEST TO FETCH 
 * LATEST MOVIES WITH ANY 
 * KEYWORD FROM THE OMDB API
 */

export const fetchOMDBMovies = async (page: number, title: string | any) => {

    const { data } = await axios.get<MovieListInterface>(`https://www.omdbapi.com/?s=${title}&page=${page}&apikey=1a4e0ee6`,
        {
            headers: {
                Accept: 'application/json'
            },
        },
    )

    return {
        'data': data
    }

}


/** 
 * AXIOS REQUEST TO FETCH 
 * DETAILS OF A SINGLE MOVIE
 * USING ITS ID FROM THE OMDB API
 */

export const fetchOMDBMovieDetails = async (movieID: string | any) => {

    const { data } = await axios.get<MovieDetailInterface>(`https://www.omdbapi.com/?i=${movieID}&plot=full&apikey=1a4e0ee6`,
        {
            headers: {
                Accept: 'application/json'
            },
        },
    )

    return {
        'data': data
    }

}
