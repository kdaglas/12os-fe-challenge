import React, { useContext, useState } from 'react';
import MoviesComponent from '../components/MoviesComponent';
import SearchComponent from '../components/SearchComponent';
import Header from '../components/shared/Header';
import { MovieContext } from '../context/MovieContext';


export interface Props {}

const Search = (props: Props) => {

    return (
        <div className='bg-white dark:bg-dark'>
            <Header />
            <SearchComponent/>
            <MoviesComponent/>
        </div>
    );

}

export default Search;
