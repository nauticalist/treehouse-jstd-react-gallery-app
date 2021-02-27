import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/search/bozcaada">Bozcaada</NavLink>
        </li>
        <li>
          <NavLink to="/search/gallipoli">Gallipoli</NavLink>
        </li>
        <li>
          <NavLink to="/search/ephesus">Ephesus</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
