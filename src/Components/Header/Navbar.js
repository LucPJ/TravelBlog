import React, { useState } from "react";

export default function Navbar({ navItems }) {
  const [nav, setNav] = useState(false);

  function toggleMobileNav() {
    setNav(!nav);
  }

  return (
    <div className="navContainer">
      <nav>
        <button onClick={toggleMobileNav} className="burger">
          <div className="stripes"></div>
        </button>
        <ul className={nav ? "show" : ""}>{navItems}</ul>
      </nav>
    </div>
  );
}
