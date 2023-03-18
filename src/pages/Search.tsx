import React from 'react';
import MoviesComponent from '../components/MoviesComponent';
import SearchComponent from '../components/SearchComponent';
import Header from '../shared/Header';

export interface Props {
}

const Search = (props: Props) => {

    return (
        <div>
            <Header />
            <SearchComponent />
            <MoviesComponent />
        </div>
    );

}

export default Search;
