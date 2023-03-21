import React, { useState } from 'react';
import axios from 'axios';


export interface Movie {
    Title: string,
    Year: string,
    Rated: string,
    Released: string,
    Runtime: string,
    Genre: string,
    Director: string,
    Writer: string,
    Actors: string,
    Plot: string,
    Language: string,
    Country: string,
    Awards: string,
    Poster: string,
    // Ratings: [
    //     {
    //         "Source": "Internet Movie Database",
    //         "Value": "7.6/10"
    //     },
    //     {
    //         "Source": "Rotten Tomatoes",
    //         "Value": "85%"
    //     },
    //     {
    //         "Source": "Metacritic",
    //         "Value": "67/100"
    //     }
    // ],
    Metascore: string,
    imdbRating: string,
    imdbVotes: string,
    imdbID: string,
    Type: string,
    DVD: string,
    BoxOffice: string,
    Production: string,
    Website: string,
    Response: string
}

// export interface Movie {
//     pageNumber: number,
//     search: string,
//     year: number,
//     type: string
// }

interface GetMoviesResponse {
    data: Movie[]
}

const url = "https://www.omdbapi.com/?apikey="
const apiKey = "1a4e0ee6";
const baseUrl = url + apiKey;

// variables
const search = "man";
const year = 2022
const type = "movie";
const pageNumber = 1;

// https://www.omdbapi.com/?s=man&y=2023&type=movie&page=1&apikey=1a4e0ee6

/** 
 * AXIOS REQUEST TO FETCH 
 * LATEST MOVIES WITH ANY 
 * KEYWORD FROM THE OMDB API
 */
// export const getLatestMovies = async ({ pageNumber, search, year, type }: Movie) => {
export const getLatestMovies = async () => {

    const [allMovies, setAllMovies] = useState<Movie[]>([]);

    const endPoint = "&s=" + search + "&y=" + year + "&type=" + type + "&page=" + pageNumber;

    try {
        const { data, status } = await axios.get<GetMoviesResponse>(
            baseUrl + endPoint,
            // "http://www.omdbapi.com/?i=tt3896198&apikey=1a4e0ee6",
            {
                headers: {
                    Accept: 'application/json'
                },
            },
        )

        // console.log(JSON.stringify(data, null, 4));
        // console.log("Response status is: ", status)
        return {
            'response': status,
            'data': data
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("Error message: ", error.message);
            return error.message;
        } else {
            console.log("Unexpected error: ", error);
            return 'Oops!!! Failed to reach the server. Please check your internet connection!'
        }
    }

}
