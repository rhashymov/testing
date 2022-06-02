import React from "react"
import s from "./Navigation.module.css"

const Navigation = () => {
    return <div className={s.navigation}>
        <div className={s.nav}>
            <div>profile</div>
            <div>info</div>
            <div>settings</div>
            <div>log out</div>
        </div>
    </div>
}

export default Navigation