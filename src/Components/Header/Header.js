import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { accessToken, apiBase } from "../../Helper/ApiConstants";
import Navbar from "./Navbar";
import { v4 as uuidv4 } from "uuid";

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
      const itemObject = navData.items[0].fields;
      const imgUrl = navData.includes.Asset[0].fields.file.url;
      //console.log(imgUrl);
      setNavItems(
        Object.values(itemObject).map((item) => {
          console.log(item);
          //if Objekt-> Abgleichen Id mit Url else -> normale Ausgabe
          return <li key={uuidv4()}>{item}</li>;
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
      {/* {navItems} */}
      <Navbar />
    </header>
  );
}
