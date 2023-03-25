import React from 'react';
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'
import MoviesComponent from '../components/MoviesComponent';

import axios from 'axios';
// import * as fetcher from '../fetcher';
import MoviesContext from '../context/MovieContext'

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;



describe("Movie Component tests", () => {

    beforeEach(() => {
    })

    // it('renders page text in the component', () => {
    //     render(<MoviesComponent />);
    //     const textElement = screen.getByText(/Results:/i);
    //     expect(textElement).toBeInTheDocument();
    // });

    it('renders not found text in the component', () => {
        render(<MoviesComponent />);
        const textElement = screen.getByText(/Oops! Kuky films says:/i);
        expect(textElement).toBeInTheDocument();
    });

    it("checks if not found image is displayed", () => {
        render(<MoviesComponent />);
        const notFoundImageElement = screen.getByRole("img");
        fireEvent.click(notFoundImageElement);
        expect(notFoundImageElement).toBeInTheDocument();
    });



    // it('renders page text in the component', () => {
    //     render(<MoviesComponent />);
    //     // const textElement = screen.getByTestId("page").textContent;

    //     const textElement = screen.getByTestId("page");
    //     expect(textElement).toBeInTheDocument();
    // });


    // it("previous button should change page on btton click", () => {
    //     render(<MoviesComponent />);
    //     const paginateButtonElement = screen.getByRole("button");

    //     const testPage = 1;

    //     fireEvent.click(paginateButtonElement);
    //     expect(testPage).toBe(2);
    //   });




    it("fetches popular movies data successfully from an API", async () => {
        const pageNumber = 1

        mockedAxios.get.mockResolvedValue({

            data: {
                Response: "True",
                Search: [],
                totalResults: 123
            }

        });
        const {movieObject} = React.useContext(MoviesContext)

        render(<MoviesComponent />);
        // const movieinfo = screen.getByRole("div");
        // fireEvent.click(movieinfo);
        // expect(movieinfo).toBeInTheDocument();

        expect(mockedAxios.get).toHaveBeenCalledWith("https://www.omdbapi.com/?s=man&page=1&apikey=1a4e0ee6");
        // expect(result).toEqual(users);

        // mockedAxios.get.mockImplementationOnce(() => Promise.resolve(
        //     popular_movies
        // ))

        // const movies = await fetcher.getpopularMovies(pageNumber);


        // expect(movies).toEqual(popular_movies);
        // expect(mockAxios.get).toHaveBeenCalledTimes(1)
        // expect(mockAxios.get).toHaveBeenCalledWith("https://api.themoviedb.org/3/movie/popular?api_key=dae1bc94f2be7c7a6e80f5ca557ae55f&language=en-US&page=1")
    })

});
