import React from "react"
import { Link } from "react-router-dom"
import s from "./Navigation.module.css"

const Navigation = (props) => {
    debugger
    return <div className={s.navigation}>
        <div className={s.nav}>
            <div>{props.login}</div>
            <div>{props.email}</div>
            <div><Link to={"/profile/" + props.id }>Profile</Link></div>
            <div>info</div>
            <div>settings</div>
            <div>log out</div>
        </div>
    </div>
}

export default Navigation