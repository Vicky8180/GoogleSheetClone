import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="https://cdn6.f-cdn.com/contestentries/134732/11485812/549932dff2efe_thumb900.jpg" width="50" alt="a logo" />
      <div>
        <ul className="menu_list">
        <li>Search</li>
          <li>Grid/not</li>
          <li>Dark mode</li>
          <li>User</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
