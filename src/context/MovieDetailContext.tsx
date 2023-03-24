import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import axios from 'axios';
import { Movie } from '../utils/interfaces/MovieInterface';
import { useParams } from 'react-router-dom';


export interface MovieDetailProviderInterface {
    title?: string | any,
    children: React.ReactNode
}

export interface MovieDetailContextInterface {
    loading: boolean,
    movieDetails?: Movie,
    setLoading: Dispatch<SetStateAction<boolean>>,
    // setMovieDetails: Dispatch<SetStateAction<string>>,
}

const defaultValue = {
    loading: false,
    // movieDetails: false,
    setLoading: () => false,
    setMovieDetails: () => false,
} as MovieDetailContextInterface

export const MovieDetailContext = React.createContext<MovieDetailContextInterface>(defaultValue)


const MovieDetailProvider = (props: MovieDetailProviderInterface) => {

    const [loading, setLoading] = useState<boolean>(false);
    const [movieDetails, setMovieDetails] = useState<Movie>();
    const { movieID } = useParams();

    useEffect(() => {
        fetchMovieDetails()
    }, [movieID]);

    const fetchMovieDetails = async () => {
        try {
            setLoading(true);
            await axios.get<Movie>(`https://www.omdbapi.com/?i=${movieID}&plot=full&apikey=1a4e0ee6`)
                .then(response => {
                    setLoading(false);
                    if (response.data.Response === "True") {
                        setMovieDetails(response.data);
                    } else {
                        setMovieDetails(undefined);
                    }
                });
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <MovieDetailContext.Provider
            value={{
                loading,
                movieDetails,
                setLoading
            }}
        >
            {props.children}
        </MovieDetailContext.Provider>
    );

}

export default MovieDetailProvider;
