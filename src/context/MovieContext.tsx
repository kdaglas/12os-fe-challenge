import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MovieContextInterface, MovieDetailInterface, MovieListInterface, MovieProviderInterface } from '../utils/interfaces/MovieInterface';
import { fetchOMDBMovieDetails, fetchOMDBMovies } from '../utils/MoviesAPI';


const defaultValue = {
    title: "man",
    page: 1,
    totalPages: 1,
    loading: false,
    setPage: () => 1,
    setTotalPages: () => 1,
    setLoading: () => false,
    setPropTitle: () => false,
    setMovieID: () => ""
} as MovieContextInterface

export const MovieContext = React.createContext<MovieContextInterface>(defaultValue)


const MovieProvider: React.FC<MovieProviderInterface> = (props) => {

    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1)
    const [loading, setLoading] = useState<boolean>(false);
    const [title, setPropTitle] = useState<string>("man");
    const [serverError, setServerError] = useState<string>("");

    // const [setPropTitle] = useState<string>("man");
    const [movieObject, setMovieObject] = useState<MovieListInterface>();

    const [movieDetails, setMovieDetails] = useState<MovieDetailInterface>();
    const [movieID, setMovieID] = useState<string>("")

    useEffect(() => {
        const fetchMovies = async () => {

            let defaultTile = "man";
            const searchedTitle = title ? title : defaultTile

            try {
                setLoading(true);
                setTotalPages(1);
                setServerError("")

                // call the endpoint from the api file
                const server_response = await fetchOMDBMovies(page, searchedTitle);

                setLoading(false);

                if (server_response.data.Response === "True") {
                    setMovieObject(server_response.data);
                    setTotalPages(Math.ceil((Number(server_response.data.totalResults)) / 10))
                } else {
                    setMovieObject(undefined);
                    setTotalPages(1)
                }
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    setServerError("Error message: " + error.message)
                } else {
                    setServerError("Unexpected error: " + error)
                }
            }

        }

        fetchMovies()
    }, [title, page])

    useEffect(() => {
        const fetchMovieDetails = async () => {

            try {
                setLoading(true);
                setServerError("")

                // call the endpoint from the api file
                const server_response = await fetchOMDBMovieDetails(movieID);

                setLoading(false);

                if (server_response.data.Response === "True") {
                    setMovieDetails(server_response.data);
                } else {
                    setMovieDetails(undefined);
                }
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    setServerError("Error message: " + error.message)
                } else {
                    setServerError("Unexpected error: " + error)
                }
            }

        }

        fetchMovieDetails()
    }, [movieID]);


    return (
        <MovieContext.Provider
            value={{
                title,
                page,
                totalPages,
                loading,
                movieObject,
                movieDetails,
                setPage,
                setTotalPages,
                setLoading,
                setPropTitle,
                setMovieID
            }}
        >
            {props.children}
        </MovieContext.Provider>
    );
}

export default MovieProvider;
