import { useState } from "react";
import { NavLink } from "react-router-dom";
import logoOrange from "../../assets/svg/logo_orange.svg";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        {/* <div className="nav-container"> */}
        <NavLink to="/" className="nav-logo">
          <img src={logoOrange} alt="FooFest logo" />
          {/* FooFest
            <i className="fas fa-code"></i> */}
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
        {/* BURGER MENU ICON  */}
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        {/* </div> */}
      </nav>
    </>
  );
}

export default NavBar;
