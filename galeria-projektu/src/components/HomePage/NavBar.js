import React from "react";
import { Link } from "react-router-dom";
import './NavBar.sass';
import logo from '../../assets/Logo-GP.png'

export function NavBar() {
    return(
        <>
            <Link to='/'>
                <img src={logo} alt='Logo'/>
            </Link>
            <ul>
                <Link to='/'> Home </Link>
                <Link to='/pracownia'> Pracownia </Link>
                <Link to='/galerie'> Galerie </Link>
                <Link to='/kolekcje'> Kolekcje </Link>
                <Link to='/publikacje'> Fotorelacje </Link>
                <Link to='/publikacje'> Publikacje </Link>
                <Link to='/kontakt'> Kontakt </Link>
            </ul>
        </>
    )
}