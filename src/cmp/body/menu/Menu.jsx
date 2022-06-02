import React from "react";
import { Link } from "react-router-dom";
import s from './Menu.module.css'

const Menu = () => {
    return <div className={s.menu}>
        <div className={s.menuItem}>
            <Link to="/profile">Profile</Link>  
        </div>
        <div className={s.menuItem}> 
            <Link to="/dialogs">Dialogs</Link>
        </div>
        <div>
            <Link to="/users">Users</Link>
        </div>
    </div>
}

export default Menu