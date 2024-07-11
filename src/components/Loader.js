import React from 'react'
import loading from "../media/loading.gif";

function Loader() {
    return (
        <div className='text-center'>
            <img src={loading} alt="loading" className='my-3' />
        </div>
    )
}

export default Loader;
