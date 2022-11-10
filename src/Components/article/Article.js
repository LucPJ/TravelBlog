import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client } from "./Client";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Sidebar from "./sidebar/Sidebar"
import './styles.css';


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
                  {articles.items[0].fields.description.content[0].content[0].value}
                </p>
                <p></p>
                {documentToReactComponents(articles.items[0].fields.articleText)}
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
                <p className="author-name">Artikel von {articles.items[0].fields.author.fields.name}</p> 
              </div>
            </div>
           </div> 

          </div>
      )}
    </div>
  );
}
