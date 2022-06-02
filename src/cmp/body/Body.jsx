import React from "react"
import Header from "../header/Header"
import s from "./Body.module.css"
import Menu from "./menu/Menu"
import Place from "./place/Place"


const Body = (props) => {
    
    return <div className={s.body}>
        <Header />
        <div className={s.bodyH}>
        <Menu />
        <Place />
        </div>
    </div>
}
export default Body