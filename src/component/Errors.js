import React from 'react';
import {useRouteError} from 'react-router-dom'

const Errors = () => {
    const errorDetails = useRouteError();

    // Destructuring
    const {status,statusText} = errorDetails;
    console.log(errorDetails);
  return (
    <div>
        <h1>Oops!!</h1>
        <h2>Something went Wrong</h2>
        <h2>{status + " : " + statusText}</h2>
    </div>
  )
}

export default Errors