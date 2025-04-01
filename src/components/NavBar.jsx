import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";


function NavBar(){

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
            <nav className="navbar" aria-label="Main navigation">
                <div className="navbar__logo">
                    <p>🏆 Brought to you by <a href="">Thoughtbubble</a> the global leader in awards management.</p>
                </div>
                <div className="navbar__right">
                    <ul className="navbar__links">
                        <li className="navbar__item">
                            <NavLink to="/" end className={({ isActive }) =>
                                isActive ? "navbar__link navbar__link--active" : "navbar__link"
                            }>
                                Impact
                            </NavLink>
                        </li>
                        <li className="navbar__item">
                            <NavLink to="/favorites" className={({ isActive }) =>
                                isActive ? "navbar__link navbar__link--active" : "navbar__link"
                            }>
                                Features
                            </NavLink>
                        </li>
                        <li className="navbar__item">
                            <NavLink to="/typography" className={({ isActive }) =>
                                isActive ? "navbar__link navbar__link--active" : "navbar__link"
                            }>
                                Pricing
                            </NavLink>
                        </li>
                    </ul>
                    <div className="navbar__cta">
                        <a href="">Get in Touch</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default NavBar;