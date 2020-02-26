import React from 'react';

const NavBar = () => {
  return (
    <div className="NavBar">
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand">Michael Decroce-Movson</a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#aboutme">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#myskills">
                My Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#mytimeline">
                My Timeline
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
