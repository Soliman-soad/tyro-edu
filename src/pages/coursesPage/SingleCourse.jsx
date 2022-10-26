import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";


const ref = React.createRef();
const SingleCourse = () => {
    const course = useLoaderData()
    return (
        <div>
            <div ref={ref}  className=" pt-5 w-full  bg-base-100 shadow-xl">
              <div className='flex my-4'>
                <h2 className="text-3xl font-bold">{course.name}</h2>
                <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button  className="btn bg-orange-600 mx-2 text-white border-0 " onClick={toPdf}>Download Pdf</button>}
      </Pdf>
              </div>
  <figure><img src={course.img} className="w-6/12 mx-auto " alt="" /></figure>
  <div className="card-body">
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