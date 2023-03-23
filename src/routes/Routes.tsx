import React, { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetailPage from "../pages/MovieDetailPage";
import Search from "../pages/SearchPage";

const Routing: FC = () => {

    return (

        <Router>
            <Routes>
                <Route path="/" element={ <Search/> } />
                <Route path="/movie/:movieID" element={ <MovieDetailPage/> } />
            </Routes>
        </Router>

    );

}

export default Routing;
