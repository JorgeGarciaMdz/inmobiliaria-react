import React from "react";

const Error = (message) => {
    return <>
        <div className='bg-red-700 w-full text-white text-center p-2 mt-2 mb-2 font-bold uppercase rounded-md'>
            <p>{message}</p>
        </div>
    </>;
}

export { Error }
