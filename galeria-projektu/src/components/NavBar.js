import React from "react";
import { Link } from "react-router-dom";
import './NavBar.sass';
import logo from '../assets/Logo-GP.png'

export function NavBar() {
    return(
        <>
            <Link to='/'>
                <img src={logo} alt='Logo'/>
            </Link>
            <ul>
                <Link to='/'> Home </Link>
                <Link to='/'> Pracownia </Link>
                <Link to='/'> Galerie </Link>
                <Link to='/'> Kolekcje </Link>
                <Link to='/'> Fotorelacje </Link>
                <Link to='/'> Publikacje </Link>
                <Link to='/'> Kontakt </Link>
            </ul>
        </>
    )
}