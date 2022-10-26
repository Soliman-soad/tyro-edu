import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCourse = () => {
    const course = useLoaderData()
    return (
        <div>
            <div  className=" pt-5  bg-base-100 shadow-xl">
  <figure><img src={course.img} className="w-6/12 mx-auto " alt="" /></figure>
  <div className="card-body">
    <h2 className="text-3xl font-bold">{course.name}</h2>
    <p>{course.details }</p>
    <div className="card-actions justify-end">
      <button className="btn bg-teal-700 text-white border-0 w-full">Enroll</button>
    </div>
  </div>
					</div>
        </div>
    );
};

export default SingleCourse;