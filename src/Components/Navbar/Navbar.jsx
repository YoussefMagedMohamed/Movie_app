import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Navbar/Navbar.css"

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark mb-5 NavBaaar">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Noxe</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link"  to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/movies">Movies</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/tv">Tv show</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/people">People</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="network">Networks</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>    
            </nav>
        </>
    )
}
