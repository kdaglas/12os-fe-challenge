import React from 'react';

type Props = {}

const SearchComponent = (props: Props) => {

    return (
        <div className="w-full h-60 mt-18 flex justify-center items-center bg-hero bg-no-repeat bg-cover">
            <div className="w-11/12 mx-auto sm:w-11/12 md:w-9.5/12 lg:w-1/2 xl:w-1/2">

                <h1 className="flex items-center justify-center text-center text-4xl text-white mb-10 font-medium">
                    Search movies, series & more...
                </h1>

                <form className="flex items-center">
                    <div className="relative w-full">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>

                        <input
                            type="text"
                            id="voice-search"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-base focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 h-14 rounded-full"
                            placeholder="Search for a movie, a serie or an animation..."
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="flex items-center py-2.5 px-5 ml-2 text-sm font-medium text-white bg-primary border border-primary hover:bg-primary h-14 focus:ring-4 focus:outline-none focus:ring-primary rounded-full justify-center"
                    >
                        <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                </form>

            </div>
        </div>
    )

}

export default SearchComponent;
