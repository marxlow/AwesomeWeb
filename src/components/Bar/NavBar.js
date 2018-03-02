import { Link } from 'react-router-dom'
import React from 'react';

const NavBar = ({ }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg">
            <Link className="navbar-brand" to="/profile/home">Marx</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="/profile/home">Home <span className="sr-only">(current)</span></Link>
                    <Link className="nav-item nav-link" to="/profile/projects">Projects</Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;