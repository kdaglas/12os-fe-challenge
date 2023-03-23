import * as React from 'react';

export interface Props {
    page: number,
    totalPages: number,
    onClickPrevious: () => void,
    onClickNext: () => void


}

const Paginate: React.FC<Props> = (props) => {
    return (
        <div>
            <ul className='list-none m-0 p-0 flex justify-between'>
                <li className={`page-item`}>
                    <button
                        className={`bg-primary duration-300 hover:bg-rose-700 flex text-white border border-primary rounded-md my-auto mx-1.5 text-sm inline-block px-2 py-1 cursor-pointer  ${props.page <= 1 && " opacity-30"}`}
                        // href="#"
                        // tabIndex="-1"
                        // aria-disabled={currentPage === 1 ? false : true}
                        onClick={props.onClickPrevious}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-5 mr-1" viewBox="0 0 512 512"><title>Chevron Back</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M328 112L184 256l144 144" /></svg> Previous

                    </button>
                </li>

                <li className={`page-item`}>
                    <span
                        className={`text-primary hover:text-rose-700 duration-300 hover:border-rose-700 flex border border-primary rounded-md my-auto mx-1.5 text-sm inline-block px-2 py-1 cursor-pointer ${props.page == props.totalPages && " opacity-30"}`}
                        // href="#"
                        onClick={props.onClickNext}
                    >
                        Next <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-5" viewBox="0 0 512 512"><title>Chevron Forward</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M184 112l144 144-144 144" /></svg>
                    </span>
                </li>
            </ul>

        </div>
    );
}

export default Paginate
