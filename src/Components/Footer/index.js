import React, { useState, useEffect } from "react";
import { client } from "../../Helper/ApiConstants";
import './footer.css';
import BackToTopButton from "../assets/BackToTopButton";


export default function Footer() {
  const [footerNavData, setFooterNavData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [footerNavItem, setFooterNavItem] = useState();

  useEffect(() => {
    setIsLoading(true);
    client
      .getEntries({ content_type: "footerNavItem" })
      .then((response) => {
        setFooterNavData(response.items);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (footerNavData) {
      setFooterNavItem(
        footerNavData.map((item) => {
          if (item.fields.footerLogo) {
            return (
              <li>
                <img
                  className="logo"
                  src={item.fields.footerLogo.fields.file.url}
                  alt="Logo"
                />
              </li>
            );
          } else {
            return <li>{item.fields.footerNavItemText}</li>;
          }
        })
      );
      setIsLoading(false);
    }
  }, [footerNavData]);

  if (isLoading) {
    return <div>is loading...</div>;
  }
  return (
    <footer className="footer">
      <BackToTopButton />
      <ul className="footerNav">
        {footerNavItem}
      </ul>
    </footer>

  );
}
