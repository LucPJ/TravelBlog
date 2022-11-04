import React, { useState, useEffect } from "react";
import { apiBase, accessToken } from "../../../Helper/ApiConstants";

export default function Landingpage() {
  const [stageImgData, setStageImgData] = useState();
  const [stageImgUrl, setStageImgUrl] = useState();
  const [categoryData, setCategoryData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  async function getStageData() {
    setIsLoading(true);
    const response = await fetch(
      `${apiBase}/entries?content_type=categories&select=fields.headerImage&${accessToken}`
    );
    const data = await response.json();
    setStageImgData(data);
  }

  useEffect(() => {
    if (stageImgData) {
      setStageImgUrl(stageImgData.includes.Asset[0].fields.file.url);
    }
  }, [stageImgData]);

  useEffect(() => {
    getStageData();
  }, []);

  return (
    <>
      <div className="stageImg">
        <img src={stageImgUrl} alt="" />
      </div>
      <div className="cardsContainer"></div>
    </>
  );
}
