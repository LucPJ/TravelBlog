import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CategoryDetailPage from "./pages/CategoryDetailPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Article from "./Components/article/Article";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/country/:slug" element={<CategoryDetailPage />} />
        <Route path="/article/:slugArticle" element={<Article />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
