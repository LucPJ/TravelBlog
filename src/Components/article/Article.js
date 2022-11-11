import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client } from "./Client";
import "./article.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Map from "./Map";
import Sidebar from "./sidebar/Sidebar";
import "./styles.css";
import IconNavbar from "../blogcards/blogcard-navigation/IconNavbar";


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

          <div className="sidebar-and-article">
            <div className="sidebar">
              <Sidebar />
            </div>

            <div className="article-container">
              <div className="article-blog">
                <h1>{articles.items[0].fields.title}</h1>
                <p className="bold-text">
                  {
                    articles.items[0].fields.description.content[0].content[0]
                      .value
                  }
                </p>
                {documentToReactComponents(
                  articles.items[0].fields.articleText
                )}
              </div>
              {articles.items[0].fields.location ? (
                <Map
                  title={articles.items[0].fields.title}
                  location={articles.items[0].fields.location}
                />
              ) : (
                ""
              )}
              <div className="author-nav">
                <div className="author-container">
                  <img
                    className="author-image"
                    src={
                      articles.items[0].fields.author.fields.authorAvatar.fields
                        .file.url
                    }
                    alt={
                      articles.items[0].fields.author.fields.authorAvatar.fields
                        .description
                    }
                  />
                  <p className="author-name">
                    Artikel von {articles.items[0].fields.author.fields.name}
                  </p>
                </div>  
                <div className="icon-navbar">
                  <IconNavbar />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
