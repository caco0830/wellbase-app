import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

function Nav(){
    return (
        <div className="Nav">
            <div>Wellbase</div>
            <nav className="Nav__nav">
                <ul className="Nav__list">
                    <li className="Nav__item">
                        <Link 
                            to="/">
                            Diary
                        </Link>
                    </li>
                    <li className="Nav__item">
                        <Link 
                            to="/home">
                            Home
                        </Link>
                    </li>
                    <li className="Nav__item">
                        <Link 
                            to="/search">
                            Search
                        </Link>
                    </li>
                    
                </ul>
            </nav>
        </div>
    );
}

export default Nav;

