import React from "react";
import "./minigamesPage.scss";
import { useScroll } from "./../../routes/ScrollProvider";

const MinigamesPage = () => {
  const { minigamesRef } = useScroll();
  return (
    <div className="minigamesPage" ref={minigamesRef}>
      <div className="minigamesPage__container">
        <h1 className="minigamesPage__title">Mini games</h1>
      </div>
    </div>
  );
};

export default MinigamesPage;
