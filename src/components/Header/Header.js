import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <>
            <header>
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                           <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse menu-navbar-nav" id="navbarNav">
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Log in</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* Navbar */}
            </header>
        </>
    );
};

export default Header;