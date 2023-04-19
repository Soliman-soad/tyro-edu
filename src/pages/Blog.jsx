import React from 'react';

const Blog = () => {
    return (
        <>
        {/* ------ */}
        <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-100 text-gray-800">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src="https://source.unsplash.com/random/480x360" alt="" className="w-full h-60 sm:h-96 bg-gray-500" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-50">
			<div className="space-y-2">
				<a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">what is cors?</a>
				<p className="text-xs text-gray-600">By
					<span className="text-xs hover:underline">Soliman Alam</span>
				</p>
			</div>
			<div className="text-gray-800">
            <p>Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy. However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery </p>
			</div>
		</div>
	</div>
</div>
        {/* ------ */}

        {/* -------- */}
        <div className="bg-gray-100 text-gray-900">
	<div className="container grid grid-cols-12 mx-auto bg-gray-50">
		<div className="bg-no-repeat bg-cover bg-gray-700 col-span-full lg:col-span-4" style="background-image: url('https://source.unsplash.com/random/640x480'); background-position: center center; background-blend-mode: multiply; background-size: cover;"></div>
		<div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
			<div className="flex justify-start">
				<span className="px-2 py-1 text-xs rounded-full bg-teal-600 text-gray-50">Firebase</span>
			</div>
			<h1 className="text-3xl font-semibold">Why are you using firebase? What other options do you have to implement authentication?</h1>
			<p className="flex-1 pt-2">Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
			
			<div className="flex items-center justify-between pt-2">
				<div className="flex space-x-2">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-600">
						<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
					</svg>
					<span className="self-center text-sm">by Soliman Alam</span>
				</div>
			
			</div>
		</div>
	</div>
</div>
        {/* -------- */}

        {/* -------- */}
        <div className="bg-gray-100 text-gray-900">
	<div className="container grid grid-cols-12 mx-auto bg-gray-50">
		<div className="bg-no-repeat bg-cover bg-gray-700 col-span-full lg:col-span-4" style="background-image: url('https://source.unsplash.com/random/640x480'); background-position: center center; background-blend-mode: multiply; background-size: cover;"></div>
		<div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
			<div className="flex justify-start">
				<span className="px-2 py-1 text-xs rounded-full bg-teal-600 text-gray-50">Route</span>
			</div>
			<h1 className="text-3xl font-semibold">How does the private route work?</h1>
			<p className="flex-1 pt-2">private route is mainly recognition process route  If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is Logged in.Under hood it check conditions</p>
			
			<div className="flex items-center justify-between pt-2">
				<div className="flex space-x-2">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-600">
						<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
					</svg>
					<span className="self-center text-sm">by Soliman Alam</span>
				</div>
			
			</div>
		</div>
	</div>
</div>
        {/* -------- */}
        {/* -------- */}
        <div className="bg-gray-100 text-gray-900">
	<div className="container grid grid-cols-12 mx-auto bg-gray-50">
		<div className="bg-no-repeat bg-cover bg-gray-700 col-span-full lg:col-span-4" style="background-image: url('https://source.unsplash.com/random/640x480'); background-position: center center; background-blend-mode: multiply; background-size: cover;"></div>
		<div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
			<div className="flex justify-start">
				<span className="px-2 py-1 text-xs rounded-full bg-teal-600 text-gray-50">Node</span>
			</div>
			<h1 className="text-3xl font-semibold">What is Node? How does Node work?</h1>
			<p className="flex-1 pt-2">Node.js uses the “Single Threaded Event Loop” architecture to handle multiple clients at the same time.In a multi-threaded request-response model, multiple clients send a request, and the server processes each one before sending the response back. However, multiple threads are used to process concurrent calls. These threads are defined in a thread pool, and each time a request comes in, an individual thread is assigned to handle it.</p>
			
			<div className="flex items-center justify-between pt-2">
				<div className="flex space-x-2">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-600">
						<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
					</svg>
					<span className="self-center text-sm">by Soliman Alam</span>
				</div>
			
			</div>
		</div>
	</div>
</div>
        {/* -------- */}
    
        </>
        
        
    );
};

export default Blog;