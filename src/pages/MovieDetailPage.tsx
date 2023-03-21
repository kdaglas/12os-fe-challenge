import * as React from 'react';
import MovieDetailComponent from '../components/MovieDetailComponent';
import Header from '../components/shared/Header';

export interface IAppProps {
}

const MovieDetailPage = (props: IAppProps) => {
    return (
        <div>
            <Header />
            <MovieDetailComponent />
        </div>
    );
}

export default MovieDetailPage;
