import React from "react";


export default function CategoryBlogCard({ blogCardData }) {
  

  
  return(
    <div className="category-blog-card">
      <img src={blogCardData.cardImage.file.url} alt={blogCardData.cardImage.description}/>
      { blogCardData.cardTitle }
      { blogCardData.cardText }
      { blogCardData.cardLink }

    </div>
  )
}