import React from 'react'
import loading from "../loading.gif";

function Loader() {
    return (
        <div>
            <img src={loading} alt="loading" style={{ position: 'absolute', top: '50%', left: '50%' }} />
        </div>
    )
}

export default Loader;
