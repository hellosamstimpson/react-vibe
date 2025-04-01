import { Link, NavLink } from "react-router-dom";

function NavBar(){
    return (
        <nav className="navbar" aria-label="Main navigation">
            <div className="navbar__logo">
                <Link to="/">Logo</Link>
            </div>
            <ul className="navbar__links">
                <li className="navbar__item">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive ? "navbar__link navbar__link--active" : "navbar__link"
                        }>
                        Home
                    </NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink
                        to="/favorites"
                        className={({ isActive }) =>
                            isActive ? "navbar__link navbar__link--active" : "navbar__link"
                        }>
                        Favourites
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}


export default NavBar;