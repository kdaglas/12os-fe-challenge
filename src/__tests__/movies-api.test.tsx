import '@testing-library/jest-dom'
import * as movieApi from '../utils/MoviesAPI'
import Axios from 'axios';

jest.mock('axios');
const mockedAxios = Axios as jest.Mocked<typeof Axios>;



describe("Movie API tests", () => {

    afterEach(() => {
        // Restores all mocks back to their original value.
        jest.restoreAllMocks()
    })


    /**
     * TEST THE LIST SET OF MOVIES API ENPOINT
     */
    it("fetches popular movies data successfully from OMDB API", async () => {

        const popular_movies_data = {
            data: {
                Response: "True",
                Search: [{
                    Poster: "https://m.media-amazon.com/images/M/j.jpg",
                    Title: "Iron Man",
                    Type: "movie",
                    Year: "2008",
                    imdbID: "tt0371746"
                }],
                totalResults: "13205"
            }
        }
        mockedAxios.get.mockImplementationOnce(() => Promise.resolve(
            popular_movies_data
        ));
        const searchResults = await movieApi.fetchOMDBMovies(1, "man")
        expect(mockedAxios.get).toHaveBeenCalledWith("https://www.omdbapi.com/?s=man&page=1&apikey=1a4e0ee6", { "headers": { "Accept": "application/json" } });
        expect(searchResults).toEqual(popular_movies_data);
        expect(mockedAxios.get).toHaveBeenCalledTimes(1)

    })


    /**
     * TEST THE SEARCH API ENPOINT
     */
    it('fetch single movie details', async () => {
        let movieID = "tt0371746"
        const single_movie_details = {
            data: {
                Poster: "https://m.media-amazon.com/images/M/j.jpg",
                Title: "Iron Man",
                Type: "movie",
                Year: "2008",
                imdbID: "tt0371746"
            }
        }
        mockedAxios.get.mockImplementationOnce(() => Promise.resolve(single_movie_details));
        const searchResults = await movieApi.fetchOMDBMovieDetails(movieID);
        expect(mockedAxios.get).toHaveBeenCalledWith(`https://www.omdbapi.com/?i=${movieID}&plot=full&apikey=1a4e0ee6`, { "headers": { "Accept": "application/json" } });
        expect(searchResults).toEqual(single_movie_details);
        expect(mockedAxios.get).toHaveBeenCalledTimes(1)

    });


});

