import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CategoryBlogCard from "../blogcards/CategoryBlogCard";
import { client } from "../../Helper/ApiConstants";
import "./styles.css";

export default function CategoryDetailPage() {
  const { slug } = useParams();

  const [pageData, setPageData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    client
      .getEntries({
        content_type: "categoryDetailPage",
        "fields.slug[match]": slug,
      })
      .then((response) => {
        setPageData(response);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [slug]);

  const blogCards = pageData
    ? pageData.items[0].fields.blogCards.map((blogCard) => (
        <CategoryBlogCard
          blogCardData={blogCard.fields}
          key={blogCard.sys.id}
        />
      ))
    : "";

  return (
    <div>
      {isLoading ? (
        <div>is loading</div>
      ) : (
        <div className="category-detail-page">
          <img
            className="header-image"
            src={pageData.items[0].fields.headerImage.fields.file.url}
            alt={pageData.items[0].fields.headerImage.fields.description}
          />
          <div>
            <h1 className="category-title">
              {pageData.items[0].fields.categoryText.fields.categoryTitle}
            </h1>
            <p className="category-text">
              {pageData.items[0].fields.categoryText.fields.categoryText}
            </p>
          </div>

          <div className="blogcards-container">
            {blogCards}
          </div>
        </div>
      )}
    </div>
  );
}
