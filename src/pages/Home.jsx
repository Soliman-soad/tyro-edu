import React from 'react';
import { Link } from 'react-router-dom';
import landingImg from '../image/4136918.jpg'

const Home = () => {
    return (
        <div>
            
            <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={landingImg} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Welcome to
				<span className="dark:text-violet-400"> best </span>Learning platform
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">We have many popular course for you 
				<br className="hidden md:inline lg:hidden"/>Grab your opportunity and become our member now.
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				
				<Link rel="noopener noreferrer" to="courses" className="px-8 py-3 text-lg font-semibold text-white hover:bg-teal-600 rounded bg-teal-700">Courses</Link>
			</div>
		</div>
	</div>
</section>

        </div>
    );
};

export default Home;