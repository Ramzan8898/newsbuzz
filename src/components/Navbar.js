import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-gradient bg-black" data-bs-theme="dark">
                <div className="container-fluid ">
                    <Link className="navbar-brand" to="/">NewzBuzz</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {/* <Link className="nav-link active" to="/general">Home</Link> */}
                            <Link className="nav-link" to='/business'>Business</Link>
                            <Link className="nav-link" to='/entertainment'>Entertainment</Link>
                            <Link className="nav-link" to='/health'>Health</Link>
                            <Link className="nav-link" to='/science'>Science</Link>
                            <Link className="nav-link" to='/sports'>Sports</Link>
                            <Link className="nav-link" to='/technology'>Technology</Link>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;
