import React, { useState, useEffect } from "react";
import { accessToken, apiBase } from "../../Helper/ApiConstants";

export default function Header() {
  const [navItems, setNavItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getNav() {
    setIsLoading(true);
    const response = await fetch(
      `${apiBase}/entries?content_type=mainNavigation&select=fields&${accessToken}`
    );
    const data = await response.json();
    setNavItems(data);
    setIsLoading(false);
  }
  useEffect(() => {
    getNav();
  }, []);

  console.log(navItems.items[0]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return <h1>Ich bin der Header</h1>;
}
