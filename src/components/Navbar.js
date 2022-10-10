//2 - Links com react Router

import './Navbar.css';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">Sobre</NavLink>
            <NavLink to="/qrcode">Doar</NavLink>
        </nav>
    );
};

export default Navbar