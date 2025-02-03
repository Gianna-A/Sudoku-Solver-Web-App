import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const isLoggedIn = localStorage.getItem('access_token') !== null;
    const navigate = useNavigate();
    
    const handlelogout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        navigate('/');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <span className = "leftmenu">
              <h1 style={{color:'rgb(255, 255, 255)'}}>Sudoku Solver</h1>
            </span>
            <span className='rightmenu'>
                {isLoggedIn ? (
                    <button className="btn btn-danger" onClick={handlelogout}>
                        Logout
                    </button>
                ):(
                    <Link to={'/login'} className = "btn btn-primary">
                        Login
                    </Link>
                )}
            </span>
        </nav>
    );
};

export default Navbar