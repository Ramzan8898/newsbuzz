import React from 'react'
import loading from "../media/loading.gif";

function Loader() {
    return (
        <div>
            <img src={loading} alt="loading" style={{ position: 'absolute', top: '50%', left: '50%' }} />
        </div>
    )
}

export default Loader;
