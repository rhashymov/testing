import React from "react";
import s from "./Header.module.css"
import Logo from "./logo/Logo";
import Navigation from "./navigation/Navigation";
import Search from "./search/Search";


const Header = (props) => {
    debugger
    return (<header>
        <div className={s.nav}>
            <Logo />
            <Search />
            {props.isAuth ? <Navigation  login={props.login}  id={props.id}  email={props.email}/> : <a>login</a>}
        </div>
    </header>)
}

export default Header