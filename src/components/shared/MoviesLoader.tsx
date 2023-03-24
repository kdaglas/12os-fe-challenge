import React from 'react'
import Paginate from './PaginateBtns'

type Props = {}

const MoviesLoader = (props: Props) => {
	return (

		<div className="animate-pulse">

			<div className='mb-1 flex justify-between'>

				<h4 className="text-base text-black dark:text-white font-normal flex">
					Page: <div className='w-14 h-5 ml-2 bg-gray-200 rounded-lg dark:bg-gray-700'></div>
				</h4>

				<Paginate
					page={1}
					totalPages={1}
					onClickPrevious={() => { }}
					onClickNext={() => { }}
				/>
			</div>

			<div className="grid grid-flow-row gap-x-5 text-neutral-600 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
				<div className="w-full my-4">
					<div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

					<div className="py-2">
						<p className="w-44 h-4 mt-1 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

						<div className='flex justify-between'>
							<small className="w-10 h-3 mt-3 bg-gray-200 rounded-lg dark:bg-gray-700"></small>

							<small className="w-18 h-3 mt-3 bg-gray-200 rounded-lg dark:bg-gray-700"></small>
						</div>
					</div>
				</div>

				<div className="w-full my-4">
					<div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

					<div className="py-2">
						<p className="w-44 h-4 mt-1 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

						<div className='flex justify-between'>
							<small className="w-10 h-3 mt-3 bg-gray-200 rounded-lg dark:bg-gray-700"></small>

							<small className="w-18 h-3 mt-3 bg-gray-200 rounded-lg dark:bg-gray-700"></small>
						</div>
					</div>
				</div>

				<div className="w-full my-4">
					<div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

					<div className="py-2">
						<p className="w-44 h-4 mt-1 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

						<div className='flex justify-between'>
							<small className="w-10 h-3 mt-3 bg-gray-200 rounded-lg dark:bg-gray-700"></small>

							<small className="w-18 h-3 mt-3 bg-gray-200 rounded-lg dark:bg-gray-700"></small>
						</div>
					</div>
				</div>

				<div className="w-full my-4">
					<div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

					<div className="py-2">
						<p className="w-44 h-4 mt-1 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

						<div className='flex justify-between'>
							<small className="w-10 h-3 mt-3 bg-gray-200 rounded-lg dark:bg-gray-700"></small>

							<small className="w-18 h-3 mt-3 bg-gray-200 rounded-lg dark:bg-gray-700"></small>
						</div>
					</div>
				</div>

				<div className="w-full my-4">
					<div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

					<div className="py-2">
						<p className="w-44 h-4 mt-1 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

						<div className='flex justify-between'>
							<small className="w-10 h-3 mt-3 bg-gray-200 rounded-lg dark:bg-gray-700"></small>

							<small className="w-18 h-3 mt-3 bg-gray-200 rounded-lg dark:bg-gray-700"></small>
						</div>
					</div>
				</div>

				<div className="w-full my-4">
					<div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

					<div className="py-2">
						<p className="w-44 h-4 mt-1 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

						<div className='flex justify-between'>
							<small className="w-10 h-3 mt-3 bg-gray-200 rounded-lg dark:bg-gray-700"></small>

							<small className="w-18 h-3 mt-3 bg-gray-200 rounded-lg dark:bg-gray-700"></small>
						</div>
					</div>
				</div>

				<div className="w-full my-4">
					<div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

					<div className="py-2">
						<p className="w-44 h-4 mt-1 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

						<div className='flex justify-between'>
							<small className="w-10 h-3 mt-3 bg-gray-200 rounded-lg dark:bg-gray-700"></small>

							<small className="w-18 h-3 mt-3 bg-gray-200 rounded-lg dark:bg-gray-700"></small>
						</div>
					</div>
				</div>

				<div className="w-full my-4">
					<div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

					<div className="py-2">
						<p className="w-44 h-4 mt-1 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

						<div className='flex justify-between'>
							<small className="w-10 h-3 mt-3 bg-gray-200 rounded-lg dark:bg-gray-700"></small>

							<small className="w-18 h-3 mt-3 bg-gray-200 rounded-lg dark:bg-gray-700"></small>
						</div>
					</div>
				</div>

				<div className="w-full my-4">
					<div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

					<div className="py-2">
						<p className="w-44 h-4 mt-1 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

						<div className='flex justify-between'>
							<small className="w-10 h-3 mt-3 bg-gray-200 rounded-lg dark:bg-gray-700"></small>

							<small className="w-18 h-3 mt-3 bg-gray-200 rounded-lg dark:bg-gray-700"></small>
						</div>
					</div>
				</div>

				<div className="w-full my-4">
					<div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

					<div className="py-2">
						<p className="w-44 h-4 mt-1 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

						<div className='flex justify-between'>
							<small className="w-10 h-3 mt-3 bg-gray-200 rounded-lg dark:bg-gray-700"></small>

							<small className="w-18 h-3 mt-3 bg-gray-200 rounded-lg dark:bg-gray-700"></small>
						</div>
					</div>
				</div>
			</div>

			<div className='mt-5 mb-1 flex justify-between'>

				<h4 className="text-base text-black dark:text-white font-normal flex">
					Results: <div className='w-14 h-5 ml-2 bg-gray-200 rounded-lg dark:bg-gray-700'></div>
				</h4>

				<Paginate
					page={1}
					totalPages={1}
					onClickPrevious={() => { }}
					onClickNext={() => { }}
				/>

			</div>
		</div>

	)
}

export default MoviesLoader
