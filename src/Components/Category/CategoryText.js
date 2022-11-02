import React, { useState, useEffect } from 'react';


export default function CategoryText() {
  
    const [categoryData, setCategoryData] = useState();
    const [isLoading, setIsLoading] = useState(false);

    async function getCategoryData() {
      setIsLoading(true);
      const response = await fetch(
        `${apiBase}/entries?content_type=blogCard&select=fields&${accessToken}`
      );
      const data = await response.json();
      setNavData(data);
    }

    return(

  )
}