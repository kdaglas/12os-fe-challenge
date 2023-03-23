import React, { useState } from 'react';
import axios from 'axios';
import { Movie, MovieList } from './interfaces/MovieInterface';


// interface GetMoviesResponse {
//     data: Movie[]
// }

// const url = "https://www.omdbapi.com/?apikey="
// const apiKey = "1a4e0ee6";
// const baseUrl = url + apiKey;

// // variables
// const search = "man";
// const year = 2022
// const type = "movie";
// const pageNumber = 1;

// https://www.omdbapi.com/?s=man&y=2023&type=movie&page=1&apikey=1a4e0ee6

/** 
 * AXIOS REQUEST TO FETCH 
 * LATEST MOVIES WITH ANY 
 * KEYWORD FROM THE OMDB API
 */
// export const getLatestMovies = async ({ pageNumber, search, year, type }: Movie) => {
export const getLatestMovies = async () => {

    // const endPoint = "&s=" + search + "&y=" + year + "&type=" + type + "&page=" + pageNumber;

    try {
        let response = axios.get<MovieList>('https://www.omdbapi.com/?s=man&y=2022&type=movie&page=1&apikey=1a4e0ee6')

        console.log(response)
        return response
    } catch (error) {
        let connError = {
            'status': 'conn',
            'details': {
                'message': 'Oops!!! Failed to reach the server. Please check your internet connection!',
                'content': false
            }
        }
        return connError;
    }

    // try {
    //     const { data, status } = await axios.get<GetMoviesResponse>(
    //         baseUrl + endPoint,
    //         // "http://www.omdbapi.com/?i=tt3896198&apikey=1a4e0ee6",
    //         {
    //             headers: {
    //                 Accept: 'application/json'
    //             },
    //         },
    //     )

    //     // console.log(JSON.stringify(data, null, 4));
    //     console.log("Response status is: ", status)
    //     return {
    //         'response': status,
    //         'data': data
    //     }
    // } catch (error) {
    //     if (axios.isAxiosError(error)) {
    //         console.log("Error message: ", error.message);
    //         return error.message;
    //     } else {
    //         console.log("Unexpected error: ", error);
    //         return 'Oops!!! Failed to reach the server. Please check your internet connection!'
    //     }
    // }

}
