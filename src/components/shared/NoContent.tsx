import React from 'react';
import nocontent from '../../assets/images/no_data.svg'

export interface NoContentInterface {
    text?: string | any
}


const NoContent: React.FC<NoContentInterface> = ({ text }) => {
    return (
        <div className="w-full">
            <div className="py-4 my-2 items-center justify-center flex-column text-center">

                <img
                    src={nocontent}
                    alt="logo"
                    width="220px"
                    className="img-fluid mx-auto d-block my-10"
                />

                <h3 className="text-3xl font-medium  mb-5 text-black dark:text-white">Oops! Kuky films says:</h3>
                <p className="text-gray-500 w-1/2 mx-auto">{text?text:"There seems not be any available data here, sorry."}</p>
            </div>
        </div>

    );
}

export default NoContent
