import React from "react";
import { Route, Routes } from "react-router-dom";
import CategoryDetailPage from "../pages/CategoryDetailPage";
import Landingpage from "../Main/Landingpage/Landingpage";
import Article from "../Article/Article";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="country/:slug" element={<CategoryDetailPage />} />
      <Route path="country/:slug/article/:slugArticle" element={<Article />} />
    </Routes>
  );
}
