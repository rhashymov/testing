import React from "react"
import HeaderContainer from "../header/HeaderContainer"
import s from "./Body.module.css"
import Menu from "./menu/Menu"
import Place from "./place/Place"


const Body = (props) => {
    
    return <div className={s.body}>
        <HeaderContainer />
        <div className={s.bodyH}>
        <Menu />
        <Place />
        </div>
    </div>
}
export default Body