import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { client } from "../../../Helper/ApiConstants";
import { v4 as uuidv4 } from "uuid";

export default function Landingpage() {
  const [stageImgData, setStageImgData] = useState();
  const [stageImgUrl, setStageImgUrl] = useState();
  const [categoryData, setCategoryData] = useState();
  const [categoryCards, setCategoryCards] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    client
      .getEntries({ content_type: "categories", select: "fields.headerImage" })
      .then((response) => setStageImgData(response.items[0]))
      .catch((err) => console.error(err));

    client
      .getEntries({ content_type: "categories" })
      .then((response) => setCategoryData(response.includes.Entry))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (stageImgData) {
      setStageImgUrl(stageImgData.fields.headerImage.fields.file.url);
      setIsLoading(false);
    }
    if (categoryData) {
      setCategoryCards(
        categoryData.map((categoryCard) => {
          console.log(categoryCard.fields);
          return (
            <div key={uuidv4()} className="card">
              <img
                src={`https:${categoryCard.fields.categoryImage.fields.file.url}`}
                alt={`https:${categoryCard.fields.categoryImage.fields.title}`}
              />
              <div className="card-details">
                <h2>{categoryCard.fields.categoryTitle}</h2>
                <p>
                  {categoryCard.fields.previewText.content[0].content[0].value}
                </p>
                <div className="links">
                  <Link to={categoryCard.fields.cta} className="cta">
                    Zur Kategorie
                  </Link>
                  <div className="more">
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href={categoryCard.fields.shareLink}>
                      <img src="" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      );
      setIsLoading(false);
    }
  }, [stageImgData, categoryData]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="stageImg">
        <img src={stageImgUrl} alt="" />
      </div>
      <div className="cardsContainer">{categoryCards}</div>
    </>
  );
}
