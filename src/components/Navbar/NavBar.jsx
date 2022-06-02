import { useState } from "react";
import { NavLink } from "react-router-dom";
import logoOrange from "../../assets/svg/logo_orange.svg";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="nav-logo">
          <img src={logoOrange} alt="FooFest logo" />
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink to="/" className="nav-links active" onClick={handleClick}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/schedule" className="nav-links active" onClick={handleClick}>
              Schedule
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/tickets" className="nav-links active" onClick={handleClick}>
              Tickets
            </NavLink>
          </li>
        </ul>
        {/* The onClick here set if the nav list should be shown */}
        <input className="nav-icon" onClick={handleClick} id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>
      </nav>
    </>
  );
}

export default NavBar;
