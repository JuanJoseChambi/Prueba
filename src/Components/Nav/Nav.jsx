import { NavLink } from "react-router-dom"
import style from "./Nav.module.css"


export default function Nav(){
    return (
        <div className={style.searchView}>
            <NavLink to={"/"} >
                <button className={style.button}>Home</button>
            </NavLink>
        </div>
    )
}