import React from 'react'


const MovieDetailLoader: React.FC = () => {
    return (
        <div className="animate-pulse">
            <div className='inline-block sm:inline-block md:inline-block lg:flex xl:flex items-center'>


                <div className='w-10.5/12 sm:w-10.5/12 md:w-9/12 lg:w-1/2 xl:w-1/2'>
                    <div className="w-9/12 mx-auto h-96  bg-gray-300 border border-gray-200 rounded-lg dark:bg-gray-600"></div>
                </div>

                <div className="w-full sm:w-full md:w-11/12 lg:w-1/2 xl:w-1/2 lg:pl-10 lg:py-6 my-6 lg:mt-0">
                    <div className="w-20 h-8 border border-gray-500 px-2 py-1 tracking-widest rounded bg-gray-200 rounded-lg dark:bg-gray-700"></div>

                    <div className="w-full h-10 bg-gray-200 rounded-lg dark:bg-gray-700 mb-1 mt-3"></div>

                    <div className="flex items-center mb-5 w-full">
                        <span className="flex items-center ">
                            <div className=' flex'>
                                <div className='w-4 h-4 mr-1 bg-gray-200 rounded-lg dark:bg-gray-700'></div>
                                <div className='w-4 h-4 mr-1 bg-gray-200 rounded-lg dark:bg-gray-700'></div>
                                <div className='w-4 h-4 mr-1 bg-gray-200 rounded-lg dark:bg-gray-700'></div>
                                <div className='w-4 h-4 mr-1 bg-gray-200 rounded-lg dark:bg-gray-700'></div>
                                {/* <div className='w-4 h-4 mr-1 bg-gray-200 rounded-lg dark:bg-gray-700'></div> */}
                            </div>
                            <div className="w-18 h-6 bg-gray-200 rounded-lg dark:bg-gray-700 ml-3"></div>
                        </span>

                        <span className=" flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                            <span className="mr-3">
                                <div className="w-28 h-6 bg-gray-200 rounded-lg dark:bg-gray-700"></div>
                            </span>
                        </span>
                    </div>

                    <div className=" mb-6">
                        <div className='w-full mb-3 h-4 bg-gray-200 rounded-lg dark:bg-gray-700'></div>
                        <div className='w-full mb-3 h-4 bg-gray-200 rounded-lg dark:bg-gray-700'></div>
                        <div className='w-full mb-3 h-4 bg-gray-200 rounded-lg dark:bg-gray-700'></div>
                        <div className='w-full mb-3 h-4 bg-gray-200 rounded-lg dark:bg-gray-700'></div>
                    </div>

                    <div className="mt-6">
                        <span className="flex items-center font-bold text-primary">Genre: <div className="w-32 h-3 ml-3 bg-gray-200 rounded-lg dark:bg-gray-700"></div></span>
                    </div>

                    <div className="flex mt-6 items-center py-5 border-b-2 border-t-2 border-gray-200 mb-5">
                        <div className="w-full flex justify-between">
                            <span className="mr-3 w-1/2">
                                <span className="font-bold">Cast:</span> <br />
                                <div className='w-full mb-3 mt-1 h-4 bg-gray-200 rounded-lg dark:bg-gray-700'></div>
                                <div className='w-3/4 mb-3 mt-1 h-4 bg-gray-200 rounded-lg dark:bg-gray-700'></div>
                            </span>

                            <span className="mr-3 w-1/2">
                                <span className="font-bold">Writer:</span> <br />
                                <div className='w-full mb-3 mt-1 h-4 bg-gray-200 rounded-lg dark:bg-gray-700'></div>
                                <div className='w-3/4 mb-3 mt-1 h-4 bg-gray-200 rounded-lg dark:bg-gray-700'></div>
                            </span>
                        </div>

                    </div>

                    <div className="flex items-center">
                        <span className="mr-3">Duration</span>
                        <div className="relative">
                            <div className="w-20 h-8 border border-gray-500 px-2 py-1 tracking-widest rounded bg-gray-200 rounded-lg dark:bg-gray-700"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MovieDetailLoader
