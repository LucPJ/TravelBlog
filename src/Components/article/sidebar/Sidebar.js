import React, { useState, useEffect } from "react";
import { client } from "../client";

export default function Sidebar() {
  const [sideNavData, setSideNavData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    client
      .getEntries({
        content_type: "article",
      })
      .then((response) => {
        setSideNavData(response);
        console.log(response);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [sideNavData]);
  return <div>Sidebar</div>;
}
