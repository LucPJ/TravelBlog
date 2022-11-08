import React from "react";
import { Link } from "react-router-dom";

export default function CategoryBlogCard({ blogCardData }) {
  return (
    <div className="category-blog-card">
      <img
        src={blogCardData.cardImage.fields.file.url}
        alt={blogCardData.cardImage.fields.description}
      />
      {blogCardData.cardTitle}
      {blogCardData.cardText}

      <Link to={`article/${blogCardData.slugArticle}`}>
        <button>{blogCardData.cardLink}</button>
      </Link>

      {blogCardData.cardShareLink}
    </div>
  );
}
