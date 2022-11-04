import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { accessToken, apiBase } from "../../Helper/ApiConstants";
import Navbar from "./Navbar";
import { v4 as uuidv4 } from "uuid";
import "./Header.css";

export default function Header() {
  const [navData, setNavData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [navItems, setNavItems] = useState();

  async function getNav() {
    setIsLoading(true);
    const response = await fetch(
      `${apiBase}/entries?content_type=navItem&select=fields&${accessToken}`
    );
    const data = await response.json();
    setNavData(data);
  }

  useEffect(() => {
    if (navData) {
      const itemArray = navData.items;
      const imgUrl = navData.includes.Asset[0].fields.file.url;
      setNavItems(
        Object.values(itemArray).map((item) => {
          // console.log(item.fields);
          if (item.fields.icon) {
            // console.log(item.fields.icon.sys.id);
            return (
              <li key={uuidv4()} className="logo">
                <NavLink to={item.fields.icon.link}>
                  <img src={`https:${imgUrl}`} alt="Logo" />
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

  useEffect(() => {
    getNav();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <header>
      <Navbar navItems={navItems} />
    </header>
  );
}
