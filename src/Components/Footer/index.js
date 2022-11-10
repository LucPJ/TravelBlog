import React, { useState, useEffect } from "react";
import { client } from "../../Helper/ApiConstants";

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
          console.log(item);
        })
      );

      setIsLoading(false);
    }
  }, [footerNavData]);

  if (isLoading) {
    return <div>is loading...</div>;
  }
  return (
    <div>
      {/* {footerNavItem} */}
      Footer
    </div>
  );
}
