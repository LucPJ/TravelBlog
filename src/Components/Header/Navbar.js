import React from "react";

export default function Navbar({ navItems }) {
  return (
    <div className="navContainer">
      <nav>
        <ul>{navItems}</ul>
      </nav>
    </div>
  );
}
