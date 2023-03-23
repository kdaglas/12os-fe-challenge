import * as React from 'react';
import nocontent from '../../assets/images/no_data.svg'


const NoContent: React.FC = () => {
    return (
        <div className="w-full">
            <div className="py-4 my-2 items-center justify-center flex-column text-center">

                <img
                    src={nocontent}
                    alt="logo"
                    width="220px"
                    className="img-fluid mx-auto d-block my-10"
                />

                <h3 className="text-3xl font-medium  mb-5">Oops! Kuky films says:</h3>
                <p className="text-gray-500">There seems not be any available<br /> data here, sorry.</p>
            </div>
        </div>

    );
}

export default NoContent
