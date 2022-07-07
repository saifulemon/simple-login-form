import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div>
            {/* Background image */}
            <div id="intro-example" className="p-5 text-center bg-image">
                    <div className="mask">
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <div className="text-white">
                                <h1 className="mb-3">Learn Bootstrap 5 with MDB</h1>
                                <h5 className="mb-4">
                                    Best & free guide of responsive web design
                                </h5>
                                <Link className="btn btn-outline-light btn-lg m-2" to="https://www.youtube.com/watch?v=c9B4TPnak1A" role="button" rel="nofollow" target="_blank">Start tutorial</Link>
                                <Link className="btn btn-outline-light btn-lg m-2" to="https://mdbootstrap.com/docs/standard/" target="_blank" role="button">Download MDB UI KIT</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Background image */}
        </div>
    );
};

export default Home;