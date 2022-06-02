import React from "react";
import s from "./Header.module.css"
import Logo from "./logo/Logo";
import Navigation from "./navigation/Navigation";
import Search from "./search/Search";


const Header = () => {
     return <div className = {s.nav}>
         <Logo />
         <Search />
         <Navigation />
    </div>
}

export default Header