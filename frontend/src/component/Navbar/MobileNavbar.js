import React, { useState } from "react";
import "./style.css";


const MobileNavbar = () => {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

  const handleMobileNavClick = () => {
    mobileNavIsOpen ? setMobileNavIsOpen(false) : setMobileNavIsOpen(true);
  };

  window.addEventListener("resize", () => {
    window.innerWidth > 600 && setMobileNavIsOpen(false);
  });

  return (
    <nav className="mobileNav_container">

      <img className="menu_icon" src="https://cdn6.f-cdn.com/contestentries/134732/11485812/549932dff2efe_thumb900.jpg" width="50" alt="logo"  onClick={handleMobileNavClick}/>
    
      <div className="mobileNav_menu_container">
        <ul
          className={`${
            mobileNavIsOpen ? "mobileNav_open" : "mobileNav_closed"
          } mobileNav_menu_list`}
        >
          <li>Search</li>
          <li>Grid/not</li>
          <li>Dark mode</li>
          <li>User</li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbar;
