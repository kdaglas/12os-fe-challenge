import React from 'react';
import MoviesComponent from '../components/MoviesComponent';
import SearchComponent from '../components/SearchComponent';
import Header from '../components/shared/Header';


const SearchPage: React.FC = () => {

    return (
        <div className='bg-white dark:bg-dark'>
            <Header />
            <SearchComponent />
            <MoviesComponent />
        </div>
    );

}

export default SearchPage;
