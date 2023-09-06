import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <header>
        <nav>
          <Link className="Logo" to="/Home">
            Math Magicians
          </Link>
          <ul className="navList">
            <li className="navItem">
              <Link className="navAnchor" to="/Home">
                Home
              </Link>
            </li>
            <div className="verticalBar" />
            <li className="navItem">
              <Link className="navAnchor" to="/Calculator">
                Calculator
              </Link>
            </li>
            <div className="verticalBar" />
            <li className="navItem">
              <Link className="navAnchor" to="/Quotes">
                Quotes
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
