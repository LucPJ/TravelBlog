import React from "react";


export default function CategoryBlogCard({ blogCardData }) {
  
  console.log(blogCardData);
  
  return(
    <div className="category-blog-card">
      <img src={blogCardData.cardImage.fields.file.url} alt={blogCardData.cardImage.fields.description}/>
      { blogCardData.cardTitle }
      { blogCardData.cardText }
      { blogCardData.cardLink }
      { blogCardData.cardShareLink}

    </div>
  )
}