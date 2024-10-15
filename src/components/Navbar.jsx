import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [scrolltopdata, setscrolltopdata] = useState("");
  const location = useLocation();

  const path = location.pathname;

  return (
    <header>
      <nav id="Navigation">
        <div className="container-nav">
          <div className="nav-menu">
            <div className="nav-logo"></div>
            <ul className="menu-nav flex flex-row justify-around">
              <li>
                <Link className="medium" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="medium" to="/tugas">
                  Tugas
                </Link>
              </li>
              <li>
                <Link className="medium" to="/jadwal">
                  Jadwal
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
