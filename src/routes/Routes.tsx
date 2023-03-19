import React, { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "../pages/Search";

const Routing: FC = () => {

    return (

        <Router>
            <Routes>
                <Route path="/" element={ <Search/> } />
            </Routes>
        </Router>

    );

}

export default Routing;
