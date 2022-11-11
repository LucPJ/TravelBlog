import React from "react";
import MainRoutes from "../Routing/MainRoutes";
import Landingpage from "./Landingpage/Landingpage";
import BackToTopButton from "./../Assets/backToTopButton";

export default function Main() {
  return (
    <main>
      <MainRoutes />
      <BackToTopButton />
    </main>
  );
}
