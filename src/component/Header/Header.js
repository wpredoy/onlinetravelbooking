import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info container">
                <Link to="/home" className="navbar-brand" >Tourist</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                    <form className="form-inline ml-auto my-lg-0">
                        <input className="form-control" type="search" placeholder="Search" />
                    </form>

                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link to="/home" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/spot" className="nav-link">Spot</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login">
                            <button className="buttonStyle">Login</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;