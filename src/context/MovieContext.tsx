import axios from 'axios';
import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { MovieList } from '../utils/interfaces/MovieInterface';


export interface MovieProviderInterface {
    title?: string | any,
    children: React.ReactNode
}

export interface MovieContextInterface {
    title: string | any,
    page: number,
    totalPages: number,
    loading: boolean,
    movieObject?: MovieList,
    setPage: Dispatch<SetStateAction<number>>,
    setTotalPages: Dispatch<SetStateAction<number>>,
    setLoading: Dispatch<SetStateAction<boolean>>,
    setPropTitle: Dispatch<SetStateAction<string>>,
}

const defaultValue = {
    title: "man",
    page: 1,
    totalPages: 1,
    loading: false,
    setPage: () => 1,
    setTotalPages: () => 1,
    setLoading: () => false,
    setPropTitle: () => false,
} as MovieContextInterface

export const MovieContext = React.createContext<MovieContextInterface>(defaultValue)


const MovieProvider = (props: MovieProviderInterface) => {

    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1)
    const [loading, setLoading] = useState<boolean>(false);
    const [title, setPropTitle] = useState<string>("man");
    // const [setPropTitle] = useState<string>("man");
    const [movieObject, setMovieObject] = useState<MovieList>();

    useEffect(() => {
        setPage(1)
        fetchLatestMovies()
    }, [title])

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

    return (
        <MovieContext.Provider
            value={{
                title,
                page,
                totalPages,
                loading,
                movieObject,
                setPage,
                setTotalPages,
                setLoading,
                setPropTitle
            }}
        >
            {props.children}
        </MovieContext.Provider>
    );
}

export default MovieProvider;
