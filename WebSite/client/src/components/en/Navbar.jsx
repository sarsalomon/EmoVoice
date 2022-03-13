import React from 'react';
import { Link } from 'react-router-dom';

const NavbarEng = () => {
    const logOutUser = () => {
        localStorage.clear()
        window.location.reload()
    }
    const user = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : null
    return (
        <div>
            <div>
                <div>
                    <nav style={{
                        zIndex: "1052"
                    }} id='Obshi' className="navbar navbar-expand-sm navbar-light">
                        <div className="container-fluid">
                            <Link className="navbar-brand" id='NAVBAR' to="/en">Emo Voice</Link>{/* Nomi navbarni */}
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/en">Home</Link>
                                    </li>
                                    {
                                        user ?
                                            null
                                            :
                                            <li className="nav-item">
                                                <Link className="nav-link" id='NAVBAR' to="/login">LogIn</Link>
                                            </li>
                                    }

                                    {
                                        user ?
                                            null
                                            :
                                            <li className="nav-item">
                                                <Link id='NAVBAR' to='/regis' className="nav-link">Registration</Link>
                                            </li>
                                    }

                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="/en" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Eng
                                        </Link>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><Link className="dropdown-item" to="/ru">Rus</Link></li>
                                            <li><Link className="dropdown-item" to="/">Uzb</Link></li>
                                        </ul>
                                    </li>
                                    {
                                        user ?
                                            <button onClick={logOutUser} className='btn shadow-none btn-primary'>
                                                exit
                                            </button>
                                            :
                                            null
                                    }

                                </ul>
                                {/* <div className="lang-menu">
                                    <div className="selected-lang">
                                        Uzbek
                                    </div>
                                    <ul>
                                        <li>
                                            <Link to="/en" className="de">English</Link>
                                        </li>
                                        <li>
                                            <Link to="/ru" className="en">Russia</Link>
                                        </li>
                                    </ul>

                                </div> */}
                            </div>
                        </div>
                    </nav>

                </div>
            </div>
        </div>
    );
};

export default NavbarEng;