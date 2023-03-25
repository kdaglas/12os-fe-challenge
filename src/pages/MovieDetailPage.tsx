import React from 'react';
import MovieDetailComponent from '../components/MovieDetailComponent';
import Header from '../components/shared/Header';


const MovieDetailPage: React.FC = () => {
    return (
        <div className='bg-white dark:bg-dark'>
            <Header />
            <MovieDetailComponent />
        </div>
    );
}

export default MovieDetailPage;
