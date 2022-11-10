import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { client } from "../../Helper/ApiConstants";
import Navbar from "./Navbar";
import { v4 as uuidv4 } from "uuid";
import "./Header.css";

export default function Header() {
  const [navData, setNavData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [navItems, setNavItems] = useState();

  useEffect(() => {
    setIsLoading(true);
    client
      .getEntries({ content_type: "navItem" })
      .then((response) => setNavData(response.items))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (navData) {
      setNavItems(
        navData.map((item) => {
          if (item.fields.icon) {
            return (
              <li key={uuidv4()} className="logo">
                <NavLink to={item.fields.link}>
                  <img
                    src={`https:${item.fields.icon.fields.file.url}`}
                    alt="Logo"
                  />
                </NavLink>
              </li>
            );
          } else {
            return (
              <li key={uuidv4()}>
                <NavLink key={uuidv4()} to={`country${item.fields.link}`}>
                  {item.fields.title}
                </NavLink>
              </li>
            );
          }
        })
      );

      setIsLoading(false);
    }
  }, [navData]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <header>
      <Navbar navItems={navItems} />
    </header>
  );
}
