import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header>
            <Link to="/">Галерея</Link>
            <Link to="/aboutMe">Обо мне</Link>
        </header>
    )
}

export default Header