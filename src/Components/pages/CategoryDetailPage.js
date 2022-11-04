import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { accessToken, apiBase } from "../../Helper/ApiConstants";
import CategoryBlogCard from "../CategoryBlogCard";
import { v4 as uuidv4 } from "uuid";

export default function CategoryDetailPage() {
  const { slug } = useParams();

  const [pageData, setPageData] = useState(null);
  const [cleanPageData, setCleanPageData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getPageData() {
      const response = await fetch(
        `${apiBase}/entries?fields.slug[match]=${slug}&include=10&content_type=categoryDetailPage&${accessToken}`
      );
      const data = await response.json();
      setPageData(data);
    }
    getPageData();
  }, [slug]);

  useEffect(() => {
    if (pageData) {
      console.log(pageData);
      const getIncludeViaTypeAndId = (type, id) => {
        return pageData.includes[type].filter((data) => data.sys.id === id)[0]
          .fields;
      };

      const headerImage = getIncludeViaTypeAndId(
        "Asset",
        pageData.items[0].fields.headerImage.sys.id
      );
      const categoryText = getIncludeViaTypeAndId(
        "Entry",
        pageData.items[0].fields.categoryText.sys.id
      );
      const blogCards = pageData.items[0].fields.blogCards.map((blogCard) => {
        const cardData = getIncludeViaTypeAndId("Entry", blogCard.sys.id);
        const cardImage = getIncludeViaTypeAndId(
          "Asset",
          cardData.cardImage.sys.id
        );

        return {
          ...cardData,
          cardImage,
        };
      });

      setCleanPageData({
        headerImage,
        categoryText,
        blogCards,
      });

      setIsLoading(false);
    }
  }, [pageData]);

  const blogCards = cleanPageData
    ? cleanPageData.blogCards.map((blogCard) => (
        <CategoryBlogCard blogCardData={blogCard} key={uuidv4()} />
      ))
    : "";

  return (
    <div>
      {isLoading ? (
        <div>läääääääd</div>
      ) : (
        <div className="category-detail-page">
          <img
            src={cleanPageData.headerImage.file.url}
            alt={cleanPageData.headerImage.description}
          />
          <div>
            <h1>{cleanPageData.categoryText.categoryTitle}</h1>
            <p>{cleanPageData.categoryText.categoryText}</p>
          </div>

          <div>{blogCards}</div>
        </div>
      )}
    </div>
  );
}
