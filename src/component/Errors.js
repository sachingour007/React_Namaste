import React from 'react';
import ErrorImge from '../assets/Error_Img.jpg'
// import {useRouteError} from 'react-router-dom'

const Errors = () => {
    // const errorDetails = useRouteError();

    // Destructuring
    // const {status,statusText} = errorDetails;
    // console.log(errorDetails);
  return (
    <div className='flex items-center justify-center'>
        {/* <h1>Oops!!</h1>
        <h2>Something went Wrong</h2>
        <h2>{status + " : " + statusText}</h2> */}
        <img className='w-2/4 h-2/5' src={ErrorImge} alt="" />
    </div>
  )
}

export default Errors