import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieProvider from "../context/MovieContext";
import MovieDetailPage from "../pages/MovieDetailPage";
import Search from "../pages/SearchPage";

const Routing: React.FC = () => {

    return (
        <MovieProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Search />} />
                    <Route path="/movie/:movieID" element={<MovieDetailPage />} />
                </Routes>
            </Router>
        </MovieProvider>
    );

}

export default Routing;
