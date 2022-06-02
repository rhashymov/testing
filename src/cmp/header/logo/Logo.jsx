import React from "react"
import s from "./Logo.module.css"

const Logo = () => {
    return <div className={s.logo}> 
    <img src="/img/logo.jpg" alt="logo"></img>
    </div>
}

export default Logo