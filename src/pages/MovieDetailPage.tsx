import * as React from 'react';
import MovieDetailComponent from '../components/MovieDetailComponent';
import Header from '../components/shared/Header';
// import MovieDetailLoader from '../components/shared/MovieDetailLoader';

export interface IAppProps {
}

const MovieDetailPage = (props: IAppProps) => {
    return (
        <div className='bg-white dark:bg-dark'>
            <Header />
            <MovieDetailComponent />
            {/* <MovieDetailLoader /> */}
        </div>
    );
}

export default MovieDetailPage;
