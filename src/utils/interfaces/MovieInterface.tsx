import React, { Dispatch, SetStateAction } from 'react';


export interface MovieDetailInterface {
    Title: string,
    Year: string,
    Rated?: string,
    Released?: string,
    Runtime?: string,
    Genre?: string,
    Director?: string,
    Writer?: string,
    Actors?: string,
    Plot?: string,
    Language?: string,
    Country?: string,
    Awards?: string,
    Poster: string,
    Metascore?: string,
    imdbRating?: string,
    imdbVotes?: string,
    imdbID: string,
    Type: string,
    DVD?: string,
    BoxOffice?: string,
    Production?: string,
    Website?: string,
    Response?: string
}

export interface MovieListInterface {
    Response: string,
    Search: MovieDetailInterface[],
    totalResults: string
}

export interface MovieProviderInterface {
    children: React.ReactNode
}

export interface MovieContextInterface {
    title: string | any,
    page: number,
    totalPages: number,
    loading: boolean,
    movieObject?: MovieListInterface,
    movieDetails?: MovieDetailInterface,
    axiosError?:string,
    setPage: Dispatch<SetStateAction<number>>,
    setTotalPages: Dispatch<SetStateAction<number>>,
    setLoading: Dispatch<SetStateAction<boolean>>,
    setPropTitle: Dispatch<SetStateAction<string>>,
    setMovieID: Dispatch<SetStateAction<string>>

}

export interface PaginationInterface {
    page: number,
    totalPages: number,
    onClickPrevious: () => void,
    onClickNext: () => void
}
