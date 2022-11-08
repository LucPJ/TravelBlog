import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client } from "./Client";

export default function Article() {
  const { slugArticle } = useParams();

  const [articles, setArticles] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    client
      .getEntries({
        content_type: "article",
        "fields.slugArticle[match]": slugArticle,
      })
      .then((response) => {
        setArticles(response);
        setIsLoading(false);
        console.log(articles);
      })
      .catch((err) => console.log(err));
  }, [slugArticle]);

  return (
    <div>
      {isLoading ? (
        <div>is loading</div>
      ) : (
        <div className="article">
          <img
            className="header-image"
            src={articles.items[0].fields.headerbild.fields.file.url}
            alt={articles.items[0].fields.headerbild.fields.description}
          />
          <div className="article-blog">
            <h1>{articles.items[0].fields.title}</h1>
            <p>
              {articles.items[0].fields.description.content[0].content[0].value}
            </p>
            <p>
              {articles.items[0].fields.articleText.content[0].content[0].value}
            </p>
          </div>
          <div className="author-container">
            <img
              className="author-image"
              src={
                articles.items[0].fields.author.fields.authorAvatar.fields.file
                  .url
              }
              alt={
                articles.items[0].fields.author.fields.authorAvatar.fields
                  .description
              }
            />
            <p>{articles.items[0].fields.author.fields.name}</p>
          </div>
        </div>
      )}
    </div>
  );
}
