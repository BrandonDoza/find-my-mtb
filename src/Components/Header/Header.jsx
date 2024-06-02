import { NavLink } from "react-router-dom"
import "./Header.css"

export default function Header() {
    return (
    <div className="header">
        <div className="title-element">
        <NavLink to="/" className="link">
            <h1>Find My Mtb</h1>
        </NavLink>
        </div>
        <nav className="nav-bar">
        <NavLink to="/bikes/allbikes" className="link">
            <h2>All Bikes</h2>
        </NavLink>
        <NavLink to="/mybikes" className="link">
            <h2>My Bikes</h2>
        </NavLink>
        <NavLink to="/faq" className="link">
            <h2>FAQ</h2>
        </NavLink>
        </nav>
    </div>
    )
}