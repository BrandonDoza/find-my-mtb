import { Link, NavLink } from "react-router-dom"

export default function Header() {
    return (
    <div className="heaader">
        <NavLink to="/">
            <h1>Find My Mtb</h1>
        </NavLink>
    </div>
    )
}