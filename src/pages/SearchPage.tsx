import React from 'react';
import MoviesComponent from '../components/MoviesComponent';
import SearchComponent from '../components/SearchComponent';
import Header from '../components/shared/Header';


const Search: React.FC = () => {

    return (
        <div className='bg-white dark:bg-dark'>
            <Header />
            <SearchComponent />
            <MoviesComponent />
        </div>
    );

}

export default Search;
