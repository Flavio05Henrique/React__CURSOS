import { Link, NavLink, useLocation } from 'react-router-dom'
import style from './MenuLink.module.css'

export default function MenuLink({to, children}) {
    return (
        <NavLink
            to={to}
            className={
                ({isActive}) => isActive ? `${style.link} ${style.linkEstilizado}` : `${style.link}`
            }
        >
            {children}
        </NavLink>
    )
}