import React from "react";

export default function CategoryBlogCard({ blogCardData }) {
  console.log("Card", blogCardData);
  return (
    <div className="category-blog-card">
      <h1>Card</h1>
      <img
        src={blogCardData.cardImage.fields.file.url}
        alt={blogCardData.cardImage.fields.description}
      />
      {blogCardData.cardTitle}
      {blogCardData.cardText}
      {blogCardData.cardLink}
      {blogCardData.cardShareLink}
    </div>
  );
}
