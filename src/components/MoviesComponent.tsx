import React from 'react';
import poster from '../assets/images/john.jpg';
import poster1 from '../assets/images/1.jpg';
import poster2 from '../assets/images/2.jpg';
import poster3 from '../assets/images/3.jpg';
import poster4 from '../assets/images/4.jpg';
import poster5 from '../assets/images/5.jpg';
import poster6 from '../assets/images/6.jpg';

export interface Props {
}

const MoviesComponent = (props: Props) => {
    return (
        <section className="mx-auto w-10/12">

            <div className='mt-10 -mb-3'>
                <h4 className="text-xl font-light">
                    Your Searched items...
                </h4>
            </div>

            <div className="grid grid-flow-row gap-x-5 text-neutral-600 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

                <div
                    className="my-4    duration-300 hover:-translate-y-1"

                >
                    <a href="link" className="cursor-pointer">
                        <img
                            alt=""
                            src={"https://m.media-amazon.com/images/M/MV5BNzEyMjdlYTItNzBkNi00M2U5LThiOWEtMzgyYWQ0MmY0ZDE4XkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_SX300.jpg"}
                            className=" h-64 w-full object-cover"
                        />

                        <div className="py-2">
                            <p className="text-base  font-medium leading-relaxed text-gray-800 ">
                                Puss in Boots
                            </p>

                            <small className="leading-5 text-gray-500 ">
                                2023
                            </small>
                        </div>
                    </a>
                </div>

                <div
                    className="my-4    duration-300 hover:-translate-y-1"

                >
                    <a href="link" className="cursor-pointer">
                        <img
                            alt=""
                            src={poster1}
                            className=" h-64 w-full object-cover"
                        />

                        <div className="py-2">
                            <p className="text-base  font-medium leading-relaxed text-gray-800 ">
                                Puss in Boots
                            </p>

                            <small className="leading-5 text-gray-500 ">
                                2023
                            </small>
                        </div>
                    </a>
                </div>

                <div
                    className="my-4    duration-300 hover:-translate-y-1"

                >
                    <a href="link" className="cursor-pointer">
                        <img
                            alt=""
                            src={poster2}
                            className=" h-64 w-full object-cover"
                        />

                        <div className="py-2">
                            <p className="text-base  font-medium leading-relaxed text-gray-800 ">
                                Puss in Boots
                            </p>

                            <small className="leading-5 text-gray-500 ">
                                2023
                            </small>
                        </div>
                    </a>
                </div>

                <div
                    className="my-4    duration-300 hover:-translate-y-1"

                >
                    <a href="link" className="cursor-pointer">
                        <img
                            alt=""
                            src={poster3}
                            className=" h-64 w-full object-cover"
                        />

                        <div className="py-2">
                            <p className="text-base  font-medium leading-relaxed text-gray-800 ">
                                Puss in Boots
                            </p>

                            <small className="leading-5 text-gray-500 ">
                                2023
                            </small>
                        </div>
                    </a>
                </div>

                <div
                    className="my-4    duration-300 hover:-translate-y-1"

                >
                    <a href="link" className="cursor-pointer">
                        <img
                            alt=""
                            src={poster4}
                            className=" h-64 w-full object-cover"
                        />

                        <div className="py-2">
                            <p className="text-base  font-medium leading-relaxed text-gray-800 ">
                                Puss in Boots
                            </p>

                            <small className="leading-5 text-gray-500 ">
                                2023
                            </small>
                        </div>
                    </a>
                </div>

                <div
                    className="my-4    duration-300 hover:-translate-y-1"

                >
                    <a href="link" className="cursor-pointer">
                        <img
                            alt=""
                            src={poster5}
                            className=" h-64 w-full object-cover"
                        />

                        <div className="py-2">
                            <p className="text-base  font-medium leading-relaxed text-gray-800 ">
                                Puss in Boots
                            </p>

                            <small className="leading-5 text-gray-500 ">
                                2023
                            </small>
                        </div>
                    </a>
                </div>

                <div
                    className="my-4    duration-300 hover:-translate-y-1"

                >
                    <a href="link" className="cursor-pointer">
                        <img
                            alt=""
                            src={poster6}
                            className=" h-64 w-full object-cover"
                        />

                        <div className="py-2">
                            <p className="text-base  font-medium leading-relaxed text-gray-800 ">
                                Puss in Boots
                            </p>

                            <small className="leading-5 text-gray-500 ">
                                2023
                            </small>
                        </div>
                    </a>
                </div>

                <div
                    className="my-4    duration-300 hover:-translate-y-1"

                >
                    <a href="link" className="cursor-pointer">
                        <img
                            alt=""
                            src={poster}
                            className=" h-64 w-full object-cover"
                        />

                        <div className="py-2">
                            <p className="text-base  font-medium leading-relaxed text-gray-800 ">
                                Puss in Boots
                            </p>

                            <small className="leading-5 text-gray-500 ">
                                2023
                            </small>
                        </div>
                    </a>
                </div>

                <div
                    className="my-4    duration-300 hover:-translate-y-1"

                >
                    <a href="link" className="cursor-pointer">
                        <img
                            alt=""
                            src={poster}
                            className=" h-64 w-full object-cover"
                        />

                        <div className="py-2">
                            <p className="text-base  font-medium leading-relaxed text-gray-800 ">
                                Puss in Boots
                            </p>

                            <small className="leading-5 text-gray-500 ">
                                2023
                            </small>
                        </div>
                    </a>
                </div>

                <div
                    className="my-4    duration-300 hover:-translate-y-1"

                >
                    <a href="link" className="cursor-pointer">
                        <img
                            alt=""
                            src={poster}
                            className=" h-64 w-full object-cover"
                        />

                        <div className="py-2">
                            <p className="text-base  font-medium leading-relaxed text-gray-800 ">
                                Puss in Boots
                            </p>

                            <small className="leading-5 text-gray-500 ">
                                2023
                            </small>
                        </div>
                    </a>
                </div>

            </div>
        </section>
    );
}

export default MoviesComponent;
