import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/search/jasmine">Jasmine</NavLink>
        </li>
        <li>
          <NavLink to="/search/dog">Dogs</NavLink>
        </li>
        <li>
          <NavLink to="/search/ship">Ships</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
