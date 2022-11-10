import React from "react";
import { Link } from "react-router-dom";
import "../blogcards/blogcards.css";
import IconNavbar from "./blogcard-navigation/IconNavbar";

export default function CategoryBlogCard({ blogCardData }) {
  return (
    <div className="category-blog-card">
      <div className="category-blog-card-content">
        <img
          src={blogCardData.cardImage.fields.file.url}
          alt={blogCardData.cardImage.fields.description}
          className="category-blog-card-image"
        />

        <div className="category-blog-card-text">
          <h4>{blogCardData.cardTitle}</h4>
          <p>{blogCardData.cardText}</p>
          <div className="link-container">
            <Link to={`article/${blogCardData.slugArticle}`}>
              <button className="category-blog-card-link">
                {blogCardData.cardLink}
              </button>
            </Link>
            <IconNavbar blogCardData={blogCardData.cardShareLink} />
          </div>
        </div>
      </div>
    </div>
  );
}
