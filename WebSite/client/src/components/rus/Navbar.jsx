import React from 'react';
import { Link } from 'react-router-dom';

const NavbarRus = () => {
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
                    }} id='Obshi' className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <Link className="navbar-brand" id='NAVBAR' to="/ru">Emo Voice</Link>{/* Nomi navbarni */}
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link active" id='NAVBAR' aria-current="page" to="/ru">Главная</Link>{/* Birinchi sahifaga otihs */}
                                    </li>
                                    {
                                        user ?
                                            null
                                            :
                                            <li className="nav-item">
                                                <Link className="nav-link" id='NAVBAR' to="/login">Авторизоваться</Link>
                                            </li>
                                    }

                                    {
                                        user ?
                                            null
                                            :
                                            <li className="nav-item">
                                                <Link id='NAVBAR' to='/regis' className="nav-link">Регистрация</Link>
                                            </li>
                                    }

                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="/en" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Rus
                                        </Link>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><Link className="dropdown-item" to="/">Uzb</Link></li>
                                            <li><Link className="dropdown-item" to="/en">Eng</Link></li>
                                        </ul>
                                    </li>
                                    {
                                    user ?
                                    <button onClick={logOutUser} className='btn shadow-none btn-primary'>
                                        выход
                                    </button>
                                    :
                                    null
                                }
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default NavbarRus;